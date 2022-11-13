import React, { FC, memo, ReactNode } from "react";

import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { GestureResponderEvent } from "react-native";
import { useTheme } from "styled-components";

import { BackIcon } from "@src/assets/icons";
import { IconSize, Spacing } from "@src/common/theme";
import { Box, FlexBox, Text } from "@src/components/atoms";

interface Props {
    /** Optional end icon to be displayed in the header */
    endIcon?: ReactNode;
    /** Optional function to be called when back button is pressed */
    onBackPress?: (event: GestureResponderEvent) => void;
    /** Title to be shown in the header */
    title?: ReactNode | string;
}

/** Navigation Header component */
export const HeaderBar: FC<Props> = memo(({ title, endIcon, onBackPress }) => {
    const { pallette } = useTheme();
    const navigation = useNavigation();
    const { t } = useTranslation();

    return (
        <FlexBox p={Spacing.medium}>
            <BackIcon
                color={pallette.grey}
                size={IconSize.medium}
                touchable={{
                    accessibilityHint: t("components.header.backButtonA11yHint"),
                    accessibilityLabel: t("components.header.backButtonA11yLabel"),
                    onPress: onBackPress || navigation.goBack,
                    width: 40,
                }}
            />
            <Box flex={1}>
                {typeof title === "string" ? (
                    <Text accessibilityRole="text" ml={Spacing.medium}>
                        {title}
                    </Text>
                ) : (
                    title
                )}
            </Box>
            <FlexBox alignItems="center" height="100%" justifyContent="center" width={40}>
                {endIcon}
            </FlexBox>
        </FlexBox>
    );
});
