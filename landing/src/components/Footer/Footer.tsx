import { component$ } from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";

/** Footer component of the landing page */
export const Footer = component$(() => {
    return (
        <footer className="bg-secondary-800 ">
            <div className="flex m-auto py-5 px-5 border-t align-middle border-secondary-500 text-secondary-100 text-sm flex-col md:flex-row container">
                <a href="/" className="flex-1">
                    <div className="mt-2 hover:text-secondary-300 duration-300">{t("common.copyRights")}</div>
                </a>
                <a href="/privacy_policy" className="mr-10">
                    <div className="mt-2 hover:text-secondary-300 duration-300">{t("common.privacyPolicy")}</div>
                </a>
                <a href="/terms_and_conditions">
                    <div className="mt-2 hover:text-secondary-300 duration-300">{t("common.termsAndConditions")}</div>
                </a>
            </div>
        </footer>
    );
});
