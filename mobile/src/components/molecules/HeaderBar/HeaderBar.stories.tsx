import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Favorite } from "../Favorite/Favorite";
import { HeaderBar } from "./HeaderBar";

export default {
    component: HeaderBar,
    parameters: { layout: "fullscreen" },
    title: "molecules/HeaderBar",
} as ComponentMeta<typeof HeaderBar>;

const Template: ComponentStory<typeof HeaderBar> = (args) => <HeaderBar {...args} />;

export const Default = Template.bind({});
Default.args = { title: "Header title" };

export const WithEndIcon = Template.bind({});
WithEndIcon.args = { ...Default.args, endIcon: <Favorite /> };
