import React, { FC } from "react";

import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { BorderRadius, BorderWidth, FontSize, Shadow, Spacing } from "@src/common/theme";
import { Box, Text, Touchable } from "@src/components/atoms";
import { BottomSheetModal } from "@src/components/molecules";

interface Props {
    /** Is Select modal visible */
    isVisible: boolean;
    /** Function to be called when either an option is selected or modal is closed */
    onClose: (selectedOption: string) => void;
    /** Title to be shown in the modal */
    title: string;
    /** Id of the selected item */
    selectedId: string;
    /** List of options to be listed in the select modal */
    options: { id: string; label: string }[];
}

/** Select modal that behaves similar to radio buttons */
export const SelectModal: FC<Props> = ({ isVisible, onClose, title, selectedId, options }) => {
    const { pallette } = useTheme();
    const { t } = useTranslation();

    return (
        <BottomSheetModal isVisible={isVisible} onClose={() => onClose(selectedId)}>
            <Text textAlign="center" fontFamily={FontFamily.medium} fontSize={FontSize.large} color={pallette.grey}>
                {title}
            </Text>

            <Box width="100%" mt={Spacing.medium} accessibilityRole="radiogroup">
                {options.map((item) => {
                    const isSelected = item.id === selectedId;
                    return (
                        <Touchable
                            key={item.id}
                            borderWidth={BorderWidth.small}
                            borderColor={pallette.secondary.light}
                            borderRadius={BorderRadius.medium}
                            bg={isSelected ? pallette.secondary.light : pallette.white}
                            py={Spacing.medium}
                            px={Spacing.small}
                            my={Spacing.tiny}
                            shadow={Shadow.small}
                            onPress={() => onClose(item.id)}
                            accessibilityRole="radio"
                            accessibilityLabel={item.label}
                            accessibilityHint={`${t("common.select")} ${title} ${item.label}`}
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
