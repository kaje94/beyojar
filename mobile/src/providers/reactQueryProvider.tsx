import React, { PropsWithChildren, useEffect } from "react";
import { AppState, AppStateStatus, Platform } from "react-native";
import { focusManager, QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const onAppStateChange = (status: AppStateStatus) => {
    if (Platform.OS !== "web") {
        focusManager.setFocused(status === "active");
    }
};

export const ReactQueryProvider = ({ children }: PropsWithChildren) => {
    useEffect(() => {
        const subscription = AppState.addEventListener("change", onAppStateChange);
        return () => subscription.remove();
    }, []);

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
