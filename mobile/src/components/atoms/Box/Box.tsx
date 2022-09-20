import { ReactNode } from "react";
import { ViewProps } from "react-native";
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
} from "styled-system";

type Props = ViewProps &
    ColorProps &
    SpaceProps &
    LayoutProps &
    FlexboxProps &
    BordersProps & {
        children?: ReactNode;
    };

const StyledBox = styled.View<Props>`
    ${color}
    ${space}
    ${layout}
    ${flexbox}
    ${borders}
`;

export const Box: React.FC<Props> = (props) => {
    return <StyledBox {...props} />;
};

export const FlexBox: React.FC<Props> = ({
    display = "flex",
    flexDirection = "row",
    alignItems = "center",
    ...props
}) => {
    return (
        <StyledBox
            display={display}
            flexDirection={flexDirection}
            alignItems={alignItems}
            {...props}
        />
    );
};
