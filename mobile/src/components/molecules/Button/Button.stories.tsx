import React from "react";

import { expect } from "@storybook/jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { screen, userEvent } from "@storybook/testing-library";

import { FlexBox } from "@src/components/atoms";

import { Button } from "./Button";

export default {
    argTypes: { onPress: { action: "Button pressed" } },
    args: { text: "buttonText" },
    component: Button,
    title: "molecules/Button",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <FlexBox>
        <Button {...args} />
    </FlexBox>
);

export const Default = Template.bind({});
Default.play = async ({ args }) => {
    // Check if button contains text and the onPress callback gets fired accordingly
    const button = await screen.findByRole("button");
    expect(button.textContent).toEqual(args.text);
    userEvent.click(button);
    expect(args.onPress).toHaveBeenCalled();
};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
Disabled.play = async () => {
    // Check the button behavior when its disabled
    const button = await screen.findByRole("button");
    expect(button).toHaveAttribute("aria-disabled");
};
