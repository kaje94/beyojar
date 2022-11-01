import React, { useEffect } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Dimensions } from "react-native";

import { Screens } from "@src/common/constants";
import { defaultNoteItem } from "@src/common/mocks";
import { Box } from "@src/components/atoms";
import { NavigatorParamList } from "@src/navigation";
import { useNotesStore } from "@src/store";

import { NotesListScreen } from "./NotesListScreen";

export default {
    args: { route: { key: Screens.notesList, name: Screens.notesList, params: undefined } },
    component: NotesListScreen,
    parameters: { layout: "fullscreen" },
    title: "screens/NotesListScreen",
} as unknown as ComponentMeta<typeof NotesListScreen>;

const Stack = createNativeStackNavigator<NavigatorParamList>();

const Template: ComponentStory<typeof NotesListScreen> = ({ route: { params } }) => {
    const { notes, addNote } = useNotesStore();
    useEffect(() => {
        if (notes.length === 0) {
            addNote(defaultNoteItem);
        }
    }, [notes]);

    return (
        <Box height={Dimensions.get("window").height}>
            <Stack.Navigator>
                <Stack.Screen
                    component={NotesListScreen}
                    initialParams={params}
                    name={Screens.notesList}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </Box>
    );
};

export const Default = Template.bind({});
