import React, { FC } from "react";

import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { RouteProp } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { EditIcon, NoteIcon, SettingsIcon, TagsIcon } from "@src/assets/icons";
import { Screens } from "@src/common/constants";
import { FontSize, Spacing } from "@src/common/theme";
import { Box, ScrollBox, Text } from "@src/components/atoms";
import { NavigatorParamList } from "@src/navigation";
import { useNotesStore } from "@src/store";

import { DrawerItem } from "./DrawerItem";

/** Navigation drawer component to allow users to navigate between labels, settings and manage labels screen */
export const Drawer: FC<DrawerContentComponentProps> = ({ navigation: { navigate }, state }) => {
    const { pallette } = useTheme();
    const { labels } = useNotesStore();
    const { t } = useTranslation();
    const insets = useSafeAreaInsets();

    const selectedLabel = (state.routes[0] as RouteProp<NavigatorParamList, Screens.notesList>)?.params?.label?.id;

    return (
        <Box bg={pallette.white} flex={1}>
            <Text
                color={pallette.primary.main}
                fontFamily={FontFamily.bold}
                fontSize={FontSize.huge}
                m={Spacing.medium}
                mt={Spacing.large + insets.top}
            >
                {t("title")}
            </Text>
            <Box bg={pallette.secondary.light} height={1} />
            <ScrollBox flex={1} px={Spacing.small}>
                <Box height={Spacing.small} />
                <DrawerItem
                    Icon={NoteIcon}
                    accessibilityHint={t("components.drawer.itemAllyHint", {
                        item: t("components.drawer.notes"),
                    })}
                    accessibilityLabel={t("components.drawer.notes")}
                    name={t("components.drawer.notes")}
                    onPress={() => navigate(Screens.notesList, {})}
                    selected={!selectedLabel}
                />
                {labels.map((item) => (
                    <DrawerItem
                        key={item.id}
                        Icon={TagsIcon}
                        accessibilityHint={t("components.drawer.itemAllyHint", { item: item.name })}
                        accessibilityLabel={item.name}
                        name={item.name}
                        onPress={() => navigate(Screens.notesList, { label: item })}
                        selected={selectedLabel === item.id}
                    />
                ))}
                <DrawerItem
                    Icon={EditIcon}
                    accessibilityHint={t("components.drawer.itemAllyHint", {
                        item: t("components.drawer.manageLabels"),
                    })}
                    accessibilityLabel={t("components.drawer.manageLabels")}
                    bgColor={pallette.secondary.main}
                    name={t("components.drawer.manageLabels")}
                    onPress={() => navigate(Screens.labelManage)}
                />
                <Box height={Spacing.small} />
            </ScrollBox>

            <Box bg={pallette.secondary.light} height={Spacing.tiny} />

            <Box bg={pallette.background} px={Spacing.small}>
                <DrawerItem
                    Icon={SettingsIcon}
                    accessibilityHint={t("components.drawer.itemAllyHint", {
                        item: t("components.drawer.settings"),
                    })}
                    accessibilityLabel={t("components.drawer.settings")}
                    name={t("components.drawer.settings")}
                    onPress={() => navigate(Screens.settings)}
                    pb={insets.bottom}
                />
            </Box>
        </Box>
    );
};
