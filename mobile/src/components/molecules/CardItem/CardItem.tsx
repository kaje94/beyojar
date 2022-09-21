import React from "react";
import { useTheme } from "styled-components";

import fonts from "@src/assets/fonts";
import { Box, Text } from "@src/components/atoms";
import { fontSize, spacing } from "@src/utils/theme";

export const CardItem: React.FC = () => {
    const { pallette } = useTheme();

    // todo: border radius from constants
    return (
        <Box
            backgroundColor={pallette.white}
            marginX={spacing.medium}
            marginY={spacing.small}
            paddingX={spacing.medium}
            paddingY={spacing.small}
            borderRadius={6}
        >
            <Text fontFamily={fonts.medium}>Some text</Text>
            <Text fontSize={fontSize.small} numberOfLines={5}>
                Some description ad laks dlka sdj askjd lasj dlasj dla jsdlajs
                dla jsdla sjdlas dl Some description ad laks dlka sdj askjd lasj
                dlasj dla jsdlajs dla jsdla sjdlas dl Some description ad laks
                dlka sdj askjd lasj dlasj dla jsdlajs dla jsdla sjdlas dl Some
                description ad laks dlka sdj askjd lasj dlasj dla jsdlajs dla
                jsdla sjdlas dl
            </Text>
        </Box>
    );
};
