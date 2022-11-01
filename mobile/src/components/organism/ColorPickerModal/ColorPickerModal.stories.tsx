import React from "react";

import { useArgs } from "@storybook/client-api";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { noteColors } from "@src/common/theme";
import { FlexBox } from "@src/components/atoms";
import { Button } from "@src/components/molecules/Button";

import { ColorPickerModal, Props } from "./ColorPickerModal";

export default {
    args: { isVisible: false, selectedColor: noteColors[0] },
    component: ColorPickerModal,
    title: "organism/ColorPickerModal",
} as ComponentMeta<typeof ColorPickerModal>;

const Template: ComponentStory<typeof ColorPickerModal> = (_) => {
    const [args, updateArgs] = useArgs();

    return (
        <>
            <FlexBox>
                <Button onPress={() => updateArgs({ isVisible: true })} text="Open Modal" />
            </FlexBox>
            <ColorPickerModal
                {...(args as Props)}
                onClose={(color) => updateArgs({ isVisible: false, selectedColor: color })}
            />
        </>
    );
};

export const Default = Template.bind({});
