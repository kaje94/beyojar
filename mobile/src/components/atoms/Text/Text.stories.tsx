import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { FontFamily } from "@src/assets/fonts";

import { Text } from "./Text";

export default {
    title: "atoms/Text",
    component: Text,
    args: { children: "Text value" },
    excludeStories: ["Template"],
} as ComponentMeta<typeof Text>;

export const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const LightText = Template.bind({});
LightText.args = { fontFamily: FontFamily.light };

export const Default = Template.bind({});

export const MediumText = Template.bind({});
MediumText.args = { fontFamily: FontFamily.medium };

export const BoldText = Template.bind({});
BoldText.args = { fontFamily: FontFamily.bold };
