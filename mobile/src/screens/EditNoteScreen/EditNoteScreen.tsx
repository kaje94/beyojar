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
import { setStatusBarBgColor } from "@src/common/helpers";
import { INoteColors, Label, Note } from "@src/common/interfaces";
import { FontSize, IconSize, noteColors, Spacing } from "@src/common/theme";
import { Box, FlexBox, KeyboardAvoidingBox, SafeAreaBox, ScrollBox, Text, TextInput } from "@src/components/atoms";
import { Favorite, HeaderBar, LabelPills } from "@src/components/molecules";
import { ColorPickerModal, ConfirmModal } from "@src/components/organism";
import { useBackPress, useTimeout } from "@src/hooks";
import { NavigatorParamList } from "@src/navigation";
import { useNotesStore } from "@src/store";

const bottomBarHight = 60;

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
    favorite: false,
    labels: [],
    title: "",
    ts: 0,
};

const noteEditReducer = (state: Note, action: NoteChangeAction) => {
    const { type, payload } = action;
    switch (type) {
        case NoteChangeKind.Initialize:
            return (payload as Note) || initialNote;
        case NoteChangeKind.Title:
            return { ...state, title: payload as string, ts: Date.now() };
        case NoteChangeKind.Content:
            return { ...state, content: payload as string, ts: Date.now() };
        case NoteChangeKind.Color:
            return { ...state, color: payload as INoteColors, ts: Date.now() };
        case NoteChangeKind.isFavorite:
            return { ...state, favorite: !state.favorite };
        case NoteChangeKind.Labels:
            return { ...state, labels: payload as Label[], ts: Date.now() };
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
    const insets = useSafeAreaInsets();
    const { pallette, mode } = useTheme();
    const { t } = useTranslation();
    const { deleteNote } = useNotesStore();
    const { addNote, updateNote } = useNotesStore();
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
    useTimeout(() => setStatusBarBgColor(bgColor), 100, [bgColor]);

    /** Persist the note details in the store and navigate back to previous screen */
    const saveNewNote = useCallback(() => {
        if (noteState.id) {
            /** Update the note if its an existing note */
            updateNote(noteState);
        } else if (noteState.title || noteState.content) {
            /** Create a new note if title or content exists */
            addNote({ ...noteState, id: nanoid() });
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
                <KeyboardAvoidingBox mb={bottomBarHight}>
                    <ScrollBox px={Spacing.medium}>
                        <TextInput
                            // todo update
                            accessibilityHint="ss"
                            accessibilityLabel="Text input field"
                            color={pallette.secondary.dark}
                            fontFamily={FontFamily.bold}
                            fontSize={FontSize.large}
                            multiline
                            onChangeText={(value) => noteDispatch({ payload: value, type: NoteChangeKind.Title })}
                            placeholder="Title"
                            value={noteState.title}
                        />
                        <Box bg={pallette.grey} height={1} my={Spacing.small} />
                        <TextInput
                            // todo update
                            accessibilityHint="ss"
                            accessibilityLabel="Text input field"
                            color={pallette.grey}
                            fontSize={FontSize.medium}
                            mb={Spacing.large}
                            minHeight={200}
                            multiline
                            onChangeText={(value) => noteDispatch({ payload: value, type: NoteChangeKind.Content })}
                            placeholder="Start writing"
                            textAlignVertical="top"
                            value={noteState.content}
                        />
                    </ScrollBox>
                    <LabelPills note={noteState} onPress={openLabelSelectScreen} />
                </KeyboardAvoidingBox>
            </SafeAreaBox>
            <FlexBox
                bg={pallette.grey}
                borderTopLeftRadius={Spacing.large}
                borderTopRightRadius={Spacing.large}
                bottom={0}
                height={bottomBarHight}
                pb={insets.bottom}
                position="absolute"
                px={Spacing.medium}
                width="100%"
            >
                <TagsIcon
                    color={pallette.white}
                    size={IconSize.medium}
                    touchable={{ mx: Spacing.tiny, onPress: openLabelSelectScreen }}
                />
                <ThemeIcon
                    color={bgColor}
                    size={IconSize.medium}
                    touchable={{ mx: Spacing.tiny, onPress: openColoPickerModal }}
                />
                <Text
                    color={pallette.white}
                    flex={1}
                    fontFamily={FontFamily.light}
                    fontSize={FontSize.small}
                    textAlign="center"
                >
                    {!!noteState.ts && t("screens.editNote.editedTime", { time: formatDistance(noteState.ts) })}
                </Text>
                <TrashIcon
                    color={pallette.error.main}
                    size={IconSize.medium}
                    touchable={{ mx: Spacing.tiny, onPress: openDeleteConfirmModal }}
                />
            </FlexBox>
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
