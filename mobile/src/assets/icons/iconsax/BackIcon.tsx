import * as React from "react";

import Svg, { Path } from "react-native-svg";
import { useTheme } from "styled-components";

import { IconProps } from "@src/common/interfaces";
import { IconSize, IconStrokeWidth } from "@src/common/theme";
import { Box } from "@src/components/atoms";
import { withTouchable } from "@src/components/hoc";

export const BackIcon = withTouchable(
    ({ size = IconSize.normal, strokeWidth = IconStrokeWidth.default, color }: IconProps) => {
        const { pallette } = useTheme();

        return (
            <Box height={size} width={size}>
                <Svg fill="none" height="100%" viewBox="0 0 24 24" width="100%">
                    <Path
                        d="M9.57 5.93 3.5 12l6.07 6.07M12.82 12H3.5M20.33 12h-3.48"
                        stroke={color || pallette.black}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        strokeWidth={strokeWidth}
                    />
                </Svg>
            </Box>
        );
    }
);
