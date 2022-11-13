import React, { FC, memo, useMemo } from "react";

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

export interface Props {
    /** Is color picker modal visible */
    isVisible: boolean;
    /** Function to be called when either a color is selected or modal is closed */
    onClose: (selectedColor: INoteColors) => void;
    /** Selected color of the note */
    selectedColor: INoteColors;
}

/** Modal to allow users to select their preferred color for a selected note */
export const ColorPickerModal: FC<Props> = memo(({ isVisible, selectedColor, onClose }) => {
    const { t } = useTranslation();
    const { pallette, mode } = useTheme();

    const colors = useMemo(() => chunkArray(noteColors, columnCount), []);

    return (
        <BottomSheetModal isVisible={isVisible} onClose={() => onClose(selectedColor)}>
            <Text color={pallette.grey} fontFamily={FontFamily.medium} fontSize={FontSize.large} textAlign="center">
                {t("components.colorPicker.title")}
            </Text>

            <Box mt={Spacing.medium} width="100%">
                {colors?.map((row) => (
                    <FlexBox key={row.map(({ id }) => id).join("-")} justifyContent="space-between" my={Spacing.medium}>
                        {row.map((column) => (
                            <Touchable
                                key={column.id}
                                accessibilityHint={t("components.colorPicker.colorItemA11yHint", { color: column.id })}
                                accessibilityLabel={t("components.colorPicker.colorItemA11yLabel", {
                                    color: column.id,
                                })}
                                accessibilityRole="button"
                                alignItems="center"
                                bg={column[mode]}
                                borderRadius={BorderRadius.small}
                                height={colorSize}
                                justifyContent="center"
                                onPress={() => onClose(column)}
                                shadow={Shadow.small}
                                width={colorSize}
                            >
                                {selectedColor.id === column.id && (
                                    <TickIcon opacity={Opacity.mostlyVisible} size={IconSize.medium} />
                                )}
                            </Touchable>
                        ))}
                    </FlexBox>
                ))}
            </Box>
        </BottomSheetModal>
    );
});
