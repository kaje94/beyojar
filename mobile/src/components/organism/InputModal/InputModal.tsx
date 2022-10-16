import React, { FC, useEffect } from "react";

import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import RnModal from "react-native-modal";
import { useTheme } from "styled-components";
import * as Yup from "yup";

import { FontFamily } from "@src/assets/fonts";
import { BorderRadius, BorderWidth, FontSize, Opacity, Spacing } from "@src/common/theme";
import { Box, FlexBox, Text, TextInput } from "@src/components/atoms";
import { Button } from "@src/components/molecules/Button";

interface Props {
    /** Is input modal visible */
    isVisible: boolean;
    /** Called when modal is closed */
    onClose: () => void;
    /** Initial value to be displayed in the input field */
    initialValue: string;
    /** Function to be called when the value is submitted */
    onSave: (value: string) => void;
    /** Title of the input modal */
    title: string;
    /** Placeholder to be shown in the input field */
    inputPlaceholder?: string;
    /** Yup schema to validate the input field */
    schema?: Yup.SchemaOf<{ field: string }>;
}

/** Input modal component to capture, validate and submit a single input field */
export const InputModal: FC<Props> = ({
    isVisible,
    initialValue,
    schema,
    title,
    inputPlaceholder,
    onSave,
    onClose,
}) => {
    const { pallette } = useTheme();
    const { t } = useTranslation();

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
        initialValues: { field: initialValue },
        validationSchema: schema,
        onSubmit: ({ field }) => {
            onSave(field);
            onClose();
        },
    });

    useEffect(() => {
        if (isVisible) {
            resetForm({ values: { field: initialValue }, errors: {}, touched: {} });
        }
    }, [isVisible, initialValue]);

    const isInvalid = !!(errors.field && touched.field);

    return (
        <RnModal
            isVisible={isVisible}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            backdropColor={pallette.black}
            backdropTransitionOutTiming={0}
            animationIn="zoomIn"
            animationOut="zoomOut"
            backdropOpacity={Opacity.barelyVisible}
        >
            <Box
                accessibilityRole="button"
                p={Spacing.large}
                alignItems="center"
                bg={pallette.background}
                borderRadius={BorderRadius.small}
            >
                <Text textAlign="center" fontFamily={FontFamily.medium} fontSize={FontSize.large}>
                    {title}
                </Text>
                <TextInput
                    width="100%"
                    placeholder={inputPlaceholder}
                    mt={Spacing.large}
                    borderWidth={BorderWidth.small}
                    borderColor={isInvalid ? pallette.error.main : pallette.secondary.main}
                    borderRadius={BorderRadius.tiny}
                    p={Spacing.small}
                    onChangeText={handleChange("field")}
                    onBlur={handleBlur("field")}
                    value={values.field}
                    autoFocus
                    accessibilityLabel={`${t("common.enter")} ${title}`}
                    accessibilityHint={`${t("common.enter")} ${title}`}
                />
                {isInvalid ? (
                    <Text
                        fontSize={FontSize.small}
                        fontFamily={FontFamily.light}
                        textAlign="left"
                        width="100%"
                        mt={Spacing.tiny}
                        color={pallette.error.main}
                    >
                        {errors.field}
                    </Text>
                ) : null}
                <FlexBox mt={Spacing.large} width="100%">
                    <Button
                        text={t("common.cancel")}
                        onPress={onClose}
                        borderColor={pallette.grey}
                        bg={pallette.white}
                        textColor={pallette.grey}
                        accessibilityRole="button"
                        accessibilityLabel={`${t("common.cancel")} ${values.field}`}
                        accessibilityHint={`${t("common.cancel")} ${title} ${values.field}`}
                    />
                    <Button
                        text={t("common.save")}
                        onPress={() => handleSubmit()}
                        disabled={isInvalid}
                        accessibilityRole="button"
                        accessibilityLabel={`${t("common.save")} ${values.field}`}
                        accessibilityHint={`${t("common.save")} ${title} ${values.field}`}
                    />
                </FlexBox>
            </Box>
        </RnModal>
    );
};
