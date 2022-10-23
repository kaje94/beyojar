import React, { PropsWithChildren, useEffect, useState } from "react";

import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import * as SystemUI from "expo-system-ui";
import { ColorSchemeName, useColorScheme } from "react-native";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { loadFonts } from "@src/assets/fonts";
import { delay, getInvertedColorMode, setNavigationTheme } from "@src/common/helpers";
import { ThemePallets } from "@src/common/theme";
import { useSettingsStore } from "@src/store";

/**
 * The default styled components theme interface
 * has been overwritten by ITheme in src/common/styled.d.ts
 */

interface Props extends PropsWithChildren {
    /** Overwrite system color theme and persisted color theme with provided mode */
    defaultMode?: ColorSchemeName;
}

/** Loads fonts, selects the theme based on the mode (light/dark) and passes it down to all the the child components */
export const ThemeProvider = ({ defaultMode, children }: Props) => {
    const systemThemeMode = useColorScheme() as NonNullable<ColorSchemeName>;
    const [fontsLoading, setFontsLoading] = useState(true);
    const [splashHidden, setSplashHidden] = useState(false);
    const { persistedTheme } = useSettingsStore();
    const selectedMode = defaultMode || persistedTheme || systemThemeMode || "light";
    const selectedTheme = ThemePallets[selectedMode];

    useEffect(() => {
        // Load fonts when the app is loaded
        loadFonts().finally(() => setFontsLoading(false));
    }, []);

    useEffect(() => {
        if (!fontsLoading) {
            // Hide splash screen once the fonts are loaded
            (async () => {
                await SplashScreen.hideAsync();
                setSplashHidden(true);
            })();
        }
    }, [fontsLoading]);

    useEffect(() => {
        // Set system ui colors whenever theme changes
        if (splashHidden) {
            (async () => {
                await delay(1000);
                await SystemUI.setBackgroundColorAsync(selectedTheme.background);
                await setNavigationTheme(selectedMode);
            })();
        }
    }, [splashHidden, selectedMode, selectedTheme]);

    return (
        <StyledThemeProvider theme={{ mode: selectedMode, pallette: selectedTheme }}>
            {!fontsLoading && children}
            <StatusBar animated style={getInvertedColorMode(selectedMode)} translucent />
        </StyledThemeProvider>
    );
};
