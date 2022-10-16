import React, { FC } from "react";

import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { RouteProp } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
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

    const selectedLabel = (state.routes[0] as RouteProp<NavigatorParamList, Screens.notesList>)?.params?.label?.id;

    return (
        <Box flex={1} bg={pallette.white}>
            <Text
                fontSize={FontSize.huge}
                color={pallette.primary.main}
                fontFamily={FontFamily.bold}
                m={Spacing.medium}
                mt={Spacing.large}
            >
                {t("title")}
            </Text>
            <Box height={1} bg={pallette.secondary.light} />
            <ScrollBox flex={1} px={Spacing.small}>
                <Box height={Spacing.small} />
                <DrawerItem
                    name={t("components.drawer.notes")}
                    selected={!selectedLabel}
                    Icon={NoteIcon}
                    onPress={() => navigate(Screens.notesList, {})}
                    accessibilityLabel={t("components.drawer.notes")}
                    accessibilityHint={t("components.drawer.itemAllyHint", {
                        item: t("components.drawer.notes"),
                    })}
                />
                {labels.map((item) => (
                    <DrawerItem
                        key={item.id}
                        name={item.name}
                        selected={selectedLabel === item.id}
                        Icon={TagsIcon}
                        onPress={() => navigate(Screens.notesList, { label: item })}
                        accessibilityLabel={item.name}
                        accessibilityHint={t("components.drawer.itemAllyHint", { item: item.name })}
                    />
                ))}
                <DrawerItem
                    name={t("components.drawer.manageLabels")}
                    Icon={EditIcon}
                    bgColor={pallette.secondary.main}
                    onPress={() => navigate(Screens.labelManage)}
                    accessibilityLabel={t("components.drawer.manageLabels")}
                    accessibilityHint={t("components.drawer.itemAllyHint", {
                        item: t("components.drawer.manageLabels"),
                    })}
                />
                <Box height={Spacing.small} />
            </ScrollBox>

            <Box height={1} bg={pallette.secondary.light} />

            <Box px={Spacing.small} bg={pallette.background}>
                <DrawerItem
                    name={t("components.drawer.settings")}
                    Icon={SettingsIcon}
                    onPress={() => navigate(Screens.settings)}
                    accessibilityLabel={t("components.drawer.settings")}
                    accessibilityHint={t("components.drawer.itemAllyHint", {
                        item: t("components.drawer.settings"),
                    })}
                />
            </Box>
        </Box>
    );
};
