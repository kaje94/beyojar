import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Default as Text } from "@src/components/atoms/Text/Text.stories";

import { FlexBox } from "./FlexBox";

export default {
    component: FlexBox,
    title: "atoms/FlexBox",
} as ComponentMeta<typeof FlexBox>;

const Template: ComponentStory<typeof FlexBox> = ({ children, ...rest }) => (
    <FlexBox {...rest}>{children as React.ReactElement}</FlexBox>
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
