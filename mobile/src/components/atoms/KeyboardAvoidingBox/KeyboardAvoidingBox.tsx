import React, { FC, PropsWithChildren } from "react";
import { KeyboardAvoidingViewProps } from "react-native";
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

import { IsIOS } from "@src/common/constants";

type Props = KeyboardAvoidingViewProps & ColorProps & SpaceProps & LayoutProps & FlexboxProps & BordersProps;

const StyledKeyboardAvoidingBox = styled.KeyboardAvoidingView<Props>`
    ${color}
    ${space}
    ${layout}
    ${flexbox}
    ${borders}
`;

export const KeyboardAvoidingBox: FC<PropsWithChildren<Props>> = ({ flex = 1, ...props }) => {
    return <StyledKeyboardAvoidingBox flex={flex} behavior={IsIOS ? "padding" : "height"} {...props} />;
};
