import React, { FC, PropsWithChildren } from "react";
import { ScrollViewProps } from "react-native";
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

type Props = ScrollViewProps & ColorProps & SpaceProps & LayoutProps & FlexboxProps & BordersProps;
// todo rename as scroll box
const StyledScrollView = styled.ScrollView<Props>`
    ${color}
    ${space}
    ${layout}
    ${flexbox}
    ${borders}
`;

export const ScrollView: FC<PropsWithChildren<Props>> = (props) => {
    return <StyledScrollView {...props} />;
};
