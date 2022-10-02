import React, { FC, PropsWithChildren } from "react";
import { TouchableOpacityProps } from "react-native";
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

import { Opacity, Spacing } from "@src/common/theme";

export type TouchableProps = TouchableOpacityProps &
    ColorProps &
    SpaceProps &
    LayoutProps &
    FlexboxProps &
    BordersProps &
    PositionProps;

const StyledTouchableOpacity = styled.TouchableOpacity<TouchableProps>`
    ${color}
    ${space}
    ${layout}
    ${flexbox}
    ${borders}
    ${position}
`;

export const Touchable: FC<PropsWithChildren<TouchableProps>> = ({
    activeOpacity = Opacity.partiallyVisible,
    padding = Spacing.tiny,
    ...props
}) => {
    return <StyledTouchableOpacity activeOpacity={activeOpacity} padding={padding} {...props} />;
};
