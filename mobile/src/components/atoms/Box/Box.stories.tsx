import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Default as Text } from "@src/components/atoms/Text/Text.stories";

import { Box } from "./Box";

export default {
    component: Box,
    title: "atoms/Box",
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = ({ children, ...rest }) => (
    <Box {...rest}>{children as React.ReactElement}</Box>
);

export const Default = Template.bind({});
Default.args = {
    children: (
        <>
            <Text>Child 1</Text>
            <Text>Child 2</Text>
        </>
    ),
};
