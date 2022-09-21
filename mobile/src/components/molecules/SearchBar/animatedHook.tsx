import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { animationDurations } from "@src/utils/theme";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { useTheme } from "styled-components";

const colorRanges = { onBlur: 0, onFocus: 100 };

const paddingFocussed = 20;
const paddingBlurred = 5;
const marginFocused = 0;
const marginBlurred = paddingFocussed - paddingBlurred;
const borderRadiusFocused = 0;
const borderRadiusBlurred = 20;

export const useSearchBarAnimated = (isFocused: boolean) => {
    const { pallette } = useTheme();

    const colors = {
        [colorRanges.onBlur]: pallette.secondary.light,
        [colorRanges.onFocus]: pallette.primary.main,
    };

    const margin = useRef(new Animated.Value(marginBlurred)).current;
    const padding = useRef(new Animated.Value(paddingBlurred)).current;
    const borderRadius = useRef(
        new Animated.Value(borderRadiusBlurred)
    ).current;
    const backgroundAnim = useRef(
        new Animated.Value(colorRanges.onBlur)
    ).current;

    const backgroundColor = backgroundAnim.interpolate({
        inputRange: [colorRanges.onBlur, colorRanges.onFocus],
        outputRange: [colors[colorRanges.onBlur], colors[colorRanges.onFocus]],
    });

    useEffect(() => {
        Animated.parallel([
            Animated.timing(borderRadius, {
                toValue: isFocused ? borderRadiusFocused : borderRadiusBlurred,
                duration: animationDurations.fast,
                useNativeDriver: false,
            }),
            Animated.timing(margin, {
                toValue: isFocused ? marginFocused : marginBlurred,
                duration: animationDurations.fast,
                useNativeDriver: false,
            }),
            Animated.timing(padding, {
                toValue: isFocused ? paddingFocussed : paddingBlurred,
                duration: animationDurations.fast,
                useNativeDriver: false,
            }),
            Animated.timing(backgroundAnim, {
                toValue: isFocused ? colorRanges.onFocus : colorRanges.onBlur,
                duration: animationDurations.fast,
                useNativeDriver: false,
            }),
        ]).start();

        // todo: setStatusBarBackgroundColor only works with android
        // add a custom statusbar for ios and place it in theme provider
        // sub components should be able to call a callback and update the color
        // on unmount, should reset the color
        // use https://docs.expo.dev/versions/latest/sdk/safe-area-context/ for calculating the height
        setStatusBarBackgroundColor(
            isFocused ? colors[colorRanges.onFocus] : pallette.background,
            true
        );
    }, [isFocused]);

    return { borderRadius, margin, padding, backgroundColor };
};
