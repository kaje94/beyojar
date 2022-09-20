import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import ThemeProvider from "./src/providers/themeProvider";
import Navigation from "./src/navigator";

import "./src/lang/i18n";

export default function App() {
    const isLoadingComplete = useCachedResources();
    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <ThemeProvider>
                <SafeAreaProvider>
                    <Navigation />
                </SafeAreaProvider>
            </ThemeProvider>
        );
    }
}
