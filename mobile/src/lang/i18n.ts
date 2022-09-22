/* eslint-disable import/extensions */
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import en from "./en.json";

// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector

// Can use the following to automatically detect language in react-native
// https://github.com/DylanVann/i18next-react-native-language-detector
// https://github.com/0xClpz/i18next-react-native-async-storage

i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    fallbackLng: "en",
    resources: { en },
    debug: true,
});

export { i18n };
