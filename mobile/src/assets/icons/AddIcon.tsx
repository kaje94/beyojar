import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { Box } from "@src/components/atoms";
import { withTouchable } from "@src/components/hoc";
import { CommonTheme } from "@src/utils/theme";
import { IconProps } from "./interface";

const { colors, icon } = CommonTheme;

export const AddIcon = withTouchable(
    ({ size = icon.default.size, strokeWidth = icon.default.strokeWidth, color = colors.black }: IconProps) => {
        return (
            <Box height={size} width={size}>
                <Svg height="100%" width="100%" viewBox="0 0 24 24" fill="none">
                    <Path
                        d="M12 18V6M16 12h2M6 12h5.66M12 18V6"
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
