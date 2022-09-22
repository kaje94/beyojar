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
    space,
    SpaceProps,
} from "styled-system";

import { spacing } from "@src/utils/theme";

type Props = TouchableOpacityProps & ColorProps & SpaceProps & LayoutProps & FlexboxProps & BordersProps;

const StyledTouchableOpacity = styled.TouchableOpacity<Props>`
    ${color}
    ${space}
    ${layout}
    ${flexbox}
    ${borders}
`;

export const Touchable: React.FC<PropsWithChildren<Props>> = ({ padding = spacing.tiny, ...props }) => {
    return <StyledTouchableOpacity padding={padding} {...props} />;
};
