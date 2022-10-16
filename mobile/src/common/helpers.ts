import AsyncStorage from "@react-native-async-storage/async-storage";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StateStorage } from "zustand/middleware";

import { IsAndroid } from "./constants";

/** Persist helper to persist data into React-Native Async storage */
export const persistHelper: StateStorage = {
    getItem: async (name: string): Promise<string | null> => {
        return (await AsyncStorage.getItem(name)) || null;
    },
    setItem: async (name: string, value: string): Promise<void> => {
        await AsyncStorage.setItem(name, value);
    },
    removeItem: async (name: string): Promise<void> => {
        await AsyncStorage.removeItem(name);
    },
};

/** Chunk array elements into groups of given size */
export const chunkArray = <T>(arr: T[], size: number): T[][] =>
    [...Array(Math.ceil(arr.length / size))].map((_, i) => arr.slice(size * i, size + size * i));

/**
 * Resolves a promise after given milliseconds
 * @param t time delay in milliseconds
 * @returns a Promise
 */
export const delay = (t: number) => new Promise((resolve) => setTimeout(resolve, t));

/**
 * Sets the background color of the status bar.
 * Only works with Android devices.
 * @param backgroundColor The background color of the status bar.
 * @param animated to animate the background color change
 */
export const setStatusBarBgColor = (backgroundColor: string, animated = true) => {
    if (IsAndroid) {
        setTimeout(() => setStatusBarBackgroundColor(backgroundColor, animated), 100);
    }
};
