import React, { FC, memo, PropsWithChildren } from "react";

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
import { WithShadow, WithShadowProps } from "@src/components/hoc/WithShadow";

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

/** Styled Touchable/Pressable, built on top of React-Native TouchableOpacity component */
export const Touchable: FC<PropsWithChildren<TouchableProps & WithShadowProps>> = memo(
    WithShadow(({ activeOpacity = Opacity.partiallyVisible, padding = Spacing.tiny, ...props }) => {
        return <StyledTouchableOpacity activeOpacity={activeOpacity} padding={padding} {...props} />;
    })
);
