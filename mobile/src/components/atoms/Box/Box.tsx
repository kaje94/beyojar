import React, { FC, memo, PropsWithChildren } from "react";

import { ViewProps } from "react-native";
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
    position,
    PositionProps,
    space,
    SpaceProps,
} from "styled-system";

import { WithShadow, WithShadowProps } from "@src/components/hoc/WithShadow";

export type BoxProps = ViewProps & ColorProps & SpaceProps & LayoutProps & FlexboxProps & BordersProps & PositionProps;

const StyledBox = styled.View<BoxProps>`
    ${color}
    ${space}
    ${layout}
    ${flexbox}
    ${borders}
    ${position}
`;

/** Styled  View, built on top of React-Native View component */
export const Box: FC<PropsWithChildren<BoxProps & WithShadowProps>> = memo(
    WithShadow((props) => {
        return <StyledBox {...props} />;
    })
);
