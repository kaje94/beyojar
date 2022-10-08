import React, { FC } from "react";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { SearchIcon } from "@src/assets/icons";
import { IconProps } from "@src/assets/icons/interface";
import { IconSize, Spacing } from "@src/common/theme";
import { Box, Text, TouchableProps } from "@src/components/atoms";

interface Props extends TouchableProps {
    text?: string;
    Icon?: FC<IconProps>;
}
export const EmptyPlaceholder = ({ text, Icon = SearchIcon }: Props) => {
    const { pallette, shadow } = useTheme();

    return (
        <Box px={Spacing.large} py={Spacing.huge} display="flex" alignItems="center" justifyContent="center">
            <Icon size={IconSize.huge} color={pallette.secondary.main} />
            <Text mt={Spacing.medium} color={pallette.secondary.main} textAlign="center" fontFamily={FontFamily.light}>
                {text}
            </Text>
        </Box>
    );
};
