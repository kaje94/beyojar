import React, { FC, memo, MutableRefObject, PropsWithChildren } from "react";

import { TextInput as TextInputNative, TextInputProps } from "react-native";
import { useTheme } from "styled-components";
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
import { FontSize, Spacing } from "@src/common/theme";

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

/** Styled TextInput, built on top of React-Native TextInput component */
export const TextInput: FC<PropsWithChildren<Props>> = memo(
    ({
        inputRef,
        padding = Spacing.tiny,
        fontFamily = FontFamily.regular,
        color: textColor,
        placeholderTextColor,
        ...props
    }) => {
        const { pallette } = useTheme();
        return (
            <StyledTextInput
                ref={inputRef}
                underlineColorAndroid="transparent"
                fontSize={FontSize.medium}
                fontFamily={fontFamily}
                p={padding}
                color={textColor || pallette.black}
                placeholderTextColor={placeholderTextColor || pallette.secondary.main}
                {...props}
            />
        );
    }
);
