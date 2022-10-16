import * as React from "react";

import Svg, { Path } from "react-native-svg";
import { useTheme } from "styled-components";

import { IconProps } from "@src/common/interfaces";
import { IconSize, IconStrokeWidth } from "@src/common/theme";
import { Box } from "@src/components/atoms";
import { withTouchable } from "@src/components/hoc";

export const LanguageIcon = withTouchable(
    ({ size = IconSize.normal, strokeWidth = IconStrokeWidth.default, color }: IconProps) => {
        const { pallette } = useTheme();

        return (
            <Box height={size} width={size}>
                <Svg fill="none" height="100%" viewBox="0 0 24 24" width="100%">
                    <Path
                        d="M16.99 8.96H7.01M12 7.28v1.68M14.5 8.94c0 4.3-3.36 7.78-7.5 7.78"
                        stroke={color || pallette.black}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={strokeWidth}
                    />
                    <Path
                        d="M17 16.72c-1.8 0-3.4-.96-4.55-2.47"
                        stroke={color || pallette.black}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={strokeWidth}
                    />
                    <Path
                        d="M2 12.83V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
                        stroke={color || pallette.black}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={strokeWidth}
                    />
                </Svg>
            </Box>
        );
    }
);
