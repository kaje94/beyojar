import React, { FC, memo, PropsWithChildren } from "react";

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

import { WithShadow, WithShadowProps } from "@src/components/hoc/WithShadow";

type Props = Animated.AnimatedProps<ViewProps> & ColorProps & SpaceProps & LayoutProps & FlexboxProps & BordersProps;

const AnimatedStyledBox = styled(Animated.View)<Props>`
    ${color}
    ${space}
    ${layout}
    ${flexbox}
    ${borders}
`;

/** Styled Animated View, built on top of React-Native Animated component */
export const AnimatedBox: FC<PropsWithChildren<Props & WithShadowProps>> = memo(
    WithShadow((props) => {
        return <AnimatedStyledBox {...props} />;
    })
);
