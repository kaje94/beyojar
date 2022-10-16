import React, { FC } from "react";

import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { Note } from "@src/common/interfaces";
import { BorderRadius, FontSize, Opacity, Shadow, Spacing } from "@src/common/theme";
import { Box, Text, Touchable, TouchableProps } from "@src/components/atoms";

import { LabelPills } from "../LabelPills";

interface Props extends TouchableProps {
    /** Note details to be displayed in the card */
    noteItem: Note;
}

/** Card item to be listed in note listing screens */
export const CardItem: FC<Props> = ({ noteItem, onPress, ...props }) => {
    const { pallette, mode } = useTheme();
    const { t } = useTranslation();

    return (
        <Touchable
            accessibilityRole="button"
            accessibilityLabel={t("components.cardItem.a11yLabel", { title: noteItem.title })}
            accessibilityHint={t("components.cardItem.allyHint")}
            bg={noteItem.color[mode] || pallette.white}
            mx={Spacing.medium}
            my={Spacing.small}
            p={Spacing.medium}
            borderRadius={BorderRadius.small}
            shadow={Shadow.small}
            onPress={onPress}
            {...props}
        >
            {!noteItem.title && !noteItem.content ? (
                <Text fontFamily={FontFamily.medium} color={pallette.secondary.dark}>
                    {t("components.cardItem.empty")}
                </Text>
            ) : (
                <>
                    {noteItem.title && (
                        <Text fontFamily={FontFamily.medium} color={pallette.secondary.dark}>
                            {noteItem.title}
                        </Text>
                    )}

                    {noteItem.title && noteItem.content && (
                        <Box
                            height={0.5}
                            backgroundColor={pallette.grey}
                            opacity={Opacity.partiallyVisible}
                            my={Spacing.tiny}
                        />
                    )}

                    {noteItem.content && (
                        <Text fontSize={FontSize.small} color={pallette.grey} numberOfLines={5}>
                            {noteItem.content}
                        </Text>
                    )}
                </>
            )}
            <LabelPills note={noteItem} variant="small" onPress={onPress} />
        </Touchable>
    );
};
