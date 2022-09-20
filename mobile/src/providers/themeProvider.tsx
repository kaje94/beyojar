import React, { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ColorSchemeName, useColorScheme } from "react-native";
import { IThemePallet, themePallets } from "../utils/theme";
import { StatusBar } from "expo-status-bar";

// Default theme interface has been overwritten
// by ITheme mobile/src/types/styled.d.ts
export interface ITheme {
    mode: ColorSchemeName;
    pallette: IThemePallet;
}

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const themeMode = useColorScheme() as NonNullable<ColorSchemeName>;
    // todo: add statusbar
    return (
        <StyledThemeProvider
            theme={{
                mode: themeMode || "lightd",
                pallette: themePallets.light,
            }}
        >
            {children}
            <StatusBar />
        </StyledThemeProvider>
    );
};

export default ThemeProvider;
