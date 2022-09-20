import { useState, useRef, useEffect } from "react";
import { useTheme } from "styled-components/native";
import {
    Animated,
    BackHandler,
    TextInput as TextInputNative,
} from "react-native";
import { FlexBox, TextInput } from "@src/components/atoms";
import { MenuIcon, SearchIcon, BackIcon, CloseIcon } from "@src/assets/icons";
import { useTranslation } from "react-i18next";
import { spacing } from "@src/utils/theme";
import { AnimatedBox } from "@src/components/atoms/AnimatedBox/AnimatedBox";
import { useCallback } from "react";

export const SearchBar: React.FC = () => {
    const { t } = useTranslation();
    const { pallette } = useTheme();

    const keyboardRef = useRef<TextInputNative>();

    const [isFocused, setIsFocused] = useState(false);
    const [searchText, setSearchText] = useState("");

    // todo: convert to hook?
    const borderRadius = useRef(new Animated.Value(0)).current;
    const margin = useRef(new Animated.Value(20)).current;
    const padding = useRef(new Animated.Value(0)).current;
    const backgroundAnim = useRef(new Animated.Value(0)).current;

    const backgroundColor = backgroundAnim.interpolate({
        inputRange: [0, 100],
        outputRange: [pallette.background, pallette.secondary.light],
    });

    useEffect(() => {
        Animated.parallel([
            Animated.timing(borderRadius, {
                toValue: isFocused ? 0 : 20,
                duration: 200,
                useNativeDriver: false,
            }),
            Animated.timing(margin, {
                toValue: isFocused ? 0 : 15,
                duration: 200,
                useNativeDriver: false,
            }),
            Animated.timing(padding, {
                toValue: isFocused ? 20 : 5,
                duration: 200,
                useNativeDriver: false,
            }),
            Animated.timing(backgroundAnim, {
                toValue: isFocused ? 100 : 0,
                duration: 200,
                useNativeDriver: false,
            }),
        ]).start();
    }, [isFocused]);

    // todo: move to a hook
    useEffect(() => {
        if (isFocused) {
            const backAction = () => {
                onBackPress();
                return true;
            };
            const backHandler = BackHandler.addEventListener(
                "hardwareBackPress",
                backAction
            );
            return () => backHandler.remove();
        }
    }, [isFocused]);

    const onTextChange = useCallback((text: string) => {
        setSearchText(text);
        onTextInputFocus();
    }, []);

    const onSearchPress = useCallback(() => {
        onTextInputFocus();
        keyboardRef?.current?.focus();
    }, []);

    const onBackPress = useCallback(() => {
        onTextInputBlur();
        clearText();
        keyboardRef?.current?.blur();
    }, []);

    const clearText = useCallback(() => setSearchText(""), []);

    const onTextInputFocus = useCallback(() => setIsFocused(true), []);

    const onTextInputBlur = useCallback(() => setIsFocused(false), []);

    // todo move border radius & padding
    return (
        <AnimatedBox style={{ borderRadius, margin, padding, backgroundColor }}>
            <FlexBox paddingX={spacing.small}>
                {isFocused ? (
                    <BackIcon onPress={onBackPress} />
                ) : (
                    <MenuIcon onPress={() => console.log("menu")} />
                )}

                <TextInput
                    inputRef={keyboardRef}
                    onFocus={onTextInputFocus}
                    onBlur={onTextInputBlur}
                    onChangeText={onTextChange}
                    value={searchText}
                    placeholder={t("components.searchPlaceholder")}
                    returnKeyType="search"
                    keyboardType="web-search"
                    spellCheck={false}
                    flex={1}
                    marginLeft={spacing.small}
                />

                {!isFocused && <SearchIcon onPress={onSearchPress} />}

                {isFocused && searchText.length > 0 && (
                    <CloseIcon onPress={clearText} />
                )}
            </FlexBox>
        </AnimatedBox>
    );
};
