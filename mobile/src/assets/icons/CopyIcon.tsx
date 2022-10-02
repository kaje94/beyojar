import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "styled-components";

import { IconSize, IconStrokeWidth } from "@src/common/theme";
import { Box } from "@src/components/atoms";
import { withTouchable } from "@src/components/hoc";
import { IconProps } from "./interface";

export const CopyIcon = withTouchable(
    ({ size = IconSize.normal, strokeWidth = IconStrokeWidth.default, color }: IconProps) => {
        const { pallette } = useTheme();

        return (
            <Box height={size} width={size}>
                <Svg height="100%" width="100%" viewBox="0 0 24 24">
                    <Path
                        d="M2 12.9C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9v4.2c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1"
                        stroke={color || pallette.black}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <Path
                        d="M22 11.1c0 3.5-1.4 4.9-4.9 4.9H16v-3.1C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9"
                        stroke={color || pallette.black}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </Svg>
            </Box>
        );
    }
);
