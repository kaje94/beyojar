import { Dimensions, Platform } from "react-native";

/** Is device an IOS device */
export const IsIOS = Platform.OS === "ios";

/** Is device an Android device */
export const IsAndroid = Platform.OS === "android";

/** Is device, either an Android or an IOS device */
export const IsMobile = IsIOS || IsAndroid;

const { height, width } = Dimensions.get("window");

/** Dimensions (height & width) of the device */
export const Dimension = { height, width };

/** All of the screens of the application */
export enum Screens {
    notesList = "notesList",
    editNote = "editNote",
    labelSelect = "labelSelect",
    labelManage = "labelManage",
    drawer = "drawer",
    settings = "settings",
    welcome = "welcome",
}
