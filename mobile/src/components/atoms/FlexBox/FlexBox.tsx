import React, { FC, memo, PropsWithChildren } from "react";

import { Box, BoxProps } from "@src/components/atoms/Box";

/** Styled View for aligning items horizontally, built on top of React-Native View component */
export const FlexBox: FC<PropsWithChildren<BoxProps>> = memo(
    ({ display = "flex", flexDirection = "row", alignItems = "center", ...props }) => {
        return <Box alignItems={alignItems} display={display} flexDirection={flexDirection} {...props} />;
    }
);
