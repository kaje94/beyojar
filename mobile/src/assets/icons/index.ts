import { SvgProps } from "react-native-svg";

// todo: mode to interface to a different folder

export interface IconProps extends SvgProps {
    size?: number;
    color?: string;
}

export { MenuIcon } from "./MenuIcon";
export { SearchIcon } from "./SearchIcon";
export { BackIcon } from "./BackIcon";
export { CloseIcon } from "./CloseIcon";
