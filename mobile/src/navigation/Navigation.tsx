/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import React, { FC } from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlashMessage from "react-native-flash-message";
import { useTheme } from "styled-components";

import { IsAndroid, Screens } from "@src/common/constants";
import { Label, Note } from "@src/common/interfaces";
import { Box } from "@src/components/atoms";
import { ToastComponent } from "@src/components/molecules";
import {
    EditNoteScreen,
    LabelManageScreen,
    LabelSelectScreen,
    NotesListScreen,
    SettingsScreen,
    WelcomeScreen,
} from "@src/screens";
import { useSettingsStore } from "@src/store";

import { Drawer as DrawerComponent } from "./Drawer";

export type NavigatorParamList = {
    drawer: undefined;
    editNote: { initialLabels?: Label[]; noteItem?: Note };
    labelManage: undefined;
    labelSelect: { noteItem: Note };
    notesList: { label: Label };
    settings: undefined;
    welcome: undefined;
};

const HomeStack = createNativeStackNavigator<NavigatorParamList>();
const Drawer = createDrawerNavigator();

const DrawerNavigator: FC = () => {
    return (
        <Drawer.Navigator drawerContent={DrawerComponent} screenOptions={{ headerShown: false }}>
            <HomeStack.Screen component={NotesListScreen} name={Screens.notesList} />
        </Drawer.Navigator>
    );
};

const NotesStackNavigator: FC = () => {
    const { pallette } = useTheme();
    const { introViewed } = useSettingsStore();
    return (
        <HomeStack.Navigator
            initialRouteName={introViewed ? Screens.drawer : Screens.welcome}
            screenOptions={{
                headerShown: false,
                statusBarColor: IsAndroid ? pallette.background : undefined,
            }}
        >
            <HomeStack.Screen component={WelcomeScreen} name={Screens.welcome} />
            <HomeStack.Screen component={DrawerNavigator} name={Screens.drawer} />
            <HomeStack.Screen component={LabelManageScreen} name={Screens.labelManage} />
            <HomeStack.Screen component={EditNoteScreen} name={Screens.editNote} />
            <HomeStack.Screen component={SettingsScreen} name={Screens.settings} />
            <HomeStack.Screen
                component={LabelSelectScreen}
                name={Screens.labelSelect}
                options={{ animation: "slide_from_bottom" }}
            />
        </HomeStack.Navigator>
    );
};

export const Navigation: FC = () => {
    const { mode, pallette } = useTheme();
    return (
        <Box bg={pallette.background} flex={1}>
            <NavigationContainer theme={mode === "dark" ? DarkTheme : DefaultTheme}>
                <NotesStackNavigator />
                <FlashMessage MessageComponent={ToastComponent} />
            </NavigationContainer>
        </Box>
    );
};
