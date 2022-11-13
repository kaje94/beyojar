import React, { FC, memo, useEffect, useRef } from "react";

import { GestureResponderEvent } from "react-native";
import { Transitioning, TransitioningView } from "react-native-reanimated";
import { useTheme } from "styled-components";

import { AddIcon } from "@src/assets/icons";
import { IconProps } from "@src/common/interfaces";
import { IconSize, Shadow, Spacing } from "@src/common/theme";
import { getTransition } from "@src/common/transitions";
import { Touchable, TouchableProps } from "@src/components/atoms";

interface Props extends TouchableProps {
    /** Icon to be shown within the floating action button */
    Icon?: FC<IconProps>;
    /** Color of the icon */
    iconColor?: string;
    /** Size of the icon */
    iconSize?: number;
    /** Function to be called when button is pressed */
    onPress?: (event: GestureResponderEvent) => void;
    /** Is Floating button visible */
    visible?: boolean;
}

/** Floating action button to be used on item listing screens */
export const FloatingButton: FC<Props> = memo(
    ({ Icon = AddIcon, iconSize = IconSize.large, iconColor, onPress, visible = true, ...rest }) => {
        const ref = useRef<TransitioningView | null>(null);
        const { pallette } = useTheme();

        useEffect(() => ref.current?.animateNextTransition(), [visible]);

        return (
            <Transitioning.View ref={ref} transition={getTransition("scale")}>
                {visible && (
                    <Touchable
                        accessibilityRole="button"
                        alignItems="center"
                        alignSelf="center"
                        backgroundColor={pallette.primary.dark}
                        borderRadius={iconSize}
                        bottom={Spacing.large}
                        justifyContent="center"
                        onPress={onPress}
                        p={Spacing.small}
                        position="absolute"
                        shadow={Shadow.large}
                        {...rest}
                    >
                        <Icon color={iconColor || pallette.background} size={iconSize} />
                    </Touchable>
                )}
            </Transitioning.View>
        );
    }
);
