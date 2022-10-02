import React, { FC, useEffect, useRef } from "react";
import { Transition, Transitioning, TransitioningView } from "react-native-reanimated";
import { useTheme } from "styled-components";

import { CircleIcon, TickIcon } from "@src/assets/icons";
import { AnimationDuration, IconSize } from "@src/common/theme";

interface Props {
    checked?: boolean;
}

const slideInRightTransition = (
    <Transition.Together>
        <Transition.Out type="slide-right" durationMs={AnimationDuration.fast} />
        <Transition.Change interpolation="easeInOut" />
        <Transition.In type="slide-right" durationMs={AnimationDuration.fast} />
    </Transition.Together>
);

export const Checkbox: FC<Props> = ({ checked = false }) => {
    const ref = useRef<TransitioningView | null>(null);
    const { pallette } = useTheme();

    useEffect(() => {
        ref.current?.animateNextTransition();
    }, [checked]);

    return (
        <Transitioning.View ref={ref} transition={slideInRightTransition}>
            {checked ? (
                <TickIcon size={IconSize.large} color={pallette.secondary.dark} circleColor={pallette.secondary.main} />
            ) : (
                <CircleIcon size={IconSize.large} color={pallette.primary.main} />
            )}
        </Transitioning.View>
    );
};
