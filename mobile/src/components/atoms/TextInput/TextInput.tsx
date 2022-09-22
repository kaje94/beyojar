import React, { MutableRefObject, PropsWithChildren } from "react";
import { TextInput as TextInputNative, TextInputProps } from "react-native";
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
    typography,
    TypographyProps,
} from "styled-system";

import { FontFamily } from "@src/assets/fonts";
import { FontSize, Spacing } from "@src/utils/theme";

type Props = TextInputProps &
    ColorProps &
    SpaceProps &
    LayoutProps &
    FlexboxProps &
    BordersProps &
    TypographyProps & {
        inputRef?: MutableRefObject<TextInputNative | undefined>;
    };

const StyledTextInput = styled.TextInput<Props>`
    text-decoration: none;
    ${color}
    ${space}
    ${layout}
    ${flexbox}
    ${borders}
    ${typography}
`;

export const TextInput: React.FC<PropsWithChildren<Props>> = ({
    inputRef,
    padding = Spacing.tiny,
    fontFamily = FontFamily.regular,
    ...props
}) => {
    return (
        <StyledTextInput
            ref={inputRef}
            underlineColorAndroid="transparent"
            fontSize={FontSize.medium}
            fontFamily={fontFamily}
            padding={padding}
            {...props}
        />
    );
};
