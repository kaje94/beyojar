import React from "react";

import { expect } from "@storybook/jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { screen, userEvent } from "@storybook/testing-library";

import { FloatingButton } from "./FloatingButton";

export default {
    argTypes: { onPress: { action: "Floating button pressed" } },
    component: FloatingButton,
    title: "molecules/FloatingButton",
} as ComponentMeta<typeof FloatingButton>;

const Template: ComponentStory<typeof FloatingButton> = (args) => <FloatingButton {...args} position="revert" />;

export const Default = Template.bind({});
Default.play = async ({ args }) => {
    // Check if onPress event is getting called accordingly
    const button = await screen.findByRole("button");
    userEvent.click(button);
    expect(args.onPress).toHaveBeenCalled();
};
