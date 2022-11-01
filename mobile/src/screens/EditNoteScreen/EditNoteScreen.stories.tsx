import React from "react";

import { RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Dimensions } from "react-native";

import { Screens } from "@src/common/constants";
import { defaultLabels, defaultNoteItem } from "@src/common/mocks";
import { Box } from "@src/components/atoms";
import { NavigatorParamList } from "@src/navigation";

import { EditNoteScreen } from "./EditNoteScreen";

const routeProp: RouteProp<NavigatorParamList, Screens.editNote> = {
    key: Screens.editNote,
    name: Screens.editNote,
    params: { initialLabels: [] },
};

export default {
    args: { route: routeProp },
    component: EditNoteScreen,
    parameters: { layout: "fullscreen" },
    title: "screens/EditNoteScreen",
} as unknown as ComponentMeta<typeof EditNoteScreen>;

const Stack = createNativeStackNavigator<NavigatorParamList>();

const Template: ComponentStory<typeof EditNoteScreen> = ({ route: { params } }) => {
    return (
        <Box height={Dimensions.get("window").height}>
            <Stack.Navigator>
                <Stack.Screen
                    component={EditNoteScreen}
                    initialParams={params}
                    name={Screens.editNote}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </Box>
    );
};

export const NewNote = Template.bind({});

export const NewNoteWithLabels = Template.bind({});
NewNoteWithLabels.args = { route: { ...routeProp, params: { initialLabels: defaultLabels } } };

export const EditNote = Template.bind({});
EditNote.args = { route: { ...routeProp, params: { noteItem: defaultNoteItem } } };
