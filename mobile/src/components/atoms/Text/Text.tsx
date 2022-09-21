import React from "react";
import { TextProps } from "react-native";
import fonts from "@src/assets/fonts";
import { fontSize, spacing } from "@src/utils/theme";
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

type Props = TextProps &
    ColorProps &
    SpaceProps &
    LayoutProps &
    FlexboxProps &
    BordersProps &
    TypographyProps;

const StyledText = styled.Text<Props>`
    ${color}
    ${space}
    ${layout}
    ${flexbox}
    ${borders}
    ${typography}
`;

export const Text: React.FC<Props> = ({
    padding = spacing.tiny,
    fontFamily = fonts.regular,
    ...props
}) => {
    return (
        <StyledText
            fontSize={fontSize.medium}
            fontFamily={fontFamily}
            padding={padding}
            {...props}
        />
    );
};
