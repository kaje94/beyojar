import { useEffect, useRef } from "react";

import { Animated } from "react-native";
import { useTheme } from "styled-components";

import { AnimationDuration, BorderRadius, Spacing } from "@src/common/theme";

const colorRanges = { onBlur: 0, onFocus: 100 };

const paddingFocussed = 20;
const paddingBlurred = 5;
const marginBlurred = paddingFocussed - paddingBlurred;

/** Handle animations of the notesSearchBar component */
export const useSearchAnimation = (isFocused: boolean) => {
    const { pallette } = useTheme();

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
        Animated.parallel([
            Animated.timing(borderRadius, {
                duration: AnimationDuration.fast,
                toValue: isFocused ? BorderRadius.none : BorderRadius.large,
                useNativeDriver: false,
            }),
            Animated.timing(margin, {
                duration: AnimationDuration.fast,
                toValue: isFocused ? Spacing.none : marginBlurred,
                useNativeDriver: false,
            }),
            Animated.timing(padding, {
                duration: AnimationDuration.fast,
                toValue: isFocused ? paddingFocussed : paddingBlurred,
                useNativeDriver: false,
            }),
            Animated.timing(backgroundAnim, {
                duration: AnimationDuration.fast,
                toValue: isFocused ? colorRanges.onFocus : colorRanges.onBlur,
                useNativeDriver: false,
            }),
        ]).start();
    }, [isFocused]);

    return { backgroundColor, borderRadius, margin, padding };
};
