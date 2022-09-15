import styled from "styled-components/native";
import {
  color,
  space,
  layout,
  flexbox,
  ColorProps,
  SpaceProps,
  FlexProps,
  LayoutProps,
} from "styled-system";

type Props = FlexProps & LayoutProps & SpaceProps & ColorProps;

const StyledBox = styled.View<Props>`
  ${color}
  ${space}
  ${layout}
  ${flexbox}
`;

export const Box: React.FC<Props> = (props) => {
  return <StyledBox {...props} />;
};

export const FlexBox: React.FC<Props> = ({ display = "flex", ...props }) => {
  return <StyledBox {...props} />;
};
