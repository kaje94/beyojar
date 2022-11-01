import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Dimensions } from "react-native";

import { Screens } from "@src/common/constants";
import { Box } from "@src/components/atoms";
import { NavigatorParamList } from "@src/navigation";

import { WelcomeScreen } from "./WelcomeScreen";

export default {
    args: { route: { key: Screens.welcome, name: Screens.welcome, params: undefined } },
    component: WelcomeScreen,
    parameters: { layout: "fullscreen" },
    title: "screens/WelcomeScreen",
} as unknown as ComponentMeta<typeof WelcomeScreen>;

const Stack = createNativeStackNavigator<NavigatorParamList>();

const Template: ComponentStory<typeof WelcomeScreen> = ({ route: { params } }) => {
    return (
        <Box height={Dimensions.get("window").height}>
            <Stack.Navigator>
                <Stack.Screen
                    component={WelcomeScreen}
                    initialParams={params}
                    name={Screens.welcome}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </Box>
    );
};

export const Default = Template.bind({});
