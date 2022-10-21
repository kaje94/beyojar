import React, { FC, useCallback, useMemo, useReducer } from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { nanoid } from "nanoid/non-secure";
import { useTranslation } from "react-i18next";
import { FlatList } from "react-native";
import { showMessage } from "react-native-flash-message";
import { useTheme } from "styled-components";
import * as Yup from "yup";

import { TagsIcon, TrashIcon } from "@src/assets/icons";
import { Screens } from "@src/common/constants";
import { Label } from "@src/common/interfaces";
import { Spacing } from "@src/common/theme";
import { SafeAreaBox } from "@src/components/atoms";
import { EmptyPlaceholder, FloatingButton, HeaderBar, ListItem } from "@src/components/molecules";
import { ConfirmModal, InputModal } from "@src/components/organism";
import { NavigatorParamList } from "@src/navigation";
import { useNotesStore } from "@src/store";

enum ModalKind {
    /** Display the label name input modal */
    ShowLabelModal,
    /** Display the label delete confirm modal */
    ShowDeleteModal,
    /** Hide any of the displayed modal */
    HideModal,
}

interface ModalChangeAction {
    payload?: Label;
    type: ModalKind;
}

interface ModalState {
    /** Label object will be needed when modifying an existing label */
    label: Label | null;
    /** The type of modal that is visible */
    visibleModal: ModalKind | null;
}

const initialModalState: ModalState = {
    label: null,
    visibleModal: null,
};

const labelManageReducer = (state: ModalState, action: ModalChangeAction) => {
    const { type, payload } = action;
    switch (type) {
        case ModalKind.ShowLabelModal:
            return { label: payload || null, visibleModal: type };
        case ModalKind.ShowDeleteModal:
            return { label: payload || null, visibleModal: type };
        case ModalKind.HideModal:
            return { label: null, visibleModal: null };
        default:
            return state;
    }
};

/** Screen to allow users to manage their labels (Create new labels or edit/delete existing labels) */
export const LabelManageScreen: FC<NativeStackScreenProps<NavigatorParamList, Screens.labelManage>> = () => {
    const { pallette } = useTheme();
    const { t } = useTranslation();
    const { labels, addLabel, deleteLabel, updateLabel } = useNotesStore();

    const [modalState, stateDispatch] = useReducer(labelManageReducer, initialModalState);

    /** Update a label if it exists, or create a new label */
    const onSaveLabel = useCallback(
        (label: string) => {
            if (modalState?.label?.id) {
                // Update the label, if label ID already exists
                updateLabel({ id: modalState?.label?.id, name: label });
            } else {
                // Create new label if label ID doesn't exist
                addLabel({ id: nanoid(), name: label });
            }
        },
        [modalState?.label?.id]
    );

    /**
     * Yup schema to validate the label name input.
     * Also validates if duplicate label name is being entered
     */
    const labelNameSchema = useMemo(() => {
        const existingLabels = modalState?.label?.name
            ? labels.filter((item) => item.name !== modalState?.label?.name).map((item) => item.name.toLowerCase())
            : labels.map((item) => item.name.toLowerCase());
        return Yup.object().shape({
            field: Yup.string()
                .transform((val) => val?.trim())
                .min(2, t("screens.labelManage.inputModal.validation.tooShort"))
                .max(25, t("screens.labelManage.inputModal.validation.tooLong"))
                .required(t("screens.labelManage.inputModal.validation.required"))
                .test("duplicate-check", t("screens.labelManage.inputModal.validation.duplicateExist"), (value) => {
                    // Show a validation error if label name already exists
                    return !!value && !existingLabels.includes(value.toLowerCase());
                }),
        });
    }, [modalState?.label?.name]);

    /** Remove the label from the persisted store and show a toast message */
    const onDeleteConfirm = useCallback(() => {
        deleteLabel(modalState?.label?.id as string);
        stateDispatch({ type: ModalKind.HideModal });
        showMessage({
            backgroundColor: pallette.error.light,
            icon: <TrashIcon />,
            message: t("screens.labelManage.labelDeleted"),
        });
    }, [modalState?.label?.id, pallette.error.light]);

    /** Show create new label modal */
    const onShowCreateLabelModal = useCallback(() => stateDispatch({ type: ModalKind.ShowLabelModal }), []);

    /** Hide any of the displayed modals */
    const onModalHide = useCallback(() => stateDispatch({ type: ModalKind.HideModal }), []);

    return (
        <SafeAreaBox>
            <HeaderBar title={t("components.drawer.manageLabels")} />
            <FlatList
                ListEmptyComponent={<EmptyPlaceholder Icon={TagsIcon} text={t("screens.labelManage.noLabelsFound")} />}
                data={labels}
                keyExtractor={(item, index) => item.id || `${index}`}
                renderItem={({ item }) => (
                    <ListItem
                        key={item.id}
                        Prefix={<TagsIcon color={pallette.grey} />}
                        Suffix={
                            <TrashIcon
                                color={pallette.error.dark}
                                touchable={{
                                    accessibilityHint: t("screens.labelManage.deleteLabelA11yHint", {
                                        label: item.name,
                                    }),
                                    accessibilityLabel: t("screens.labelManage.deleteLabelA11yLabel", {
                                        label: item.name,
                                    }),
                                    onPress: () => stateDispatch({ payload: item, type: ModalKind.ShowDeleteModal }),
                                }}
                            />
                        }
                        accessibilityHint={t("screens.labelManage.labelItemA11yHint", { label: item.name })}
                        accessibilityLabel={t("screens.labelManage.labelItemA11yLabel", { label: item.name })}
                        mx={Spacing.medium}
                        onPress={() => stateDispatch({ payload: item, type: ModalKind.ShowLabelModal })}
                        text={item.name}
                    />
                )}
            />
            <FloatingButton
                accessibilityHint={t("screens.labelManage.addButtonA11yHint")}
                accessibilityLabel={t("screens.labelManage.addButtonA11yLabel")}
                onPress={onShowCreateLabelModal}
                visible={modalState.visibleModal === null}
            />
            <InputModal
                initialValue={modalState?.label?.name || ""}
                inputPlaceholder={t("screens.labelManage.inputModal.inputPlaceholder")}
                isVisible={modalState.visibleModal === ModalKind.ShowLabelModal}
                onClose={onModalHide}
                onSave={onSaveLabel}
                schema={labelNameSchema}
                title={t(`screens.labelManage.inputModal.title.${modalState?.label?.id ? "edit" : "create"}`)}
            />
            <ConfirmModal
                Icon={TrashIcon}
                color={pallette.error.dark}
                isVisible={modalState.visibleModal === ModalKind.ShowDeleteModal}
                message={t("screens.labelManage.deleteLabelMessage")}
                onClose={onModalHide}
                onConfirmPress={onDeleteConfirm}
                primaryBtnText={t("common.delete")}
                title={t("common.confirm")}
            />
        </SafeAreaBox>
    );
};
