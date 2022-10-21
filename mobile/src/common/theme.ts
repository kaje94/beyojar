import { INoteColors, IShadowItem, IThemePallets } from "./interfaces";

/** Standard spacing to be used to margin and padding of elements */
export enum Spacing {
    none = 0,
    tiny = 1,
    small = 2,
    medium = 3,
    large = 4,
    huge = 6,
}

/** Standard font sizes to be used throughout the app */
export enum FontSize {
    tiny = 12,
    small = 14,
    medium = 18,
    large = 24,
    huge = 30,
}

/** Standard animation durations to be used throughout the app */
export enum AnimationDuration {
    fast = 200,
    medium = 400,
    slow = 800,
}

/** Standard border widths to be used throughout the app */
export enum BorderWidth {
    none = 0,
    small = 0.5,
    medium = 1,
}

/** Standard border radius variants to be used throughout the app */
export enum BorderRadius {
    none = 0,
    tiny = 4,
    small = 6,
    medium = 10,
    large = 20,
    huge = 30,
}

/** Standard opacity variants to be used throughout the app */
export enum Opacity {
    invisible = 0,
    barelyVisible = 0.25,
    partiallyVisible = 0.5,
    mostlyVisible = 0.75,
    visible = 1,
}

/** Standard icon sized to be used throughout the app */
export enum IconSize {
    small = 20,
    normal = 24,
    medium = 30,
    large = 45,
    huge = 100,
    massive = 150,
}

/** Standard stroke width or thickness of icons */
export enum IconStrokeWidth {
    small = 1.7,
    default = 2,
    large = 2.5,
}

/** Shadow to be used with withShadow hoc */
export enum Shadow {
    small = "small",
    medium = "medium",
    large = "large",
}

/** Common colors regardless of the selected theme */
const CommonTheme = { colors: { black: "#070707", white: "#fcfcfc" } };

/**
 * Standard shadows to be used throughout the app.
 * The color of the shadow should vary depending on the selected theme mode
 */
export const DefaultShadow: { [key in Shadow]: IShadowItem } = {
    [Shadow.small]: {
        elevation: 2,
        shadowColor: CommonTheme.colors.black,
        shadowOffset: { height: 1, width: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    [Shadow.medium]: {
        elevation: 6,
        shadowColor: CommonTheme.colors.black,
        shadowOffset: { height: 3, width: 0 },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    [Shadow.large]: {
        elevation: 12,
        shadowColor: CommonTheme.colors.black,
        shadowOffset: { height: 6, width: 0 },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
    },
};

/**
 * Standard theme pallets of the app\
 * The selected theme passed down by the theme provider hook
 * should be used instead of directly referencing this
 */
export const ThemePallets: IThemePallets = {
    dark: {
        background: "#202221",
        black: CommonTheme.colors.white,
        error: { dark: "#fd7270", light: "#ad2626", main: "#ec5956" },
        grey: "#d4d4d4",
        primary: { dark: "#b8e4ba", light: "#3e5c3e", main: "#4d724e" },
        secondary: { dark: "#e0eee0", light: "#4f554f", main: "#919b91" },
        white: CommonTheme.colors.black,
    },
    light: {
        background: "#eceeed",
        black: CommonTheme.colors.black,
        error: { dark: "#b71c1c", light: "#ef5350", main: "#e53935" },
        grey: "#3f3f3f",
        primary: { dark: "#618d61", light: "#b8f3ba", main: "#7ab17c" },
        secondary: { dark: "#464946", light: "#d3dfd3", main: "#7d857d" },
        white: CommonTheme.colors.white,
    },
};

/** Color options for note background */
export const noteColors: INoteColors[] = [
    { dark: "#000000", id: "color_white", light: "#ffffff" },
    { dark: "#5C2B29", id: "color_red", light: "#F28B82" },
    { dark: "#614A19", id: "color_orange", light: "#ffd34e" },
    { dark: "#635D19", id: "color_yellow", light: "#FFF475" },
    { dark: "#345920", id: "color_green", light: "#CCFF90" },
    { dark: "#16504B", id: "color_teal", light: "#cafff3" },
    { dark: "#2D555E", id: "color_blue", light: "#CBF0F8" },
    { dark: "#1E3A5F", id: "color_darkBlue", light: "#AECBFA" },
    { dark: "#42275E", id: "color_purple", light: "#D7AEFB" },
    { dark: "#5B2245", id: "color_pink", light: "#FDCFE8" },
    { dark: "#442F19", id: "color_beige", light: "#E6C9A8" },
    { dark: "#3C3F43", id: "color_grey", light: "#E8EAED" },
];
