import React, { FC, PropsWithChildren } from "react";

import RnModal from "react-native-modal";
import { useTheme } from "styled-components";

import { Opacity, Spacing } from "@src/common/theme";
import { Box } from "@src/components/atoms/Box";

export interface Props {
    /** Is Modal visible */
    isVisible: boolean;
    /** Called when modal is closed */
    onClose: () => void;
}

/** Bottom Sheet built on top of react-native-modal */
export const BottomSheetModal: FC<PropsWithChildren<Props>> = ({ isVisible, onClose, children }) => {
    const { pallette } = useTheme();
    return (
        <RnModal
            isVisible={isVisible}
            swipeDirection="down"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ justifyContent: "flex-end", margin: Spacing.none }}
            backdropColor={pallette.black}
            backdropOpacity={Opacity.barelyVisible}
            backdropTransitionOutTiming={0}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
        >
            <Box
                p={Spacing.large}
                alignItems="center"
                bg={pallette.background}
                borderTopLeftRadius={Spacing.huge}
                borderTopRightRadius={Spacing.huge}
            >
                {children}
            </Box>
        </RnModal>
    );
};
