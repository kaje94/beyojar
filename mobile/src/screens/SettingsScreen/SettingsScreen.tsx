import React, { FC, useCallback, useMemo, useState } from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { nativeApplicationVersion } from "expo-application";
import { useTranslation } from "react-i18next";
import { ColorSchemeName } from "react-native";
import { showMessage } from "react-native-flash-message";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { InfoIcon, LanguageIcon, ThemeIcon, TrashIcon, UserRemoveIcon } from "@src/assets/icons";
import { Screens } from "@src/common/constants";
import { IconProps } from "@src/common/interfaces";
import { FontSize, Opacity, Spacing } from "@src/common/theme";
import { SafeAreaBox, ScrollBox, Text } from "@src/components/atoms";
import { HeaderBar, ListItem } from "@src/components/molecules";
import { ConfirmModal, SelectModal } from "@src/components/organism";
import { NavigatorParamList } from "@src/navigation";
import { useNotesStore, useSettingsStore } from "@src/store";

enum VisibleModal {
    /** Preferred theme(Light/dark/system default) selection modal */
    ThemeModal,
    /** Reset account modal to delete all user data */
    RemoveAccountModal,
}

interface SettingsOption {
    /** Icon displayed along the settings option */
    Icon: FC<IconProps>;
    /** helps users understand what will happen when they perform an action  */
    accessibilityHint?: string;
    /** Overrides the text that's read by the screen reader */
    accessibilityLabel?: string;
    /** Color of the settings list item */
    color?: string;
    /** Unique key for each settings option */
    key: string;
    /** Callback to be fired when setting option is selected */
    onPress?: () => void;
    /** Title of the settings option */
    title: string;
    /** Secondary Text displayed on the right side of the settings option */
    value?: string;
}

/** Settings screen to allow users to update their theme/language or reset their account */
export const SettingsScreen: FC<NativeStackScreenProps<NavigatorParamList, Screens.settings>> = () => {
    const { pallette } = useTheme();
    const { persistedTheme, setPersistedTheme } = useSettingsStore();
    const [selectedModal, setSelectedModal] = useState<VisibleModal | null>();
    const { t } = useTranslation();
    const { resetNotes } = useNotesStore();

    /** Options listed in the settings screen */
    const settingsOptions: SettingsOption[] = useMemo(
        () => [
            {
                Icon: InfoIcon,
                key: "about",
                title: t("screens.settings.about.title"),
                value: t("screens.settings.about.version", { version: nativeApplicationVersion }),
            },
            {
                Icon: LanguageIcon,
                key: "language",
                title: t("screens.settings.language.title"),
                value: "English",
            },
            {
                Icon: ThemeIcon,
                accessibilityHint: t("screens.settings.theme.a11yHint"),
                accessibilityLabel: t("screens.settings.theme.a11yLabel", { theme: persistedTheme || "Default" }),
                key: "theme",
                onPress: () => setSelectedModal(VisibleModal.ThemeModal),
                title: t("screens.settings.theme.title"),
                value: persistedTheme || "Default",
            },
            {
                Icon: UserRemoveIcon,
                accessibilityHint: t("screens.settings.theme.a11yHint"),
                color: pallette.error.dark,
                key: "account",
                onPress: () => setSelectedModal(VisibleModal.RemoveAccountModal),
                title: t("screens.settings.deleteAccount.title"),
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

    /** Callback to be fired when user confirms to reset his/her account */
    const onResetConfirm = useCallback(() => {
        onCloseModal();
        resetNotes();
        showMessage({
            backgroundColor: pallette.error.light,
            icon: <TrashIcon />,
            message: t("screens.settings.deleteAccount.successMessage"),
        });
    }, []);

    return (
        <SafeAreaBox>
            <HeaderBar title={t("components.drawer.settings")} />
            <ScrollBox px={Spacing.medium}>
                {settingsOptions.map((item) => (
                    <ListItem
                        key={item.key}
                        Prefix={<item.Icon color={item.color || pallette.grey} />}
                        Suffix={
                            <Text
                                color={item.color || pallette.grey}
                                fontFamily={FontFamily.light}
                                fontSize={FontSize.small}
                                opacity={Opacity.partiallyVisible}
                            >
                                {item.value}
                            </Text>
                        }
                        accessibilityHint={item.accessibilityHint}
                        accessibilityLabel={item.accessibilityLabel}
                        onPress={item.onPress}
                        text={item.title}
                        textProps={{ color: item.color || pallette.grey }}
                    />
                ))}
            </ScrollBox>

            <ConfirmModal
                Icon={UserRemoveIcon}
                color={pallette.error.dark}
                isVisible={selectedModal === VisibleModal.RemoveAccountModal}
                message={t("screens.settings.deleteAccount.message")}
                onClose={onCloseModal}
                onConfirmPress={onResetConfirm}
                primaryBtnText={t("common.continue")}
                title={t("common.confirm")}
            />
            <SelectModal
                isVisible={selectedModal === VisibleModal.ThemeModal}
                onClose={onCloseThemeModal}
                options={[
                    { id: "", label: t("screens.settings.theme.systemDefault") },
                    { id: "light", label: t("screens.settings.theme.light") },
                    { id: "dark", label: t("screens.settings.theme.dark") },
                ]}
                selectedId={persistedTheme || ""}
                title={t("screens.settings.theme.modalTitle")}
            />
        </SafeAreaBox>
    );
};
