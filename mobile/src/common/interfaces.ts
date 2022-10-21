import { ColorSchemeName } from "react-native";
import { NumberProp } from "react-native-svg";

export interface IconProps {
    /** Color of the icon */
    color?: string;
    /** Opacity of the icon */
    opacity?: number;
    /** Size of the icon */
    size?: number;
    /** Stroke width or thickness of the icon */
    strokeWidth?: NumberProp;
}

export interface Label {
    /** Unique ID of the label */
    id: string;
    /** Name of the label */
    name: string;
}

export interface Note {
    /** Background color of the note */
    color: INoteColors;
    /** Content/Body of the note */
    content: string;
    /** Timestamp at which the note was created */
    createdAt: number;
    /** Is note marked as a favorite */
    favorite: boolean;
    /** Unique ID of the note */
    id?: string;
    /** List of labels attached to the note */
    labels: Label[];
    /** Title of the note */
    title: string;
    /** Last updated timestamp of the note */
    updatedAt: number;
}

interface IThemeColorGroup {
    /** Dark color variant */
    dark: string;
    /** Light color variant */
    light: string;
    /** Main color variant */
    main: string;
}

export interface IThemePallet {
    /** Color of the background */
    background: string;
    /** Black color for light theme and white color for dark theme */
    black: string;
    /** Color group to be used for depicting errors */
    error: IThemeColorGroup;
    /** Dark grey color for light theme and light grey color for dark theme */
    grey: string;
    /** Primary color group of the theme */
    primary: IThemeColorGroup;
    /** Secondary color group of the theme */
    secondary: IThemeColorGroup;
    /** White color for light theme and black color for dark theme */
    white: string;
}

export interface IThemePallets {
    /** Dark theme mode */
    dark: IThemePallet;
    /** Light theme mode */
    light: IThemePallet;
}

export interface INoteColors {
    /** Dark variant of the the note color */
    dark: string;
    /** Unique ID of the note color */
    id: string;
    /** Light variant of the note color */
    light: string;
}

export interface IShadowItem {
    /** Sets the elevation of a view, using Android's underlying elevation API. (Android-only) */
    elevation: number;
    /**
     * Drop shadow color \
     * Works with IOS and Android API 28 and above
     */
    shadowColor: string;
    /** Offset of the drop shadow (IOS Only) */
    shadowOffset: {
        height: number;
        width: number;
    };
    /** Drop shadow opacity (multiplied by the color's alpha component) (IOS Only) */
    shadowOpacity: number;
    /** Drop shadow blur radius (IOS Only) */
    shadowRadius: number;
}

export interface ITheme {
    /** Selected theme mode (Light/Dark) of the application */
    mode: NonNullable<ColorSchemeName>;
    /** Color pallet based on the selected mode */
    pallette: IThemePallet;
}
