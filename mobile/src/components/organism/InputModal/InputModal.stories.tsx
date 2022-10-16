import React, { useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as Yup from "yup";

import { Button } from "@src/components/molecules/Button";

import { InputModal } from "./InputModal";

export default { component: InputModal, title: "organism/InputModal" } as ComponentMeta<typeof InputModal>;

const Template: ComponentStory<typeof InputModal> = (args) => {
    const [isVisible, setVisible] = useState(false);
    return (
        <>
            <Button onPress={() => setVisible(true)} text="Open Modal" />
            <InputModal
                {...args}
                isVisible={isVisible}
                onClose={() => setVisible(false)}
                onSave={() => setVisible(false)}
            />
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    inputPlaceholder: "Input placeholder",
    schema: Yup.object().shape({ field: Yup.string().required("Value is required") }),
    title: "Modal title",
};
