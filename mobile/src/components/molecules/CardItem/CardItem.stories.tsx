import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { defaultNoteItem } from "@src/common/mocks";
import { noteColors } from "@src/common/theme";

import { CardItem } from "./CardItem";

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
