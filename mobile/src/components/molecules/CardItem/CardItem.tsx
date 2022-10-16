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
            accessibilityHint={t("components.cardItem.allyHint")}
            accessibilityLabel={t("components.cardItem.a11yLabel", { title: noteItem.title })}
            accessibilityRole="button"
            bg={noteItem.color[mode] || pallette.white}
            borderRadius={BorderRadius.small}
            mx={Spacing.medium}
            my={Spacing.small}
            onPress={onPress}
            p={Spacing.medium}
            shadow={Shadow.small}
            {...props}
        >
            {!noteItem.title && !noteItem.content ? (
                <Text color={pallette.secondary.dark} fontFamily={FontFamily.medium}>
                    {t("components.cardItem.empty")}
                </Text>
            ) : (
                <>
                    {noteItem.title && (
                        <Text color={pallette.secondary.dark} fontFamily={FontFamily.medium}>
                            {noteItem.title}
                        </Text>
                    )}

                    {noteItem.title && noteItem.content && (
                        <Box
                            backgroundColor={pallette.grey}
                            height={0.5}
                            my={Spacing.tiny}
                            opacity={Opacity.partiallyVisible}
                        />
                    )}

                    {noteItem.content && (
                        <Text color={pallette.grey} fontSize={FontSize.small} numberOfLines={5}>
                            {noteItem.content}
                        </Text>
                    )}
                </>
            )}
            <LabelPills note={noteItem} onPress={onPress} variant="small" />
        </Touchable>
    );
};
