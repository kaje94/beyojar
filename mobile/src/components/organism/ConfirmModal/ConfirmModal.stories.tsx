import React, { useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TrashIcon } from "@src/assets/icons";
import { Button } from "@src/components/molecules/Button";

import { ConfirmModal } from "./ConfirmModal";

export default { component: ConfirmModal, title: "organism/ConfirmModal" } as ComponentMeta<typeof ConfirmModal>;

const Template: ComponentStory<typeof ConfirmModal> = (args) => {
    const [isVisible, setVisible] = useState(false);
    return (
        <>
            <Button onPress={() => setVisible(true)} text="Open Modal" />
            <ConfirmModal {...args} isVisible={isVisible} onClose={() => setVisible(false)} />
        </>
    );
};

export const Default = Template.bind({});
Default.args = { title: "Are you sure (title)?" };

export const DeleteModal = Template.bind({});
DeleteModal.args = {
    Icon: TrashIcon,
    color: "#e53935",
    message: "This action cannot be undone",
    primaryBtnText: "Delete",
    secondaryBtnText: "Don't delete",
    title: "Are you sure (title)?",
};
