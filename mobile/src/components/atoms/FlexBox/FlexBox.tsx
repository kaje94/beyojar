import React, { FC, memo, PropsWithChildren } from "react";

import { Box, BoxProps } from "@src/components/atoms/Box";
import { WithShadow, WithShadowProps } from "@src/components/hoc/WithShadow";

/** Styled View for aligning items horizontally, built on top of React-Native View component */
export const FlexBox: FC<PropsWithChildren<BoxProps & WithShadowProps>> = memo(
    WithShadow(({ display = "flex", flexDirection = "row", alignItems = "center", ...props }) => {
        return <Box alignItems={alignItems} display={display} flexDirection={flexDirection} {...props} />;
    })
);
