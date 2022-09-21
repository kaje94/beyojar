import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { Box } from "@src/components/atoms";
import { withTouchable } from "@src/components/hoc";
import { commonTheme } from "@src/utils/theme";
import { IconProps } from "./interface";

const { colors, icon } = commonTheme;

export const BackIcon = withTouchable(
    ({
        size = icon.default.size,
        strokeWidth = icon.default.strokeWidth,
        color = colors.black,
        ...rest
    }: IconProps) => {
        return (
            <Box height={size} width={size}>
                <Svg height="100%" width="100%" fill="none" {...rest}>
                    <Path
                        d="M9.57 5.93 3.5 12l6.07 6.07M12.82 12H3.5M20.33 12h-3.48"
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
