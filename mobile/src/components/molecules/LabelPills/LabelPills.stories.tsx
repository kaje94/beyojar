import React from "react";

import { expect } from "@storybook/jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { screen, waitFor } from "@storybook/testing-library";

import { defaultLabels, defaultNoteItem } from "@src/common/mocks";

import { LabelPills } from "./LabelPills";

const playFunction = async () => {
    // Check if label names are rendered inside the label pills
    await Promise.all(
        defaultLabels.map((label) => waitFor(() => expect(screen.queryByText(label.name)).not.toBeNull()))
    );
};

export default {
    args: { note: { ...defaultNoteItem, labels: defaultLabels } },
    component: LabelPills,
    title: "molecules/LabelPills",
} as ComponentMeta<typeof LabelPills>;

const Template: ComponentStory<typeof LabelPills> = (args) => <LabelPills {...args} />;

export const Default = Template.bind({});
Default.play = playFunction;

export const Small = Template.bind({});
Small.args = { variant: "small" };
Small.play = playFunction;
