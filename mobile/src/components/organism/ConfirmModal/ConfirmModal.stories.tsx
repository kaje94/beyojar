import React, { useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TrashIcon } from "@src/assets/icons";
import { Button } from "@src/components/molecules/Button";

import { ConfirmModal } from "./ConfirmModal";

export default { title: "organism/ConfirmModal", component: ConfirmModal } as ComponentMeta<typeof ConfirmModal>;

const Template: ComponentStory<typeof ConfirmModal> = (args) => {
    const [isVisible, setVisible] = useState(false);
    return (
        <>
            <Button text="Open Modal" onPress={() => setVisible(true)} />
            <ConfirmModal {...args} isVisible={isVisible} onClose={() => setVisible(false)} />
        </>
    );
};

export const Default = Template.bind({});
Default.args = { title: "Are you sure (title)?" };

export const DeleteModal = Template.bind({});
DeleteModal.args = {
    title: "Are you sure (title)?",
    message: "This action cannot be undone",
    color: "#e53935",
    Icon: TrashIcon,
    secondaryBtnText: "Don't delete",
    primaryBtnText: "Delete",
};
