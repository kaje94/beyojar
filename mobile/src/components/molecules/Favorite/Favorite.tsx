import React, { FC, memo, useEffect, useRef } from "react";

import { useTranslation } from "react-i18next";
import { Transitioning, TransitioningView } from "react-native-reanimated";
import { useTheme } from "styled-components";

import { StarFilledIcon, StarIcon } from "@src/assets/icons";
import { IconSize, Opacity } from "@src/common/theme";
import { getTransition } from "@src/common/transitions";
import { Touchable, TouchableProps } from "@src/components/atoms";

export interface Props extends TouchableProps {
    /** To show filled star icon or unfilled one */
    isFavorite?: boolean;
    /** Size of the icon */
    size?: IconSize;
}

/** Controlled Favorite component to be shown for each note */
export const Favorite: FC<Props> = memo(({ isFavorite = false, size, ...rest }) => {
    const ref = useRef<TransitioningView | null>(null);
    const { pallette } = useTheme();
    const { t } = useTranslation();

    useEffect(() => ref.current?.animateNextTransition(), [isFavorite]);

    return (
        <Touchable
            accessibilityHint={t("components.favorite.allyHint")}
            accessibilityLabel={t(`components.favorite.${isFavorite ? "isFavorite" : "isNotFavorite"}`)}
            accessibilityRole="checkbox"
            {...rest}
        >
            <Transitioning.View ref={ref} transition={getTransition("scale")}>
                {isFavorite ? (
                    <StarFilledIcon
                        key="star-filled"
                        color={pallette.grey}
                        secondaryColor={pallette.black}
                        size={size || IconSize.medium}
                    />
                ) : (
                    <StarIcon
                        key="star-unfilled"
                        color={pallette.grey}
                        opacity={Opacity.barelyVisible}
                        size={size || IconSize.medium}
                    />
                )}
            </Transitioning.View>
        </Touchable>
    );
});
