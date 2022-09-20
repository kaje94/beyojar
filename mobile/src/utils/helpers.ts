import { PixelRatio } from "react-native";

/**
 * Converts a layout size (dp) to pixel size (px) and return a pixel string value.
 * @param layoutSize layout size (dp)
 */
export const getPixelsString = (layoutSize: number) =>
    `${PixelRatio.getPixelSizeForLayoutSize(layoutSize)}px`;
