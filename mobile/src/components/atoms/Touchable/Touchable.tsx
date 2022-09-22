import React, { PropsWithChildren } from "react";
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

import { Spacing } from "@src/utils/theme";

type Props = TouchableOpacityProps &
    ColorProps &
    SpaceProps &
    LayoutProps &
    FlexboxProps &
    BordersProps &
    PositionProps;

const StyledTouchableOpacity = styled.TouchableOpacity<Props>`
    ${color}
    ${space}
    ${layout}
    ${flexbox}
    ${borders}
    ${position}
`;

export const Touchable: React.FC<PropsWithChildren<Props>> = ({
    activeOpacity = 0.5,
    padding = Spacing.tiny,
    ...props
}) => {
    return <StyledTouchableOpacity activeOpacity={activeOpacity} padding={padding} {...props} />;
};
