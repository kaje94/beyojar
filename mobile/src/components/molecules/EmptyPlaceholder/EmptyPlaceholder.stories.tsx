import React from "react";

import { expect } from "@storybook/jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { screen, waitFor } from "@storybook/testing-library";

import { EmptyPlaceholder } from "./EmptyPlaceholder";

export default { component: EmptyPlaceholder, title: "molecules/EmptyPlaceholder" } as ComponentMeta<
    typeof EmptyPlaceholder
>;

const Template: ComponentStory<typeof EmptyPlaceholder> = (args) => {
    return <EmptyPlaceholder {...args} />;
};

export const Default = Template.bind({});
Default.args = { text: "Get started by adding your first item" };
Default.play = async ({ args }) => {
    // Check if EmptyPlaceholder contains the text prop
    await waitFor(() => expect(screen.queryByText(`${args.text}`)).not.toBeNull());
};
