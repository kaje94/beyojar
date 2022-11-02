import React from "react";

import { useArgs } from "@storybook/client-api";
import { expect, jest } from "@storybook/jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { screen, userEvent } from "@storybook/testing-library";

import { Checkbox, Props } from "./Checkbox";

const onPress = jest.fn();

export default {
    argTypes: { onPress: { action: "Checkbox pressed" } },
    args: { checked: false, onPress },
    component: Checkbox,
    title: "molecules/Checkbox",
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({ onPress: onPressMock }) => {
    const [args, updateArgs] = useArgs();
    return (
        <Checkbox
            {...(args as Props)}
            onPress={(event) => {
                if (onPressMock) {
                    onPressMock(event);
                }
                updateArgs({ checked: !args.checked });
            }}
        />
    );
};

export const Default = Template.bind({});
Default.play = async () => {
    // Verify whether the onPress event handler gets fired
    const checkbox = await screen.findByTestId("checkbox");
    if (checkbox.firstElementChild) {
        userEvent.click(checkbox.firstElementChild);
    }
    expect(onPress).toBeCalled();
    if (checkbox.firstElementChild) {
        userEvent.click(checkbox.firstElementChild);
    }
};
