import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";

export default {
    title: "molecules/Button",
    component: Button,
    argTypes: { onPress: { action: "Pressed" } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
