/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import React, { FC } from "react";
import FlashMessage from "react-native-flash-message";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components";

import { Screens } from "@src/common/constants";
import { Box } from "@src/components/atoms";
import { ToastComponent } from "@src/components/molecules";
import { Drawer } from "@src/components/organism";
import { EditNoteScreen, HomeScreen, LabelManageScreen, LabelSelectScreen, SettingsScreen } from "@src/screens";
import { Label, Note } from "@src/store";

export type NavigatorParamList = {
    home: {
        label: Label;
    };
    editNote: {
        noteItem?: Note;
        initialLabels?: Label[];
    };
    labelSelect: {
        noteItem: Note;
    };
    labelManage: undefined;
    homeDrawer: undefined;
    settings: undefined;
};

const HomStack = createNativeStackNavigator<NavigatorParamList>();
const HomeDrawer = createDrawerNavigator();

const HomeDrawerNavigator: FC = () => {
    return (
        <HomeDrawer.Navigator screenOptions={{ headerShown: false }} drawerContent={Drawer}>
            <HomStack.Screen name={Screens.home} component={HomeScreen} />
        </HomeDrawer.Navigator>
    );
};

const HomeStackNavigator: FC = () => {
    const {
        pallette: { background },
    } = useTheme();
    return (
        <HomStack.Navigator screenOptions={{ headerShown: false, statusBarColor: background }}>
            <HomStack.Screen name={Screens.homeDrawer} component={HomeDrawerNavigator} />
            <HomStack.Screen name={Screens.labelManage} component={LabelManageScreen} />
            <HomStack.Screen name={Screens.editNote} component={EditNoteScreen} />
            <HomStack.Screen name={Screens.settings} component={SettingsScreen} />
            <HomStack.Screen
                name={Screens.labelSelect}
                component={LabelSelectScreen}
                options={{ animation: "slide_from_bottom" }}
            />
        </HomStack.Navigator>
    );
};

export const Navigation: FC = () => {
    const { mode, pallette } = useTheme();
    return (
        <Box bg={pallette.background} flex={1}>
            <NavigationContainer theme={mode === "dark" ? DarkTheme : DefaultTheme}>
                <HomeStackNavigator />
                <FlashMessage MessageComponent={ToastComponent} />
            </NavigationContainer>
        </Box>
    );
};
