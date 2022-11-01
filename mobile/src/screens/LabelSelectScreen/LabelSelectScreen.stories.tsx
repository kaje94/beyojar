import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Dimensions } from "react-native";

import { Screens } from "@src/common/constants";
import { defaultNoteItem } from "@src/common/mocks";
import { Box } from "@src/components/atoms";
import { NavigatorParamList } from "@src/navigation";

import { LabelSelectScreen } from "./LabelSelectScreen";

export default {
    args: { route: { key: Screens.labelSelect, name: Screens.labelSelect, params: { noteItem: defaultNoteItem } } },
    component: LabelSelectScreen,
    parameters: { layout: "fullscreen" },
    title: "screens/LabelSelectScreen",
} as unknown as ComponentMeta<typeof LabelSelectScreen>;

const Stack = createNativeStackNavigator<NavigatorParamList>();

const Template: ComponentStory<typeof LabelSelectScreen> = ({ route: { params } }) => {
    return (
        <Box height={Dimensions.get("window").height}>
            <Stack.Navigator>
                <Stack.Screen
                    component={LabelSelectScreen}
                    initialParams={params}
                    name={Screens.labelSelect}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </Box>
    );
};

export const Default = Template.bind({});
