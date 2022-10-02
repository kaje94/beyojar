import React, { ComponentType, FC } from "react";

import { Touchable, TouchableProps } from "@src/components/atoms";

interface WithTouchableProps {
    touchable?: TouchableProps;
}

export const withTouchable =
    <P extends object>(Component: ComponentType<P>): FC<P & WithTouchableProps> =>
    ({ touchable, ...props }: WithTouchableProps) => {
        if (touchable) {
            return (
                <Touchable {...touchable}>
                    <Component {...(props as P)} />
                </Touchable>
            );
        }
        return <Component {...(props as P)} />;
    };
