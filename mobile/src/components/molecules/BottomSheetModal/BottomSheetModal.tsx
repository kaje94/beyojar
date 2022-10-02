import React, { FC, PropsWithChildren } from "react";
import RnModal from "react-native-modal";
import { useTheme } from "styled-components";

import { Opacity, Spacing } from "@src/common/theme";
import { Box } from "@src/components/atoms/Box";

interface Props {
    isVisible: boolean;
    onClose: () => void;
}

export const BottomSheetModal: FC<PropsWithChildren<Props>> = ({ isVisible, onClose, children }) => {
    const { pallette } = useTheme();
    return (
        <RnModal
            isVisible={isVisible}
            onSwipeComplete={onClose}
            swipeDirection="down"
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ justifyContent: "flex-end", margin: Spacing.none }}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            backdropColor={pallette.black}
            backdropOpacity={Opacity.notMuchVisible}
            backdropTransitionOutTiming={0}
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
