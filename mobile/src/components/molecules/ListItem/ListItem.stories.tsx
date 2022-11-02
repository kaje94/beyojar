import React from "react";

import { expect, jest } from "@storybook/jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { screen, userEvent, waitFor } from "@storybook/testing-library";

import { TagsIcon, TrashIcon } from "@src/assets/icons";

import { ListItem, Props } from "./ListItem";

const onPress = jest.fn();

const playFunction = async ({ args }: { args: Props }) => {
    // Check if list item displays the text and fires the onPress event
    await waitFor(() => expect(screen.queryByText(`${args.text}`)).not.toBeNull());
    const button = await screen.findByRole("button");
    userEvent.click(button);
    expect(args.onPress).toHaveBeenCalled();
};

export default {
    args: { onPress, text: "Text" },
    component: ListItem,
    parameters: { layout: "fullscreen" },
    title: "molecules/ListItem",
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />;

export const Default = Template.bind({});
Default.play = playFunction;

export const WithPrefixAndSuffix = Template.bind({});
WithPrefixAndSuffix.args = { Prefix: <TagsIcon />, Suffix: <TrashIcon /> };
WithPrefixAndSuffix.play = playFunction;

export const CustomColor = Template.bind({});
CustomColor.args = { bg: "#d3dfd3", textProps: { color: "#618d61" } };
CustomColor.play = playFunction;
