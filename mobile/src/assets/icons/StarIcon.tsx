import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "styled-components";

import { CommonTheme } from "@src/common/theme";
import { Box } from "@src/components/atoms";
import { withTouchable } from "@src/components/hoc";
import { IconProps } from "./interface";

const { icon } = CommonTheme;

export const StarIcon = withTouchable(
    ({ size = icon.default.size, strokeWidth = icon.default.strokeWidth, color }: IconProps) => {
        const { pallette } = useTheme();

        return (
            <Box height={size} width={size}>
                <Svg height="100%" width="100%" viewBox="0 0 24 24" fill="none">
                    <Path
                        d="M20.1 8.61c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.95-1.91 2.51-1.91 3.47 0l1.76 3.52c.1.21.28.42.49.59"
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