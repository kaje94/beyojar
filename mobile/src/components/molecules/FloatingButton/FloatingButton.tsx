import React, { FC } from "react";
import { useTheme } from "styled-components";

import { AddIcon } from "@src/assets/icons";
import { IconProps } from "@src/assets/icons/interface";
import { Spacing } from "@src/common/theme";
import { Touchable } from "@src/components/atoms";

export const FloatingButton = ({ Icon = AddIcon, iconSize = 45 }: { Icon?: FC<IconProps>; iconSize?: number }) => {
    const { pallette, shadow } = useTheme();

    return (
        <Touchable
            backgroundColor={pallette.primary.dark}
            accessibilityRole="button"
            onPress={() => console.log("clicked")}
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
