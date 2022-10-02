import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { Screens } from "@src/common/constants";
import { BorderRadius, BorderWidth, FontSize, Opacity, Spacing } from "@src/common/theme";
import { FlexBox, Text, Touchable } from "@src/components/atoms";

export const LabelPills = () => {
    const { pallette, shadow } = useTheme();
    const navigation = useNavigation();

    return (
        <FlexBox flexWrap="wrap" p={Spacing.medium}>
            <Touchable
                // update a11y
                accessibilityRole="button"
                px={Spacing.small}
                py={Spacing.tiny}
                borderRadius={BorderRadius.large}
                borderWidth={BorderWidth.small}
                borderColor={pallette.grey}
                m={Spacing.tiny}
                style={shadow.small}
                onPress={() => navigation.navigate(Screens.labelSelect as never)}
                opacity={Opacity.mostlyVisible}
            >
                <Text fontFamily={FontFamily.medium} fontSize={FontSize.small}>
                    Label 1
                </Text>
            </Touchable>
        </FlexBox>
    );
};
