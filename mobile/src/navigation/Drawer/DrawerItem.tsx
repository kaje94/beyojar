import React, { FC, memo } from "react";

import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { NoteIcon } from "@src/assets/icons";
import { IconProps } from "@src/common/interfaces";
import { BorderRadius, IconSize, Shadow, Spacing } from "@src/common/theme";
import { Text, Touchable, TouchableProps } from "@src/components/atoms";

interface Props extends TouchableProps {
    /** Name of the item/option */
    name: string;
    /** Is item/option selected */
    selected?: boolean;
    /** Background color of the item/option */
    bgColor?: string;
    /** Icon to be shown along with the item/option */
    Icon?: FC<IconProps>;
}

/** Navigation drawer selection item */
export const DrawerItem: FC<Props> = memo(({ name, selected, bgColor, Icon = NoteIcon, ...rest }) => {
    const { pallette } = useTheme();
    const defaultColor = bgColor || pallette.grey;

    return (
        <Touchable
            display="flex"
            flexDirection="row"
            alignItems="center"
            px={Spacing.medium}
            py={Spacing.small}
            bg={selected ? pallette.primary.dark : "transparent"}
            m={Spacing.tiny}
            borderRadius={BorderRadius.medium}
            shadow={selected && Shadow.medium}
            accessibilityRole="menuitem"
            {...rest}
        >
            <Icon color={selected ? pallette.white : defaultColor} size={IconSize.small} />
            <Text
                fontFamily={selected ? FontFamily.medium : FontFamily.regular}
                color={selected ? pallette.white : defaultColor}
                ml={Spacing.small}
                my={Spacing.tiny}
            >
                {name}
            </Text>
        </Touchable>
    );
});
