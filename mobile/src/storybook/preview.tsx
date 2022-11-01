import React, { FC, PropsWithChildren } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addDecorator } from "@storybook/react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useDarkMode } from "storybook-dark-mode";

import { i18n } from "@src/lang/i18n";
import { ThemeProvider } from "@src/providers";

const ThemeWrapper: FC<PropsWithChildren> = ({ children }) => {
    return <ThemeProvider defaultMode={useDarkMode() ? "dark" : "light"}>{children}</ThemeProvider>;
};

export const decorators: Parameters<typeof addDecorator>[0][] = [
    (renderStory) => (
        <ThemeWrapper>
            <SafeAreaProvider>
                <NavigationContainer>{renderStory()}</NavigationContainer>
            </SafeAreaProvider>
        </ThemeWrapper>
    ),
];

export const parameters = {
    actions: { argTypesRegex: "^on.*" },
    i18n,
    locale: "en",
    options: { panelPosition: "right", showPanel: true },
    viewport: {
        defaultViewport: "iphonex",
        viewports: {
            iphonex: INITIAL_VIEWPORTS.iphonex,
            iphonexsmax: INITIAL_VIEWPORTS.iphonexsmax,
            pixel: INITIAL_VIEWPORTS.pixel,
            pixelxl: INITIAL_VIEWPORTS.pixelxl,
        },
    },
};
