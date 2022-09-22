import React, { PropsWithChildren } from "react";
import { Animated, ViewProps } from "react-native";
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
} from "styled-system";

type Props = Animated.AnimatedProps<ViewProps> & ColorProps & SpaceProps & LayoutProps & FlexboxProps & BordersProps;

const AnimatedStyledBox = styled(Animated.View)<Props>`
    ${color}
    ${space}
    ${layout}
    ${flexbox}
    ${borders}
`;

export const AnimatedBox: React.FC<PropsWithChildren<Props>> = (props) => {
    return <AnimatedStyledBox {...props} />;
};
