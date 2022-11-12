import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Footer } from "@src/components/Footer";
import { $translate as t } from "qwik-speak";

/**
 * Privacy policy page required for legal purposes by Apple store.
 * Generated using freeprivacypolicy.com.
 * @link https://app.freeprivacypolicy.com/download/1fa6975e-ba9c-4faa-a3bb-127013f5944e
 */
export default component$(() => {
    return (
        <>
            <div className="flex flex-col items-center justify-center  text-justify">
                <div className="container bg-gray-100 p-7 my-8 rounded-lg">
                    <h1 className="my-4 text-3xl text-left lg:text-4xl font-bold">{t("common.privacyPolicy")}</h1>
                    <p className="font-thin">{t("privacyPolicy.lastUpdated")}</p>
                    <p className="whitespace-pre-line">{t("privacyPolicy.description")}</p>
                    <h1 className="mt-4 mb-2 text-3xl text-left lg:text-4xl">{t("privacyPolicy.section1.title")}</h1>
                    <h2 className="mt-2 mb-1 text-2xl text-left lg:text-2xl">
                        {t("privacyPolicy.section1.subSection1.title")}
                    </h2>
                    <p>{t("privacyPolicy.section1.subSection1.content")}</p>
                    <h2 className="mt-2 mb-1 text-2xl text-left lg:text-2xl">
                        {t("privacyPolicy.section1.subSection2.title")}
                    </h2>
                    <p>{t("privacyPolicy.section1.subSection2.content")}</p>
                    <ul className="list-disc pl-3">
                        {Array.from(Array(Number(t("privacyPolicy.section1.subSection2.itemsLength")))).map((_, i) => (
                            <li>
                                <p>
                                    <strong>{t(`privacyPolicy.section1.subSection2.items.${i}.key`)}</strong>
                                    {` ${t(`privacyPolicy.section1.subSection2.items.${i}.value`)}`}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <h1 className="mt-4 mb-2 text-3xl text-left lg:text-4xl">{t("privacyPolicy.section2.title")}</h1>
                    <h2 className="mt-2 mb-1 text-2xl text-left lg:text-2xl">
                        {t("privacyPolicy.section2.subSection1.title")}
                    </h2>
                    <p className="whitespace-pre-line">{t("privacyPolicy.section2.subSection1.content")}</p>

                    <h2 className="mt-2 mb-1 text-2xl text-left lg:text-2xl">
                        {t("privacyPolicy.section2.subSection2.title")}
                    </h2>
                    <p>{t("privacyPolicy.section2.subSection2.description")}</p>
                    <ul className="list-disc pl-3">
                        {Array.from(Array(Number(t("privacyPolicy.section2.subSection2.itemsLength")))).map((_, i) => (
                            <li>
                                <p>{t(`privacyPolicy.section2.subSection2.items.${i}`)}</p>
                            </li>
                        ))}
                    </ul>
                    <p>{t("privacyPolicy.section2.subSection2.description2")}</p>
                    <ul className="list-disc pl-3">
                        {Array.from(Array(Number(t("privacyPolicy.section2.subSection2.itemsLength2")))).map((_, i) => (
                            <li>
                                <p>{t(`privacyPolicy.section2.subSection2.items2.${i}`)}</p>
                            </li>
                        ))}
                    </ul>

                    <h2 className="mt-2 mb-1 text-2xl text-left lg:text-2xl">
                        {t("privacyPolicy.section2.subSection3.title")}
                    </h2>
                    <p className="whitespace-pre-line">{t("privacyPolicy.section2.subSection3.content")}</p>

                    <h2 className="mt-2 mb-1 text-2xl text-left lg:text-2xl">
                        {t("privacyPolicy.section2.subSection4.title")}
                    </h2>
                    <p className="whitespace-pre-line">{t("privacyPolicy.section2.subSection4.content")}</p>

                    <h2 className="mt-2 mb-1 text-2xl text-left lg:text-2xl">
                        {t("privacyPolicy.section2.subSection5.title")}
                    </h2>
                    <p className="whitespace-pre-line">{t("privacyPolicy.section2.subSection5.content")}</p>

                    <h2 className="mt-2 mb-1 text-2xl text-left lg:text-2xl">
                        {t("privacyPolicy.section2.subSection6.title")}
                    </h2>
                    <h3 className="text-xl"> {t("privacyPolicy.section2.subSection6.subSection1.title")}</h3>
                    <p>{t("privacyPolicy.section2.subSection6.subSection1.content")}</p>
                    <h3 className="text-xl">{t("privacyPolicy.section2.subSection6.subSection2.title")}</h3>
                    <p>{t("privacyPolicy.section2.subSection6.subSection2.content")}</p>
                    <h3 className="text-xl">{t("privacyPolicy.section2.subSection6.subSection3.title")}</h3>
                    <p>{t("privacyPolicy.section2.subSection6.subSection3.content")}</p>
                    <ul className="list-disc pl-3">
                        {Array.from(Array(Number(t("privacyPolicy.section2.subSection6.subSection3.itemsLength")))).map(
                            (_, i) => (
                                <li>
                                    <p>{t(`privacyPolicy.section2.subSection6.subSection3.items.${i}`)}</p>
                                </li>
                            )
                        )}
                    </ul>
                    <h2 className="mt-2 mb-1 text-2xl text-left lg:text-2xl">
                        {t("privacyPolicy.section2.subSection7.title")}
                    </h2>
                    <p className="whitespace-pre-line">{t("privacyPolicy.section2.subSection7.content")}</p>

                    <h1 className="mt-4 mb-2 text-3xl text-left lg:text-4xl">{t("privacyPolicy.section3.title")}</h1>
                    <p>{t("privacyPolicy.section3.content")}</p>

                    <h1 className="mt-4 mb-2 text-3xl text-left lg:text-4xl">{t("privacyPolicy.section4.title")}</h1>
                    <p>{t("privacyPolicy.section4.content")}</p>

                    <h1 className="mt-4 mb-2 text-3xl text-left lg:text-4xl">{t("privacyPolicy.section5.title")}</h1>
                    <p>{t("privacyPolicy.section5.content")}</p>

                    <h1 className="mt-4 mb-2 text-3xl text-left lg:text-4xl">{t("privacyPolicy.section6.title")}</h1>
                    <p>{t("privacyPolicy.section6.content")}</p>
                    <ul className="list-disc pl-3">
                        <li>{t("privacyPolicy.section6.contactEmail", { email: "a.kajendran@gmail.com" })}</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
});

export const head: DocumentHead = {
    title: "Beyojar: Terms & Conditions",
};
