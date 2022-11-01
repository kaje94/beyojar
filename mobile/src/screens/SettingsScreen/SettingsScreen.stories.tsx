import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Dimensions } from "react-native";

import { Screens } from "@src/common/constants";
import { Box } from "@src/components/atoms";
import { NavigatorParamList } from "@src/navigation";

import { SettingsScreen } from "./SettingsScreen";

export default {
    args: { route: { key: Screens.settings, name: Screens.settings, params: undefined } },
    component: SettingsScreen,
    parameters: { layout: "fullscreen" },
    title: "screens/SettingsScreen",
} as unknown as ComponentMeta<typeof SettingsScreen>;

const Stack = createNativeStackNavigator<NavigatorParamList>();

const Template: ComponentStory<typeof SettingsScreen> = ({ route: { params } }) => {
    return (
        <Box height={Dimensions.get("window").height}>
            <Stack.Navigator>
                <Stack.Screen
                    component={SettingsScreen}
                    initialParams={params}
                    name={Screens.settings}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </Box>
    );
};

export const Default = Template.bind({});
