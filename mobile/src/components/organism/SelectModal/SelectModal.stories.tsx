import React, { useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "@src/components/molecules/Button";

import { SelectModal } from "./SelectModal";

export default { component: SelectModal, title: "organism/SelectModal" } as ComponentMeta<typeof SelectModal>;

const Template: ComponentStory<typeof SelectModal> = (args) => {
    const [isVisible, setVisible] = useState(false);
    const [selected, setSelected] = useState("1");
    return (
        <>
            <Button onPress={() => setVisible(true)} text="Open Modal" />
            <SelectModal
                {...args}
                isVisible={isVisible}
                onClose={(id) => {
                    setSelected(id);
                    setVisible(false);
                }}
                selectedId={selected}
            />
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    options: [
        { id: "1", label: "item 1" },
        { id: "2", label: "item 2" },
    ],
    title: "Modal title",
};
