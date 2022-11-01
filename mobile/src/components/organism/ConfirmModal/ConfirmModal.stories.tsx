import React from "react";

import { useArgs } from "@storybook/client-api";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TrashIcon } from "@src/assets/icons";
import { FlexBox } from "@src/components/atoms";
import { Button } from "@src/components/molecules/Button";

import { ConfirmModal, Props } from "./ConfirmModal";

export default {
    args: { isVisible: false },
    component: ConfirmModal,
    title: "organism/ConfirmModal",
} as ComponentMeta<typeof ConfirmModal>;

const Template: ComponentStory<typeof ConfirmModal> = (_) => {
    const [args, updateArgs] = useArgs();
    return (
        <>
            <FlexBox>
                <Button onPress={() => updateArgs({ isVisible: true })} text="Open Modal" />
            </FlexBox>
            <ConfirmModal {...(args as Props)} onClose={() => updateArgs({ isVisible: false })} />
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
