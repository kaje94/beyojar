import { MutableRefObject, ReactNode } from "react";
import { TextInputProps, TextInput as TextInputNative } from "react-native";
import styled from "styled-components/native";
import {
    // props
    color,
    space,
    layout,
    flexbox,
    borders,
    typography,
    // prop interfaces
    ColorProps,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    BordersProps,
    TypographyProps,
} from "styled-system";
import fonts from "@src/assets/fonts";
import { getPixelsString } from "@src/utils/helpers";
import { fontSize, spacing } from "@src/utils/theme";

type Props = TextInputProps &
    ColorProps &
    SpaceProps &
    LayoutProps &
    FlexboxProps &
    BordersProps &
    TypographyProps & {
        children?: ReactNode;
        inputRef?: MutableRefObject<TextInputNative | undefined>;
    };

const StyledTextInput = styled.TextInput<Props>`
    font-family: ${fonts.regular};
    padding: ${getPixelsString(1)};
    text-decoration: none !important;
    ${color}
    ${space}
    ${layout}
    ${flexbox}
    ${borders}
    ${typography}
`;

export const TextInput: React.FC<Props> = ({
    inputRef,
    padding = spacing.tiny,
    ...props
}) => {
    return (
        <StyledTextInput
            ref={inputRef}
            underlineColorAndroid="transparent"
            fontSize={fontSize.medium}
            padding={padding}
            {...props}
        />
    );
};
