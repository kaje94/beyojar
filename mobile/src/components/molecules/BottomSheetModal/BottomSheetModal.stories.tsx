import React from "react";

import { useArgs } from "@storybook/client-api";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Box, FlexBox } from "@src/components/atoms";
import { Button } from "@src/components/molecules/Button";

import { BottomSheetModal, Props } from "./BottomSheetModal";

export default {
    args: { isVisible: false },
    component: BottomSheetModal,
    title: "molecules/BottomSheetModal",
} as ComponentMeta<typeof BottomSheetModal>;

const Template: ComponentStory<typeof BottomSheetModal> = (_) => {
    const [args, updateArgs] = useArgs();
    return (
        <>
            <FlexBox>
                <Button onPress={() => updateArgs({ isVisible: true })} text="Open Bottom Sheet" />
            </FlexBox>
            <BottomSheetModal {...(args as Props)} onClose={() => updateArgs({ isVisible: false })}>
                <Box height={200} />
            </BottomSheetModal>
        </>
    );
};

export const Default = Template.bind({});
