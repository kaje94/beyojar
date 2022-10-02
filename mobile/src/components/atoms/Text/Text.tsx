import React, { FC } from "react";
import { TextProps } from "react-native";
import styled, { useTheme } from "styled-components/native";
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

type Props = TextProps & ColorProps & SpaceProps & LayoutProps & FlexboxProps & BordersProps & TypographyProps;

const StyledText = styled.Text<Props>`
    ${color}
    ${space}
    ${layout}
    ${flexbox}
    ${borders}
    ${typography}
`;

export const Text: FC<Props> = ({
    padding = Spacing.tiny,
    fontFamily = FontFamily.regular,
    color: textColor,
    ...props
}) => {
    const { pallette } = useTheme();

    return (
        <StyledText
            color={textColor || pallette.black}
            fontSize={FontSize.medium}
            fontFamily={fontFamily}
            padding={padding}
            {...props}
        />
    );
};
