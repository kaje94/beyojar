import React, { FC, memo } from "react";

import { useTranslation } from "react-i18next";
import { GestureResponderEvent } from "react-native";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { Note } from "@src/common/interfaces";
import { BorderRadius, BorderWidth, FontSize, Opacity, Shadow, Spacing } from "@src/common/theme";
import { FlexBox, Text, Touchable } from "@src/components/atoms";

interface Props {
    /** Details of the note */
    note: Note;
    /** Function to be called when a tag/pill is pressed */
    onPress?: (event: GestureResponderEvent) => void;
    /** Size of the label pills */
    variant?: "small" | "normal";
}

/** Label Tags/Pills to be shown in notes */
export const LabelPills: FC<Props> = memo(({ note, variant = "normal", onPress }) => {
    const { pallette } = useTheme();
    const { t } = useTranslation();

    return (
        <FlexBox flexWrap="wrap" p={variant === "small" ? Spacing.none : Spacing.medium}>
            {note.labels.map((label) => (
                <Touchable
                    key={label.id}
                    accessibilityHint={t("components.labelPills.labelA11yHint")}
                    accessibilityLabel={t("components.labelPills.labelA11yLabel", { label: label.name })}
                    accessibilityRole="button"
                    borderColor={pallette.grey}
                    borderRadius={BorderRadius.large}
                    borderWidth={BorderWidth.medium}
                    m={Spacing.tiny}
                    onPress={onPress}
                    opacity={variant === "small" ? Opacity.partiallyVisible : Opacity.mostlyVisible}
                    px={variant === "small" ? Spacing.tiny : Spacing.small}
                    py={variant === "small" ? Spacing.none : Spacing.tiny}
                    shadow={Shadow.small}
                >
                    <Text
                        fontFamily={FontFamily.medium}
                        fontSize={variant === "small" ? FontSize.tiny : FontSize.small}
                    >
                        {label.name}
                    </Text>
                </Touchable>
            ))}
        </FlexBox>
    );
});
