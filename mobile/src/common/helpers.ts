import AsyncStorage from "@react-native-async-storage/async-storage";
import * as NavigationBar from "expo-navigation-bar";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { ColorSchemeName } from "react-native";
import { StateStorage } from "zustand/middleware";

import { IsAndroid } from "./constants";
import { ThemePallets } from "./theme";

/** Persist helper to persist data into React-Native Async storage */
export const persistHelper: StateStorage = {
    getItem: async (name: string): Promise<string | null> => {
        return (await AsyncStorage.getItem(name)) || null;
    },
    removeItem: async (name: string): Promise<void> => {
        await AsyncStorage.removeItem(name);
    },
    setItem: async (name: string, value: string): Promise<void> => {
        await AsyncStorage.setItem(name, value);
    },
};

/** Chunk array elements into groups of given size */
export const chunkArray = <T>(arr: T[], size: number): T[][] =>
    [...Array(Math.ceil(arr.length / size))].map((_, i) => arr.slice(size * i, size + size * i));

/**
 * Resolves a promise after given milliseconds
 * @param time time delay in milliseconds
 * @returns a Promise
 */
export const delay = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

/**
 * Get inverted color mode. Returns `dark` for `light` and vise verse
 * @param selectedMode selected theme of the device `dark`|`light`
 */
export const getInvertedColorMode = (selectedMode: NonNullable<ColorSchemeName>) =>
    selectedMode === "light" ? "dark" : "light";

/**
 * Sets the navigation bar background and button colors for Android
 * @param selectedMode selected theme of the device `dark`|`light`
 */
export const setNavigationTheme = async (selectedMode: NonNullable<ColorSchemeName>) => {
    if (IsAndroid) {
        const pallette = ThemePallets[selectedMode];
        await NavigationBar.setButtonStyleAsync(getInvertedColorMode(selectedMode));
        await NavigationBar.setBackgroundColorAsync(pallette.background);
        await NavigationBar.setBorderColorAsync(pallette.secondary.light);
    }
};

/**
 * Sets the background color of the status bar.
 * Only works with Android devices.
 * @param statusBarBg The background color of the status bar.
 * @param selectedMode selected theme of the device `dark`|`light`
 */
export const setStatusBarBgColor = async (statusBarBg: string, selectedMode: NonNullable<ColorSchemeName>) => {
    if (IsAndroid) {
        setStatusBarBackgroundColor(statusBarBg, true);
        await setNavigationTheme(selectedMode);
    }
};
