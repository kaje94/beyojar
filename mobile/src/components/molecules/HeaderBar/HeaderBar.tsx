import React, { FC, ReactNode } from "react";

import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { GestureResponderEvent } from "react-native";
import { useTheme } from "styled-components";

import { BackIcon } from "@src/assets/icons";
import { IconSize, Spacing } from "@src/common/theme";
import { Box, FlexBox, Text } from "@src/components/atoms";

interface Props {
    /** Title to be shown in the header */
    title?: ReactNode | string;
    /** Optional end icon to be displayed in the header */
    endIcon?: ReactNode;
    /** Optional function to be called when back button is pressed */
    onBackPress?: (event: GestureResponderEvent) => void;
}

/** Navigation Header component */
export const HeaderBar: FC<Props> = ({ title, endIcon, onBackPress }) => {
    const { pallette } = useTheme();
    const navigation = useNavigation();
    const { t } = useTranslation();

    return (
        <FlexBox p={Spacing.medium}>
            <BackIcon
                size={IconSize.medium}
                color={pallette.grey}
                touchable={{
                    onPress: onBackPress || navigation.goBack,
                    width: 40,
                    accessibilityLabel: t("components.header.backButtonA11yLabel"),
                    accessibilityHint: t("components.header.backButtonA11yHint"),
                }}
            />
            <Box flex={1}>
                {typeof title === "string" ? (
                    <Text ml={Spacing.medium} accessibilityRole="text">
                        {title}
                    </Text>
                ) : (
                    title
                )}
            </Box>
            <FlexBox width={40} alignItems="center" justifyContent="center" height="100%">
                {endIcon}
            </FlexBox>
        </FlexBox>
    );
};
