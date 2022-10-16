import React, { useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "@src/components/molecules/Button";

import { SelectModal } from "./SelectModal";

export default { title: "organism/SelectModal", component: SelectModal } as ComponentMeta<typeof SelectModal>;

const Template: ComponentStory<typeof SelectModal> = (args) => {
    const [isVisible, setVisible] = useState(false);
    const [selected, setSelected] = useState("1");
    return (
        <>
            <Button text="Open Modal" onPress={() => setVisible(true)} />
            <SelectModal
                {...args}
                isVisible={isVisible}
                selectedId={selected}
                onClose={(id) => {
                    setSelected(id);
                    setVisible(false);
                }}
            />
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    title: "Modal title",
    options: [
        { id: "1", label: "item 1" },
        { id: "2", label: "item 2" },
    ],
};
