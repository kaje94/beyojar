import React, { FC, PropsWithChildren } from "react";
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

type Props = ViewProps & ColorProps & SpaceProps & LayoutProps & FlexboxProps & BordersProps & PositionProps;

const StyledBox = styled.View<Props>`
    ${color}
    ${space}
    ${layout}
    ${flexbox}
    ${borders}
    ${position}
`;

export const Box: FC<PropsWithChildren<Props>> = (props) => {
    return <StyledBox {...props} />;
};

export const FlexBox: FC<PropsWithChildren<Props>> = ({
    display = "flex",
    flexDirection = "row",
    alignItems = "center",
    ...props
}) => {
    return <StyledBox display={display} flexDirection={flexDirection} alignItems={alignItems} {...props} />;
};
