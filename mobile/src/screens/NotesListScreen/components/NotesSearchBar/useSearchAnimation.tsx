import { useEffect, useRef } from "react";

import { useDrawerStatus } from "@react-navigation/drawer";
import { useIsFocused } from "@react-navigation/native";
import { Animated } from "react-native";
import { useTheme } from "styled-components";

import { setStatusBarBgColor } from "@src/common/helpers";
import { AnimationDuration, BorderRadius, Spacing } from "@src/common/theme";

const colorRanges = { onBlur: 0, onFocus: 100 };

const paddingFocussed = 20;
const paddingBlurred = 5;
const marginBlurred = paddingFocussed - paddingBlurred;

/** Handle animations of the notesSearchBar component */
export const useSearchAnimation = (isFocused: boolean) => {
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

        if (isInFocus) {
            setStatusBarBgColor(colors[colorRanges.onFocus]);
        } else if (isDrawerOpen && isScreenFocused) {
            setStatusBarBgColor(pallette.white);
        } else {
            setStatusBarBgColor(pallette.background);
        }
    }, [isFocused, isScreenFocused, isDrawerOpen]);

    return { borderRadius, margin, padding, backgroundColor };
};
