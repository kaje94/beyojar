import React, { FC, memo } from "react";

import { MessageComponentProps } from "react-native-flash-message";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "styled-components";

import { BorderRadius, Spacing } from "@src/common/theme";
import { FlexBox, Text } from "@src/components/atoms";

/** Custom toast message to be shown for the showMessage function of react-native-flash-message */
export const ToastComponent: FC<MessageComponentProps> = memo(({ message, icon }) => {
    const { pallette } = useTheme();
    const insets = useSafeAreaInsets();

    return (
        // eslint-disable-next-line react-native-a11y/has-accessibility-hint
        <FlexBox
            accessibilityLabel="message"
            accessibilityRole="alert"
            bg={message.backgroundColor || pallette.primary.main}
            borderBottomLeftRadius={BorderRadius.medium}
            borderBottomRightRadius={BorderRadius.medium}
            mt={insets.top}
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
});
