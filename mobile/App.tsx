import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "@src/navigator";
import ThemeProvider from "@src/providers/themeProvider";

// todo: move this hook into src
import useCachedResources from "./hooks/useCachedResources";

import "@src/lang/i18n";

const App = () => {
    const isLoadingComplete = useCachedResources();
    if (!isLoadingComplete) {
        return null;
    }
    return (
        <ThemeProvider>
            <SafeAreaProvider>
                <Navigation />
            </SafeAreaProvider>
        </ThemeProvider>
    );
};

export default App;
