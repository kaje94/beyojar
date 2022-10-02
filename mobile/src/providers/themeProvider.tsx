import React, { PropsWithChildren, useEffect } from "react";
import { ColorSchemeName, useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation, useQuery } from "@tanstack/react-query";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { loadFonts } from "@src/assets/fonts";
import { QueryKeys, StorageKeys } from "@src/common/constants";
import { getShadow, IShadow, IThemePallet, ThemePallets } from "@src/common/theme";

// Default theme interface has been overwritten
// by ITheme mobile/src/utils/styled.d.ts
export interface ITheme {
    mode: NonNullable<ColorSchemeName>;
    persistedMode: ColorSchemeName;
    setPersistedMode: (newMode: ColorSchemeName) => void;
    pallette: IThemePallet;
    shadow: IShadow;
}

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const systemThemeMode = useColorScheme() as NonNullable<ColorSchemeName>;

    const { isLoading: fontsLoading } = useQuery([QueryKeys.fonts], loadFonts);

    const {
        data: persistedMode,
        isLoading: themeLoading,
        refetch,
    } = useQuery([QueryKeys.theme], () => AsyncStorage.getItem(StorageKeys.themeMode));

    const { mutate } = useMutation((mode: ColorSchemeName) => AsyncStorage.setItem(StorageKeys.themeMode, mode || ""), {
        onSettled: () => refetch(),
    });

    const isLoading = fontsLoading || themeLoading;

    useEffect(() => {
        if (!isLoading) {
            setTimeout(() => {
                SplashScreen.hideAsync();
            }, 2000);
        }
    }, [isLoading]);

    const selectedMode = (persistedMode as ColorSchemeName) || systemThemeMode || "light";
    const selectedTheme = ThemePallets[selectedMode];

    return (
        <StyledThemeProvider
            theme={{
                mode: selectedMode,
                persistedMode: persistedMode as ColorSchemeName,
                pallette: selectedTheme,
                shadow: getShadow(selectedTheme.black),
                setPersistedMode: mutate,
            }}
        >
            {!isLoading && children}
            <StatusBar animated translucent style={selectedMode === "light" ? "dark" : "light"} />
        </StyledThemeProvider>
    );
};
