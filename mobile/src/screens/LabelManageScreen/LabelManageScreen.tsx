import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { AddIcon, CloseIcon, TagsIcon, TrashIcon } from "@src/assets/icons";
import { IsIOS, Screens } from "@src/common/constants";
import { Opacity, Spacing } from "@src/common/theme";
import { KeyboardAvoidingBox, SafeAreaBox, ScrollView, Text, Touchable } from "@src/components/atoms";
import { FloatingButton, HeaderBar, InputModal } from "@src/components/molecules";
import { ConfirmModal } from "@src/components/organism";
import { NavigatorParamList } from "@src/navigator";

const LabelManageItem = ({ labelString }: { labelString: string }) => {
    const { pallette } = useTheme();
    const [isVisible, setVisible] = useState(false);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
    const { t } = useTranslation();

    return (
        <>
            <Touchable
                onPress={() => setVisible(true)}
                accessibilityRole="button"
                flexDirection="row"
                alignItems="center"
                px={Spacing.small}
                py={Spacing.medium}
            >
                <TagsIcon color={pallette.grey} />
                <Text flex={1} color={pallette.grey} px={Spacing.medium}>
                    {labelString}
                </Text>
                <TrashIcon color={pallette.error.dark} touchable={{ onPress: () => setDeleteModalVisible(true) }} />
                <ConfirmModal
                    title={t("common.confirm")}
                    message={t("components.labelDeleteModal.message")}
                    primaryBtnText={t("common.delete")}
                    isVisible={isDeleteModalVisible}
                    onClose={() => setDeleteModalVisible(false)}
                    color={pallette.error.dark}
                />
            </Touchable>
            <InputModal isVisible={isVisible} onClose={() => setVisible(false)} />
        </>
    );
};

export const LabelManageScreen: FC<NativeStackScreenProps<NavigatorParamList, Screens.labelManage>> = () => {
    const { pallette } = useTheme();
    const { t } = useTranslation();
    const [searchText, setSearchText] = useState("");

    return (
        <SafeAreaBox bg={pallette.background}>
            <HeaderBar
                title="Manage Labels"
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

                    <LabelManageItem labelString="Label 1" key="label 1" />
                </ScrollView>
            </KeyboardAvoidingBox>
            <FloatingButton />
        </SafeAreaBox>
    );
};
