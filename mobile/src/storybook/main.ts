// eslint-disable-next-line import/no-import-module-exports
import { StorybookConfig } from "@storybook/react/types";

const config: StorybookConfig = {
    stories: ["../**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "storybook-dark-mode",
        "@storybook/addon-react-native-web",
        "storybook-react-i18next",
    ],
    framework: "@storybook/react",
};

module.exports = config;
