import React, { FC } from "react";
import { MessageComponentProps } from "react-native-flash-message";
import { useTheme } from "styled-components";

import { BorderRadius, Spacing } from "@src/common/theme";
import { FlexBox, Text } from "@src/components/atoms";

export const ToastComponent: FC<MessageComponentProps> = ({ message, icon }) => {
    const { pallette } = useTheme();

    return (
        <FlexBox
            bg={message.backgroundColor || pallette.primary.main}
            p={Spacing.medium}
            borderBottomLeftRadius={BorderRadius.medium}
            borderBottomRightRadius={BorderRadius.medium}
        >
            <>
                {icon}
                <Text flex={1} ml={Spacing.small}>
                    {message.message}
                </Text>
            </>
        </FlexBox>
    );
};
