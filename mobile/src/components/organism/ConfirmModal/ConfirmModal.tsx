import React, { FC, memo } from "react";

import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { InfoIcon } from "@src/assets/icons";
import { IconProps } from "@src/common/interfaces";
import { FontSize, IconSize, Spacing } from "@src/common/theme";
import { Box, FlexBox, Text } from "@src/components/atoms";
import { Button } from "@src/components/molecules";
import { BottomSheetModal, Props as BottomSheetModalProps } from "@src/components/molecules/BottomSheetModal";

export interface Props extends BottomSheetModalProps {
    /** Icon to be shown in the modal */
    Icon?: FC<IconProps>;
    /** Primary color of the confirm modal */
    color?: string;
    /** Message shown in the modal */
    message: string;
    /** Function to be called when confirm is pressed */
    onConfirmPress?: () => void;
    /** Optional label to be shown on the primary/confirm button */
    primaryBtnText?: string;
    /** Optional label to be shown on the secondary/cancel button */
    secondaryBtnText?: string;
    /** Title shown in the modal */
    title: string;
}

/** Modal to get user's confirmation before performing critical actions */
export const ConfirmModal: FC<Props> = memo(
    ({
        isVisible,
        onClose,
        onConfirmPress,
        title,
        message,
        primaryBtnText,
        secondaryBtnText,
        color,
        Icon = InfoIcon,
    }) => {
        const { t } = useTranslation();
        const { pallette } = useTheme();
        const primaryColor = color || pallette.primary.dark;

        return (
            <BottomSheetModal isVisible={isVisible} onClose={onClose}>
                <Box my={Spacing.medium}>
                    <Icon color={primaryColor} size={IconSize.huge} />
                </Box>
                <Text fontFamily={FontFamily.medium} fontSize={FontSize.large} textAlign="center">
                    {title}
                </Text>
                <Text color={pallette.grey} fontSize={FontSize.small} textAlign="center">
                    {message}
                </Text>

                <FlexBox mt={Spacing.medium} width="100%">
                    <Button
                        accessibilityHint={`${secondaryBtnText || t("common.continue")} ${message}`}
                        accessibilityLabel={`${secondaryBtnText || t("common.continue")} ${title}`}
                        accessibilityRole="button"
                        bg={pallette.white}
                        borderColor={pallette.grey}
                        onPress={onClose}
                        text={secondaryBtnText || t("common.cancel")}
                        textColor={pallette.grey}
                    />
                    <Button
                        accessibilityHint={`${primaryBtnText || t("common.continue")} ${message}`}
                        accessibilityLabel={`${primaryBtnText || t("common.continue")} ${title}`}
                        accessibilityRole="button"
                        bg={primaryColor}
                        borderColor={primaryColor}
                        onPress={onConfirmPress}
                        text={primaryBtnText || t("common.continue")}
                    />
                </FlexBox>
            </BottomSheetModal>
        );
    }
);
