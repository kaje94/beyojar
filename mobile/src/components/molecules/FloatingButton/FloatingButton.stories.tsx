import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { FloatingButton } from "./FloatingButton";

export default {
    title: "molecules/FloatingButton",
    component: FloatingButton,
    argTypes: { onPress: { action: "Pressed" } },
} as ComponentMeta<typeof FloatingButton>;

const Template: ComponentStory<typeof FloatingButton> = (args) => <FloatingButton {...args} />;

export const Default = Template.bind({});
