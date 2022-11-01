import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { defaultLabels, defaultNoteItem } from "@src/common/mocks";

import { LabelPills } from "./LabelPills";

export default {
    args: { note: { ...defaultNoteItem, labels: defaultLabels } },
    component: LabelPills,
    title: "molecules/LabelPills",
} as ComponentMeta<typeof LabelPills>;

const Template: ComponentStory<typeof LabelPills> = (args) => <LabelPills {...args} />;

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = { variant: "small" };
