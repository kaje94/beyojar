import React, { useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as Yup from "yup";

import { Button } from "@src/components/molecules/Button";

import { InputModal } from "./InputModal";

export default { title: "organism/InputModal", component: InputModal } as ComponentMeta<typeof InputModal>;

const Template: ComponentStory<typeof InputModal> = (args) => {
    const [isVisible, setVisible] = useState(false);
    return (
        <>
            <Button text="Open Modal" onPress={() => setVisible(true)} />
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
    title: "Modal title",
    inputPlaceholder: "Input placeholder",
    schema: Yup.object().shape({ field: Yup.string().required("Value is required") }),
};
