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

interface IShadowItem {
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

export const CommonTheme = {
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
export const ThemePallets: IThemePallets = {
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
        black: CommonTheme.colors.black,
        white: CommonTheme.colors.white,
    },
};

// use context instead of this
export const DefaultShadow: IShadow = {
    small: {
        shadowColor: CommonTheme.colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    medium: {
        shadowColor: CommonTheme.colors.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
    },
    large: {
        shadowColor: CommonTheme.colors.black,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
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
    medium = 16,
    large = 20,
}

export enum AnimationDuration {
    fast = 200,
    medium = 400,
    slow = 800,
}
