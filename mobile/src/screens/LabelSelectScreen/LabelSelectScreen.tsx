import React, { FC, useCallback, useMemo, useState } from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { nanoid } from "nanoid/non-secure";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { AddIcon, CloseIcon, TagsIcon } from "@src/assets/icons";
import { Screens } from "@src/common/constants";
import { IconSize, IconStrokeWidth, Opacity, Spacing } from "@src/common/theme";
import { KeyboardAvoidingBox, SafeAreaBox, ScrollBox, Text, TextInput, Touchable } from "@src/components/atoms";
import { Checkbox, EmptyPlaceholder, HeaderBar, ListItem } from "@src/components/molecules";
import { useBackPress } from "@src/hooks";
import { NavigatorParamList } from "@src/navigation";
import { useNotesStore } from "@src/store";

/** Label Select screen allows users to select the labels for a given note */
export const LabelSelectScreen: FC<NativeStackScreenProps<NavigatorParamList, Screens.labelSelect>> = ({
    route: {
        params: { noteItem },
    },
    navigation: { navigate },
}) => {
    const { pallette } = useTheme();
    const { t } = useTranslation();
    const [searchText, setSearchText] = useState("");
    const { labels, addLabel } = useNotesStore();
    const [selectedIds, setSelectedIds] = useState<string[]>(noteItem.labels.map((item) => item.id));

    /** Navigate back to the edit note screen, but with the updated label selection */
    const onBackPress = useCallback(
        () =>
            navigate(Screens.editNote, {
                noteItem: { ...noteItem, labels: labels.filter((item) => selectedIds.includes(item.id)) },
            }),
        [labels, selectedIds]
    );

    /** back button press listener to navigate user back to edit note screen with updated label selection */
    useBackPress({ callback: onBackPress });

    /** Labels filtered based on the case insensitive search input */
    const filteredLabels = useMemo(
        () => labels.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase())),
        [searchText, labels]
    );

    /** Whether an exact match for the search input exists */
    const matchExist = useMemo(
        () => labels.some((item) => item.name.toLowerCase() === searchText.toLowerCase()),
        [searchText, filteredLabels]
    );

    /** Clear the search input */
    const clearSearch = useCallback(() => setSearchText(""), []);

    /** Create a new label, automatically select it for the note and clear the search input */
    const createLabel = useCallback(() => {
        const labelId = nanoid();
        addLabel({ id: labelId, name: searchText });
        setSelectedIds([...selectedIds, labelId]);
        clearSearch();
    }, [searchText, selectedIds]);

    /** Update the local state of selected label ids */
    const onLabelSelect = useCallback(
        (labelId: string) => {
            const isSelected = selectedIds.some((id) => id === labelId);
            if (isSelected) {
                setSelectedIds(selectedIds.filter((id) => labelId !== id));
            } else {
                setSelectedIds([...selectedIds, labelId]);
            }
        },
        [selectedIds]
    );

    return (
        <SafeAreaBox>
            <HeaderBar
                endIcon={
                    searchText.length > 0 && (
                        <CloseIcon
                            touchable={{
                                accessibilityHint: t("screens.labelSelection.clearSearchA11yHint"),
                                accessibilityLabel: t("screens.labelSelection.clearSearchA11yLabel"),
                                mr: Spacing.small,
                                onPress: clearSearch,
                                opacity: Opacity.partiallyVisible,
                            }}
                        />
                    )
                }
                onBackPress={onBackPress}
                title={
                    <TextInput
                        accessibilityHint={t("screens.labelSelection.inputA11yHint")}
                        accessibilityLabel={t("screens.labelSelection.inputA11yLabel")}
                        accessibilityRole="search"
                        flex={1}
                        ml={Spacing.medium}
                        onChangeText={setSearchText}
                        placeholder={t("screens.labelSelection.placeholder")}
                        value={searchText}
                    />
                }
            />
            <KeyboardAvoidingBox px={Spacing.medium}>
                <ScrollBox>
                    {searchText.length > 0 && !matchExist && (
                        <Touchable
                            accessibilityHint={t("screens.labelSelection.createNewLabelA11yHint", {
                                label: searchText,
                            })}
                            accessibilityLabel={t("screens.labelSelection.createNewLabelA11yLabel")}
                            accessibilityRole="button"
                            alignItems="center"
                            flexDirection="row"
                            onPress={createLabel}
                        >
                            <AddIcon
                                color={pallette.primary.dark}
                                size={IconSize.medium}
                                strokeWidth={IconStrokeWidth.large}
                            />
                            <Text
                                color={pallette.primary.dark}
                                flex={1}
                                fontFamily={FontFamily.medium}
                                p={Spacing.medium}
                            >
                                {t("screens.labelSelection.createNew")}
                                <Text color={pallette.primary.dark} fontFamily={FontFamily.bold}>
                                    {searchText}
                                </Text>
                            </Text>
                        </Touchable>
                    )}
                    {labels.length === 0 && (
                        <EmptyPlaceholder Icon={TagsIcon} text={t("screens.labelSelection.noLabelsFound")} />
                    )}
                    {filteredLabels.map((item) => {
                        const isSelected = selectedIds.includes(item.id);
                        return (
                            <ListItem
                                key={item.id}
                                Prefix={<TagsIcon color={pallette.grey} />}
                                Suffix={<Checkbox checked={isSelected} onPress={() => onLabelSelect(item.id)} />}
                                accessibilityHint={t("screens.labelSelection.labelItemA11yHint", {
                                    label: item.name,
                                    selected: isSelected,
                                })}
                                accessibilityLabel={t("screens.labelSelection.labelItemA11yLabel", {
                                    label: item.name,
                                })}
                                accessibilityRole="checkbox"
                                onPress={() => onLabelSelect(item.id)}
                                text={item.name}
                            />
                        );
                    })}
                </ScrollBox>
            </KeyboardAvoidingBox>
        </SafeAreaBox>
    );
};
