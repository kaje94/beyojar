import * as React from "react";

import Svg, { Path } from "react-native-svg";
import { useTheme } from "styled-components";

import { IconProps } from "@src/common/interfaces";
import { IconSize, IconStrokeWidth } from "@src/common/theme";
import { Box } from "@src/components/atoms";
import { withTouchable } from "@src/components/hoc";

export const TagsIcon = withTouchable(
    ({ size = IconSize.normal, strokeWidth = IconStrokeWidth.default, color }: IconProps) => {
        const { pallette } = useTheme();

        return (
            <Box height={size} width={size}>
                <Svg fill="none" height="100%" viewBox="0 0 24 24" width="100%">
                    <Path
                        d="M19.83 15.45a4.78 4.78 0 0 0 0-6.75L15.3 4.17a4.75 4.75 0 0 0-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.34.44 2.65 1.39 3.6l4.53 4.53a4.78 4.78 0 0 0 6.75 0l1.52-1.52"
                        stroke={color || pallette.black}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={strokeWidth}
                    />
                    <Path
                        d="M7 9.5a2.5 2.5 0 0 0 5 0A2.5 2.5 0 0 0 9.5 7"
                        stroke={color || pallette.black}
                        strokeLinecap="round"
                        strokeWidth={strokeWidth}
                    />
                </Svg>
            </Box>
        );
    }
);
