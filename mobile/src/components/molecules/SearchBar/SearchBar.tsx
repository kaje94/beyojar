import React, { FC, useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { TextInput as TextInputNative } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { BackIcon, CloseIcon, MenuIcon, SearchIcon } from "@src/assets/icons";
import { Spacing } from "@src/common/theme";
import { AnimatedBox, FlexBox, TextInput } from "@src/components/atoms";
import { useBackPress } from "@src/hooks";
import { useSearchBarAnimated } from "./animatedHook";

// todo: move into oragnism
export const SearchBar: FC = () => {
    const { t } = useTranslation();
    const { pallette, shadow } = useTheme();
    const { dispatch } = useNavigation();

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
        <AnimatedBox style={{ ...searchBarStyles, ...shadow.medium }}>
            <FlexBox paddingX={Spacing.small}>
                {isFocused ? (
                    <BackIcon touchable={{ onPress: onBackPress }} />
                ) : (
                    <MenuIcon touchable={{ onPress: () => dispatch(DrawerActions.openDrawer) }} />
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
                    accessibilityHint={t("components.searchBar.inputA11yHint")}
                    accessibilityLabel={t("components.searchBar.inputA11yLabel")}
                />

                {!isFocused && <SearchIcon touchable={{ onPress: onSearchPress }} />}

                {isFocused && searchText.length > 0 && <CloseIcon touchable={{ onPress: clearText }} />}
            </FlexBox>
        </AnimatedBox>
    );
};
