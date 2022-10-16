import React, { FC, memo } from "react";

import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { NoteIcon } from "@src/assets/icons";
import { IconProps } from "@src/common/interfaces";
import { BorderRadius, IconSize, Shadow, Spacing } from "@src/common/theme";
import { Text, Touchable, TouchableProps } from "@src/components/atoms";

interface Props extends TouchableProps {
    /** Icon to be shown along with the item/option */
    Icon?: FC<IconProps>;
    /** Background color of the item/option */
    bgColor?: string;
    /** Name of the item/option */
    name: string;
    /** Is item/option selected */
    selected?: boolean;
}

/** Navigation drawer selection item */
export const DrawerItem: FC<Props> = memo(({ name, selected, bgColor, Icon = NoteIcon, ...rest }) => {
    const { pallette } = useTheme();
    const defaultColor = bgColor || pallette.grey;

    return (
        <Touchable
            accessibilityRole="menuitem"
            alignItems="center"
            bg={selected ? pallette.primary.dark : "transparent"}
            borderRadius={BorderRadius.medium}
            display="flex"
            flexDirection="row"
            m={Spacing.tiny}
            px={Spacing.medium}
            py={Spacing.small}
            shadow={selected && Shadow.medium}
            {...rest}
        >
            <Icon color={selected ? pallette.white : defaultColor} size={IconSize.small} />
            <Text
                color={selected ? pallette.white : defaultColor}
                fontFamily={selected ? FontFamily.medium : FontFamily.regular}
                ml={Spacing.small}
                my={Spacing.tiny}
            >
                {name}
            </Text>
        </Touchable>
    );
});
