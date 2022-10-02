import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { useDrawerStatus } from "@react-navigation/drawer";
import { useIsFocused } from "@react-navigation/native";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { useTheme } from "styled-components";

import { AnimationDuration, BorderRadius, Spacing } from "@src/common/theme";

const colorRanges = { onBlur: 0, onFocus: 100 };

const paddingFocussed = 20;
const paddingBlurred = 5;
const marginBlurred = paddingFocussed - paddingBlurred;

export const useSearchBarAnimated = (isFocused: boolean) => {
    const { pallette } = useTheme();
    const isScreenFocused = useIsFocused();
    const isDrawerOpen = useDrawerStatus() === "open";

    const colors = {
        [colorRanges.onBlur]: pallette.secondary.light,
        [colorRanges.onFocus]: pallette.primary.main,
    };

    const margin = useRef(new Animated.Value(marginBlurred)).current;
    const padding = useRef(new Animated.Value(paddingBlurred)).current;
    const borderRadius = useRef(new Animated.Value(BorderRadius.large)).current;
    const backgroundAnim = useRef(new Animated.Value(colorRanges.onBlur)).current;

    const backgroundColor = backgroundAnim.interpolate({
        inputRange: [colorRanges.onBlur, colorRanges.onFocus],
        outputRange: [colors[colorRanges.onBlur], colors[colorRanges.onFocus]],
    });

    useEffect(() => {
        const isInFocus = isFocused && isScreenFocused;
        Animated.parallel([
            Animated.timing(borderRadius, {
                toValue: isInFocus ? BorderRadius.none : BorderRadius.large,
                duration: AnimationDuration.fast,
                useNativeDriver: false,
            }),
            Animated.timing(margin, {
                toValue: isInFocus ? Spacing.none : marginBlurred,
                duration: AnimationDuration.fast,
                useNativeDriver: false,
            }),
            Animated.timing(padding, {
                toValue: isInFocus ? paddingFocussed : paddingBlurred,
                duration: AnimationDuration.fast,
                useNativeDriver: false,
            }),
            Animated.timing(backgroundAnim, {
                toValue: isInFocus ? colorRanges.onFocus : colorRanges.onBlur,
                duration: AnimationDuration.fast,
                useNativeDriver: false,
            }),
        ]).start();

        // todo: setStatusBarBackgroundColor only works with android
        // add a custom statusbar for ios and place it in theme provider
        // sub components should be able to call a callback and update the color
        // on unmount, should reset the color
        // use https://docs.expo.dev/versions/latest/sdk/safe-area-context/ for calculating the height
        setStatusBarBackgroundColor(isInFocus ? colors[colorRanges.onFocus] : pallette.background, true);
    }, [isFocused, isScreenFocused]);

    useEffect(() => {
        setStatusBarBackgroundColor(isDrawerOpen ? pallette.white : pallette.background, true);
    }, [isDrawerOpen]);

    return { borderRadius, margin, padding, backgroundColor };
};
