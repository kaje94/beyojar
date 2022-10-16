import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";

export default {
    argTypes: { onPress: { action: "Button pressed" } },
    component: Button,
    title: "molecules/Button",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
