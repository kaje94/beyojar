import React, { FC, PropsWithChildren } from "react";
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";
import { useTheme } from "styled-components";
import styled from "styled-components/native";
import {
    backgroundColor as bgProp,
    BackgroundColorProps,
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

export const SafeAreaBox: FC<PropsWithChildren<Props>> = ({ backgroundColor, bg, flex = 1, ...props }) => {
    const { pallette } = useTheme();
    return <StyledSafeAreaBox backgroundColor={backgroundColor || bg || pallette.background} flex={flex} {...props} />;
};
