import React, { FC, useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { nanoid } from "nanoid/non-secure";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { AddIcon, CloseIcon, TagsIcon } from "@src/assets/icons";
import { Screens } from "@src/common/constants";
import { IconSize, IconStrokeWidth, Opacity, Spacing } from "@src/common/theme";
import { KeyboardAvoidingBox, SafeAreaBox, ScrollView, Text, TextInput, Touchable } from "@src/components/atoms";
import { Checkbox, EmptyPlaceholder, HeaderBar } from "@src/components/molecules";
import { useBackPress } from "@src/hooks";
import { NavigatorParamList } from "@src/navigator";
import { useStore } from "@src/store";

interface Props {
    labelString: string;
    onPress: (isSelected: boolean) => void;
    isSelected: boolean;
}
const LabelSelectItem: FC<Props> = ({ labelString, isSelected = false, onPress }) => {
    const { pallette } = useTheme();

    return (
        <Touchable
            onPress={() => onPress(!isSelected)}
            accessibilityRole="button"
            flexDirection="row"
            alignItems="center"
            px={Spacing.small}
            py={Spacing.medium}
        >
            <TagsIcon
                color={pallette.grey}
                strokeWidth={isSelected ? IconStrokeWidth.large : IconStrokeWidth.default}
            />
            <Text
                flex={1}
                color={pallette.grey}
                px={Spacing.medium}
                fontFamily={isSelected ? FontFamily.medium : FontFamily.regular}
            >
                {labelString}
            </Text>
            <Checkbox checked={isSelected} />
        </Touchable>
    );
};

export const LabelSelectScreen: FC<NativeStackScreenProps<NavigatorParamList, Screens.labelSelect>> = ({
    route: {
        params: { noteItem },
    },
    navigation,
}) => {
    const { pallette } = useTheme();
    const { t } = useTranslation();
    const [searchText, setSearchText] = useState("");
    const { labels, addLabel } = useStore();
    const [selectedIds, setSelectedIds] = useState<string[]>(noteItem.labels.map((item) => item.id));

    const onBackPress = useCallback(
        () =>
            navigation.navigate(Screens.editNote, {
                noteItem: { ...noteItem, labels: labels.filter((item) => selectedIds.includes(item.id)) },
            }),
        [labels, selectedIds]
    );

    useBackPress({ callback: onBackPress });

    const filteredLabels = useMemo(
        () => labels.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase())),
        [searchText, labels]
    );

    const matchExist = useMemo(
        () => labels.some((item) => item.name.toLowerCase() === searchText.toLowerCase()),
        [searchText, filteredLabels]
    );

    const clearSearch = useCallback(() => setSearchText(""), []);

    const createLabel = useCallback(() => {
        const labelId = nanoid();
        addLabel({ id: labelId, name: searchText });
        setSelectedIds([...selectedIds, labelId]);
        clearSearch();
    }, [searchText, selectedIds]);

    return (
        <SafeAreaBox bg={pallette.background}>
            <HeaderBar
                onBackPress={onBackPress}
                title={
                    <TextInput
                        accessibilityLabel={t("screens.labelSelection.inputA11yLabel")}
                        accessibilityHint={t("screens.labelSelection.inputA11yHint")}
                        value={searchText}
                        onChangeText={setSearchText}
                        placeholder={t("screens.labelSelection.placeholder")}
                        flex={1}
                        ml={Spacing.medium}
                    />
                }
                endIcon={
                    searchText.length > 0 && (
                        <CloseIcon
                            touchable={{
                                onPress: clearSearch,
                                opacity: Opacity.partiallyVisible,
                                mr: Spacing.small,
                            }}
                        />
                    )
                }
            />
            <KeyboardAvoidingBox px={Spacing.medium}>
                <ScrollView>
                    {/* only if no results found */}
                    {searchText.length > 0 && !matchExist && (
                        <Touchable
                            onPress={createLabel}
                            accessibilityRole="button"
                            flexDirection="row"
                            alignItems="center"
                        >
                            <AddIcon
                                color={pallette.primary.dark}
                                size={IconSize.large}
                                strokeWidth={IconStrokeWidth.large}
                            />
                            <Text
                                flex={1}
                                p={Spacing.medium}
                                fontFamily={FontFamily.medium}
                                color={pallette.primary.dark}
                            >
                                {t("screens.labelSelection.createNew")}
                                <Text fontFamily={FontFamily.bold} color={pallette.primary.dark}>
                                    {searchText}
                                </Text>
                            </Text>
                        </Touchable>
                    )}
                    {labels.length === 0 && (
                        <EmptyPlaceholder text={t("screens.labelSelection.noLabelsFound")} Icon={TagsIcon} />
                    )}
                    {filteredLabels.map((item) => (
                        <LabelSelectItem
                            key={item.id}
                            labelString={item.name}
                            isSelected={selectedIds.includes(item.id)}
                            onPress={(isSelected) => {
                                if (isSelected) {
                                    setSelectedIds([...selectedIds, item.id]);
                                } else {
                                    setSelectedIds(selectedIds.filter((id) => item.id !== id));
                                }
                            }}
                        />
                    ))}
                </ScrollView>
            </KeyboardAvoidingBox>
        </SafeAreaBox>
    );
};
