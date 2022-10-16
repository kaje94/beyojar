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
                            touchable={{ onPress: clearSearch, opacity: Opacity.partiallyVisible, mr: Spacing.small }}
                        />
                    )
                }
            />
            <KeyboardAvoidingBox px={Spacing.medium}>
                <ScrollBox>
                    {searchText.length > 0 && !matchExist && (
                        <Touchable
                            onPress={createLabel}
                            accessibilityRole="button"
                            flexDirection="row"
                            alignItems="center"
                        >
                            <AddIcon
                                color={pallette.primary.dark}
                                size={IconSize.medium}
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
                    {filteredLabels.map((item) => {
                        const isSelected = selectedIds.includes(item.id);
                        return (
                            <ListItem
                                key={item.id}
                                onPress={() => onLabelSelect(item.id)}
                                text={item.name}
                                Prefix={<TagsIcon color={pallette.grey} />}
                                Suffix={<Checkbox checked={isSelected} onPress={() => onLabelSelect(item.id)} />}
                            />
                        );
                    })}
                </ScrollBox>
            </KeyboardAvoidingBox>
        </SafeAreaBox>
    );
};
