import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header, SubHeader, Paragraph } from "@src/components/Document/Document";
import { Footer } from "@src/components/Footer";
import { Navbar } from "@src/components/Navbar";
import { $translate as t } from "qwik-speak";

/**
 * Privacy policy page required for legal purposes by Apple store.
 * Generated using freeprivacypolicy.com.
 * @link https://app.freeprivacypolicy.com/download/1fa6975e-ba9c-4faa-a3bb-127013f5944e
 */
export default component$(() => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center  text-justify">
                <div className="container bg-secondary-50 p-7 my-8 rounded-lg border">
                    <h1 className="my-4 text-3xl text-left lg:text-4xl font-bold text-secondary-900">
                        {t("common.privacyPolicy")}
                    </h1>
                    <p className="font-thin">{t("privacyPolicy.lastUpdated")}</p>
                    <Paragraph text={t("privacyPolicy.description")} />
                    <Header text={t("privacyPolicy.section1.title")} />
                    <SubHeader text={t("privacyPolicy.section1.subSection1.title")} />
                    <Paragraph text={t("privacyPolicy.section1.subSection1.content")} />
                    <SubHeader text={t("privacyPolicy.section1.subSection2.title")} />
                    <Paragraph text={t("privacyPolicy.section1.subSection2.content")} />
                    <ul className="list-disc pl-3">
                        {Array.from(Array(Number(t("privacyPolicy.section1.subSection2.itemsLength")))).map((_, i) => (
                            <li>
                                <p>
                                    <strong>{t(`privacyPolicy.section1.subSection2.items.${i}.key`)}</strong>
                                    <span> </span>
                                    {t(`privacyPolicy.section1.subSection2.items.${i}.value`)}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <Header text={t("privacyPolicy.section2.title")} />
                    <SubHeader text={t("privacyPolicy.section2.subSection1.title")} />
                    <Paragraph text={t("privacyPolicy.section2.subSection1.content")} />
                    <SubHeader text={t("privacyPolicy.section2.subSection2.title")} />
                    <Paragraph text={t("privacyPolicy.section2.subSection2.description")} />
                    <ul className="list-disc pl-3">
                        {Array.from(Array(Number(t("privacyPolicy.section2.subSection2.itemsLength")))).map((_, i) => (
                            <li>
                                <p>{t(`privacyPolicy.section2.subSection2.items.${i}`)}</p>
                            </li>
                        ))}
                    </ul>
                    <Paragraph text={t("privacyPolicy.section2.subSection2.description2")} />
                    <ul className="list-disc pl-3">
                        {Array.from(Array(Number(t("privacyPolicy.section2.subSection2.itemsLength2")))).map((_, i) => (
                            <li>
                                <p>{t(`privacyPolicy.section2.subSection2.items2.${i}`)}</p>
                            </li>
                        ))}
                    </ul>
                    <SubHeader text={t("privacyPolicy.section2.subSection3.title")} />
                    <Paragraph text={t("privacyPolicy.section2.subSection3.content")} />
                    <SubHeader text={t("privacyPolicy.section2.subSection4.title")} />
                    <Paragraph text={t("privacyPolicy.section2.subSection4.content")} />
                    <SubHeader text={t("privacyPolicy.section2.subSection5.title")} />
                    <Paragraph text={t("privacyPolicy.section2.subSection5.content")} />
                    <SubHeader text={t("privacyPolicy.section2.subSection6.title")} />
                    <h3 className="text-xl"> {t("privacyPolicy.section2.subSection6.subSection1.title")}</h3>
                    <Paragraph text={t("privacyPolicy.section2.subSection6.subSection1.content")} />
                    <h3 className="text-xl">{t("privacyPolicy.section2.subSection6.subSection2.title")}</h3>
                    <Paragraph text={t("privacyPolicy.section2.subSection6.subSection2.content")} />

                    <h3 className="text-xl">{t("privacyPolicy.section2.subSection6.subSection3.title")}</h3>
                    <Paragraph text={t("privacyPolicy.section2.subSection6.subSection3.content")} />
                    <ul className="list-disc pl-3">
                        {Array.from(Array(Number(t("privacyPolicy.section2.subSection6.subSection3.itemsLength")))).map(
                            (_, i) => (
                                <li>
                                    <p>{t(`privacyPolicy.section2.subSection6.subSection3.items.${i}`)}</p>
                                </li>
                            )
                        )}
                    </ul>
                    <SubHeader text={t("privacyPolicy.section2.subSection7.title")} />
                    <Paragraph text={t("privacyPolicy.section2.subSection7.content")} />
                    <Header text={t("privacyPolicy.section3.title")} />
                    <Paragraph text={t("privacyPolicy.section3.content")} />
                    <Header text={t("privacyPolicy.section4.title")} />
                    <Paragraph text={t("privacyPolicy.section4.content")} />
                    <Header text={t("privacyPolicy.section5.title")} />
                    <Paragraph text={t("privacyPolicy.section5.content")} />
                    <Header text={t("privacyPolicy.section6.title")} />
                    <Paragraph text={t("privacyPolicy.section6.content")} />
                    <ul className="list-disc pl-3">
                        <li>{t("privacyPolicy.section6.contactEmail", { email: "a.kajendran@gmail.com" })}</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
});

const title = "Beyojar: Privacy Policy";
const description = "This privacy policy page contains information on how Beyojar handles customer data";

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
