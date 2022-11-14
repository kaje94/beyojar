import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";

// Once there is more than one language file,
// Use a language detector and set the language automatically
// http://i18next.com/docs/ownplugin/#languagedetector

i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    debug: true,
    fallbackLng: "en",
    resources: { en },
});

export { i18n };
