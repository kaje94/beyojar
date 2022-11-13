import { component$ } from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";

/** Footer component of the landing page */
export const Footer = component$(() => {
    return (
        <footer className="bg-gray-800  w-full">
            <div className="pt-2">
                <div className="flex pb-5  m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row container">
                    <a href="/" className="flex-1">
                        <div className="mt-2 hover:text-gray-500 duration-300">{t("common.copyRights")}</div>
                    </a>
                    <a href="/privacy_policy" className="mr-10">
                        <div className="mt-2 hover:text-gray-500 duration-300">{t("common.privacyPolicy")}</div>
                    </a>
                    <a href="/terms_and_conditions">
                        <div className="mt-2 hover:text-gray-500 duration-300">{t("common.termsAndConditions")}</div>
                    </a>
                </div>
            </div>
        </footer>
    );
});
