import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { Box } from "@src/components/atoms";
import { withTouchable } from "@src/components/hoc";
import { commonTheme } from "@src/utils/theme";
import { IconProps } from "./interface";

const { colors, icon } = commonTheme;

export const CloseIcon = withTouchable(
    ({ size = icon.default.size, strokeWidth = icon.default.strokeWidth, color = colors.black }: IconProps) => {
        return (
            <Box height={size} width={size}>
                <Svg height="100%" width="100%" fill="none">
                    <Path
                        d="m13.99 10.01.84-.84M9.17 14.83l2.75-2.75M14.83 14.83 9.17 9.17M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </Svg>
            </Box>
        );
    }
);
