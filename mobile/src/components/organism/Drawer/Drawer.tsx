import React, { FC, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Animated, GestureResponderEvent } from "react-native";
import { DrawerContentComponentProps, useDrawerStatus } from "@react-navigation/drawer";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { EditIcon, NoteIcon, SettingsIcon, TagsIcon } from "@src/assets/icons";
import { IconProps } from "@src/assets/icons/interface";
import { Screens } from "@src/common/constants";
import { AnimationDuration, BorderRadius, FontSize, Spacing } from "@src/common/theme";
import { AnimatedBox, Box, ScrollView, Text, Touchable } from "@src/components/atoms";

export const DrawerItem = ({
    name,
    selected,
    color,
    Icon = NoteIcon,
    onPress,
}: {
    name: string;
    selected?: boolean;
    color?: string;
    Icon?: FC<IconProps>;
    onPress?: (event: GestureResponderEvent) => void;
}) => {
    const { pallette, shadow } = useTheme();
    const borderRadius = useRef(new Animated.Value(0)).current;
    const defaultColor = color || pallette.grey;

    useEffect(() => {
        Animated.timing(borderRadius, {
            toValue: selected ? BorderRadius.medium : BorderRadius.none,
            duration: AnimationDuration.medium,
            useNativeDriver: false,
        }).start();
    }, [selected]);

    return (
        <AnimatedBox
            px={Spacing.medium}
            py={Spacing.small}
            bg={selected ? pallette.primary.dark : "transparent"}
            m={Spacing.tiny}
            style={[{ borderRadius }, selected && shadow.medium]}
        >
            <Touchable
                onPress={onPress}
                accessibilityRole="button"
                display="flex"
                flexDirection="row"
                alignItems="center"
            >
                <Icon color={selected ? pallette.white : defaultColor} size={20} />
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

export const Drawer = ({ navigation }: DrawerContentComponentProps) => {
    const { pallette } = useTheme();
    const isDrawerOpen = useDrawerStatus() === "open";
    const { t } = useTranslation();

    return (
        <Box flex={1}>
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
                <DrawerItem name={t("components.drawer.notes")} selected={isDrawerOpen} Icon={NoteIcon} />
                <DrawerItem name="Label 1" selected={false} Icon={TagsIcon} />
                <DrawerItem name="Label 1" selected={false} Icon={TagsIcon} />
                <DrawerItem name="Label 1" selected={false} Icon={TagsIcon} />
                <DrawerItem
                    name={t("components.drawer.manageLabels")}
                    Icon={EditIcon}
                    color={pallette.secondary.main}
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
