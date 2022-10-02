import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { ColorSchemeName, GestureResponderEvent } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { nativeApplicationVersion } from "expo-application";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { InfoIcon, LanguageIcon, SettingsIcon, ThemeIcon, UserRemoveIcon } from "@src/assets/icons";
import { IconProps } from "@src/assets/icons/interface";
import { Screens } from "@src/common/constants";
import { FontSize, IconSize, Opacity, Spacing } from "@src/common/theme";
import { SafeAreaBox, ScrollView, Text, Touchable } from "@src/components/atoms";
import { HeaderBar } from "@src/components/molecules";
import { ConfirmModal, SelectModal } from "@src/components/organism";
import { NavigatorParamList } from "@src/navigator";

const SettingsItem = ({
    title,
    subtitle,
    Icon = SettingsIcon,
    color,
    onPress,
}: {
    title: string;
    subtitle?: string;
    Icon?: FC<IconProps>;
    color?: string;
    onPress?: (event: GestureResponderEvent) => void;
}) => {
    const { pallette } = useTheme();
    const primaryColor = color || pallette.grey;
    return (
        <Touchable
            // todo: fix a11y
            accessibilityRole="button"
            px={Spacing.small}
            py={Spacing.medium}
            flexDirection="row"
            alignItems="center"
            disabled={!onPress}
            onPress={onPress}
            opacity={onPress ? Opacity.visible : Opacity.mostlyVisible}
        >
            <Icon size={IconSize.small} color={primaryColor} />
            <Text flex={1} color={primaryColor} px={Spacing.medium}>
                {title}
            </Text>
            <Text
                fontFamily={FontFamily.light}
                color={primaryColor}
                opacity={Opacity.partiallyVisible}
                fontSize={FontSize.small}
            >
                {subtitle}
            </Text>
        </Touchable>
    );
};

enum SettingsModal {
    ThemeModal,
    RemoveAccountModal,
}

export const SettingsScreen: FC<NativeStackScreenProps<NavigatorParamList, Screens.settings>> = () => {
    const { pallette, persistedMode, setPersistedMode } = useTheme();
    const { t } = useTranslation();
    const [selectedOption, setSelectedOption] = useState<SettingsModal | null>();

    return (
        <SafeAreaBox bg={pallette.background}>
            <HeaderBar title={t("components.drawer.settings")} />
            <ScrollView px={Spacing.medium}>
                <SettingsItem
                    title={t("screens.settings.about.title")}
                    subtitle={t("screens.settings.about.version", { version: nativeApplicationVersion })}
                    Icon={InfoIcon}
                />
                <SettingsItem title={t("screens.settings.language.title")} subtitle="English" Icon={LanguageIcon} />
                <SettingsItem
                    title={t("screens.settings.theme.title")}
                    subtitle={persistedMode || "Default"}
                    Icon={ThemeIcon}
                    onPress={() => setSelectedOption(SettingsModal.ThemeModal)}
                />
                <SettingsItem
                    title={t("screens.settings.deleteAccount.title")}
                    Icon={UserRemoveIcon}
                    color={pallette.error.dark}
                    onPress={() => setSelectedOption(SettingsModal.RemoveAccountModal)}
                />
            </ScrollView>

            <ConfirmModal
                title={t("common.confirm")}
                message={t("screens.settings.deleteAccount.message")}
                primaryBtnText={t("common.delete")}
                isVisible={selectedOption === SettingsModal.RemoveAccountModal}
                onClose={() => setSelectedOption(null)}
                color={pallette.error.dark}
                Icon={UserRemoveIcon}
            />
            <SelectModal
                title={t("screens.settings.theme.modalTitle")}
                isVisible={selectedOption === SettingsModal.ThemeModal}
                onClose={(mode) => {
                    setSelectedOption(null);
                    setPersistedMode(mode as ColorSchemeName);
                }}
                selectedId={persistedMode || ""}
                options={[
                    { id: "", label: t("screens.settings.theme.systemDefault") },
                    { id: "light", label: t("screens.settings.theme.light") },
                    { id: "dark", label: t("screens.settings.theme.dark") },
                ]}
            />
        </SafeAreaBox>
    );
};
