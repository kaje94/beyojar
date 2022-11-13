import React, { FC, memo, ReactElement } from "react";

import { useTheme } from "styled-components";

import { Opacity, Spacing } from "@src/common/theme";
import { Text, TextProps, Touchable, TouchableProps } from "@src/components/atoms";

export interface Props extends TouchableProps {
    /** Text prefix component */
    Prefix?: ReactElement;
    /** Text suffix component */
    Suffix?: ReactElement;
    /** Text to be displayed in the item */
    text: string;
    /** Props for the text wrapping element */
    textProps?: TextProps;
}

/** List item component to be used in list views and scroll views */
export const ListItem: FC<Props> = memo(({ text, Suffix, Prefix, onPress, textProps, ...rest }) => {
    const { pallette } = useTheme();

    return (
        <Touchable
            accessibilityRole="button"
            alignItems="center"
            disabled={!onPress}
            flexDirection="row"
            onPress={onPress}
            opacity={onPress ? Opacity.visible : Opacity.mostlyVisible}
            px={Spacing.small}
            py={Spacing.medium}
            {...rest}
        >
            {Prefix}
            <Text color={pallette.grey} flex={1} px={Spacing.medium} {...textProps}>
                {text}
            </Text>
            {Suffix}
        </Touchable>
    );
});
