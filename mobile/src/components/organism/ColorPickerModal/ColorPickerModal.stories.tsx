import React, { useState } from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { noteColors } from "@src/common/theme";
import { Button } from "@src/components/molecules/Button";

import { ColorPickerModal } from "./ColorPickerModal";

export default { component: ColorPickerModal, title: "organism/ColorPickerModal" } as ComponentMeta<
    typeof ColorPickerModal
>;

const Template: ComponentStory<typeof ColorPickerModal> = () => {
    const [isVisible, setVisible] = useState(false);
    const [selectedColor, setSelectedColor] = useState(noteColors[0]);
    return (
        <>
            <Button onPress={() => setVisible(true)} text="Open Modal" />
            <ColorPickerModal
                isVisible={isVisible}
                onClose={(color) => {
                    setVisible(false);
                    setSelectedColor(color);
                }}
                selectedColor={selectedColor}
            />
        </>
    );
};

export const Default = Template.bind({});
