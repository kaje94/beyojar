import { DependencyList, useEffect } from "react";

import { BackHandler } from "react-native";

/** Hook that fires a given callback function when back button is pressed */
export const useBackPress = (props: {
    /** Callback function to be fired */
    callback: () => void;
    /** Optional condition to check whether or not to call the function */
    condition?: () => boolean;
    /** Dependencies that will reset the hook */
    dependencies?: DependencyList;
}) => {
    const { dependencies = [], callback, condition = () => true } = props;
    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (condition()) {
            const backAction = () => {
                callback();
                return true;
            };
            const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
            return () => backHandler.remove();
        }
    }, [...dependencies, callback, condition]);
};
