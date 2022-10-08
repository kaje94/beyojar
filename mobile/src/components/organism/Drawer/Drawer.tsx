import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { GestureResponderEvent } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { RouteProp } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { EditIcon, NoteIcon, SettingsIcon, TagsIcon } from "@src/assets/icons";
import { IconProps } from "@src/assets/icons/interface";
import { Screens } from "@src/common/constants";
import { BorderRadius, FontSize, IconSize, Spacing } from "@src/common/theme";
import { AnimatedBox, Box, ScrollView, Text, Touchable } from "@src/components/atoms";
import { NavigatorParamList } from "@src/navigator";
import { useStore } from "@src/store";

interface Props {
    name: string;
    selected?: boolean;
    bgColor?: string;
    Icon?: FC<IconProps>;
    onPress?: (event: GestureResponderEvent) => void;
}

export const DrawerItem: FC<Props> = ({ name, selected, bgColor, Icon = NoteIcon, onPress }) => {
    const { pallette, shadow } = useTheme();
    const defaultColor = bgColor || pallette.grey;

    return (
        <AnimatedBox
            px={Spacing.medium}
            py={Spacing.small}
            bg={selected ? pallette.primary.dark : "transparent"}
            m={Spacing.tiny}
            borderRadius={BorderRadius.medium}
            style={selected && shadow.medium}
        >
            <Touchable
                onPress={onPress}
                accessibilityRole="button"
                display="flex"
                flexDirection="row"
                alignItems="center"
            >
                <Icon color={selected ? pallette.white : defaultColor} size={IconSize.small} />
                <Text
                    fontFamily={selected ? FontFamily.medium : FontFamily.regular}
                    color={selected ? pallette.white : defaultColor}
                    ml={Spacing.small}
                >
                    {name}
                </Text>
            </Touchable>
        </AnimatedBox>
    );
};

export const Drawer = ({ navigation, state }: DrawerContentComponentProps) => {
    const { pallette } = useTheme();
    const { labels } = useStore();
    const { t } = useTranslation();

    const selectedLabel = (state.routes[0] as RouteProp<NavigatorParamList, Screens.home>)?.params?.label?.id;

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
            <ScrollView flex={1} px={Spacing.small}>
                <Box height={Spacing.small} />
                <DrawerItem
                    name={t("components.drawer.notes")}
                    selected={!selectedLabel}
                    Icon={NoteIcon}
                    onPress={() => navigation.navigate(Screens.home, {})}
                />
                {labels.map((item) => (
                    <DrawerItem
                        key={item.id}
                        name={item.name}
                        selected={selectedLabel === item.id}
                        Icon={TagsIcon}
                        onPress={() => navigation.navigate(Screens.home, { label: item })}
                    />
                ))}
                <DrawerItem
                    name={t("components.drawer.manageLabels")}
                    Icon={EditIcon}
                    bgColor={pallette.secondary.main}
                    onPress={() => navigation.navigate(Screens.labelManage)}
                />
                <Box height={Spacing.small} />
            </ScrollView>

            <Box height={1} bg={pallette.secondary.light} />

            <Box px={Spacing.small} bg={pallette.background}>
                <DrawerItem
                    name={t("components.drawer.settings")}
                    Icon={SettingsIcon}
                    onPress={() => navigation.navigate(Screens.settings)}
                />
            </Box>
        </Box>
    );
};
