import { ColorSchemeName } from "react-native";
import { NumberProp } from "react-native-svg";

export interface IconProps {
    /** Size of the icon */
    size?: number;
    /** Color of the icon */
    color?: string;
    /** Stroke width or thickness of the icon */
    strokeWidth?: NumberProp;
    /** Opacity of the icon */
    opacity?: number;
}

export interface Label {
    /** Unique ID of the label */
    id: string;
    /** Name of the label */
    name: string;
}

export interface Note {
    /** Unique ID of the note */
    id?: string;
    /** Title of the note */
    title: string;
    /** Content/Body of the note */
    content: string;
    /** Background color of the note */
    color: INoteColors;
    /** Is note marked as a favorite */
    favorite: boolean;
    /** List of labels attached to the note */
    labels: Label[];
    /** Last updated timestamp of the note */
    ts: number;
}

interface IThemeColorGroup {
    /** Main color variant */
    main: string;
    /** Light color variant */
    light: string;
    /** Dark color variant */
    dark: string;
}

export interface IThemePallet {
    /** Primary color group of the theme */
    primary: IThemeColorGroup;
    /** Secondary color group of the theme */
    secondary: IThemeColorGroup;
    /** Color group to be used for depicting errors */
    error: IThemeColorGroup;
    /** Color of the background */
    background: string;
    /** Black color for light theme and white color for dark theme */
    black: string;
    /** Dark grey color for light theme and light grey color for dark theme */
    grey: string;
    /** White color for light theme and black color for dark theme */
    white: string;
}

export interface IThemePallets {
    /** Light theme mode */
    light: IThemePallet;
    /** Dark theme mode */
    dark: IThemePallet;
}

export interface INoteColors {
    /** Unique ID of the note color */
    id: string;
    /** Light variant of the note color */
    light: string;
    /** Dark variant of the the note color */
    dark: string;
}

export interface IShadowItem {
    /**
     * Drop shadow color \
     * Works with IOS and Android API 28 and above
     */
    shadowColor: string;
    /** Offset of the drop shadow (IOS Only) */
    shadowOffset: {
        width: number;
        height: number;
    };
    /** Drop shadow opacity (multiplied by the color's alpha component) (IOS Only) */
    shadowOpacity: number;
    /** Drop shadow blur radius (IOS Only) */
    shadowRadius: number;
    /** Sets the elevation of a view, using Android's underlying elevation API. (Android-only) */
    elevation: number;
}

export interface ITheme {
    /** Selected theme mode (Light/Dark) of the application */
    mode: NonNullable<ColorSchemeName>;
    /** Color pallet based on the selected mode */
    pallette: IThemePallet;
}
