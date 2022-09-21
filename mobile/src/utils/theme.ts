interface IThemeColorGroup {
    main: string;
    light: string;
    dark: string;
}

export interface IThemePallet {
    primary: IThemeColorGroup;
    secondary: IThemeColorGroup;
    background: string;
    black: string;
    white: string;
}

interface IThemePallets {
    light: IThemePallet;
}

export const commonTheme = {
    colors: {
        black: "#070707",
        white: "#fcfcfc",
    },
    icon: {
        default: {
            size: 24,
            strokeWidth: 2,
        },
    },
};

// Use theme provided via styled context
// instead of directly referencing this
export const themePallets: IThemePallets = {
    light: {
        primary: {
            light: "#abf5ae",
            main: "#8fce91",
            dark: "#73a574",
        },
        secondary: {
            light: "#d3e2d3",
            main: "#b9cab9",
            dark: "#97a397",
        },
        background: "#eceeed",
        black: commonTheme.colors.black,
        white: commonTheme.colors.white,
    },
};

export const spacing = {
    none: 0,
    tiny: 1,
    small: 2,
    medium: 3,
    large: 4,
    huge: 6,
};

export const fontSize = {
    small: 14,
    medium: 16,
    large: 20,
};

export const animationDurations = {
    fast: 200,
    medium: 400,
    slow: 800,
};
