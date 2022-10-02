interface IThemeColorGroup {
    main: string;
    light: string;
    dark: string;
}

export interface IThemePallet {
    primary: IThemeColorGroup;
    secondary: IThemeColorGroup;
    error: IThemeColorGroup;
    background: string;
    black: string;
    grey: string;
    white: string;
}

interface IThemePallets {
    light: IThemePallet;
    dark: IThemePallet;
}

export interface IShadowItem {
    shadowColor: string;
    shadowOffset: {
        width: number;
        height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
}

export interface IShadow {
    small: IShadowItem;
    medium: IShadowItem;
    large: IShadowItem;
}

export interface INoteColors {
    id: string;
    light: string;
    dark: string;
}

const CommonTheme = {
    colors: {
        black: "#070707",
        white: "#fcfcfc",
    },
};

// Use theme provided via styled context
// instead of directly referencing this
export const ThemePallets: IThemePallets = {
    light: {
        primary: {
            light: "#b8f3ba",
            main: "#7ab17c",
            dark: "#618d61",
        },
        secondary: {
            light: "#d3dfd3",
            main: "#7d857d",
            dark: "#464946",
        },
        error: {
            light: "#ef5350",
            main: "#e53935",
            dark: "#b71c1c",
        },
        background: "#eceeed",
        grey: "#3f3f3f",
        black: CommonTheme.colors.black,
        white: CommonTheme.colors.white,
    },
    dark: {
        primary: {
            light: "#3e5c3e",
            main: "#4d724e",
            dark: "#b8e4ba",
        },
        secondary: {
            light: "#4f554f",
            main: "#919b91",
            dark: "#e0eee0",
        },
        error: {
            light: "#ad2626",
            main: "#ec5956",
            dark: "#fd7270",
        },
        background: "#202221",
        grey: "#d4d4d4",
        black: CommonTheme.colors.white,
        white: CommonTheme.colors.black,
    },
};

// use context instead of this
export const DefaultShadow: IShadow = {
    small: {
        shadowColor: CommonTheme.colors.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    medium: {
        shadowColor: CommonTheme.colors.black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    large: {
        shadowColor: CommonTheme.colors.black,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
};

export const getShadow = (shadowColor = CommonTheme.colors.black): IShadow => ({
    small: {
        ...DefaultShadow.small,
        shadowColor,
    },
    medium: {
        ...DefaultShadow.medium,
        shadowColor,
    },
    large: {
        ...DefaultShadow.large,
        shadowColor,
    },
});

export enum Spacing {
    none = 0,
    tiny = 1,
    small = 2,
    medium = 3,
    large = 4,
    huge = 6,
}

export enum FontSize {
    small = 14,
    medium = 18,
    large = 24,
    huge = 30,
}

export enum AnimationDuration {
    fast = 200,
    medium = 400,
    slow = 800,
}

export enum BorderWidth {
    none = 0,
    small = 1,
}

export enum BorderRadius {
    none = 0,
    tiny = 4,
    small = 6,
    medium = 10,
    large = 20,
    huge = 30,
}

export enum Opacity {
    invisible = 0,
    barelyVisible = 0.25,
    partiallyVisible = 0.5,
    mostlyVisible = 0.75,
    visible = 1,
}

export enum IconSize {
    small = 20,
    normal = 24,
    large = 30,
}

export enum IconStrokeWidth {
    default = 2,
    large = 2.5,
}

export const noteColors: INoteColors[] = [
    { id: "color_1", light: "#ffffff", dark: "#000000" },
    {
        id: "color_2",
        // light: "#F28B82",
        light: "#f1b9b4",
        dark: "#5C2B29",
    },
    {
        id: "color_3",
        // light: "#FBBC04",
        light: "#ecce74",
        dark: "#614A19",
    },
    {
        id: "color_4",
        // light: "#FFF475",
        light: "#fdf59a",
        dark: "#635D19",
    },
    {
        id: "color_5",
        // light: "#CCFF90",
        light: "#d8fab1",
        dark: "#345920",
    },
    {
        id: "color_6",
        // light: "#A7FFEB",
        light: "#c5fcef",
        dark: "#16504B",
    },
    {
        id: "color_7",
        // light: "#CBF0F8",
        light: "#bde0e7",
        dark: "#2D555E",
    },
    {
        id: "color_8",
        // light: "#AECBFA",
        light: "#b7d1fa",
        dark: "#1E3A5F",
    },
    {
        id: "color_9",
        // light: "#D7AEFB",
        light: "#e3c9fa",
        dark: "#42275E",
    },
    {
        id: "color_10",
        // light: "#FDCFE8",
        light: "#fadbec",
        dark: "#5B2245",
    },
    {
        id: "color_11",
        // light: "#E6C9A8",
        light: "#e4d3c0",
        dark: "#442F19",
    },
    { id: "color_12", light: "#E8EAED", dark: "#3C3F43" },
];
