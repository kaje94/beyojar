import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { TickIcon } from "@src/assets/icons";
import { chunkArray } from "@src/common/helpers";
import { BorderRadius, FontSize, IconSize, INoteColors, noteColors, Opacity, Spacing } from "@src/common/theme";
import { Box, FlexBox, Text, Touchable } from "@src/components/atoms";
import { BottomSheetModal } from "@src/components/molecules";

const columnCount = 4;
const colorSize = 60;

export const ColorPickerModal = ({
    isVisible,
    selectedColor,
    onClose,
}: {
    isVisible: boolean;
    selectedColor: INoteColors;
    onClose: (selectedColor: INoteColors) => void;
}) => {
    const { t } = useTranslation();
    const { pallette, shadow, mode } = useTheme();

    const colors = useMemo(() => chunkArray(noteColors, columnCount), []);

    // todo: update a11y for touchable
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
                                accessibilityRole="button"
                                key={column.id}
                                bg={column[mode]}
                                height={colorSize}
                                width={colorSize}
                                borderRadius={BorderRadius.small}
                                style={shadow.small}
                                onPress={() => onClose(column)}
                                alignItems="center"
                                justifyContent="center"
                            >
                                {selectedColor.id === column.id && (
                                    <TickIcon size={IconSize.large} opacity={Opacity.mostlyVisible} />
                                )}
                            </Touchable>
                        ))}
                    </FlexBox>
                ))}
            </Box>
        </BottomSheetModal>
    );
};
