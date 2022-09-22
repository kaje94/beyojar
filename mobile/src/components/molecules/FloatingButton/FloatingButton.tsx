import React from "react";
import { useTheme } from "styled-components";

import { AddIcon } from "@src/assets/icons";
import { IconProps } from "@src/assets/icons/interface";
import { Touchable } from "@src/components/atoms";
import { Spacing } from "@src/utils/theme";

export const FloatingButton = ({
    Icon = AddIcon,
    iconSize = 45,
}: {
    Icon?: React.FC<IconProps>;
    iconSize?: number;
}) => {
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
            padding={Spacing.small}
            borderRadius={iconSize}
            style={shadow.large}
        >
            <Icon size={iconSize} color={pallette.white} />
        </Touchable>
    );
};
