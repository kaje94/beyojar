import React, { useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Favorite } from "./Favorite";

export default { component: Favorite, title: "molecules/Favorite" } as ComponentMeta<typeof Favorite>;

const Template: ComponentStory<typeof Favorite> = () => {
    const [favorite, setFavorite] = useState(false);
    return <Favorite isFavorite={favorite} onPress={() => setFavorite(!favorite)} />;
};

export const Default = Template.bind({});
Default.args = {};
