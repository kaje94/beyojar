import React from "react";

import { useArgs } from "@storybook/client-api";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Checkbox, Props } from "./Checkbox";

export default {
    argTypes: { onPress: { action: "Checkbox pressed" } },
    args: { checked: false },
    component: Checkbox,
    title: "molecules/Checkbox",
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (_) => {
    const [args, updateArgs] = useArgs();
    return <Checkbox {...(args as Props)} onPress={() => updateArgs({ checked: !args.checked })} />;
};

export const Default = Template.bind({});
