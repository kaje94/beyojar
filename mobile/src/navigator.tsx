/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from "react";
import {
    DarkTheme,
    DefaultTheme,
    NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "@src/screens";
import { useTheme } from "styled-components";

export enum screens {
    home = "home",
}

export type NavigatorParamList = {
    home: undefined;
};

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<NavigatorParamList>();

export const Navigation: React.FC = () => {
    const { mode } = useTheme();
    return (
        <NavigationContainer theme={mode === "dark" ? DarkTheme : DefaultTheme}>
            <Stack.Navigator>
                <Stack.Screen
                    name={screens.home}
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Navigation;
