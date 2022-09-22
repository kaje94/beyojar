import React, { PropsWithChildren } from "react";
import { ColorSchemeName, useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { getShadow, IShadow, IThemePallet, ThemePallets } from "@src/utils/theme";

// Default theme interface has been overwritten
// by ITheme mobile/src/utils/styled.d.ts
export interface ITheme {
    mode: ColorSchemeName;
    pallette: IThemePallet;
    shadow: IShadow;
}

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const themeMode = useColorScheme() as NonNullable<ColorSchemeName>;
    const selectedTheme = ThemePallets.light;
    return (
        <StyledThemeProvider
            theme={{
                mode: themeMode || "light",
                pallette: selectedTheme,
                shadow: getShadow(selectedTheme.black),
            }}
        >
            {children}
            <StatusBar animated />
        </StyledThemeProvider>
    );
};
