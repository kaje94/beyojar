/* eslint-disable global-require */
import * as Font from "expo-font";

export enum FontFamily {
    light = "rubik-light",
    regular = "rubik-regular",
    medium = "rubik-medium",
    bold = "rubik-bold",
}

export const loadFonts = async () => {
    await Font.loadAsync({
        [FontFamily.light]: require("./Rubik-Light.ttf"),
        [FontFamily.regular]: require("./Rubik-Regular.ttf"),
        [FontFamily.medium]: require("./Rubik-Medium.ttf"),
        [FontFamily.bold]: require("./Rubik-Bold.ttf"),
    });
    return null;
};
