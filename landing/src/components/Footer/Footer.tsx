import { component$ } from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";

/** Footer component of the landing page */
export const Footer = component$(() => {
    return (
        <footer className="bg-gray-800  w-full">
            <div className="pt-2">
                <div className="flex justify-between pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl">
                    <a href="/">
                        <div className="mt-2 hover:text-gray-500 duration-300">{t("common.copyRights")}</div>
                    </a>
                    <a href="/privacy_policy">
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
