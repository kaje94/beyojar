import React, { useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { noteColors } from "@src/common/theme";
import { Button } from "@src/components/molecules/Button";

import { ColorPickerModal } from "./ColorPickerModal";

export default { title: "organism/ColorPickerModal", component: ColorPickerModal } as ComponentMeta<
    typeof ColorPickerModal
>;

const Template: ComponentStory<typeof ColorPickerModal> = () => {
    const [isVisible, setVisible] = useState(false);
    const [selectedColor, setSelectedColor] = useState(noteColors[0]);
    return (
        <>
            <Button text="Open Modal" onPress={() => setVisible(true)} />
            <ColorPickerModal
                selectedColor={selectedColor}
                isVisible={isVisible}
                onClose={(color) => {
                    setVisible(false);
                    setSelectedColor(color);
                }}
            />
        </>
    );
};

export const Default = Template.bind({});
