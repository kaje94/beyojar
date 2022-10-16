import React, { FC, memo, PropsWithChildren } from "react";

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

/** Styled Keyboard avoiding View, built on top of React-Native KeyboardAvoidingView component */
export const KeyboardAvoidingBox: FC<PropsWithChildren<Props>> = memo(({ flex = 1, ...props }) => {
    return <StyledKeyboardAvoidingBox behavior={IsIOS ? "padding" : "height"} flex={flex} {...props} />;
});
