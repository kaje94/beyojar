import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Footer } from "@src/components/Footer";
import { $translate as t } from "qwik-speak";

/**
 * Terms and condition page required for legal purposes.
 * Generated using freeprivacypolicy.com.
 * @link https://app.freeprivacypolicy.com/download/149cb4e3-2e6b-4d5e-98f6-cabc8b4d3dfe
 */
export default component$(() => {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-justify">
                <div className="container bg-gray-100 p-7 my-8 rounded-lg">
                    <h1 className="my-4 text-3xl text-left lg:text-4xl font-bold">{t("common.termsAndConditions")}</h1>
                    <p className="font-thin">{t("termsAndConditions.lastUpdated")}</p>
                    <p>{t("termsAndConditions.pleaseReadText")}</p>

                    <h1 className="mt-4 mb-2 text-3xl text-left lg:text-4xl">
                        {t("termsAndConditions.section1.title")}
                    </h1>
                    <h2 className="mt-2 mb-1 text-2xl text-left lg:text-2xl">
                        {t("termsAndConditions.section1.subSection1.title")}
                    </h2>
                    <p>{t("termsAndConditions.section1.subSection1.content")}</p>
                    <h2 className="mt-2 mb-1 text-2xl text-left lg:text-2xl">
                        {t("termsAndConditions.section1.subSection2.title")}
                    </h2>
                    <p>{t("termsAndConditions.section1.subSection2.description")}</p>
                    <ul className="list-disc pl-3">
                        {Array.from(Array(Number(t("termsAndConditions.section1.subSection2.itemsLength")))).map(
                            (_, i) => (
                                <li>
                                    <p>
                                        <strong>{t(`termsAndConditions.section1.subSection2.items.${i}.key`)}</strong>
                                        {` ${t(`termsAndConditions.section1.subSection2.items.${i}.value`)}`}
                                    </p>
                                </li>
                            )
                        )}
                    </ul>

                    <h1 className="my-4 text-3xl text-left lg:text-4xl">{t("termsAndConditions.section2.title")}</h1>
                    <p className="whitespace-pre-line">{t("termsAndConditions.section2.content")}</p>

                    <h1 className="my-4 text-3xl text-left lg:text-4xl">{t("termsAndConditions.section3.title")}</h1>
                    <p className="whitespace-pre-line">{t("termsAndConditions.section3.content")}</p>

                    <h1 className="my-4 text-3xl text-left lg:text-4xl">{t("termsAndConditions.section4.title")}</h1>
                    <p className="whitespace-pre-line">{t("termsAndConditions.section4.content")}</p>

                    <h1 className="my-4 text-3xl text-left lg:text-4xl">{t("termsAndConditions.section5.title")}</h1>
                    <p className="whitespace-pre-line">{t("termsAndConditions.section5.content")}</p>

                    <h1 className="my-4 text-3xl text-left lg:text-4xl">{t("termsAndConditions.section6.title")}</h1>
                    <p className="whitespace-pre-line">{t("termsAndConditions.section6.content")}</p>

                    <h1 className="my-4 text-3xl text-left lg:text-4xl">{t("termsAndConditions.section7.title")}</h1>
                    <p className="whitespace-pre-line">{t("termsAndConditions.section7.content")}</p>

                    <h1 className="my-4 text-3xl text-left lg:text-4xl">{t("termsAndConditions.section8.title")}</h1>
                    <p className="whitespace-pre-line">{t("termsAndConditions.section8.content")}</p>

                    <h1 className="my-4 text-3xl text-left lg:text-4xl">{t("termsAndConditions.section9.title")}</h1>
                    <p className="whitespace-pre-line">{t("termsAndConditions.section9.content")}</p>

                    <h1 className="my-4 text-3xl text-left lg:text-4xl">{t("termsAndConditions.section10.title")}</h1>
                    <p className="whitespace-pre-line">{t("termsAndConditions.section10.content")}</p>

                    <h1 className="mt-4 mb-2 text-3xl text-left lg:text-4xl">
                        {t("termsAndConditions.section11.title")}
                    </h1>
                    <h2 className="mt-2 mb-1 text-2xl text-left lg:text-2xl">
                        {t("termsAndConditions.section11.subSection1.title")}
                    </h2>
                    <p className="whitespace-pre-line">{t("termsAndConditions.section11.subSection1.content")}</p>
                    <h2 className="mt-2 mb-1 text-2xl text-left lg:text-2xl">
                        {t("termsAndConditions.section11.subSection2.title")}
                    </h2>
                    <p className="whitespace-pre-line">{t("termsAndConditions.section11.subSection2.content")}</p>

                    <h1 className="my-4 text-3xl text-left lg:text-4xl">{t("termsAndConditions.section12.title")}</h1>
                    <p className="whitespace-pre-line">{t("termsAndConditions.section12.content")}</p>

                    <h1 className="my-4 text-3xl text-left lg:text-4xl">{t("termsAndConditions.section13.title")}</h1>
                    <p className="whitespace-pre-line">{t("termsAndConditions.section13.content")}</p>

                    <h1 className="my-4 text-3xl text-left lg:text-4xl">{t("termsAndConditions.section14.title")}</h1>
                    <p className="whitespace-pre-line">{t("termsAndConditions.section14.content")}</p>
                    <ul className="list-disc pl-3">
                        <li>
                            <p>{t("termsAndConditions.section14.contactEmail", { email: "a.kajendran@gmail.com" })}</p>
                        </li>
                        <li>
                            <p>
                                {t("termsAndConditions.section14.byVisiting")}
                                <a href="https://www.beyojar.com" rel="external nofollow noopener" target="_blank">
                                    https://www.beyojar.com
                                </a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
});

export const head: DocumentHead = { title: "Beyojar: Terms & Conditions" };
