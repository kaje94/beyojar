import React from "react";
import { useTheme } from "styled-components";

import { BorderRadius, BorderWidth, FontSize, Opacity, Spacing } from "@src/common/theme";
import { Text, Touchable, TouchableProps } from "@src/components/atoms";

interface ButtonProps extends TouchableProps {
    text?: string;
    textColor?: string;
}
export const Button = ({ text, textColor, disabled = false, ...rest }: ButtonProps) => {
    const { pallette, shadow } = useTheme();

    return (
        <Touchable
            accessibilityRole="button"
            borderWidth={BorderWidth.small}
            borderColor={pallette.primary.dark}
            // todo create seperate borderradius theme
            borderRadius={BorderRadius.huge}
            p={Spacing.small}
            flex={1}
            mx={Spacing.small}
            bg={pallette.primary.dark}
            style={!disabled && shadow.small}
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
