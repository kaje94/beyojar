import React from "react";

import { expect, jest } from "@storybook/jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { screen, userEvent } from "@storybook/testing-library";

import { TextInput } from "./TextInput";

const onChangeText = jest.fn();

export default {
    args: {
        onChangeText,
        placeholder: "Placeholder",
    },
    component: TextInput,
    title: "atoms/TextInput",
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.play = async ({ args }) => {
    // Verify whether the text is updated based on the input
    // and the onChangeText gets called accordingly
    const textInputValue = "some input value";
    const input = await screen.findByPlaceholderText(`${args.placeholder}`);
    await userEvent.type(input, textInputValue, { delay: 10 });
    expect(onChangeText).toHaveBeenLastCalledWith(textInputValue);
};
