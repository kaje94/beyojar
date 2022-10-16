import React from "react";

import { expect } from "@storybook/jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import { Button } from "./Button";

export default {
    argTypes: { onPress: { action: "Button pressed" } },
    args: { text: "buttonText" },
    component: Button,
    title: "molecules/Button",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button");
    expect(button.textContent).toEqual(args.text);
    userEvent.click(button);
    expect(args.onPress).toHaveBeenCalled();
};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
Disabled.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button");
    expect(button).toHaveAttribute("aria-disabled");
};
