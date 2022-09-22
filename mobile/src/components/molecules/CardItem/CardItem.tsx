import React from "react";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { Text, Touchable } from "@src/components/atoms";
import { FontSize, Spacing } from "@src/utils/theme";

export const CardItem = (props: TouchableOpacityProps) => {
    const { pallette, shadow } = useTheme();

    // todo: border radius from constants
    return (
        <Touchable
            accessibilityRole="button"
            backgroundColor={pallette.white}
            marginX={Spacing.medium}
            marginY={Spacing.small}
            paddingX={Spacing.medium}
            paddingY={Spacing.small}
            borderRadius={6}
            style={shadow.small}
            {...props}
        >
            <Text fontFamily={FontFamily.medium}>Some text</Text>
            <Text fontSize={FontSize.small} numberOfLines={5}>
                Some description ad laks dlka sdj askjd lasj dlasj dla jsdlajs dla jsdla sjdlas dl Some description ad
                laks dlka sdj askjd lasj dlasj dla jsdlajs dla jsdla sjdlas dl Some description ad laks dlka sdj askjd
                lasj dlasj dla jsdlajs dla jsdla sjdlas dl Some description ad laks dlka sdj askjd lasj dlasj dla
                jsdlajs dla jsdla sjdlas dl
            </Text>
        </Touchable>
    );
};
