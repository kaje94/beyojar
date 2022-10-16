import React, { FC, memo, PropsWithChildren } from "react";

import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";
import { useTheme } from "styled-components";
import styled from "styled-components/native";
import {
    BackgroundColorProps,
    backgroundColor as bgProp,
    flexbox,
    FlexboxProps,
    layout,
    LayoutProps,
    space,
    SpaceProps,
} from "styled-system";

type Props = SafeAreaViewProps & BackgroundColorProps & FlexboxProps & LayoutProps & SpaceProps;

const StyledSafeAreaBox = styled(SafeAreaView)<Props>`
    ${bgProp}
    ${flexbox}
    ${layout}
    ${space}
`;

/** Styled SafeArea View, built on top of React-Native SafeArea view component */
export const SafeAreaBox: FC<PropsWithChildren<Props>> = memo(({ backgroundColor, bg, flex = 1, ...props }) => {
    const { pallette } = useTheme();
    return <StyledSafeAreaBox backgroundColor={backgroundColor || bg || pallette.background} flex={flex} {...props} />;
});
