import React from "react";

import { useArgs } from "@storybook/client-api";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { FlexBox } from "@src/components/atoms";
import { Button } from "@src/components/molecules/Button";

import { Props, SelectModal } from "./SelectModal";

export default {
    args: {
        isVisible: false,
        options: [
            { id: "1", label: "item 1" },
            { id: "2", label: "item 2" },
        ],
        selectedId: "1",
        title: "Modal title",
    },
    component: SelectModal,
    title: "organism/SelectModal",
} as ComponentMeta<typeof SelectModal>;

const Template: ComponentStory<typeof SelectModal> = (_) => {
    const [args, updateArgs] = useArgs();

    return (
        <>
            <FlexBox>
                <Button onPress={() => updateArgs({ isVisible: true })} text="Open Modal" />
            </FlexBox>
            <SelectModal {...(args as Props)} onClose={(id) => updateArgs({ isVisible: false, selectedId: id })} />
        </>
    );
};

export const Default = Template.bind({});
