import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Note } from "@src/common/interfaces";
import { noteColors } from "@src/common/theme";

import { CardItem } from "./CardItem";

const defaultNoteItem: Note = {
    title: "Title of the card",
    content:
        "amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae",
    favorite: false,
    labels: [
        { id: "1", name: "Grocery" },
        { id: "2", name: "work" },
    ],
    color: noteColors[0],
    ts: 0,
};

export default {
    title: "molecules/CardItem",
    component: CardItem,
    args: {
        noteItem: defaultNoteItem,
    },
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

export const Empty = Template.bind({});
Empty.args = {
    noteItem: {
        ...defaultNoteItem,
        title: "",
        content: "",
    },
};
