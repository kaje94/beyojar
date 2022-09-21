import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { Box } from "@src/components/atoms";
import { withTouchable } from "@src/components/hoc";
import { commonTheme } from "@src/utils/theme";

import { IconProps } from "./interface";

const { colors, icon } = commonTheme;

export const SearchIcon = withTouchable(
    ({
        size = icon.default.size,
        strokeWidth = icon.default.strokeWidth,
        color = colors.black,
        ...rest
    }: IconProps) => (
        <Box height={size} width={size}>
            <Svg height="100%" width="100%" fill="none" {...rest}>
                <Path
                    d="M2 11a9 9 0 0 1 9-9M20 11a9 9 0 0 1-17.08 3.97M14 5h6M14 8h3M19.071 20.97c.53 1.6 1.74 1.76 2.67.36.86-1.28.3-2.33-1.24-2.33-1.15 0-1.79.89-1.43 1.97Z"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        </Box>
    )
);
