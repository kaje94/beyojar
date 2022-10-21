import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Note } from "@src/common/interfaces";
import { noteColors } from "@src/common/theme";

import { CardItem } from "./CardItem";

const defaultNoteItem: Note = {
    color: noteColors[0],
    content:
        "amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae",
    createdAt: 0,
    favorite: false,
    labels: [
        { id: "1", name: "Grocery" },
        { id: "2", name: "work" },
    ],
    title: "Title of the card",
    updatedAt: 0,
};

export default {
    argTypes: { onPress: { action: "Card pressed" } },
    args: { noteItem: defaultNoteItem },
    component: CardItem,
    title: "molecules/CardItem",
} as ComponentMeta<typeof CardItem>;

const Template: ComponentStory<typeof CardItem> = (args) => <CardItem {...args} />;

export const Default = Template.bind({});

export const Themed = Template.bind({});
Themed.args = {
    noteItem: {
        ...defaultNoteItem,
        color: noteColors[1],
    },
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    noteItem: {
        ...defaultNoteItem,
        content: "",
    },
};

export const OnlyContent = Template.bind({});
OnlyContent.args = {
    noteItem: {
        ...defaultNoteItem,
        title: "",
    },
};

export const Favorite = Template.bind({});
Favorite.args = {
    noteItem: {
        ...defaultNoteItem,
        favorite: true,
    },
};

export const Empty = Template.bind({});
Empty.args = {
    noteItem: {
        ...defaultNoteItem,
        content: "",
        title: "",
    },
};
