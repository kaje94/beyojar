import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { DownloadButton } from "@src/components/DownloadButton";
import { FeatureItem } from "@src/components/FeatureItem";
import { Footer } from "@src/components/Footer";
import { Github } from "@src/components/icons/Github";
import { $translate as t } from "qwik-speak";

export default component$(() => {
    return (
        <>
            <main className="flex flex-col items-center justify-center bg-gray-50">
                <section className="flex flex-wrap items-center px-4 mx-auto w-full container pb-4 ">
                    <div className="px-3 w-full lg:w-2/5">
                        <div className="mx-auto mb-8 text-center lg:mx-0 lg:text-left">
                            <h1 className="mb-4 text-5xl font-bold text-left lg:text-5xl  text-teal-800 leading-relaxeds">
                                {t("common.title")}
                            </h1>
                            <h2 className="mb-4 text-2xl text-left lg:text-3xl">
                                {t("home.header.line1")}
                                <span className="font-bold">{t("home.header.line2")}</span>
                                {t("home.header.line3")}
                            </h2>
                        </div>
                        <div className=" items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            <DownloadButton
                                title={t("home.downloadButton.ios.title")}
                                subtitle={t("home.downloadButton.ios.store")}
                                iconName="AppStore"
                                url="https://apps.apple.com/us/app/beyojar/id6443962955"
                            />
                            <DownloadButton
                                title={t("home.downloadButton.android.title")}
                                subtitle={t("home.downloadButton.android.store")}
                                iconName="GooglePlay"
                                url="https://play.google.com/store/apps/details?id=com.beyojar"
                            />
                        </div>
                    </div>
                    <div className="px-3 mb-12 w-full lg:mb-0 lg:w-3/5">
                        <div className="flex justify-center items-center">
                            <img src="./product_shot.png" alt="beyojar-product-shot" />
                        </div>
                    </div>
                </section>

                <section
                    className="flex-col w-full h-[500px] bg-cover bg-fixed bg-center flex justify-center items-center"
                    style={{
                        backgroundImage:
                            "url(https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=880&q=80)",
                    }}
                >
                    <div className="flex items-center mt-20 mb-10 ">
                        <h1 className="text-slate-900 text-5xl font-sans font-semibold drop-shadow-lg">
                            {t("home.github.title")}
                        </h1>
                        <span className="h-full flex items-center ml-5 w-10">
                            <Github />
                        </span>
                    </div>

                    <span className="text-center font-bold my-20 text-slate-800">
                        <a href="https://github.com/kaje94/beyojar" target="_blank">
                            <h2 className="text-2xl duration-300  hover:text-slate-500 drop-shadow-2xl">
                                {t("home.github.sourceCode")}
                            </h2>
                        </a>
                        <hr className="my-4 border-slate-600" />
                        <a href="https://github.com/kaje94/beyojar/issues/new" target="_blank">
                            <h2 className="text-2xl duration-300 hover:text-slate-500 drop-shadow-2xl">
                                {t("home.github.featureRequest")}
                            </h2>
                        </a>
                        <hr className="my-4 border-slate-600" />
                        <a href="https://github.com/kaje94/beyojar/issues/new" target="_blank">
                            <h2 className="text-2xl duration-300 hover:text-slate-500 drop-shadow-2xl">
                                {t("home.github.reportBug")}
                            </h2>
                        </a>
                    </span>
                </section>
            </main>

            <section className="mb-8 text-gray-800 container my-24  px-6 lg:px-32  mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-4/12 mb-6 md:mb-0 px-3">
                        <h2 className="text-3xl font-bold mb-6">
                            {t("home.features.header.line1")}
                            <u className="text-teal-600">{t("home.features.header.line2")}</u>
                        </h2>

                        <p className="text-gray-500 mb-12">{t("home.features.description")}</p>
                    </div>
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 mb-6 mb-md-0 px-3">
                        <div className="flex flex-wrap">
                            {Array.from(Array(Number(t("home.features.itemsLength")))).map((_, i) => (
                                <FeatureItem
                                    title={t(`home.features.items.${i}.title`)}
                                    description={t(`home.features.items.${i}.description`)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
});

const title = "Beyojar";
const description = "An open source notes taking app to organize your life better";

export const head: DocumentHead = {
    title,
    links: [{ href: "URL", rel: "canonical" }],
    meta: [
        { name: "og:title", content: title, key: "og:title" },
        { name: "twitter:title", content: title, key: "twitter:title" },
        { name: "description", content: description, key: "description" },
        { name: "og:description", content: description, key: "og:description" },
        { name: "twitter:description", content: description, key: "twitter:description" },
    ],
};
