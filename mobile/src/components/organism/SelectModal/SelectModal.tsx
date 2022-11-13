import React, { FC, memo } from "react";

import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { BorderRadius, BorderWidth, FontSize, Shadow, Spacing } from "@src/common/theme";
import { Box, Text, Touchable } from "@src/components/atoms";
import { BottomSheetModal } from "@src/components/molecules";

export interface Props {
    /** Is Select modal visible */
    isVisible: boolean;
    /** Function to be called when either an option is selected or modal is closed */
    onClose: (selectedOption: string) => void;
    /** List of options to be listed in the select modal */
    options: { id: string; label: string }[];
    /** Id of the selected item */
    selectedId: string;
    /** Title to be shown in the modal */
    title: string;
}

/** Select modal that behaves similar to radio buttons */
export const SelectModal: FC<Props> = memo(({ isVisible, onClose, title, selectedId, options }) => {
    const { pallette } = useTheme();
    const { t } = useTranslation();

    return (
        <BottomSheetModal isVisible={isVisible} onClose={() => onClose(selectedId)}>
            <Text color={pallette.grey} fontFamily={FontFamily.medium} fontSize={FontSize.large} textAlign="center">
                {title}
            </Text>

            <Box accessibilityRole="radiogroup" mt={Spacing.medium} width="100%">
                {options.map((item) => {
                    const isSelected = item.id === selectedId;
                    return (
                        <Touchable
                            key={item.id}
                            accessibilityHint={`${t("common.select")} ${title} ${item.label}`}
                            accessibilityLabel={item.label}
                            accessibilityRole="radio"
                            bg={isSelected ? pallette.secondary.light : pallette.white}
                            borderColor={pallette.secondary.light}
                            borderRadius={BorderRadius.medium}
                            borderWidth={BorderWidth.medium}
                            my={Spacing.tiny}
                            onPress={() => onClose(item.id)}
                            px={Spacing.small}
                            py={Spacing.medium}
                            shadow={Shadow.small}
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
});
