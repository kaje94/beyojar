import React, { FC, useCallback, useMemo, useState } from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { nativeApplicationVersion } from "expo-application";
import { useTranslation } from "react-i18next";
import { ColorSchemeName } from "react-native";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { InfoIcon, LanguageIcon, ThemeIcon, UserRemoveIcon } from "@src/assets/icons";
import { Screens } from "@src/common/constants";
import { IconProps } from "@src/common/interfaces";
import { FontSize, Opacity, Spacing } from "@src/common/theme";
import { SafeAreaBox, ScrollBox, Text } from "@src/components/atoms";
import { HeaderBar, ListItem } from "@src/components/molecules";
import { ConfirmModal, SelectModal } from "@src/components/organism";
import { NavigatorParamList } from "@src/navigation";
import { useSettingsStore } from "@src/store";

enum VisibleModal {
    /** Preferred theme(Light/dark/system default) selection modal */
    ThemeModal,
    /** Reset account modal to delete all user data */
    RemoveAccountModal,
}

interface SettingsOption {
    /** Unique key for each settings option */
    key: string;
    /** Title of the settings option */
    title: string;
    /** Icon displayed along the settings option */
    Icon: FC<IconProps>;
    /** Secondary Text displayed on the right side of the settings option */
    value?: string;
    /** Color of the settings list item */
    color?: string;
    /** Callback to be fired when setting option is selected */
    onPress?: () => void;
    /** Overrides the text that's read by the screen reader */
    accessibilityLabel?: string;
    /** helps users understand what will happen when they perform an action  */
    accessibilityHint?: string;
}

/** Settings screen to allow users to update their theme/language or reset their account */
export const SettingsScreen: FC<NativeStackScreenProps<NavigatorParamList, Screens.settings>> = () => {
    const { pallette } = useTheme();
    const { persistedTheme, setPersistedTheme } = useSettingsStore();
    const [selectedModal, setSelectedModal] = useState<VisibleModal | null>();
    const { t } = useTranslation();

    /** Options listed in the settings screen */
    const settingsOptions: SettingsOption[] = useMemo(
        () => [
            {
                key: "about",
                title: t("screens.settings.about.title"),
                value: t("screens.settings.about.version", { version: nativeApplicationVersion }),
                Icon: InfoIcon,
            },
            {
                key: "language",
                title: t("screens.settings.language.title"),
                value: "English",
                Icon: LanguageIcon,
            },
            {
                key: "theme",
                title: t("screens.settings.theme.title"),
                value: persistedTheme || "Default",
                Icon: ThemeIcon,
                onPress: () => setSelectedModal(VisibleModal.ThemeModal),
                accessibilityLabel: t("screens.settings.theme.a11yLabel", { theme: persistedTheme || "Default" }),
                accessibilityHint: t("screens.settings.theme.a11yHint"),
            },
            {
                key: "account",
                title: t("screens.settings.deleteAccount.title"),
                Icon: UserRemoveIcon,
                onPress: () => setSelectedModal(VisibleModal.RemoveAccountModal),
                color: pallette.error.dark,
                accessibilityHint: t("screens.settings.theme.a11yHint"),
            },
        ],
        [pallette.error.dark, persistedTheme]
    );

    /** Callback to be fired when modals are closed */
    const onCloseModal = useCallback(() => setSelectedModal(null), []);

    /** Callback to be fired when theme modal is closed */
    const onCloseThemeModal = useCallback((mode: string) => {
        onCloseModal();
        setPersistedTheme(mode as ColorSchemeName);
    }, []);

    return (
        <SafeAreaBox bg={pallette.background}>
            <HeaderBar title={t("components.drawer.settings")} />
            <ScrollBox px={Spacing.medium}>
                {settingsOptions.map((item) => (
                    <ListItem
                        key={item.key}
                        text={item.title}
                        textProps={{ color: item.color || pallette.grey }}
                        Prefix={<item.Icon color={item.color || pallette.grey} />}
                        Suffix={
                            <Text
                                fontFamily={FontFamily.light}
                                color={item.color || pallette.grey}
                                opacity={Opacity.partiallyVisible}
                                fontSize={FontSize.small}
                            >
                                {item.value}
                            </Text>
                        }
                        onPress={item.onPress}
                        accessibilityLabel={item.accessibilityLabel}
                        accessibilityHint={item.accessibilityHint}
                    />
                ))}
            </ScrollBox>

            <ConfirmModal
                title={t("common.confirm")}
                message={t("screens.settings.deleteAccount.message")}
                primaryBtnText={t("common.delete")}
                isVisible={selectedModal === VisibleModal.RemoveAccountModal}
                onClose={onCloseModal}
                color={pallette.error.dark}
                Icon={UserRemoveIcon}
            />
            <SelectModal
                title={t("screens.settings.theme.modalTitle")}
                isVisible={selectedModal === VisibleModal.ThemeModal}
                onClose={onCloseThemeModal}
                selectedId={persistedTheme || ""}
                options={[
                    { id: "", label: t("screens.settings.theme.systemDefault") },
                    { id: "light", label: t("screens.settings.theme.light") },
                    { id: "dark", label: t("screens.settings.theme.dark") },
                ]}
            />
        </SafeAreaBox>
    );
};
