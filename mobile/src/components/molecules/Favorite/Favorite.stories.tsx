import React from "react";

import { useArgs } from "@storybook/client-api";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Favorite, Props } from "./Favorite";

export default {
    argTypes: { onPress: { action: "Favorite pressed" } },
    args: { isFavorite: false },
    component: Favorite,
    title: "molecules/Favorite",
} as ComponentMeta<typeof Favorite>;

const Template: ComponentStory<typeof Favorite> = (_) => {
    const [args, updateArgs] = useArgs();

    return <Favorite {...(args as Props)} onPress={() => updateArgs({ isFavorite: !args.isFavorite })} />;
};

export const Default = Template.bind({});
