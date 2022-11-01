import React from "react";

import { useArgs } from "@storybook/client-api";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as Yup from "yup";

import { FlexBox } from "@src/components/atoms";
import { Button } from "@src/components/molecules/Button";

import { InputModal, Props } from "./InputModal";

export default { args: { isVisible: false }, component: InputModal, title: "organism/InputModal" } as ComponentMeta<
    typeof InputModal
>;

const Template: ComponentStory<typeof InputModal> = (_) => {
    const [args, updateArgs] = useArgs();
    return (
        <>
            <FlexBox>
                <Button onPress={() => updateArgs({ isVisible: true })} text="Open Modal" />
            </FlexBox>
            <InputModal {...(args as Props)} onClose={() => updateArgs({ isVisible: false })} />
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    inputPlaceholder: "Input placeholder",
    schema: Yup.object().shape({ field: Yup.string().required("Value is required") }),
    title: "Modal title",
};
