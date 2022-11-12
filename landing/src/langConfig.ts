/* eslint-disable qwik/valid-lexical-scope */
import { $ } from "@builder.io/qwik";
import { TranslateFn, SpeakConfig } from "qwik-speak";

export const translateFn: TranslateFn = {
    loadTranslation$: $(async (lang: string, asset: string, url?: URL) => {
        /* Must contain the logic to load translation data */

        // E.g. Fetch translation data from json files in public dir or i18n/[lang]/[asset].json endpoint
        let endpoint = "";
        // Absolute urls on server
        if (typeof window === "undefined" && url) {
            endpoint = url.origin;
        }
        endpoint += `/i18n/${lang}/${asset}.json`;
        const data = await fetch(endpoint);
        return data.json();
    }),
};

export const config: SpeakConfig = {
    defaultLocale: { lang: "en-US" },
    supportedLocales: [{ lang: "en-US" }],
    assets: ["home", "common", "termsAndConditions", "privacyPolicy"],
};
