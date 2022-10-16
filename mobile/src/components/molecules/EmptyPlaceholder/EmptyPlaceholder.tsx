import React, { FC } from "react";

import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { SearchIcon } from "@src/assets/icons";
import { IconProps } from "@src/common/interfaces";
import { IconSize, Spacing } from "@src/common/theme";
import { Box, BoxProps, Text, TextProps } from "@src/components/atoms";

interface Props extends BoxProps {
    /** Text to be displayed within the empty placeholder */
    text?: string;
    /** Icon to be displayed within the empty placeholder */
    Icon?: FC<IconProps>;
    /** Color of the icon and text */
    color?: string;
    /** Properties of text element */
    textProps?: TextProps;
}

/** Empty placeholder to be displayed when there aren't any items to display */
export const EmptyPlaceholder: FC<Props> = ({ text, color, Icon = SearchIcon, textProps, ...rest }) => {
    const { pallette } = useTheme();

    return (
        // eslint-disable-next-line react-native-a11y/has-accessibility-hint
        <Box
            accessibilityLabel={text}
            accessibilityRole="alert"
            px={Spacing.large}
            py={Spacing.huge}
            display="flex"
            alignItems="center"
            justifyContent="center"
            {...rest}
        >
            <Icon size={IconSize.huge} color={color || pallette.secondary.main} />
            <Text
                mt={Spacing.medium}
                color={color || pallette.secondary.main}
                textAlign="center"
                fontFamily={FontFamily.light}
                {...textProps}
            >
                {text}
            </Text>
        </Box>
    );
};
