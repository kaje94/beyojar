import React from "react";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { BorderRadius, BorderWidth, FontSize, Spacing } from "@src/common/theme";
import { Box, Text, Touchable } from "@src/components/atoms";
import { BottomSheetModal } from "@src/components/molecules";

export const SelectModal = ({
    isVisible,
    onClose,
    title,
    selectedId,
    options,
}: {
    isVisible: boolean;
    onClose: (selectedOption: string) => void;
    title: string;
    selectedId: string;
    options: {
        id: string;
        label: string;
    }[];
}) => {
    const { pallette, shadow } = useTheme();

    // todo: update a11y for touchable
    return (
        <BottomSheetModal isVisible={isVisible} onClose={() => onClose(selectedId)}>
            <Text textAlign="center" fontFamily={FontFamily.medium} fontSize={FontSize.large} color={pallette.grey}>
                {title}
            </Text>

            <Box width="100%" mt={Spacing.medium}>
                {options.map((item) => {
                    const isSelected = item.id === selectedId;
                    return (
                        <Touchable
                            // todo update a11y
                            accessibilityRole="button"
                            key={item.id}
                            borderWidth={BorderWidth.small}
                            borderColor={pallette.secondary.light}
                            borderRadius={BorderRadius.medium}
                            bg={isSelected ? pallette.secondary.light : pallette.white}
                            py={Spacing.medium}
                            px={Spacing.small}
                            my={Spacing.tiny}
                            style={shadow.small}
                            onPress={() => onClose(item.id)}
                        >
                            <Text
                                color={isSelected ? pallette.black : pallette.grey}
                                fontFamily={isSelected ? FontFamily.medium : FontFamily.regular}
                            >
                                {item.label}
                            </Text>
                        </Touchable>
                    );
                })}
            </Box>
        </BottomSheetModal>
    );
};
