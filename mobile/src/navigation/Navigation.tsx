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

import { Screens } from "@src/common/constants";
import { Label, Note } from "@src/common/interfaces";
import { Box } from "@src/components/atoms";
import { ToastComponent } from "@src/components/molecules";
import { EditNoteScreen, LabelManageScreen, LabelSelectScreen, NotesListScreen, SettingsScreen } from "@src/screens";

import { Drawer as DrawerComponent } from "./Drawer";

export type NavigatorParamList = {
    notesList: { label: Label };
    editNote: { noteItem?: Note; initialLabels?: Label[] };
    labelSelect: { noteItem: Note };
    labelManage: undefined;
    drawer: undefined;
    settings: undefined;
};

const HomeStack = createNativeStackNavigator<NavigatorParamList>();
const Drawer = createDrawerNavigator();

const DrawerNavigator: FC = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={DrawerComponent}>
            <HomeStack.Screen name={Screens.notesList} component={NotesListScreen} />
        </Drawer.Navigator>
    );
};

const NotesStackNavigator: FC = () => {
    const { pallette } = useTheme();
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false, statusBarColor: pallette.background }}>
            <HomeStack.Screen name={Screens.drawer} component={DrawerNavigator} />
            <HomeStack.Screen name={Screens.labelManage} component={LabelManageScreen} />
            <HomeStack.Screen name={Screens.editNote} component={EditNoteScreen} />
            <HomeStack.Screen name={Screens.settings} component={SettingsScreen} />
            <HomeStack.Screen
                name={Screens.labelSelect}
                component={LabelSelectScreen}
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
