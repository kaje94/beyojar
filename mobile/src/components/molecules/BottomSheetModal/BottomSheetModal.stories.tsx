import React from "react";

import { useArgs } from "@storybook/client-api";
import { expect } from "@storybook/jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { screen, userEvent, waitFor } from "@storybook/testing-library";

import { delay } from "@src/common/helpers";
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
Default.play = async () => {
    // Check if the modal is initially not visible
    expect(screen.queryByRole("dialog")).toBeNull();

    // Click the button to see if the modal becomes visible
    const button = await screen.findByRole("button");
    userEvent.click(button);
    const openedModal = await screen.findByRole("dialog");
    expect(openedModal).toBeVisible();

    // Click the overlay to check if the modal becomes hidden again
    userEvent.click(openedModal?.firstElementChild?.firstElementChild || button);
    await delay(1000);
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
};
