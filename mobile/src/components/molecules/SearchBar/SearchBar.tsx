import React, { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { TextInput as TextInputNative } from "react-native";
import { useTheme } from "styled-components";

import { BackIcon, CloseIcon, MenuIcon, SearchIcon } from "@src/assets/icons";
import { AnimatedBox, FlexBox, TextInput } from "@src/components/atoms";
import { useBackPress } from "@src/hooks";
import { spacing } from "@src/utils/theme";
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
                    <BackIcon touchable={{ onPress: onBackPress }} />
                ) : (
                    <MenuIcon touchable={{ onPress: () => console.log("menu") }} />
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
                    marginLeft={spacing.small}
                    selectionColor={pallette.primary.dark}
                    accessibilityHint={t("components.searchBar.inputA11yHint")}
                    accessibilityLabel={t("components.searchBar.inputA11yLabel")}
                />

                {!isFocused && <SearchIcon touchable={{ onPress: onSearchPress }} />}

                {isFocused && searchText.length > 0 && <CloseIcon touchable={{ onPress: clearText }} />}
            </FlexBox>
        </AnimatedBox>
    );
};
