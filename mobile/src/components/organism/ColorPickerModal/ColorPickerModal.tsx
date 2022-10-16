import React, { FC, useMemo } from "react";

import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { TickIcon } from "@src/assets/icons";
import { chunkArray } from "@src/common/helpers";
import { INoteColors } from "@src/common/interfaces";
import { BorderRadius, FontSize, IconSize, noteColors, Opacity, Shadow, Spacing } from "@src/common/theme";
import { Box, FlexBox, Text, Touchable } from "@src/components/atoms";
import { BottomSheetModal } from "@src/components/molecules";

const columnCount = 4;
const colorSize = 60;

interface Props {
    /** Is color picker modal visible */
    isVisible: boolean;
    /** Selected color of the note */
    selectedColor: INoteColors;
    /** Function to be called when either a color is selected or modal is closed */
    onClose: (selectedColor: INoteColors) => void;
}

/** Modal to allow users to select their preferred color for a selected note */
export const ColorPickerModal: FC<Props> = ({ isVisible, selectedColor, onClose }) => {
    const { t } = useTranslation();
    const { pallette, mode } = useTheme();

    const colors = useMemo(() => chunkArray(noteColors, columnCount), []);

    return (
        <BottomSheetModal isVisible={isVisible} onClose={() => onClose(selectedColor)}>
            <Text textAlign="center" fontFamily={FontFamily.medium} fontSize={FontSize.large} color={pallette.grey}>
                {t("components.colorPicker.title")}
            </Text>

            <Box width="100%" mt={Spacing.medium}>
                {colors?.map((row) => (
                    <FlexBox my={Spacing.medium} justifyContent="space-between" key={row.map(({ id }) => id).join("-")}>
                        {row.map((column) => (
                            <Touchable
                                key={column.id}
                                bg={column[mode]}
                                height={colorSize}
                                width={colorSize}
                                borderRadius={BorderRadius.small}
                                shadow={Shadow.small}
                                onPress={() => onClose(column)}
                                alignItems="center"
                                justifyContent="center"
                                accessibilityRole="button"
                                accessibilityLabel={t("components.colorPicker.colorItemA11yLabel", {
                                    color: column.id,
                                })}
                                accessibilityHint={t("components.colorPicker.colorItemA11yHint", { color: column.id })}
                            >
                                {selectedColor.id === column.id && (
                                    <TickIcon size={IconSize.medium} opacity={Opacity.mostlyVisible} />
                                )}
                            </Touchable>
                        ))}
                    </FlexBox>
                ))}
            </Box>
        </BottomSheetModal>
    );
};
