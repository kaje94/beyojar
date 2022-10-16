import React, { useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Box } from "@src/components/atoms";
import { Button } from "@src/components/molecules/Button";

import { BottomSheetModal } from "./BottomSheetModal";

export default { component: BottomSheetModal, title: "molecules/BottomSheetModal" } as ComponentMeta<
    typeof BottomSheetModal
>;

const Template: ComponentStory<typeof BottomSheetModal> = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Button onPress={() => setIsOpen(!isOpen)} text="Open Bottom Sheet" />
            <BottomSheetModal {...args} isVisible={isOpen} onClose={() => setIsOpen(false)}>
                <Box height={200} />
            </BottomSheetModal>
        </>
    );
};

export const Default = Template.bind({});
