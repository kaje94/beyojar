import * as React from "react";

import Svg, { Path } from "react-native-svg";
import { useTheme } from "styled-components";

import { IconProps } from "@src/common/interfaces";
import { IconSize, IconStrokeWidth } from "@src/common/theme";
import { Box } from "@src/components/atoms";
import { withTouchable } from "@src/components/hoc";

export const SettingsIcon = withTouchable(
    ({ size = IconSize.normal, strokeWidth = IconStrokeWidth.default, color }: IconProps) => {
        const { pallette } = useTheme();

        return (
            <Box height={size} width={size}>
                <Svg fill="none" height="100%" viewBox="0 0 24 24" width="100%">
                    <Path
                        d="M15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3a2.996 2.996 0 0 0 4.17 2.76"
                        stroke={color || pallette.black}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        strokeWidth={strokeWidth}
                    />
                    <Path
                        d="m6.88 20.58 1.09.63c.79.47 1.81.19 2.28-.6l.11-.19c.9-1.57 2.38-1.57 3.29 0l.11.19c.47.79 1.49 1.07 2.28.6l1.73-.99c.91-.52 1.22-1.69.7-2.59-.91-1.57-.17-2.85 1.64-2.85 1.04 0 1.9-.85 1.9-1.9v-1.76c0-1.04-.85-1.9-1.9-1.9-1.01 0-1.69-.4-1.93-1.03-.19-.49-.11-1.13.29-1.82.52-.91.21-2.07-.7-2.59l-.81-.46M13.64 3.58c-.9 1.57-2.38 1.57-3.29 0l-.11-.19a1.655 1.655 0 0 0-2.27-.6l-1.73.99c-.91.52-1.22 1.69-.7 2.6.91 1.56.17 2.84-1.64 2.84-1.04 0-1.9.85-1.9 1.9v1.76c0 1.04.85 1.9 1.9 1.9 1.81 0 2.55 1.28 1.64 2.85"
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
