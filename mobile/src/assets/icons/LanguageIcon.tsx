import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "styled-components";

import { CommonTheme } from "@src/common/theme";
import { Box } from "@src/components/atoms";
import { withTouchable } from "@src/components/hoc";
import { IconProps } from "./interface";

const { icon } = CommonTheme;

export const LanguageIcon = withTouchable(
    ({ size = icon.default.size, strokeWidth = icon.default.strokeWidth, color }: IconProps) => {
        const { pallette } = useTheme();

        return (
            <Box height={size} width={size}>
                <Svg height="100%" width="100%" viewBox="0 0 24 24" fill="none">
                    <Path
                        d="M16.99 8.96H7.01M12 7.28v1.68M14.5 8.94c0 4.3-3.36 7.78-7.5 7.78"
                        stroke={color || pallette.black}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <Path
                        d="M17 16.72c-1.8 0-3.4-.96-4.55-2.47"
                        stroke={color || pallette.black}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <Path
                        d="M2 12.83V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
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
