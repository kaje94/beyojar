import { Platform } from "react-native";

export const IsIOS = Platform.OS === "ios";
export const IsAndroid = Platform.OS === "android";

export enum Screens {
    home = "home",
    editNote = "editNote",
}
