import React, { FC, ComponentType } from "react";
import { Touchable } from "@src/components/atoms";
import { GestureResponderEvent } from "react-native";

interface WithTouchableProps {
    onPress?: (event: GestureResponderEvent) => void;
}

export const withTouchable =
    <P extends object>(
        Component: ComponentType<P>
    ): FC<P & WithTouchableProps> =>
    ({ onPress, ...props }: WithTouchableProps) => {
        if (onPress) {
            return (
                <Touchable onPress={onPress}>
                    <Component {...(props as P)} />
                </Touchable>
            );
        }
        return <Component {...(props as P)} />;
    };
