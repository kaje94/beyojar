import React, { useEffect } from "react";
import { AppState, AppStateStatus, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { focusManager, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as SplashScreen from "expo-splash-screen";

import { Navigation } from "@src/navigator";
import { ThemeProvider } from "@src/providers/themeProvider";

import "@src/lang/i18n";

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

function onAppStateChange(status: AppStateStatus) {
    if (Platform.OS !== "web") {
        focusManager.setFocused(status === "active");
    }
}

const App = () => {
    useEffect(() => {
        const subscription = AppState.addEventListener("change", onAppStateChange);
        return () => subscription.remove();
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <SafeAreaProvider>
                    <Navigation />
                </SafeAreaProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
};

// eslint-disable-next-line import/no-default-export
export default App;
