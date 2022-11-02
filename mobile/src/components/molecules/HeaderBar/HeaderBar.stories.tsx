import React from "react";

import { expect } from "@storybook/jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { screen, waitFor } from "@storybook/testing-library";

import { Favorite } from "@src/components/molecules/Favorite";

import { HeaderBar } from "./HeaderBar";

export default {
    component: HeaderBar,
    parameters: { layout: "fullscreen" },
    title: "molecules/HeaderBar",
} as ComponentMeta<typeof HeaderBar>;

const Template: ComponentStory<typeof HeaderBar> = (args) => <HeaderBar {...args} />;

export const Default = Template.bind({});
Default.args = { title: "Header title" };
Default.play = async ({ args }) => {
    // Check if header contains the title
    await waitFor(() => expect(screen.queryByText(`${args.title?.toString()}`)).not.toBeNull());
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = { ...Default.args, endIcon: <Favorite /> };
