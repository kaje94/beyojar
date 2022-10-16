import React from "react";

import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Navigation } from "@src/navigation";
import { ThemeProvider } from "@src/providers";

import "@src/lang/i18n";

SplashScreen.preventAutoHideAsync();

const App = () => {
    return (
        <ThemeProvider>
            <SafeAreaProvider>
                <Navigation />
            </SafeAreaProvider>
        </ThemeProvider>
    );
};

export default App;
