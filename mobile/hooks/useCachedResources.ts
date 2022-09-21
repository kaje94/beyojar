/* eslint-disable */
// TODO: need to use react-query
import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

const fontsFolderPath = "../src/assets/fonts/";

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    // Load any resources or data that we need prior to rendering the app
    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();

                // Load fonts
                await Font.loadAsync({
                    ...FontAwesome.font,
                    "rubik-light": require(fontsFolderPath + "Rubik-Light.ttf"),
                    "rubik-regular": require(fontsFolderPath +
                        "Rubik-Regular.ttf"),
                    "rubik-medium": require(fontsFolderPath +
                        "Rubik-Medium.ttf"),
                    "rubik-bold": require(fontsFolderPath + "Rubik-Bold.ttf"),
                });
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
}
