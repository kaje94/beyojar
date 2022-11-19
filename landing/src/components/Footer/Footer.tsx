import { component$ } from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";

/** Footer component of the landing page */
export const Footer = component$(() => {
    return (
        <footer className="bg-secondary-800 ">
            <div className="flex m-auto py-5 px-5 border-t align-middle border-secondary-500 text-secondary-100 text-sm flex-col md:flex-row justify-between container">
                <a href="/" className="mt-2 hover:text-secondary-300 duration-300 h-12 text-center leading-10">
                    {t("common.copyRights")}
                </a>
                <div className="h-full flex justify-center">
                    <a href="/privacy_policy" className="mt-2 mr-5 hover:text-secondary-300 duration-300 leading-10">
                        <div className="h-12">{t("common.privacyPolicy")}</div>
                    </a>
                    <a href="/terms_and_conditions" className="mt-2 hover:text-secondary-300 duration-300 leading-10">
                        <div className="h-12">{t("common.termsAndConditions")}</div>
                    </a>
                </div>
            </div>
        </footer>
    );
});
