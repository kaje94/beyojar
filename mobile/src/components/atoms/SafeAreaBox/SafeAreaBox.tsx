import React, { PropsWithChildren } from "react";
import {
    SafeAreaView,
    SafeAreaViewProps,
} from "react-native-safe-area-context";
import { useTheme } from "styled-components";
import styled from "styled-components/native";
import {
    backgroundColor,
    BackgroundColorProps,
    flexbox,
    FlexboxProps,
} from "styled-system";

type Props = SafeAreaViewProps & BackgroundColorProps & FlexboxProps;

const StyledSafeAreaBox = styled(SafeAreaView)<Props>`
    ${backgroundColor}
    ${flexbox}
`;

export const SafeAreaBox: React.FC<PropsWithChildren<Props>> = ({
    backgroundColor: bg,
    flex = 1,
    ...props
}) => {
    const { pallette } = useTheme();
    return (
        <StyledSafeAreaBox
            backgroundColor={bg || pallette.background}
            flex={flex}
            {...props}
        />
    );
};