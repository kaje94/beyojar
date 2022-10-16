import React, { FC, ReactElement } from "react";

import { useTheme } from "styled-components";

import { Opacity, Spacing } from "@src/common/theme";
import { Text, TextProps, Touchable, TouchableProps } from "@src/components/atoms";

interface Props extends TouchableProps {
    /** Text prefix component */
    Prefix?: ReactElement;
    /** Text to be displayed in the item */
    text: string;
    /** Text suffix component */
    Suffix?: ReactElement;
    /** Props for the text wrapping element */
    textProps?: TextProps;
}

/** List item component to be used in list views and scroll views */
export const ListItem: FC<Props> = ({ text, Suffix, Prefix, onPress, textProps, ...rest }) => {
    const { pallette } = useTheme();

    return (
        <Touchable
            accessibilityRole="button"
            flexDirection="row"
            alignItems="center"
            px={Spacing.small}
            py={Spacing.medium}
            disabled={!onPress}
            onPress={onPress}
            opacity={onPress ? Opacity.visible : Opacity.mostlyVisible}
            {...rest}
        >
            {Prefix}
            <Text flex={1} color={pallette.grey} px={Spacing.medium} {...textProps}>
                {text}
            </Text>
            {Suffix}
        </Touchable>
    );
};
