import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useTheme } from "styled-components";

import { TagsIcon, TrashIcon } from "@src/assets/icons";
import { IsIOS, Screens } from "@src/common/constants";
import { Spacing } from "@src/common/theme";
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

    return (
        <SafeAreaBox bg={pallette.background}>
            <HeaderBar title={t("components.drawer.manageLabels")} />
            <KeyboardAvoidingBox px={Spacing.medium} behavior={IsIOS ? "padding" : "height"}>
                <ScrollView>
                    <LabelManageItem labelString="Label 1" key="label 1" />
                </ScrollView>
            </KeyboardAvoidingBox>
            <FloatingButton />
        </SafeAreaBox>
    );
};
