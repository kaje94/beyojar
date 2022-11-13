import React, { FC, memo } from "react";

import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { SearchIcon } from "@src/assets/icons";
import { IconProps } from "@src/common/interfaces";
import { IconSize, Spacing } from "@src/common/theme";
import { Box, BoxProps, Text, TextProps } from "@src/components/atoms";

interface Props extends BoxProps {
    /** Icon to be displayed within the empty placeholder */
    Icon?: FC<IconProps>;
    /** Color of the icon and text */
    color?: string;
    /** Text to be displayed within the empty placeholder */
    text?: string;
    /** Properties of text element */
    textProps?: TextProps;
}

/** Empty placeholder to be displayed when there aren't any items to display */
export const EmptyPlaceholder: FC<Props> = memo(({ text, color, Icon = SearchIcon, textProps, ...rest }) => {
    const { pallette } = useTheme();

    return (
        // eslint-disable-next-line react-native-a11y/has-accessibility-hint
        <Box
            accessibilityLabel={text}
            accessibilityRole="alert"
            alignItems="center"
            display="flex"
            justifyContent="center"
            px={Spacing.large}
            py={Spacing.huge}
            {...rest}
        >
            <Icon color={color || pallette.secondary.main} size={IconSize.huge} />
            <Text
                color={color || pallette.secondary.main}
                fontFamily={FontFamily.light}
                mt={Spacing.medium}
                textAlign="center"
                {...textProps}
            >
                {text}
            </Text>
        </Box>
    );
});
