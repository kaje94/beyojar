import React from "react";

import { Transition } from "react-native-reanimated";

import { AnimationDuration } from "./theme";

/** Get react-native-reanimated transitions when changing visibility of elements in the UI */
export const getTransition = (type: "slide-bottom" | "fade" | "scale" | "slide-top" | "slide-right" | "slide-left") => (
    <Transition.Together>
        <Transition.Out type={type} durationMs={AnimationDuration.fast} />
        <Transition.Change interpolation="easeInOut" />
        <Transition.In type={type} durationMs={AnimationDuration.fast} />
    </Transition.Together>
);
