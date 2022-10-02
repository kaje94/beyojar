import React, { ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { BackIcon } from "@src/assets/icons";
import { Spacing } from "@src/common/theme";
import { Box, FlexBox, Text } from "@src/components/atoms";

export const HeaderBar = ({ title, endIcon }: { title?: ReactNode | string; endIcon?: ReactNode }) => {
    const { pallette } = useTheme();
    const navigation = useNavigation();

    return (
        <FlexBox p={Spacing.medium}>
            <BackIcon size={30} color={pallette.grey} touchable={{ onPress: navigation.goBack, width: 40 }} />
            <Box flex={1}>{typeof title === "string" ? <Text ml={Spacing.medium}>{title}</Text> : title}</Box>
            <FlexBox width={40} alignItems="center" justifyContent="center" height="100%">
                {endIcon}
            </FlexBox>
        </FlexBox>
    );
};
