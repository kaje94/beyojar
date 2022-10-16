// eslint-disable-next-line import/no-import-module-exports
import { StorybookConfig } from "@storybook/react/types";

const config: StorybookConfig = {
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "storybook-dark-mode",
        "@storybook/addon-react-native-web",
        "storybook-react-i18next",
        "@storybook/addon-a11y",
        "@storybook/addon-interactions",
        "@storybook/addon-coverage",
    ],
    features: { interactionsDebugger: true },
    framework: "@storybook/react",
    stories: ["../**/*.stories.@(js|jsx|ts|tsx)"],
};

module.exports = config;
