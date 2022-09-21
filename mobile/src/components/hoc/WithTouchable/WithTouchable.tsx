import React, { ComponentType, FC } from "react";
import { AccessibilityRole, GestureResponderEvent } from "react-native";

import { Touchable } from "@src/components/atoms";

interface WithTouchableProps {
    onPress?: (event: GestureResponderEvent) => void;
    accessibilityRole?: AccessibilityRole;
}

export const withTouchable =
    <P extends object>(
        Component: ComponentType<P>
    ): FC<P & WithTouchableProps> =>
    ({
        onPress,
        accessibilityRole = "button",
        ...props
    }: WithTouchableProps) => {
        if (onPress) {
            return (
                <Touchable
                    accessibilityRole={accessibilityRole}
                    onPress={onPress}
                >
                    <Component {...(props as P)} />
                </Touchable>
            );
        }
        return <Component {...(props as P)} />;
    };
