import React, { FC, useMemo, useState } from "react";
import { FlatList } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";

import { Screens } from "@src/common/constants";
import { SafeAreaBox } from "@src/components/atoms";
import { CardItem, EmptyPlaceholder, FloatingButton, SearchBar } from "@src/components/molecules";
import { NavigatorParamList } from "@src/navigator";
import { useStore } from "@src/store";

export const HomeScreen: FC<DrawerScreenProps<NavigatorParamList, Screens.home>> = ({
    navigation,
    route: { params: { label } = {} },
}) => {
    const { notes, labels } = useStore();
    const [searchText, setSearchText] = useState("");

    const labeledNotes = useMemo(
        () => (label?.id ? notes.filter((note) => note.labels.some((item) => item.id === label?.id)) : notes),
        [label?.id, notes]
    );

    const searchedNotes = useMemo(
        () => labeledNotes.filter((item) => item.title.includes(searchText) || item.content.includes(searchText)),
        [labeledNotes, searchText]
    );

    const emptyNoteText = useMemo(() => {
        if (notes.length === 0) {
            return "Get started by adding your first note";
        }
        if (searchedNotes.length === 0) {
            if (label?.name) {
                return `No notes found with ${label?.name} label`;
            }
            return `No notes found`;
        }
        return "";
    }, [label?.name, searchedNotes.length, notes.length]);

    return (
        <SafeAreaBox>
            <SearchBar onSearchChange={setSearchText} />
            <FlatList
                data={searchedNotes}
                renderItem={({ item }) => (
                    <CardItem
                        noteItem={item}
                        onPress={() => navigation.navigate(Screens.editNote, { noteItem: item })}
                    />
                )}
                keyExtractor={(item, index) => item.id || `${index}`}
                ListEmptyComponent={<EmptyPlaceholder text={emptyNoteText} />}
            />
            {/** todo: Show add button only when search is disabled */}
            <FloatingButton
                onPress={() => navigation.navigate(Screens.editNote, { initialLabels: label ? [label] : [] })}
            />
        </SafeAreaBox>
    );
};
