import React, { FC } from "react";
import { GestureResponderEvent } from "react-native";
import { useTheme } from "styled-components";

import { AddIcon } from "@src/assets/icons";
import { IconProps } from "@src/assets/icons/interface";
import { Spacing } from "@src/common/theme";
import { Touchable } from "@src/components/atoms";

interface Props {
    Icon?: FC<IconProps>;
    iconSize?: number;
    onPress?: (event: GestureResponderEvent) => void;
}

export const FloatingButton: FC<Props> = ({ Icon = AddIcon, iconSize = 45, onPress }) => {
    const { pallette, shadow } = useTheme();

    return (
        <Touchable
            backgroundColor={pallette.primary.dark}
            accessibilityRole="button"
            onPress={onPress}
            alignItems="center"
            justifyContent="center"
            position="absolute"
            alignSelf="center"
            bottom={Spacing.large}
            p={Spacing.small}
            borderRadius={iconSize}
            style={shadow.large}
        >
            <Icon size={iconSize} color={pallette.background} />
        </Touchable>
    );
};
