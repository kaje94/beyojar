import { component$ } from "@builder.io/qwik";
import { $translate as t } from "qwik-speak";

/** Navigation bar component to be shown on pages other than the index page*/
export const Navbar = component$(() => {
    return (
        <div class="px-4 py-5 mx-auto container md:px-24 lg:px-8 border-b-2 border-gray-300">
            <div class="relative grid lg:grid-cols-2">
                <a href="/" title="Company" class="flex items-center">
                    <img src="/favicon.ico" className="rounded-md" />
                    <h1 className="ml-3 text-3xl font-bold text-left lg:text-4xl  text-primary-900 leading-relaxed">
                        {t("common.title")}
                    </h1>
                </a>
                <div class="flex items-center space-x-8 justify-start lg:justify-end mt-4 lg:mt-0">
                    <a
                        href="https://apps.apple.com/us/app/beyojar/id6443962955"
                        className="w-32 transition duration-300 hover:shadow-lg transform hover:scale-105"
                        target="_blank"
                    >
                        <img
                            src="/app-store.png"
                            className="object-cover object-top w-full mx-auto"
                            alt="apple-app-store-download-button"
                        />
                    </a>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.beyojar"
                        className="w-32 transition duration-300 hover:shadow-lg transform hover:scale-105"
                        target="_blank"
                    >
                        <img
                            src="/google-play.png"
                            className="object-cover object-top w-full mx-auto"
                            alt="google-play-store-download-button"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
});
