import React from "react";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { BorderRadius, FontSize, Opacity, Spacing } from "@src/common/theme";
import { Box, Text, Touchable } from "@src/components/atoms";

export const CardItem = (props: TouchableOpacityProps) => {
    const { pallette, shadow } = useTheme();

    // todo: border radius from constants
    return (
        <Touchable
            accessibilityRole="button"
            backgroundColor={pallette.white}
            mx={Spacing.medium}
            my={Spacing.small}
            px={Spacing.medium}
            py={Spacing.small}
            borderRadius={BorderRadius.small}
            style={shadow.small}
            {...props}
        >
            <Text fontFamily={FontFamily.medium} color={pallette.secondary.dark}>
                Some text
            </Text>
            <Box height={0.5} backgroundColor={pallette.grey} opacity={Opacity.partiallyVisible} my={Spacing.tiny} />
            <Text fontSize={FontSize.small} color={pallette.grey} numberOfLines={5}>
                Some description ad laks dlka sdj askjd lasj dlasj dla jsdlajs dla jsdla sjdlas dl Some description ad
                laks dlka sdj askjd lasj dlasj dla jsdlajs dla jsdla sjdlas dl Some description ad laks dlka sdj askjd
                lasj dlasj dla jsdlajs dla jsdla sjdlas dl Some description ad laks dlka sdj askjd lasj dlasj dla
                jsdlajs dla jsdla sjdlas dl
            </Text>
        </Touchable>
    );
};
