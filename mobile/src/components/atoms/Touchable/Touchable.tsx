import { spacing } from "@src/utils/theme";
import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import {
    // props
    color,
    space,
    layout,
    flexbox,
    borders,
    // prop interfaces
    ColorProps,
    SpaceProps,
    LayoutProps,
    FlexboxProps,
    BordersProps,
    backgroundColor,
} from "styled-system";

type Props = TouchableOpacityProps &
    ColorProps &
    SpaceProps &
    LayoutProps &
    FlexboxProps &
    BordersProps & {
        children?: ReactNode;
    };

const StyledTouchableOpacity = styled.TouchableOpacity<Props>`
    ${color}
    ${space}
    ${layout}
    ${flexbox}
    ${borders}
`;

export const Touchable: React.FC<Props> = ({
    padding = spacing.tiny,
    ...props
}) => {
    return (
        <StyledTouchableOpacity
            padding={padding}
            backgroundColor={backgroundColor}
            {...props}
        />
    );
};
