import React, { FC } from "react";
import { GestureResponderEvent } from "react-native";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { BorderRadius, BorderWidth, FontSize, Opacity, Spacing } from "@src/common/theme";
import { FlexBox, Text, Touchable } from "@src/components/atoms";
import { Note } from "@src/store";

interface Props {
    note: Note;
    onPress?: (event: GestureResponderEvent) => void;
}

export const LabelPills: FC<Props> = ({ note, onPress }) => {
    const { pallette, shadow } = useTheme();

    return (
        <FlexBox flexWrap="wrap" p={Spacing.medium}>
            {note.labels.map((label) => (
                <Touchable
                    key={label.id}
                    // update a11y
                    accessibilityRole="button"
                    px={Spacing.small}
                    py={Spacing.tiny}
                    borderRadius={BorderRadius.large}
                    borderWidth={BorderWidth.small}
                    borderColor={pallette.grey}
                    m={Spacing.tiny}
                    style={shadow.small}
                    onPress={onPress}
                    opacity={Opacity.mostlyVisible}
                >
                    <Text fontFamily={FontFamily.medium} fontSize={FontSize.small}>
                        {label.name}
                    </Text>
                </Touchable>
            ))}
        </FlexBox>
    );
};
