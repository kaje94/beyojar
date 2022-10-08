import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { TrashIcon } from "@src/assets/icons";
import { IconProps } from "@src/assets/icons/interface";
import { FontSize, IconSize, Spacing } from "@src/common/theme";
import { Box, FlexBox, Text } from "@src/components/atoms";
import { BottomSheetModal, Button } from "@src/components/molecules";

interface Props {
    title: string;
    message: string;
    isVisible: boolean;
    onClose: () => void;
    onConfirmPress?: () => void;
    primaryBtnText?: string;
    secondaryBtnText?: string;
    color?: string;
    Icon?: FC<IconProps>;
}

export const ConfirmModal: FC<Props> = ({
    isVisible,
    onClose,
    onConfirmPress,
    title,
    message,
    primaryBtnText,
    secondaryBtnText,
    color,
    Icon = TrashIcon,
}) => {
    const { t } = useTranslation();
    const { pallette } = useTheme();
    const primaryColor = color || pallette.primary.dark;

    // todo: update a11y for touchable
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

            <FlexBox mt={Spacing.medium}>
                <Button
                    text={secondaryBtnText || t("common.cancel")}
                    onPress={onClose}
                    borderColor={pallette.grey}
                    bg={pallette.white}
                    textColor={pallette.grey}
                />
                <Button
                    text={primaryBtnText || t("common.continue")}
                    onPress={onConfirmPress}
                    bg={primaryColor}
                    borderColor={primaryColor}
                />
            </FlexBox>
        </BottomSheetModal>
    );
};
