import React, { FC } from "react";

import { MessageComponentProps } from "react-native-flash-message";
import { useTheme } from "styled-components";

import { BorderRadius, Spacing } from "@src/common/theme";
import { FlexBox, Text } from "@src/components/atoms";

/** Custom toast message to be shown for the showMessage function of react-native-flash-message */
export const ToastComponent: FC<MessageComponentProps> = ({ message, icon }) => {
    const { pallette } = useTheme();

    return (
        // eslint-disable-next-line react-native-a11y/has-accessibility-hint
        <FlexBox
            accessibilityLabel="message"
            accessibilityRole="alert"
            bg={message.backgroundColor || pallette.primary.main}
            borderBottomLeftRadius={BorderRadius.medium}
            borderBottomRightRadius={BorderRadius.medium}
            p={Spacing.medium}
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
