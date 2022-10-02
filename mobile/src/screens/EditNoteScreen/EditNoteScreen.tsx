import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { useTheme } from "styled-components";

import { FontFamily } from "@src/assets/fonts";
import { StarIcon, TagsIcon, ThemeIcon, TrashIcon } from "@src/assets/icons";
import { IsIOS, Screens } from "@src/common/constants";
import { FontSize, noteColors, Opacity, Spacing } from "@src/common/theme";
import { Box, FlexBox, KeyboardAvoidingBox, SafeAreaBox, ScrollView, Text, TextInput } from "@src/components/atoms";
import { HeaderBar, LabelPills } from "@src/components/molecules";
import { ColorPickerModal, ConfirmModal } from "@src/components/organism";
import { useTimeout } from "@src/hooks";
import { NavigatorParamList } from "@src/navigator";

const bottomBarHight = 60;

export const EditNoteScreen: FC<NativeStackScreenProps<NavigatorParamList, Screens.editNote>> = ({ navigation }) => {
    const [noteTitle, setNoteTitle] = useState("");
    const [noteText, setNoteText] = useState("");
    const [isDeleteConfirmVisible, setDeleteConfirmVisible] = useState(false);
    const [isColorPickerVisible, setColorPickerVisible] = useState(false);
    const [selectedColor, setSelectedColor] = useState(noteColors[0]);

    const insets = useSafeAreaInsets();
    const { pallette, mode } = useTheme();
    const { t } = useTranslation();

    const bgColor = selectedColor[mode];

    useTimeout(() => setStatusBarBackgroundColor(bgColor, true), 100, [bgColor]);

    // todo: extract header into new screen
    return (
        <>
            <SafeAreaBox bg={bgColor}>
                <HeaderBar endIcon={<StarIcon size={30} touchable={{ opacity: Opacity.notMuchVisible }} />} />
                <KeyboardAvoidingBox mb={bottomBarHight} behavior={IsIOS ? "padding" : "height"}>
                    <ScrollView px={Spacing.medium}>
                        <TextInput
                            accessibilityLabel="Text input field"
                            // todo update
                            accessibilityHint="ss"
                            multiline
                            fontSize={FontSize.large}
                            placeholder="Title"
                            value={noteTitle}
                            onChangeText={setNoteTitle}
                            fontFamily={FontFamily.bold}
                            color={pallette.secondary.dark}
                            // enter to focus next input
                        />
                        <Box height={1} bg={pallette.grey} my={Spacing.small} />
                        <TextInput
                            accessibilityLabel="Text input field"
                            // todo update
                            accessibilityHint="ss"
                            multiline
                            fontSize={FontSize.medium}
                            placeholder="Start writing"
                            value={noteText}
                            onChangeText={setNoteText}
                            mb={Spacing.large}
                            color={pallette.grey}
                            minHeight={200}
                            textAlignVertical="top"
                        />
                    </ScrollView>
                    <LabelPills />
                </KeyboardAvoidingBox>
            </SafeAreaBox>
            <FlexBox
                position="absolute"
                bottom={0}
                pb={insets.bottom}
                bg={pallette.grey}
                height={bottomBarHight}
                width="100%"
                borderTopLeftRadius={Spacing.large}
                borderTopRightRadius={Spacing.large}
                px={Spacing.medium}
            >
                <TagsIcon
                    color={pallette.white}
                    size={30}
                    touchable={{
                        mx: Spacing.tiny,
                        onPress: () => navigation.navigate(Screens.labelSelect),
                    }}
                />
                <ThemeIcon
                    color={bgColor}
                    size={30}
                    touchable={{ mx: Spacing.tiny, onPress: () => setColorPickerVisible(true) }}
                />
                <Text
                    color={pallette.white}
                    textAlign="center"
                    flex={1}
                    fontFamily={FontFamily.light}
                    fontSize={FontSize.small}
                >
                    Edited 2 days ago
                </Text>
                <TrashIcon
                    color={pallette.error.main}
                    size={30}
                    touchable={{ mx: Spacing.tiny, onPress: () => setDeleteConfirmVisible(true) }}
                />
            </FlexBox>
            <ConfirmModal
                title={t("common.confirm")}
                message={t("components.noteDeleteModal.message")}
                primaryBtnText={t("common.delete")}
                isVisible={isDeleteConfirmVisible}
                onClose={() => setDeleteConfirmVisible(false)}
                color={pallette.error.dark}
            />
            <ColorPickerModal
                selectedColor={selectedColor}
                isVisible={isColorPickerVisible}
                onClose={(selected) => {
                    setSelectedColor(selected);
                    setColorPickerVisible(false);
                }}
            />
        </>
    );
};
