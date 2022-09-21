import React, { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { TextInput as TextInputNative } from "react-native";
import { BackIcon, CloseIcon, MenuIcon, SearchIcon } from "@src/assets/icons";
import { AnimatedBox, FlexBox, TextInput } from "@src/components/atoms";
import { useBackPress } from "@src/hooks";
import { spacing } from "@src/utils/theme";
import { useTheme } from "styled-components";

import { useSearchBarAnimated } from "./animatedHook";

export const SearchBar: React.FC = () => {
    const { t } = useTranslation();
    const { pallette } = useTheme();

    const keyboardRef = useRef<TextInputNative>();

    const [isFocused, setIsFocused] = useState(false);
    const [searchText, setSearchText] = useState("");

    const searchBarStyles = useSearchBarAnimated(isFocused);

    const onTextInputFocus = useCallback(() => setIsFocused(true), []);

    const onTextInputBlur = useCallback(() => setIsFocused(false), []);

    const clearText = useCallback(() => setSearchText(""), []);

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

    useBackPress({
        dependencies: [isFocused],
        callback: onBackPress,
        condition: () => isFocused,
    });

    return (
        <AnimatedBox style={searchBarStyles}>
            <FlexBox paddingX={spacing.small}>
                {isFocused ? (
                    <BackIcon onPress={onBackPress} />
                ) : (
                    <MenuIcon onPress={() => console.log("menu")} />
                )}

                <TextInput
                    accessibilityLabel="Search bar field"
                    accessibilityHint="Notes will be filtered based on this search input"
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
                    selectionColor={pallette.primary.dark}
                />

                {!isFocused && <SearchIcon onPress={onSearchPress} />}

                {isFocused && searchText.length > 0 && (
                    <CloseIcon onPress={clearText} />
                )}
            </FlexBox>
        </AnimatedBox>
    );
};
