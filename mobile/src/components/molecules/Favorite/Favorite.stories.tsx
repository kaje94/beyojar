import React from "react";

import { useArgs } from "@storybook/client-api";
import { expect, jest } from "@storybook/jest";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { screen, userEvent } from "@storybook/testing-library";

import { Favorite, Props } from "./Favorite";

const onPress = jest.fn();

export default {
    argTypes: { onPress: { action: "Favorite pressed" } },
    args: { checked: false, onPress },
    component: Favorite,
    title: "molecules/Favorite",
} as ComponentMeta<typeof Favorite>;

const Template: ComponentStory<typeof Favorite> = ({ onPress: onPressMock }) => {
    const [args, updateArgs] = useArgs();

    return (
        <Favorite
            {...(args as Props)}
            onPress={(event) => {
                if (onPressMock) {
                    onPressMock(event);
                }
                updateArgs({ isFavorite: !args.isFavorite });
            }}
            testID="favorite"
        />
    );
};

export const Default = Template.bind({});
Default.play = async () => {
    // Verify whether the onPress event handler gets fired
    const checkbox = await screen.findByTestId("favorite");
    if (checkbox.firstElementChild) {
        userEvent.click(checkbox.firstElementChild);
    }
    expect(onPress).toBeCalled();
    if (checkbox.firstElementChild) {
        userEvent.click(checkbox.firstElementChild);
    }
};
