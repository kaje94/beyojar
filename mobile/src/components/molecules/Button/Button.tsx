import React, { FC, memo } from "react";

import { useTheme } from "styled-components";

import { BorderRadius, BorderWidth, FontSize, Opacity, Shadow, Spacing } from "@src/common/theme";
import { Text, Touchable, TouchableProps } from "@src/components/atoms";

interface Props extends TouchableProps {
    /** Text content to be displayed in the button */
    text?: string;
    /** Color of the button text */
    textColor?: string;
}

/** Standard button component to be used throughout the application */
export const Button: FC<Props> = memo(({ text = "Button", textColor, disabled = false, ...rest }) => {
    const { pallette } = useTheme();

    return (
        <Touchable
            accessibilityRole="button"
            bg={pallette.primary.dark}
            borderColor={pallette.primary.dark}
            borderRadius={BorderRadius.huge}
            borderWidth={BorderWidth.medium}
            disabled={disabled}
            flex={1}
            mx={Spacing.small}
            opacity={disabled ? Opacity.partiallyVisible : Opacity.visible}
            p={Spacing.small}
            shadow={!disabled && Shadow.small}
            {...rest}
        >
            <Text color={textColor || pallette.white} fontSize={FontSize.medium} textAlign="center">
                {text}
            </Text>
        </Touchable>
    );
});
