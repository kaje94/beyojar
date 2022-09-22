import React from "react";
import { TextProps } from "react-native";
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
import { FontSize, Spacing } from "@src/utils/theme";

type Props = TextProps & ColorProps & SpaceProps & LayoutProps & FlexboxProps & BordersProps & TypographyProps;

const StyledText = styled.Text<Props>`
    ${color}
    ${space}
    ${layout}
    ${flexbox}
    ${borders}
    ${typography}
`;

export const Text: React.FC<Props> = ({ padding = Spacing.tiny, fontFamily = FontFamily.regular, ...props }) => {
    return <StyledText fontSize={FontSize.medium} fontFamily={fontFamily} padding={padding} {...props} />;
};
