import React, { useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Checkbox } from "./Checkbox";

export default { title: "molecules/Checkbox", component: Checkbox } as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox checked={checked} onPress={() => setChecked(!checked)} />;
};

export const Default = Template.bind({});
