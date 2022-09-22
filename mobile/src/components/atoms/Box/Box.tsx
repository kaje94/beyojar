import React, { PropsWithChildren } from "react";
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
    space,
    SpaceProps,
} from "styled-system";

type Props = ViewProps & ColorProps & SpaceProps & LayoutProps & FlexboxProps & BordersProps;

const StyledBox = styled.View<Props>`
    ${color}
    ${space}
    ${layout}
    ${flexbox}
    ${borders}
`;

export const Box: React.FC<PropsWithChildren<Props>> = (props) => {
    return <StyledBox {...props} />;
};

export const FlexBox: React.FC<PropsWithChildren<Props>> = ({
    display = "flex",
    flexDirection = "row",
    alignItems = "center",
    ...props
}) => {
    return <StyledBox display={display} flexDirection={flexDirection} alignItems={alignItems} {...props} />;
};
