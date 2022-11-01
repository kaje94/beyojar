import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Dimensions } from "react-native";

import { Screens } from "@src/common/constants";
import { Box } from "@src/components/atoms";
import { NavigatorParamList } from "@src/navigation";

import { LabelManageScreen } from "./LabelManageScreen";

export default {
    args: { route: { key: Screens.labelManage, name: Screens.labelManage, params: undefined } },
    component: LabelManageScreen,
    parameters: { layout: "fullscreen" },
    title: "screens/LabelManageScreen",
} as unknown as ComponentMeta<typeof LabelManageScreen>;

const Stack = createNativeStackNavigator<NavigatorParamList>();

const Template: ComponentStory<typeof LabelManageScreen> = ({ route: { params } }) => {
    return (
        <Box height={Dimensions.get("window").height}>
            <Stack.Navigator>
                <Stack.Screen
                    component={LabelManageScreen}
                    initialParams={params}
                    name={Screens.labelManage}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </Box>
    );
};

export const Default = Template.bind({});
