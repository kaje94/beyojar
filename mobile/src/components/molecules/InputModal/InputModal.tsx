import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import RnModal from "react-native-modal";
import { useFormik } from "formik";
import { useTheme } from "styled-components";
import * as Yup from "yup";

import { FontFamily } from "@src/assets/fonts";
import { BorderRadius, BorderWidth, FontSize, Opacity, Spacing } from "@src/common/theme";
import { Box, FlexBox, Text, TextInput } from "@src/components/atoms";
import { Button } from "@src/components/molecules/Button";

interface Props {
    isVisible: boolean;
    onClose: () => void;
}

const LabelNameSchema = Yup.object().shape({
    labelName: Yup.string()
        .transform((val) => val?.trim())
        .min(2, "Label name is too short")
        .max(25, "Label name is too long")
        .required("Label name is required"),
});

export const InputModal: FC<Props> = ({ isVisible, onClose }) => {
    const { pallette } = useTheme();
    const { t } = useTranslation();

    const { values, errors, touched, isValid, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: { labelName: "" },
        validationSchema: LabelNameSchema,
        onSubmit: ({ labelName }) => {
            console.log("submitting ", labelName?.trim());
            onClose();
        },
    });

    return (
        <RnModal
            isVisible={isVisible}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            backdropColor={pallette.black}
            backdropTransitionOutTiming={0}
            animationIn="zoomIn"
            animationOut="zoomOut"
            avoidKeyboard
            backdropOpacity={Opacity.barelyVisible}
        >
            <Box
                p={Spacing.large}
                alignItems="center"
                bg={pallette.background}
                borderRadius={BorderRadius.small}
                //  margin={Spacing.medium}
            >
                <Text textAlign="center" fontFamily={FontFamily.medium} fontSize={FontSize.large}>
                    Create Label
                </Text>
                <TextInput
                    accessibilityLabel="Text input field"
                    // todo update hint
                    accessibilityHint=""
                    width="100%"
                    placeholder="Label name"
                    mt={Spacing.large}
                    borderWidth={BorderWidth.small}
                    borderColor={isValid ? pallette.secondary.main : pallette.error.main}
                    borderRadius={BorderRadius.tiny}
                    p={Spacing.small}
                    onChangeText={handleChange("labelName")}
                    onBlur={handleBlur("labelName")}
                    value={values.labelName}
                />
                {errors.labelName && touched.labelName ? (
                    <Text
                        fontSize={FontSize.small}
                        fontFamily={FontFamily.light}
                        textAlign="left"
                        width="100%"
                        mt={Spacing.tiny}
                        color={pallette.error.main}
                    >
                        {errors.labelName}
                    </Text>
                ) : null}
                <FlexBox mt={Spacing.large}>
                    <Button
                        text={t("common.cancel")}
                        onPress={onClose}
                        borderColor={pallette.grey}
                        bg={pallette.white}
                        textColor={pallette.grey}
                    />
                    <Button text={t("common.save")} onPress={() => handleSubmit()} disabled={!isValid} />
                </FlexBox>
            </Box>
        </RnModal>
    );
};
