import React, { FC, useCallback, useEffect, useReducer, useState } from "react";
import { useTranslation } from "react-i18next";
import { showMessage } from "react-native-flash-message";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import formatDistance from "date-fns/formatDistanceToNow";
import { nanoid } from "nanoid/non-secure";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { InfoIcon, TagsIcon, ThemeIcon, TrashIcon } from "@src/assets/icons";
import { Screens } from "@src/common/constants";
import { setStatusBarBgColor } from "@src/common/helpers";
import { FontSize, IconSize, INoteColors, noteColors, Spacing } from "@src/common/theme";
import { Box, FlexBox, KeyboardAvoidingBox, SafeAreaBox, ScrollView, Text, TextInput } from "@src/components/atoms";
import { Favorite, HeaderBar, LabelPills } from "@src/components/molecules";
import { ColorPickerModal, ConfirmModal } from "@src/components/organism";
import { useBackPress, useTimeout } from "@src/hooks";
import { NavigatorParamList } from "@src/navigator";
import { Label, Note, useStore } from "@src/store";

const bottomBarHight = 60;

enum NoteChangeKind {
    Initialize,
    Title,
    Content,
    Color,
    isFavorite,
    Labels,
}

interface NoteChangeAction {
    type: NoteChangeKind;
    payload?: string | boolean | INoteColors | Label[] | Note;
}

const initialNote: Note = {
    color: noteColors[0],
    title: "",
    content: "",
    favorite: false,
    labels: [],
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

export const EditNoteScreen: FC<NativeStackScreenProps<NavigatorParamList, Screens.editNote>> = ({
    navigation,
    route: {
        params: { initialLabels = [], noteItem },
    },
}) => {
    const insets = useSafeAreaInsets();
    const { pallette, mode } = useTheme();
    const { t } = useTranslation();
    const { deleteNote } = useStore();

    const [noteState, noteDispatch] = useReducer(noteEditReducer, {
        ...initialNote,
        labels: initialLabels,
        ...noteItem,
    });

    useEffect(() => {
        noteDispatch({
            type: NoteChangeKind.Initialize,
            payload: noteItem || { ...initialNote, labels: initialLabels },
        });
    }, [noteItem, initialLabels.length]);

    const [isDeleteConfirmVisible, setDeleteConfirmVisible] = useState(false);
    const [isColorPickerVisible, setColorPickerVisible] = useState(false);

    const bgColor = noteState.color[mode];

    useTimeout(() => setStatusBarBgColor(bgColor, true), 100, [bgColor]);

    const { addNote, updateNote } = useStore();

    const saveNewNote = useCallback(() => {
        if (noteState.id) {
            updateNote(noteState);
        } else if (noteState.title || noteState.content) {
            addNote({ ...noteState, id: nanoid() });
        } else {
            showMessage({
                message: t("screens.editNote.noteDiscarded"),
                icon: <InfoIcon />,
            });
        }
        navigation.goBack();
    }, [noteState]);

    useBackPress({ callback: saveNewNote });

    const onDeletePress = useCallback(() => {
        if (noteState?.id) {
            deleteNote(noteState?.id);

            showMessage({
                message: t("screens.editNote.noteDeleted"),
                icon: <TrashIcon />,
                backgroundColor: pallette.error.light,
            });
        }
        navigation.goBack();
    }, [noteState]);

    return (
        <>
            <SafeAreaBox bg={bgColor}>
                <HeaderBar
                    onBackPress={saveNewNote}
                    endIcon={
                        <Favorite
                            isFavorite={noteState.favorite}
                            onPress={() => noteDispatch({ type: NoteChangeKind.isFavorite })}
                        />
                    }
                />
                <KeyboardAvoidingBox mb={bottomBarHight}>
                    <ScrollView px={Spacing.medium}>
                        <TextInput
                            accessibilityLabel="Text input field"
                            // todo update
                            accessibilityHint="ss"
                            multiline
                            fontSize={FontSize.large}
                            placeholder="Title"
                            value={noteState.title}
                            onChangeText={(value) => noteDispatch({ type: NoteChangeKind.Title, payload: value })}
                            fontFamily={FontFamily.bold}
                            color={pallette.secondary.dark}
                        />
                        <Box height={1} bg={pallette.grey} my={Spacing.small} />
                        <TextInput
                            accessibilityLabel="Text input field"
                            // todo update
                            accessibilityHint="ss"
                            multiline
                            fontSize={FontSize.medium}
                            placeholder="Start writing"
                            value={noteState.content}
                            onChangeText={(value) => noteDispatch({ type: NoteChangeKind.Content, payload: value })}
                            mb={Spacing.large}
                            color={pallette.grey}
                            minHeight={200}
                            textAlignVertical="top"
                        />
                    </ScrollView>
                    <LabelPills
                        note={noteState}
                        onPress={() => navigation.navigate(Screens.labelSelect, { noteItem: noteState })}
                    />
                </KeyboardAvoidingBox>
            </SafeAreaBox>
            <FlexBox
                position="absolute"
                bottom={0}
                pb={insets.bottom}
                bg={pallette.grey}
                height={bottomBarHight}
                width="100%"
                borderTopLeftRadius={Spacing.large}
                borderTopRightRadius={Spacing.large}
                px={Spacing.medium}
            >
                <TagsIcon
                    color={pallette.white}
                    size={IconSize.large}
                    touchable={{
                        mx: Spacing.tiny,
                        onPress: () => navigation.navigate(Screens.labelSelect, { noteItem: noteState }),
                    }}
                />
                <ThemeIcon
                    color={bgColor}
                    size={IconSize.large}
                    touchable={{ mx: Spacing.tiny, onPress: () => setColorPickerVisible(true) }}
                />
                <Text
                    color={pallette.white}
                    textAlign="center"
                    flex={1}
                    fontFamily={FontFamily.light}
                    fontSize={FontSize.small}
                >
                    {!!noteState.ts && t("screens.editNote.editedTime", { time: formatDistance(noteState.ts) })}
                </Text>
                <TrashIcon
                    color={pallette.error.main}
                    size={IconSize.large}
                    touchable={{ mx: Spacing.tiny, onPress: () => setDeleteConfirmVisible(true) }}
                />
            </FlexBox>
            <ConfirmModal
                title={t("common.confirm")}
                message={t("components.noteDeleteModal.message")}
                primaryBtnText={t("common.delete")}
                isVisible={isDeleteConfirmVisible}
                onClose={() => setDeleteConfirmVisible(false)}
                color={pallette.error.dark}
                onConfirmPress={onDeletePress}
            />
            <ColorPickerModal
                selectedColor={noteState.color}
                isVisible={isColorPickerVisible}
                onClose={(selected) => {
                    noteDispatch({ type: NoteChangeKind.Color, payload: selected });
                    setColorPickerVisible(false);
                }}
            />
        </>
    );
};
