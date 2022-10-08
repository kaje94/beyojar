import AsyncStorage from "@react-native-async-storage/async-storage";
import { StateStorage } from "zustand/middleware";

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

export const chunkArray = <T>(arr: T[], size: number): T[][] =>
    [...Array(Math.ceil(arr.length / size))].map((_, i) => arr.slice(size * i, size + size * i));

export const delay = (t: number) => new Promise((resolve) => setTimeout(resolve, t));
