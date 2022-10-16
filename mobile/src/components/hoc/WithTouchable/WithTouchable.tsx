import React, { ComponentType, FC } from "react";

import { Touchable, TouchableProps } from "@src/components/atoms";

interface WithTouchableProps {
    /** Props of touchable component that wraps the inner component */
    touchable?: TouchableProps;
}

/** HOC that can convert any component into a touchable component */
export const withTouchable =
    <P extends object>(Component: ComponentType<P>): FC<P & WithTouchableProps> =>
    ({ touchable, ...props }: WithTouchableProps) => {
        if (touchable) {
            return (
                <Touchable accessibilityHint="button" {...touchable}>
                    <Component {...(props as P)} />
                </Touchable>
            );
        }
        return <Component {...(props as P)} />;
    };
