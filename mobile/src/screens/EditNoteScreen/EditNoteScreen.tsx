import React, { FC, useCallback, useEffect, useReducer, useState } from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import formatDistance from "date-fns/formatDistanceToNow";
import { nanoid } from "nanoid/non-secure";
import { useTranslation } from "react-i18next";
import { showMessage } from "react-native-flash-message";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { InfoIcon, TagsIcon, ThemeIcon, TrashIcon } from "@src/assets/icons";
import { Screens } from "@src/common/constants";
import { getInvertedColorMode, setStatusBarBgColor } from "@src/common/helpers";
import { INoteColors, Label, Note } from "@src/common/interfaces";
import { BorderWidth, FontSize, IconSize, IconStrokeWidth, noteColors, Spacing } from "@src/common/theme";
import { Box, FlexBox, KeyboardAvoidingBox, SafeAreaBox, ScrollBox, Text, TextInput } from "@src/components/atoms";
import { Favorite, HeaderBar, LabelPills } from "@src/components/molecules";
import { ColorPickerModal, ConfirmModal } from "@src/components/organism";
import { useBackPress, useTimeout } from "@src/hooks";
import { NavigatorParamList } from "@src/navigation";
import { useNotesStore } from "@src/store";

enum VisibleModal {
    /** Show the delete confirm modal for the selected note */
    DeleteConfirm,
    /** Show the color picker modal for the note */
    ColorPicker,
}

enum NoteChangeKind {
    /** Initialize the local state with incoming note object from react-navigation */
    Initialize,
    /** Update the title field of the local state */
    Title,
    /** Update the content field of the local state */
    Content,
    /** Update the color field of the local state */
    Color,
    /** Update the isFavorite field of the local state */
    isFavorite,
    /** Update the labels field of the local state */
    Labels,
}

interface NoteChangeAction {
    payload?: string | boolean | INoteColors | Label[] | Note;
    type: NoteChangeKind;
}

const initialNote: Note = {
    color: noteColors[0],
    content: "",
    createdAt: 0,
    favorite: false,
    labels: [],
    title: "",
    updatedAt: 0,
};

const noteEditReducer = (state: Note, action: NoteChangeAction) => {
    const { type, payload } = action;
    switch (type) {
        case NoteChangeKind.Initialize:
            return (payload as Note) || initialNote;
        case NoteChangeKind.Title:
            return { ...state, title: payload as string, updatedAt: Date.now() };
        case NoteChangeKind.Content:
            return { ...state, content: payload as string, updatedAt: Date.now() };
        case NoteChangeKind.Color:
            return { ...state, color: payload as INoteColors, updatedAt: Date.now() };
        case NoteChangeKind.isFavorite:
            return { ...state, favorite: !state.favorite };
        case NoteChangeKind.Labels:
            return { ...state, labels: payload as Label[], updatedAt: Date.now() };
        default:
            return initialNote;
    }
};

/** Screen that allows users to either create new note or update an existing note */
export const EditNoteScreen: FC<NativeStackScreenProps<NavigatorParamList, Screens.editNote>> = ({
    navigation: { navigate, goBack },
    route: {
        params: { initialLabels = [], noteItem },
    },
}) => {
    const { pallette, mode } = useTheme();
    const { t } = useTranslation();
    const { deleteNote } = useNotesStore();
    const { addNote, updateNote } = useNotesStore();
    const insets = useSafeAreaInsets();
    const [openedModal, setOpenedModal] = useState<VisibleModal | null>(null);

    /** Local note state reducer */
    const [noteState, noteDispatch] = useReducer(noteEditReducer, {
        ...initialNote,
        labels: initialLabels,
        ...noteItem,
    });

    /** Update the local note state whenever navigation props changes */
    useEffect(() => {
        noteDispatch({
            payload: noteItem || { ...initialNote, labels: initialLabels },
            type: NoteChangeKind.Initialize,
        });
    }, [noteItem, initialLabels.length]);

    /** Background color based on the the theme (light/dark) */
    const bgColor = noteState.color[mode];

    /** Update the statusbar color in Android with a slight delay */
    useTimeout(() => setStatusBarBgColor(bgColor, mode), 100, [bgColor]);

    /** Persist the note details in the store and navigate back to previous screen */
    const saveNewNote = useCallback(() => {
        if (noteState.id) {
            /** Update the note if its an existing note */
            updateNote(noteState);
        } else if (noteState.title || noteState.content) {
            /** Create a new note if title or content exists */
            addNote({ ...noteState, createdAt: Date.now(), id: nanoid() });
        } else {
            /** Show a note discarded message, If its a new note without a title or content */
            showMessage({ icon: <InfoIcon />, message: t("screens.editNote.noteDiscarded") });
        }
        goBack();
    }, [noteState]);

    /** Back press listener to save the note when navigating back */
    useBackPress({ callback: saveNewNote });

    /** Delete the note from the persisted store and show a toast message */
    const onDeletePress = useCallback(() => {
        if (noteState?.id) {
            deleteNote(noteState?.id);

            showMessage({
                backgroundColor: pallette.error.light,
                icon: <TrashIcon />,
                message: t("screens.editNote.noteDeleted"),
            });
        }
        goBack();
    }, [noteState]);

    /** Navigate to the label select screen */
    const openLabelSelectScreen = useCallback(
        () => navigate(Screens.labelSelect, { noteItem: noteState }),
        [noteState]
    );

    /** Open color picker modal */
    const openColoPickerModal = useCallback(() => setOpenedModal(VisibleModal.ColorPicker), []);

    /** Open delete confirm modal */
    const openDeleteConfirmModal = useCallback(() => setOpenedModal(VisibleModal.DeleteConfirm), []);

    /** Close any of the open modals */
    const closeModal = useCallback(() => setOpenedModal(null), []);

    /** Update selected color when color picker modal closes */
    const onCloseColorPickerModal = useCallback((selected: INoteColors) => {
        noteDispatch({ payload: selected, type: NoteChangeKind.Color });
        closeModal();
    }, []);

    return (
        <>
            <SafeAreaBox bg={bgColor}>
                <HeaderBar
                    endIcon={
                        <Favorite
                            isFavorite={noteState.favorite}
                            onPress={() => noteDispatch({ type: NoteChangeKind.isFavorite })}
                        />
                    }
                    onBackPress={saveNewNote}
                />
                <KeyboardAvoidingBox flex={1}>
                    <ScrollBox px={Spacing.medium}>
                        <TextInput
                            accessibilityHint={t("screens.editNote.titleA11yHint")}
                            accessibilityLabel={t("screens.editNote.titleA11yLabel")}
                            color={pallette.secondary.dark}
                            fontFamily={FontFamily.bold}
                            fontSize={FontSize.large}
                            multiline
                            onChangeText={(value) => noteDispatch({ payload: value, type: NoteChangeKind.Title })}
                            placeholder={t("screens.editNote.titlePlaceholder")}
                            value={noteState.title}
                        />
                        <Box bg={pallette.grey} height={1} my={Spacing.small} />
                        <TextInput
                            accessibilityHint={t("screens.editNote.contentA11yHint")}
                            accessibilityLabel={t("screens.editNote.contentA11yLabel")}
                            color={pallette.grey}
                            fontSize={FontSize.medium}
                            mb={Spacing.large}
                            minHeight={200}
                            multiline
                            onChangeText={(value) => noteDispatch({ payload: value, type: NoteChangeKind.Content })}
                            placeholder={t("screens.editNote.contentPlaceholder")}
                            textAlignVertical="top"
                            value={noteState.content}
                        />
                    </ScrollBox>
                </KeyboardAvoidingBox>

                <LabelPills note={noteState} onPress={openLabelSelectScreen} />

                <FlexBox
                    bg={pallette.background}
                    borderBottomWidth={insets.bottom ? BorderWidth.small : BorderWidth.none}
                    borderColor={pallette.grey}
                    borderTopWidth={BorderWidth.small}
                    px={Spacing.medium}
                    py={Spacing.small}
                >
                    <TagsIcon
                        color={pallette.secondary.dark}
                        size={IconSize.medium}
                        strokeWidth={IconStrokeWidth.small}
                        touchable={{
                            accessibilityHint: t("screens.editNote.openLabelsA11yHint"),
                            accessibilityLabel: t("screens.editNote.openLabelsA11yLabel"),
                            mx: Spacing.tiny,
                            onPress: openLabelSelectScreen,
                        }}
                    />
                    <ThemeIcon
                        color={noteState.color[getInvertedColorMode(mode)]}
                        size={IconSize.medium}
                        strokeWidth={IconStrokeWidth.small}
                        touchable={{
                            accessibilityHint: t("screens.editNote.openColorModalA11yHint"),
                            accessibilityLabel: t("screens.editNote.openColorModalA11yLabel"),
                            mx: Spacing.tiny,
                            onPress: openColoPickerModal,
                        }}
                    />
                    <Text
                        color={pallette.grey}
                        flex={1}
                        fontFamily={FontFamily.light}
                        fontSize={FontSize.small}
                        textAlign="center"
                    >
                        {!!noteState.updatedAt &&
                            t("screens.editNote.editedTime", { time: formatDistance(noteState.updatedAt) })}
                    </Text>
                    <TrashIcon
                        color={pallette.error.main}
                        size={IconSize.medium}
                        strokeWidth={IconStrokeWidth.small}
                        touchable={{
                            accessibilityHint: t("screens.editNote.openDeleteA11yHint"),
                            accessibilityLabel: t("screens.editNote.openDeletesA11yLabel"),
                            mx: Spacing.tiny,
                            onPress: openDeleteConfirmModal,
                        }}
                    />
                </FlexBox>
            </SafeAreaBox>

            <ConfirmModal
                Icon={TrashIcon}
                color={pallette.error.dark}
                isVisible={openedModal === VisibleModal.DeleteConfirm}
                message={t("components.noteDeleteModal.message")}
                onClose={closeModal}
                onConfirmPress={onDeletePress}
                primaryBtnText={t("common.delete")}
                title={t("common.confirm")}
            />

            <ColorPickerModal
                isVisible={openedModal === VisibleModal.ColorPicker}
                onClose={(selectedColor) => onCloseColorPickerModal(selectedColor)}
                selectedColor={noteState.color}
            />
        </>
    );
};
