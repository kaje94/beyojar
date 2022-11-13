import React, { FC, memo, useEffect } from "react";

import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import RnModal from "react-native-modal";
import { useTheme } from "styled-components";
import * as Yup from "yup";

import { FontFamily } from "@src/assets/fonts";
import { BorderRadius, BorderWidth, FontSize, Opacity, Spacing } from "@src/common/theme";
import { Box, FlexBox, Text, TextInput } from "@src/components/atoms";
import { Button } from "@src/components/molecules/Button";

export interface Props {
    /** Initial value to be displayed in the input field */
    initialValue: string;
    /** Placeholder to be shown in the input field */
    inputPlaceholder?: string;
    /** Is input modal visible */
    isVisible: boolean;
    /** Called when modal is closed */
    onClose: () => void;
    /** Function to be called when the value is submitted */
    onSave: (value: string) => void;
    /** Yup schema to validate the input field */
    schema?: Yup.SchemaOf<{ field: string }>;
    /** Title of the input modal */
    title: string;
}

/** Input modal component to capture, validate and submit a single input field */
export const InputModal: FC<Props> = memo(
    ({ isVisible, initialValue, schema, title, inputPlaceholder, onSave, onClose }) => {
        const { pallette } = useTheme();
        const { t } = useTranslation();

        const { values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
            initialValues: { field: initialValue },
            onSubmit: ({ field }) => {
                onSave(field);
                onClose();
            },
            validationSchema: schema,
        });

        useEffect(() => {
            if (isVisible) {
                resetForm({ errors: {}, touched: {}, values: { field: initialValue } });
            }
        }, [isVisible, initialValue]);

        const isInvalid = !!(errors.field && touched.field);

        return (
            <RnModal
                animationIn="zoomIn"
                animationOut="zoomOut"
                backdropColor={pallette.black}
                backdropOpacity={Opacity.barelyVisible}
                backdropTransitionOutTiming={0}
                isVisible={isVisible}
                onBackButtonPress={onClose}
                onBackdropPress={onClose}
            >
                <Box
                    accessibilityRole="button"
                    alignItems="center"
                    bg={pallette.background}
                    borderRadius={BorderRadius.small}
                    p={Spacing.large}
                >
                    <Text fontFamily={FontFamily.medium} fontSize={FontSize.large} textAlign="center">
                        {title}
                    </Text>
                    <TextInput
                        accessibilityHint={`${t("common.enter")} ${title}`}
                        accessibilityLabel={`${t("common.enter")} ${title}`}
                        autoFocus
                        borderColor={isInvalid ? pallette.error.main : pallette.secondary.main}
                        borderRadius={BorderRadius.tiny}
                        borderWidth={BorderWidth.medium}
                        mt={Spacing.large}
                        onBlur={handleBlur("field")}
                        onChangeText={handleChange("field")}
                        p={Spacing.small}
                        placeholder={inputPlaceholder}
                        value={values.field}
                        width="100%"
                    />
                    {isInvalid ? (
                        <Text
                            color={pallette.error.main}
                            fontFamily={FontFamily.light}
                            fontSize={FontSize.small}
                            mt={Spacing.tiny}
                            textAlign="left"
                            width="100%"
                        >
                            {errors.field}
                        </Text>
                    ) : null}
                    <FlexBox mt={Spacing.large} width="100%">
                        <Button
                            accessibilityHint={`${t("common.cancel")} ${title} ${values.field}`}
                            accessibilityLabel={`${t("common.cancel")} ${values.field}`}
                            accessibilityRole="button"
                            bg={pallette.white}
                            borderColor={pallette.grey}
                            onPress={onClose}
                            text={t("common.cancel")}
                            textColor={pallette.grey}
                        />
                        <Button
                            accessibilityHint={`${t("common.save")} ${title} ${values.field}`}
                            accessibilityLabel={`${t("common.save")} ${values.field}`}
                            accessibilityRole="button"
                            disabled={isInvalid}
                            onPress={() => handleSubmit()}
                            text={t("common.save")}
                        />
                    </FlexBox>
                </Box>
            </RnModal>
        );
    }
);
