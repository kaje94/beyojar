import { component$ } from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";
import { StoreButtons } from "../StoreButtons";

/** Navigation bar component to be shown on pages other than the index page*/
export const Navbar = component$(() => {
    return (
        <div class="px-4 py-5 mx-auto container md:px-24 lg:px-8 border-b-2 border-gray-300">
            <div class="relative grid lg:grid-cols-2 ">
                <a href="/" className="flex items-center text-primary-900 duration-200 hover:text-secondary-600 w-min">
                    <img src="/images/favicon.ico" className="rounded-md" alt="Logo" />
                    <h1 className="ml-3 text-3xl font-bold text-left lg:text-4xl leading-relaxed">
                        {t("common.title")}
                    </h1>
                </a>
                <div class="flex items-center space-x-8 justify-start lg:justify-end mt-4 lg:mt-0">
                    <StoreButtons />
                </div>
            </div>
        </div>
    );
});
