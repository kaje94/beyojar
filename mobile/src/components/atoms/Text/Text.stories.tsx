import React from "react";

import { expect } from "@storybook/jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { screen } from "@storybook/testing-library";

import { FontFamily } from "@src/assets/fonts";

import { Text, TextProps } from "./Text";

export default {
    args: { children: "Text value" },
    component: Text,
    excludeStories: ["Template"],
    title: "atoms/Text",
} as ComponentMeta<typeof Text>;

const playFunction = async ({ args }: { args: TextProps }) => {
    // Check if the text element contains the passed text props
    const text = await screen.findByTestId("textElement");
    expect(text.textContent).toEqual(args.children);
};

export const Template: ComponentStory<typeof Text> = (args) => <Text testID="textElement" {...args} />;

export const LightText = Template.bind({});
LightText.args = { fontFamily: FontFamily.light };
LightText.play = playFunction;

export const Default = Template.bind({});
Default.play = playFunction;

export const MediumText = Template.bind({});
MediumText.args = { fontFamily: FontFamily.medium };
MediumText.play = playFunction;

export const BoldText = Template.bind({});
BoldText.args = { fontFamily: FontFamily.bold };
BoldText.play = playFunction;
