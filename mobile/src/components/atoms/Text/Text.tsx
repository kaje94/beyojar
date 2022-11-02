import React, { FC, memo } from "react";

import { TextProps as NativeTextProps } from "react-native";
import { useTheme } from "styled-components";
import styled from "styled-components/native";
import {
    borders,
    BordersProps,
    color,
    ColorProps,
    flexbox,
    FlexboxProps,
    layout,
    LayoutProps,
    space,
    SpaceProps,
    typography,
    TypographyProps,
} from "styled-system";

import { FontFamily } from "@src/assets/fonts";
import { FontSize, Spacing } from "@src/common/theme";

export type TextProps = NativeTextProps &
    ColorProps &
    SpaceProps &
    LayoutProps &
    FlexboxProps &
    BordersProps &
    TypographyProps;

const StyledText = styled.Text<TextProps>`
    ${color}
    ${space}
    ${layout}
    ${flexbox}
    ${borders}
    ${typography}
`;

/** Styled Text component, built on top of React-Native Text component */
export const Text: FC<TextProps> = memo(
    ({ padding = Spacing.tiny, fontFamily = FontFamily.regular, color: textColor, ...props }) => {
        const { pallette } = useTheme();

        return (
            <StyledText
                accessibilityRole="text"
                color={textColor || pallette.black}
                fontFamily={fontFamily}
                fontSize={FontSize.medium}
                padding={padding}
                {...props}
            />
        );
    }
);
