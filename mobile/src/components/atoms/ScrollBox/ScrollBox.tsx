import React, { FC, memo, PropsWithChildren } from "react";

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

const StyledScrollView = styled.ScrollView<Props>`
    ${color}
    ${space}
    ${layout}
    ${flexbox}
    ${borders}
`;

/** Styled ScrollView, built on top of React-Native ScrollView component */
export const ScrollBox: FC<PropsWithChildren<Props>> = memo((props) => {
    return <StyledScrollView {...props} />;
});
