import React, { FC, useMemo, useState } from "react";

import { DrawerScreenProps } from "@react-navigation/drawer";
import { useTranslation } from "react-i18next";
import { FlatList } from "react-native";

import { Screens } from "@src/common/constants";
import { Box, SafeAreaBox } from "@src/components/atoms";
import { CardItem, EmptyPlaceholder, FloatingButton } from "@src/components/molecules";
import { NavigatorParamList } from "@src/navigation";
import { useNotesStore } from "@src/store";

import { NotesSearchBar } from "./components/NotesSearchBar";

/**
 * Notes List screen allows users to view all of their notes in a searchable list view
 * and also allow their to navigate to a selected note or create new note screen
 */
export const NotesListScreen: FC<DrawerScreenProps<NavigatorParamList, Screens.notesList>> = ({
    navigation: { navigate },
    route: { params: { label } = {} },
}) => {
    const { t } = useTranslation();
    const { notes } = useNotesStore();
    const [searchText, setSearchText] = useState("");
    const [isSearchInFocus, setSearchInFocus] = useState(false);

    /** All notes filtered according to the selected label */
    const labeledNotes = useMemo(
        () => (label?.id ? notes.filter((note) => note.labels.some((item) => item.id === label?.id)) : notes),
        [label?.id, notes]
    );

    /** Labeled notes, containing the search keywords either in the title or content/bod */
    const searchedNotes = useMemo(
        () =>
            labeledNotes
                .filter((item) => item.title.includes(searchText) || item.content.includes(searchText))
                .sort((a, b) => Number(b.favorite) - Number(a.favorite)),
        [labeledNotes, searchText]
    );

    /** Text to be displayed if no notes are available to be displayed */
    const emptyNoteText = useMemo(() => {
        if (notes.length === 0) {
            return t("screens.notesList.initialNotePrompt");
        }
        if (searchedNotes.length === 0) {
            if (searchText) {
                return t("screens.notesList.noNotesForSearch");
            }
            if (label?.name) {
                return t("screens.notesList.noNotesFoundForLabel", { labelName: label?.name });
            }
            return t("screens.notesList.noNotesFound");
        }
        return "";
    }, [label?.name, searchText, searchedNotes.length, notes.length]);

    return (
        <SafeAreaBox>
            <NotesSearchBar onFocusChange={setSearchInFocus} onSearchChange={setSearchText} />
            <FlatList
                ListEmptyComponent={<EmptyPlaceholder text={emptyNoteText} />}
                ListFooterComponent={<Box height={100} />}
                data={searchedNotes}
                keyExtractor={(item, index) => item.id || `${index}`}
                renderItem={({ item }) => (
                    <CardItem noteItem={item} onPress={() => navigate(Screens.editNote, { noteItem: item })} />
                )}
            />
            <FloatingButton
                accessibilityHint={t("screens.notesList.addButtonA11yHint")}
                accessibilityLabel={t("screens.notesList.addButtonA11yLabel")}
                onPress={() => navigate(Screens.editNote, { initialLabels: label ? [label] : [] })}
                visible={!isSearchInFocus}
            />
        </SafeAreaBox>
    );
};
