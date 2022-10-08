import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { BorderRadius, FontSize, Opacity, Spacing } from "@src/common/theme";
import { Box, Text, Touchable, TouchableProps } from "@src/components/atoms";
import { Note } from "@src/state/notes";

interface Props extends TouchableProps {
    noteItem: Note;
}

export const CardItem: FC<Props> = ({ noteItem, ...props }) => {
    const { pallette, shadow, mode } = useTheme();
    const { t } = useTranslation();

    return (
        <Touchable
            accessibilityRole="button"
            bg={noteItem.color[mode] || pallette.white}
            mx={Spacing.medium}
            my={Spacing.small}
            p={Spacing.medium}
            borderRadius={BorderRadius.small}
            style={shadow.small}
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
        </Touchable>
    );
};
