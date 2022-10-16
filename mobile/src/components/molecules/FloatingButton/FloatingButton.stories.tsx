import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { FloatingButton } from "./FloatingButton";

export default {
    // todo: add for other on presses
    argTypes: { onPress: { action: "Floating button pressed" } },
    component: FloatingButton,
    title: "molecules/FloatingButton",
} as ComponentMeta<typeof FloatingButton>;

const Template: ComponentStory<typeof FloatingButton> = (args) => <FloatingButton {...args} position="revert" />;

export const Default = Template.bind({});
