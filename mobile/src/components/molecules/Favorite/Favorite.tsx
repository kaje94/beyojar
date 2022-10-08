import React, { FC, useEffect, useRef } from "react";
import { GestureResponderEvent } from "react-native";
import { Transition, Transitioning, TransitioningView } from "react-native-reanimated";
import { useTheme } from "styled-components";

import { StarFilledIcon, StarIcon } from "@src/assets/icons";
import { AnimationDuration, IconSize, Opacity } from "@src/common/theme";
import { Touchable } from "@src/components/atoms";

interface Props {
    isFavorite?: boolean;
    onPress?: (event: GestureResponderEvent) => void;
}

const slideInRightTransition = (
    <Transition.Together>
        <Transition.Out type="scale" durationMs={AnimationDuration.fast} />
        <Transition.Change interpolation="easeInOut" />
        <Transition.In type="scale" durationMs={AnimationDuration.fast} />
    </Transition.Together>
);

export const Favorite: FC<Props> = ({ isFavorite = false, onPress }) => {
    const ref = useRef<TransitioningView | null>(null);
    const { pallette } = useTheme();

    useEffect(() => {
        ref.current?.animateNextTransition();
    }, [isFavorite]);

    return (
        <Touchable
            //  todo
            accessibilityRole="button"
            onPress={onPress}
        >
            <Transitioning.View ref={ref} transition={slideInRightTransition}>
                {isFavorite ? (
                    <StarFilledIcon size={IconSize.large} color={pallette.grey} secondaryColor={pallette.black} />
                ) : (
                    <StarIcon size={IconSize.large} color={pallette.grey} opacity={Opacity.barelyVisible} />
                )}
            </Transitioning.View>
        </Touchable>
    );
};
