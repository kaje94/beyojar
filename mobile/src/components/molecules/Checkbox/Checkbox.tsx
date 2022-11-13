import React, { FC, memo, useEffect, useRef } from "react";

import { GestureResponderEvent } from "react-native";
import { Transitioning, TransitioningView } from "react-native-reanimated";
import { useTheme } from "styled-components";

import { CircleIcon, TickIcon } from "@src/assets/icons";
import { IconProps } from "@src/common/interfaces";
import { IconSize, Spacing } from "@src/common/theme";
import { getTransition } from "@src/common/transitions";

export interface Props extends IconProps {
    /** To show checked circle or unchecked circle */
    checked?: boolean;
    /** Function to be called when checkbox is pressed */
    onPress?: (event: GestureResponderEvent) => void;
}

/** Controlled Checkbox component to show checked and unchecked state */
export const Checkbox: FC<Props> = memo(({ checked = false, onPress, ...rest }) => {
    const ref = useRef<TransitioningView | null>(null);
    const { pallette } = useTheme();

    useEffect(() => ref.current?.animateNextTransition(), [checked]);

    return (
        <Transitioning.View ref={ref} testID="checkbox" transition={getTransition("slide-right")}>
            {checked ? (
                <TickIcon
                    circleColor={pallette.secondary.main}
                    color={pallette.secondary.dark}
                    size={IconSize.medium}
                    touchable={{ onPress, padding: Spacing.none }}
                    {...rest}
                />
            ) : (
                <CircleIcon
                    color={pallette.primary.main}
                    size={IconSize.medium}
                    touchable={{ onPress, padding: Spacing.none }}
                    {...rest}
                />
            )}
        </Transitioning.View>
    );
});
