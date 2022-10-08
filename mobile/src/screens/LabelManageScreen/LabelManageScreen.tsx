import React, { FC, useCallback, useMemo, useReducer } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, GestureResponderEvent } from "react-native";
import { showMessage } from "react-native-flash-message";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { nanoid } from "nanoid/non-secure";
import { useTheme } from "styled-components";

import { TagsIcon, TrashIcon } from "@src/assets/icons";
import { Screens } from "@src/common/constants";
import { Spacing } from "@src/common/theme";
import { SafeAreaBox, Text, Touchable } from "@src/components/atoms";
import { EmptyPlaceholder, FloatingButton, HeaderBar, InputModal } from "@src/components/molecules";
import { ConfirmModal } from "@src/components/organism";
import { NavigatorParamList } from "@src/navigator";
import { Label, useStore } from "@src/store";

interface Props {
    labelString: string;
    onDeletePress: (event: GestureResponderEvent) => void;
    onPress: (event: GestureResponderEvent) => void;
}
const LabelManageItem: FC<Props> = ({ labelString, onDeletePress, onPress }) => {
    const { pallette } = useTheme();

    return (
        <Touchable
            onPress={onPress}
            accessibilityRole="button"
            flexDirection="row"
            alignItems="center"
            px={Spacing.small}
            py={Spacing.medium}
            mx={Spacing.medium}
        >
            <TagsIcon color={pallette.grey} />
            <Text flex={1} color={pallette.grey} px={Spacing.medium}>
                {labelString}
            </Text>
            <TrashIcon color={pallette.error.dark} touchable={{ onPress: onDeletePress }} />
        </Touchable>
    );
};

enum ModalKind {
    ShowLabelModal,
    ShowDeleteModal,
    HideModal,
}

interface ModalChangeAction {
    type: ModalKind;
    payload?: Label;
}

interface ModalState {
    visibleModal: ModalKind | null;
    label: Label | null;
}

const initialModalState: ModalState = {
    visibleModal: null,
    label: null,
};

const labelManageReducer = (state: ModalState, action: ModalChangeAction) => {
    const { type, payload } = action;
    switch (type) {
        case ModalKind.ShowLabelModal:
            return { visibleModal: type, label: payload || null };
        case ModalKind.ShowDeleteModal:
            return { visibleModal: type, label: payload || null };
        case ModalKind.HideModal:
            return { visibleModal: null, label: null };
        default:
            return state;
    }
};

export const LabelManageScreen: FC<NativeStackScreenProps<NavigatorParamList, Screens.labelManage>> = () => {
    const { pallette } = useTheme();
    const { t } = useTranslation();
    const { labels, addLabel, deleteLabel, updateLabel } = useStore();

    const [modalState, modalStateDispatch] = useReducer(labelManageReducer, initialModalState);

    const onSaveLabel = useCallback(
        (label: string) => {
            if (modalState?.label?.id) {
                updateLabel({ id: modalState?.label?.id, name: label });
            } else {
                addLabel({ id: nanoid(), name: label });
            }
        },
        [modalState?.label?.id]
    );

    const existingLabels = useMemo(() => {
        if (modalState?.label?.name) {
            return labels
                .filter((item) => item.name !== modalState?.label?.name)
                .map((item) => item.name.toLowerCase());
        }
        return labels.map((item) => item.name.toLowerCase());
    }, [modalState?.label?.name]);

    return (
        <SafeAreaBox bg={pallette.background}>
            <HeaderBar title={t("components.drawer.manageLabels")} />
            <FlatList
                data={labels}
                renderItem={({ item }) => (
                    <LabelManageItem
                        onPress={() => modalStateDispatch({ type: ModalKind.ShowLabelModal, payload: item })}
                        onDeletePress={() => modalStateDispatch({ type: ModalKind.ShowDeleteModal, payload: item })}
                        labelString={item.name}
                        key={item.id}
                    />
                )}
                keyExtractor={(item, index) => item.id || `${index}`}
                ListEmptyComponent={<EmptyPlaceholder text={t("screens.labelManage.noLabelsFound")} Icon={TagsIcon} />}
            />
            <FloatingButton onPress={() => modalStateDispatch({ type: ModalKind.ShowLabelModal })} />
            <InputModal
                initialValue={modalState?.label?.name || ""}
                onSave={onSaveLabel}
                isVisible={modalState.visibleModal === ModalKind.ShowLabelModal}
                onClose={() => modalStateDispatch({ type: ModalKind.HideModal })}
                existingValues={existingLabels}
            />
            <ConfirmModal
                title={t("common.confirm")}
                message={t("screens.labelManage.deleteLabelMessage")}
                primaryBtnText={t("common.delete")}
                isVisible={modalState.visibleModal === ModalKind.ShowDeleteModal}
                onClose={() => modalStateDispatch({ type: ModalKind.HideModal })}
                color={pallette.error.dark}
                onConfirmPress={() => {
                    deleteLabel(modalState?.label?.id as string);
                    modalStateDispatch({ type: ModalKind.HideModal });
                    showMessage({
                        message: t("screens.labelManage.labelDeleted"),
                        icon: <TrashIcon />,
                        backgroundColor: pallette.error.light,
                    });
                }}
            />
        </SafeAreaBox>
    );
};
