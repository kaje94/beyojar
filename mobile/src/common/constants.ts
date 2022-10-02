import { Dimensions, Platform } from "react-native";

export const IsIOS = Platform.OS === "ios";
export const IsAndroid = Platform.OS === "android";

const { height, width } = Dimensions.get("window");
export const Dimension = { height, width };

export enum Screens {
    home = "home",
    editNote = "editNote",
    labelSelect = "labelSelect",
    labelManage = "labelManage",
    homeDrawer = "homeDrawer",
    settings = "settings",
}

export enum QueryKeys {
    fonts = "fonts",
    theme = "theme",
}

export enum StorageKeys {
    themeMode = "themeMode",
}

// todo: rename parent folder as common instead of utils
