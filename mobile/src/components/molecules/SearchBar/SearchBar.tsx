import React, { FC, useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { TextInput as TextInputNative } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { BackIcon, MenuIcon, SearchIcon } from "@src/assets/icons";
import { Spacing } from "@src/common/theme";
import { AnimatedBox, FlexBox, TextInput } from "@src/components/atoms";
import { useBackPress } from "@src/hooks";
import { useSearchBarAnimated } from "./animatedHook";

interface Props {
    onSearchChange: (search: string) => void;
}

// todo: move into oragnism
export const SearchBar: FC<Props> = ({ onSearchChange }) => {
    const { t } = useTranslation();
    const { pallette, shadow } = useTheme();
    const { dispatch } = useNavigation();

    const keyboardRef = useRef<TextInputNative>();

    const [isFocused, setIsFocused] = useState(false);
    const [searchText, setSearchText] = useState("");
    const isInFocus = isFocused || searchText.length > 0;

    const searchBarStyles = useSearchBarAnimated(isInFocus);

    const onTextInputFocus = useCallback(() => setIsFocused(true), []);

    const onTextInputBlur = useCallback(() => setIsFocused(false), []);

    const onTextChange = useCallback((text: string) => {
        setSearchText(text);
        onSearchChange(text);
        onTextInputFocus();
    }, []);

    const onSearchPress = useCallback(() => {
        keyboardRef?.current?.focus();
    }, []);

    const onBackPress = useCallback(() => {
        setSearchText("");
        onSearchChange("");
        keyboardRef?.current?.blur();
    }, []);

    useBackPress({
        dependencies: [isInFocus],
        callback: onBackPress,
        condition: () => isInFocus,
    });

    return (
        <AnimatedBox style={{ ...searchBarStyles, ...shadow.medium }}>
            <FlexBox paddingX={Spacing.small}>
                {isInFocus ? (
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

                {!isInFocus && <SearchIcon touchable={{ onPress: onSearchPress }} />}
            </FlexBox>
        </AnimatedBox>
    );
};
