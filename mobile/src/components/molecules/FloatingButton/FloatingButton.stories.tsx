import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { FloatingButton } from "./FloatingButton";

export default {
    argTypes: { onPress: { action: "Pressed" } },
    component: FloatingButton,
    title: "molecules/FloatingButton",
} as ComponentMeta<typeof FloatingButton>;

const Template: ComponentStory<typeof FloatingButton> = (args) => <FloatingButton {...args} />;

export const Default = Template.bind({});
