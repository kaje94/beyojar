import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";

import { Navigation } from "@src/navigator";
import { ReactQueryProvider } from "@src/providers/reactQueryProvider";
import { ThemeProvider } from "@src/providers/themeProvider";

import "@src/lang/i18n";

SplashScreen.preventAutoHideAsync();

const App = () => {
    return (
        <ReactQueryProvider>
            <ThemeProvider>
                <SafeAreaProvider>
                    <Navigation />
                </SafeAreaProvider>
            </ThemeProvider>
        </ReactQueryProvider>
    );
};

// eslint-disable-next-line import/no-default-export
export default App;
