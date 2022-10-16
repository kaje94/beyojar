import React, { ComponentType, FC } from "react";

import { Falsy, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { AnimatedStyle } from "react-native-reanimated/lib/types/lib/reanimated2/commonTypes";
import { useTheme } from "styled-components";

import { DefaultShadow, Shadow } from "@src/common/theme";

export interface WithShadowProps {
    /** Level of shadow to be shown for the element */
    shadow?: Falsy | Shadow;
    /** Inline style prop from react-native */
    style?: StyleProp<ViewStyle | AnimatedStyle>;
}

/** HOC that can add shadow to its child component */
export const WithShadow = <P extends object>(Component: ComponentType<P>): FC<P & WithShadowProps> => {
    return ({ shadow, style, ...props }: WithShadowProps) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { pallette } = useTheme();
        if (shadow) {
            return (
                <Component
                    {...(props as P)}
                    style={StyleSheet.compose(style, { ...DefaultShadow[shadow], shadowColor: pallette.black })}
                />
            );
        }
        return <Component {...(props as P)} style={style} />;
    };
};
