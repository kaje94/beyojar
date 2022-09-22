import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { Box } from "@src/components/atoms";
import { withTouchable } from "@src/components/hoc";
import { commonTheme } from "@src/utils/theme";
import { IconProps } from "./interface";

const { colors, icon } = commonTheme;

export const MenuIcon = withTouchable(
    ({ size = icon.default.size, strokeWidth = icon.default.strokeWidth, color = colors.black }: IconProps) => {
        return (
            <Box height={size} width={size}>
                <Svg height="100%" width="100%" fill="none">
                    <Path
                        d="M17.54 8.31a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92ZM8.92 5.85c0-1.36-1.1-2.46-2.46-2.46C5.1 3.39 4 4.49 4 5.85c0 1.36 1.1 2.46 2.46 2.46M17.54 20.62c1.36 0 2.46-1.1 2.46-2.46 0-1.36-1.1-2.46-2.46-2.46-1.36 0-2.46 1.1-2.46 2.46M6.46 20.61a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92Z"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </Svg>
            </Box>
        );
    }
);
