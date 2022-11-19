import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { FeatureItem } from "@src/components/FeatureItem";
import { Footer } from "@src/components/Footer";
import { Github } from "@src/components/icons/Github";
import { StoreButtons } from "@src/components/StoreButtons";
import { $translate as t } from "qwik-speak";

export default component$(() => {
    return (
        <>
            <main className="flex flex-col items-center justify-center bg-gradient-to-b from-primary-300 to-secondary-500">
                <section className="px-4 py-16 mx-auto container md:px-24 lg:px-8 lg:py-20 flex align-middle flex-col xl:min-h-screen">
                    <div className="flex flex-col items-center  w-full lg:flex-row flex-1">
                        <div className="lg:max-w-lg lg:pr-5 flex-1  animate-fadeInUp">
                            <div className="max-w-xl mb-3 xl:mb-6">
                                <h1 className="mb-1 xl:mb-4 -ml-1 text-5xl font-bold text-left lg:text-7xl  text-primary-900 leading-relaxed flex">
                                    {t("common.title")}
                                </h1>
                                <h2 className="text-left text-3xl text-secondary-800">
                                    <div className="overflow-hidden relative">
                                        <div>{t("home.header.line1")}</div>
                                        <div className="ml-11 absolute whitespace-nowrap overflow-hidden font-bold text-secondary-900 animate-textOpenClose">
                                            <div>{t("home.header.line1Word1")}</div>
                                            <div>{t("home.header.line1Word2")}</div>
                                            <div>{t("home.header.line1Word3")}</div>
                                        </div>
                                    </div>
                                    <div>{t("home.header.line2")}</div>
                                </h2>
                            </div>
                            <div className="flex items-center space-x-3">
                                <StoreButtons />
                            </div>
                        </div>
                        <div className="flex items-center justify-center lg:justify-end flex-1 lg:flex-none mt-32 mb-16  xl:my-16">
                            <div className="w-2/5 duration-300 delay-150 transform hover:-translate-x-20 animate-fadeInLeft">
                                <picture>
                                    <source srcSet="/images/product-shot-android.avif" type="image/avif" />
                                    <img
                                        className="object-cover scale-110 w-full"
                                        src="/images/product-shot-android.png"
                                        alt="Android product shot"
                                        width="346"
                                        height="707"
                                    />
                                </picture>
                            </div>
                            <div className="w-5/12 -ml-6 lg:-ml-16 duration-300 delay-300 transform hover:translate-x-20 animate-fadeInRight">
                                <picture>
                                    <source srcSet="/images/product-shot-iphone.avif" type="image/avif" />
                                    <img
                                        className="object-cover scale-125"
                                        src="/images/product-shot-iphone.png"
                                        alt="Iphone product shot"
                                        width="420"
                                        height="850"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className={`flex-col w-full h-[500px] bg-cover bg-fixed bg-center flex justify-center items-center bg-[url('/images/parallax.avif')]`}
                >
                    <div className="flex mt-20 mb-10 ">
                        <h1 className="text-5xl font-sans font-semibold drop-shadow-lg">{t("home.github.title")}</h1>
                        <span className="h-full flex items-center ml-5 w-10">
                            <Github />
                        </span>
                    </div>

                    <span className="text-center font-bold my-20 text-2xl">
                        <a href="https://github.com/kaje94/beyojar" target="_blank">
                            <h2 className="duration-300  hover:text-secondary-700 drop-shadow-2xl">
                                {t("home.github.sourceCode")}
                            </h2>
                        </a>
                        <hr className="my-4 border-secondary-600" />
                        <a href="https://github.com/kaje94/beyojar/issues/new" target="_blank">
                            <h2 className="duration-300 hover:text-secondary-700 drop-shadow-2xl">
                                {t("home.github.featureRequest")}
                            </h2>
                        </a>
                        <hr className="my-4 border-secondary-600" />
                        <a href="https://github.com/kaje94/beyojar/issues/new" target="_blank">
                            <h2 className="duration-300 hover:text-secondary-700 drop-shadow-2xl">
                                {t("home.github.reportBug")}
                            </h2>
                        </a>
                    </span>
                </section>

                <section className="bg-white w-full ">
                    <div className="px-4 py-16 lg:py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                        <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl mb-10 lg:mb-20">
                            <h2 className="max-w-lg mb-10  font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                <span>
                                    {t("home.features.header.line1")}
                                    <u className="text-primary-600">{t("home.features.header.line2")}</u>
                                </span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg px-0 md:px-10">
                                {t("home.features.description")}
                            </p>
                        </div>
                        <div className="grid max-w-screen-lg gap-10 row-gap-10 mx-auto lg:grid-cols-2">
                            {Array.from(Array(Number(t("home.features.itemsLength")))).map((_, i) => (
                                <FeatureItem
                                    title={t(`home.features.items.${i}.title`)}
                                    description={t(`home.features.items.${i}.description`)}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
});

const title = "Beyojar";
const description = "An open source notes taking app to organize your life better";

export const head: DocumentHead = {
    title,
    meta: [
        { name: "og:title", content: title, key: "og:title" },
        { name: "twitter:title", content: title, key: "twitter:title" },
        { name: "description", content: description, key: "description" },
        { name: "og:description", content: description, key: "og:description" },
        { name: "twitter:description", content: description, key: "twitter:description" },
    ],
};
