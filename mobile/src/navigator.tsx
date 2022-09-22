/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from "react";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components";

import { EditNoteScreen, HomeScreen } from "@src/screens";
import { Screens } from "@src/utils/constants";

export type NavigatorParamList = {
    home: undefined;
    editNote: undefined;
};

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<NavigatorParamList>();

export const Navigation: React.FC = () => {
    const { mode } = useTheme();
    // todo can have screen options to turn off header on all screens
    return (
        <NavigationContainer theme={mode === "dark" ? DarkTheme : DefaultTheme}>
            <Stack.Navigator>
                <Stack.Screen name={Screens.home} component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name={Screens.editNote} component={EditNoteScreen} options={{ headerShown: true }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
