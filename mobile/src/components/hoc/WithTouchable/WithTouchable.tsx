import React, { ComponentType, FC } from "react";
import { TouchableOpacityProps } from "react-native";

import { Touchable } from "@src/components/atoms";

interface WithTouchableProps {
    touchable?: TouchableOpacityProps;
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
