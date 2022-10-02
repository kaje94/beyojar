import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { AddIcon, CloseIcon, TagsIcon } from "@src/assets/icons";
import { IsIOS, Screens } from "@src/common/constants";
import { CommonTheme, Opacity, Spacing } from "@src/common/theme";
import { KeyboardAvoidingBox, SafeAreaBox, ScrollView, Text, TextInput, Touchable } from "@src/components/atoms";
import { Checkbox, HeaderBar } from "@src/components/molecules";
import { NavigatorParamList } from "@src/navigator";

const LabelSelectItem = ({ labelString }: { labelString: string }) => {
    const { pallette } = useTheme();
    const [isChecked, setChecked] = useState(false);

    return (
        <Touchable
            onPress={() => setChecked(!isChecked)}
            accessibilityRole="button"
            flexDirection="row"
            alignItems="center"
            px={Spacing.small}
            py={Spacing.medium}
        >
            <TagsIcon color={pallette.grey} strokeWidth={isChecked ? 2.5 : CommonTheme.icon.default.strokeWidth} />
            <Text
                flex={1}
                color={pallette.grey}
                px={Spacing.medium}
                fontFamily={isChecked ? FontFamily.medium : FontFamily.regular}
            >
                {labelString}
            </Text>
            <Checkbox checked={isChecked} />
        </Touchable>
    );
};

export const LabelSelectScreen: FC<NativeStackScreenProps<NavigatorParamList, Screens.labelSelect>> = () => {
    const { pallette } = useTheme();
    const { t } = useTranslation();
    const [searchText, setSearchText] = useState("");

    return (
        <SafeAreaBox bg={pallette.background}>
            <HeaderBar
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
                                onPress: () => setSearchText(""),
                                opacity: Opacity.partiallyVisible,
                                mr: Spacing.small,
                            }}
                        />
                    )
                }
            />
            <KeyboardAvoidingBox px={Spacing.medium} behavior={IsIOS ? "padding" : "height"}>
                <ScrollView>
                    {searchText.length > 0 && (
                        <Touchable accessibilityRole="button" flexDirection="row" alignItems="center">
                            <AddIcon color={pallette.primary.dark} strokeWidth={3} size={30} />
                            <Text
                                flex={1}
                                p={Spacing.medium}
                                fontFamily={FontFamily.medium}
                                color={pallette.primary.dark}
                            >
                                {t("screens.labelSelection.createNew", { name: searchText })}
                            </Text>
                        </Touchable>
                    )}

                    <LabelSelectItem labelString="Label 1" key="label 1" />
                    <LabelSelectItem labelString="Label 2" key="label 2" />
                    <LabelSelectItem labelString="Label 3" key="label 3" />
                </ScrollView>
            </KeyboardAvoidingBox>
        </SafeAreaBox>
    );
};
