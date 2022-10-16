import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";

// TODO: once there is more than one language file,
// Use a language detector and set the language automatically
// http://i18next.com/docs/ownplugin/#languagedetector

i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    fallbackLng: "en",
    resources: { en },
    debug: true,
});

export { i18n };
