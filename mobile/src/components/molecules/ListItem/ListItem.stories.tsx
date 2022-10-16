import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TagsIcon, TrashIcon } from "@src/assets/icons";

import { ListItem } from "./ListItem";

export default {
    args: {
        text: "Text",
    },
    component: ListItem,
    parameters: { layout: "fullscreen" },
    title: "molecules/ListItem",
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />;

export const Default = Template.bind({});

export const WithPrefixAndSuffix = Template.bind({});
WithPrefixAndSuffix.args = { Prefix: <TagsIcon />, Suffix: <TrashIcon /> };

export const CustomColor = Template.bind({});
CustomColor.args = { bg: "#d3dfd3", textProps: { color: "#618d61" } };
