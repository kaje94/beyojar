import React, { FC, PropsWithChildren } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { addDecorator } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";

import { i18n } from "@src/lang/i18n";
import { ThemeProvider } from "@src/providers";

const ThemeWrapper: FC<PropsWithChildren> = ({ children }) => {
    return <ThemeProvider defaultMode={useDarkMode() ? "dark" : "light"}>{children}</ThemeProvider>;
};

export const decorators: Parameters<typeof addDecorator>[0][] = [
    (renderStory) => (
        <ThemeWrapper>
            <NavigationContainer>{renderStory()}</NavigationContainer>
        </ThemeWrapper>
    ),
];

export const parameters = {
    i18n,
    locale: "en",
    viewport: {
        viewports: {
            pixel: INITIAL_VIEWPORTS.pixel,
            pixelxl: INITIAL_VIEWPORTS.pixelxl,
            iphonex: INITIAL_VIEWPORTS.iphonex,
            iphonexsmax: INITIAL_VIEWPORTS.iphonexsmax,
        },
        defaultViewport: "iphonex",
    },
};
