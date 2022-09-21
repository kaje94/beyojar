import React, { PropsWithChildren } from "react";
import { ColorSchemeName, useColorScheme } from "react-native";
import { IThemePallet, themePallets } from "@src/utils/theme";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

// Default theme interface has been overwritten
// by ITheme mobile/src/types/styled.d.ts
export interface ITheme {
    mode: ColorSchemeName;
    pallette: IThemePallet;
}

const ThemeProvider = ({ children }: PropsWithChildren) => {
    const themeMode = useColorScheme() as NonNullable<ColorSchemeName>;

    return (
        <StyledThemeProvider
            theme={{
                mode: themeMode || "light",
                pallette: themePallets.light,
            }}
        >
            {children}
            <StatusBar animated />
        </StyledThemeProvider>
    );
};

export default ThemeProvider;
