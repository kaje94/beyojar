import React from "react";

import { expect } from "@storybook/jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { screen, waitFor } from "@storybook/testing-library";
import { MessageComponentProps } from "react-native-flash-message";

import { InfoIcon } from "@src/assets/icons";

import { ToastComponent } from "./ToastComponent";

const playFunction = async ({ args }: { args: MessageComponentProps }) => {
    // Check if the message is displayed within the port
    await waitFor(() => expect(screen.queryByText(`${args.message.message}`)).not.toBeNull());
};

export default {
    component: ToastComponent,
    parameters: { layout: "fullscreen" },
    title: "molecules/ToastComponent",
} as ComponentMeta<typeof ToastComponent>;

const Template: ComponentStory<typeof ToastComponent> = (args) => <ToastComponent {...args} />;

export const Default = Template.bind({});
Default.args = { message: { message: "Toast message" } };
Default.play = playFunction;

export const WithIcon = Template.bind({});
WithIcon.args = { icon: <InfoIcon />, message: { message: "Toast message with Icon" } };
WithIcon.play = playFunction;

export const WithCustomBackground = Template.bind({});
WithCustomBackground.args = { message: { backgroundColor: "#e53935", message: "Toast with custom background" } };
WithCustomBackground.play = playFunction;
