import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { EmptyPlaceholder } from "./EmptyPlaceholder";

export default { component: EmptyPlaceholder, title: "molecules/EmptyPlaceholder" } as ComponentMeta<
    typeof EmptyPlaceholder
>;

const Template: ComponentStory<typeof EmptyPlaceholder> = (args) => {
    return <EmptyPlaceholder {...args} />;
};

export const Default = Template.bind({});
Default.args = { text: "Get started by adding your first item" };
