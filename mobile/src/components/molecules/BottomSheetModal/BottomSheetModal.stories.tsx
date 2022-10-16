import React, { useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Box } from "@src/components/atoms";
import { Button } from "@src/components/molecules/Button";

import { BottomSheetModal } from "./BottomSheetModal";

export default { title: "molecules/BottomSheetModal", component: BottomSheetModal } as ComponentMeta<
    typeof BottomSheetModal
>;

const Template: ComponentStory<typeof BottomSheetModal> = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Button text="Open Bottom Sheet" onPress={() => setIsOpen(!isOpen)} />
            <BottomSheetModal {...args} isVisible={isOpen} onClose={() => setIsOpen(false)}>
                <Box height={200} />
            </BottomSheetModal>
        </>
    );
};

export const Default = Template.bind({});
