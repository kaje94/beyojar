import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Default as Favorite } from "@src/components/molecules/Favorite/Favorite.stories";

import { HeaderBar } from "./HeaderBar";

export default {
    title: "molecules/HeaderBar",
    component: HeaderBar,
    parameters: { layout: "fullscreen" },
} as ComponentMeta<typeof HeaderBar>;

const Template: ComponentStory<typeof HeaderBar> = (args) => <HeaderBar {...args} />;

export const Default = Template.bind({});
Default.args = { title: "Header title" };

export const WithEndIcon = Template.bind({});
WithEndIcon.args = { ...Default.args, endIcon: <Favorite /> };
