import React from "react";

import { expect, jest } from "@storybook/jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { screen, userEvent, waitFor } from "@storybook/testing-library";

import { defaultNoteItem } from "@src/common/mocks";
import { noteColors } from "@src/common/theme";

import { CardItem } from "./CardItem";

const onPress = jest.fn();

export default {
    argTypes: { onPress: { action: "Card pressed" } },
    args: { noteItem: defaultNoteItem, onPress },
    component: CardItem,
    title: "molecules/CardItem",
} as ComponentMeta<typeof CardItem>;

const Template: ComponentStory<typeof CardItem> = (args) => <CardItem {...args} />;

export const Default = Template.bind({});
Default.play = async ({ args }) => {
    // Check if card item contains the title
    await waitFor(() => expect(screen.queryByText(args.noteItem.title)).not.toBeNull());

    // Check if card item contains the note contents
    await waitFor(() => expect(screen.queryByText(args.noteItem.content)).not.toBeNull());

    // Check if the onPress event is handled accordingly
    const buttons = await screen.findAllByRole("button");
    const cardItem = buttons[0];
    userEvent.click(cardItem);
    expect(onPress).toBeCalled();
};

export const Themed = Template.bind({});
Themed.args = { noteItem: { ...defaultNoteItem, color: noteColors[1] } };

export const OnlyTitle = Template.bind({});
OnlyTitle.args = { noteItem: { ...defaultNoteItem, content: "" } };

export const OnlyContent = Template.bind({});
OnlyContent.args = { noteItem: { ...defaultNoteItem, title: "" } };

export const Favorite = Template.bind({});
Favorite.args = { noteItem: { ...defaultNoteItem, favorite: true } };

export const Empty = Template.bind({});
Empty.args = { noteItem: { ...defaultNoteItem, content: "", title: "" } };
Empty.play = async () => {
    // Check if card shows as empty note if title and the content is not preset
    await waitFor(() => expect(screen.queryByText("Empty note")).not.toBeNull());
};
