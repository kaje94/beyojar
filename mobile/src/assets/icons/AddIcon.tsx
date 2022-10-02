import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "styled-components";

import { CommonTheme } from "@src/common/theme";
import { Box } from "@src/components/atoms";
import { withTouchable } from "@src/components/hoc";
import { IconProps } from "./interface";

const { icon } = CommonTheme;

export const AddIcon = withTouchable(
    ({ size = icon.default.size, strokeWidth = icon.default.strokeWidth, color }: IconProps) => {
        const { pallette } = useTheme();

        return (
            <Box height={size} width={size}>
                <Svg height="100%" width="100%" viewBox="0 0 24 24" fill="none">
                    <Path
                        d="M12 18V6M16 12h2M6 12h5.66M12 18V6"
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
