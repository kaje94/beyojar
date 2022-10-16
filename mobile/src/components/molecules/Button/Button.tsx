import React, { FC } from "react";

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
export const Button: FC<Props> = ({ text = "Button", textColor, disabled = false, ...rest }) => {
    const { pallette } = useTheme();

    return (
        <Touchable
            accessibilityRole="button"
            borderWidth={BorderWidth.small}
            borderColor={pallette.primary.dark}
            borderRadius={BorderRadius.huge}
            p={Spacing.small}
            flex={1}
            mx={Spacing.small}
            bg={pallette.primary.dark}
            shadow={!disabled && Shadow.small}
            opacity={disabled ? Opacity.partiallyVisible : Opacity.visible}
            disabled={disabled}
            {...rest}
        >
            <Text textAlign="center" color={textColor || pallette.white} fontSize={FontSize.medium}>
                {text}
            </Text>
        </Touchable>
    );
};
