import React, { FC } from "react";

import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { InfoIcon } from "@src/assets/icons";
import { IconProps } from "@src/common/interfaces";
import { FontSize, IconSize, Spacing } from "@src/common/theme";
import { Box, FlexBox, Text } from "@src/components/atoms";
import { Button } from "@src/components/molecules";
import { BottomSheetModal, Props as BottomSheetModalProps } from "@src/components/molecules/BottomSheetModal";

interface Props extends BottomSheetModalProps {
    /** Title shown in the modal */
    title: string;
    /** Message shown in the modal */
    message: string;
    /** Function to be called when confirm is pressed */
    onConfirmPress?: () => void;
    /** Optional label to be shown on the primary/confirm button */
    primaryBtnText?: string;
    /** Optional label to be shown on the secondary/cancel button */
    secondaryBtnText?: string;
    /** Primary color of the confirm modal */
    color?: string;
    /** Icon to be shown in the modal */
    Icon?: FC<IconProps>;
}

/** Modal to get user's confirmation before performing critical actions */
export const ConfirmModal: FC<Props> = ({
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
                <Icon size={IconSize.huge} color={primaryColor} />
            </Box>
            <Text textAlign="center" fontFamily={FontFamily.medium} fontSize={FontSize.large}>
                {title}
            </Text>
            <Text textAlign="center" color={pallette.grey} fontSize={FontSize.small}>
                {message}
            </Text>

            <FlexBox mt={Spacing.medium} width="100%">
                <Button
                    text={secondaryBtnText || t("common.cancel")}
                    onPress={onClose}
                    borderColor={pallette.grey}
                    bg={pallette.white}
                    textColor={pallette.grey}
                    accessibilityRole="button"
                    accessibilityLabel={`${secondaryBtnText || t("common.continue")} ${title}`}
                    accessibilityHint={`${secondaryBtnText || t("common.continue")} ${message}`}
                />
                <Button
                    text={primaryBtnText || t("common.continue")}
                    onPress={onConfirmPress}
                    bg={primaryColor}
                    borderColor={primaryColor}
                    accessibilityRole="button"
                    accessibilityLabel={`${primaryBtnText || t("common.continue")} ${title}`}
                    accessibilityHint={`${primaryBtnText || t("common.continue")} ${message}`}
                />
            </FlexBox>
        </BottomSheetModal>
    );
};
