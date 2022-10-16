import React, { FC, useCallback, useEffect, useRef, useState } from "react";

import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { TextInput as TextInputNative } from "react-native";
import { useTheme } from "styled-components";

import { BackIcon, MenuIcon, SearchIcon } from "@src/assets/icons";
import { Shadow, Spacing } from "@src/common/theme";
import { AnimatedBox, FlexBox, TextInput } from "@src/components/atoms";
import { useBackPress } from "@src/hooks";

import { useSearchAnimation } from "./useSearchAnimation";

interface Props {
    /** Callback to be fired when search text input changes */
    onSearchChange: (search: string) => void;
    /** Callback to be fired when focus of the text input changes */
    onFocusChange: (isFocused: boolean) => void;
}

/** Notes search component that animates when on focus */
export const NotesSearchBar: FC<Props> = ({ onSearchChange, onFocusChange }) => {
    const { t } = useTranslation();
    const { dispatch } = useNavigation();
    const { pallette } = useTheme();
    const [isFocused, setIsFocused] = useState(false);
    const [searchText, setSearchText] = useState("");
    const isInFocus = isFocused || searchText.length > 0;
    const animatedStyles = useSearchAnimation(isInFocus);
    const keyboardRef = useRef<TextInputNative>();

    /** Set the input focused local state as focused */
    const onTextInputFocus = useCallback(() => setIsFocused(true), []);

    /** Set the input focused local state as not focused */
    const onTextInputBlur = useCallback(() => setIsFocused(false), []);

    /** On Text change, should update the local input state as well as the parent */
    const onTextChange = useCallback((text: string) => {
        setSearchText(text);
        onTextInputFocus();
    }, []);

    /** Focus the input when search icon is pressed */
    const onSearchPress = useCallback(() => keyboardRef?.current?.focus(), []);

    /** Reset the local input state as well as the parent when back button is pressed */
    const onBackPress = useCallback(() => {
        setSearchText("");
        keyboardRef?.current?.blur();
    }, []);

    /** Remove focus from the search input when back button is pressed */
    useBackPress({ dependencies: [isInFocus], callback: onBackPress, condition: () => isInFocus });

    /** Notify the parent component when local focused state is changed */
    useEffect(() => onFocusChange(isInFocus), [isInFocus]);

    /** Notify the parent component when local input value changes */
    useEffect(() => onSearchChange(searchText), [searchText]);

    /** Open navigation drawer when menu icon is pressed */
    const onOpenDrawer = useCallback(() => dispatch(DrawerActions.openDrawer), []);

    return (
        <AnimatedBox style={animatedStyles} shadow={Shadow.medium}>
            <FlexBox paddingX={Spacing.small}>
                {isInFocus ? (
                    <BackIcon
                        touchable={{
                            onPress: onBackPress,
                            accessibilityHint: t("components.searchBar.backA11yLabel"),
                            accessibilityLabel: t("components.searchBar.backA11yHint"),
                        }}
                    />
                ) : (
                    <MenuIcon
                        touchable={{
                            onPress: onOpenDrawer,
                            accessibilityHint: t("components.searchBar.menuA11yLabel"),
                            accessibilityLabel: t("components.searchBar.menuA11yHint"),
                            accessibilityRole: "menu",
                        }}
                    />
                )}

                <TextInput
                    inputRef={keyboardRef}
                    onFocus={onTextInputFocus}
                    onBlur={onTextInputBlur}
                    onChangeText={onTextChange}
                    value={searchText}
                    placeholder={t("components.searchBar.placeholder")}
                    returnKeyType="search"
                    keyboardType="web-search"
                    spellCheck={false}
                    flex={1}
                    ml={Spacing.small}
                    selectionColor={pallette.primary.dark}
                    accessibilityRole="search"
                    accessibilityHint={t("components.searchBar.inputA11yHint")}
                    accessibilityLabel={t("components.searchBar.inputA11yLabel")}
                />

                {!isInFocus && (
                    <SearchIcon
                        touchable={{
                            onPress: onSearchPress,
                            accessibilityHint: t("components.searchBar.searchA11yLabel"),
                            accessibilityLabel: t("components.searchBar.searchA11yHint"),
                        }}
                    />
                )}
            </FlexBox>
        </AnimatedBox>
    );
};
