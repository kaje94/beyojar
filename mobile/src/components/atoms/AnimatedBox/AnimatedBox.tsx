import { ReactNode } from "react";
import { Animated, ViewProps } from "react-native";
import styled from "styled-components/native";
import {
    // props
    color,
    space,
    layout,
    flexbox,
    borders,
    // prop interfaces
    ColorProps,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    BordersProps,
} from "styled-system";

type Props = Animated.AnimatedProps<ViewProps> &
    ColorProps &
    SpaceProps &
    LayoutProps &
    FlexboxProps &
    BordersProps & {
        children?: ReactNode;
    };

const AnimatedStyledBox = styled(Animated.View)<Props>`
    ${color}
    ${space}
    ${layout}
    ${flexbox}
    ${borders}
`;

export const AnimatedBox: React.FC<Props> = (props) => {
    return <AnimatedStyledBox {...props} />;
};
