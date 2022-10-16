import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Note } from "@src/common/interfaces";
import { noteColors } from "@src/common/theme";

import { LabelPills } from "./LabelPills";

const defaultNoteItem: Note = {
    color: noteColors[0],
    content: "",
    favorite: false,
    labels: [
        { id: "1", name: "Grocery" },
        { id: "2", name: "work" },
        { id: "3", name: "Study" },
        { id: "4", name: "Home" },
        { id: "5", name: "Passion" },
    ],
    title: "",
    ts: 0,
};

export default {
    args: {
        note: defaultNoteItem,
    },
    component: LabelPills,
    title: "molecules/LabelPills",
} as ComponentMeta<typeof LabelPills>;

const Template: ComponentStory<typeof LabelPills> = (args) => <LabelPills {...args} />;

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = { variant: "small" };
