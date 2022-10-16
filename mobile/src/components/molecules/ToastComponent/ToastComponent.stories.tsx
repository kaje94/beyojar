import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { InfoIcon } from "@src/assets/icons";

import { ToastComponent } from "./ToastComponent";

export default {
    component: ToastComponent,
    parameters: { layout: "fullscreen" },
    title: "molecules/ToastComponent",
} as ComponentMeta<typeof ToastComponent>;

const Template: ComponentStory<typeof ToastComponent> = (args) => <ToastComponent {...args} />;

export const Default = Template.bind({});
Default.args = { message: { message: "Toast message" } };

export const WithIcon = Template.bind({});
WithIcon.args = { icon: <InfoIcon />, message: { message: "Toast message with Icon" } };

export const WithCustomBackground = Template.bind({});
WithCustomBackground.args = { message: { backgroundColor: "#e53935", message: "Toast with custom background" } };
