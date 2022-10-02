import { DependencyList, useEffect, useRef } from "react";
import { useIsFocused } from "@react-navigation/native";

export const useTimeout = (callback: () => void, delay: number, dependencies: DependencyList) => {
    const timeoutRef = useRef<number>();
    const savedCallback = useRef(callback);
    const isFocused = useIsFocused();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (delay === 0) {
            savedCallback.current();
        } else if (delay > 0 && isFocused) {
            const tick = () => savedCallback.current();
            timeoutRef.current = window.setTimeout(tick, delay);
            return () => window.clearTimeout(timeoutRef.current);
        }
    }, [delay, isFocused, ...dependencies]);
    return timeoutRef;
};
