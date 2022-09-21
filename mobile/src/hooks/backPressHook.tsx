import { DependencyList, useEffect } from "react";
import { BackHandler } from "react-native";

export const useBackPress = (props: {
    dependencies: DependencyList;
    callback: () => void;
    condition?: () => boolean;
}) => {
    const { dependencies = [], callback, condition = () => true } = props;
    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (condition()) {
            const backAction = () => {
                callback();
                return true;
            };
            const backHandler = BackHandler.addEventListener(
                "hardwareBackPress",
                backAction
            );
            return () => backHandler.remove();
        }
    }, [...dependencies, callback, condition]);
};
