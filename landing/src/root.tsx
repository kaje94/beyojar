import { component$ } from "@builder.io/qwik";
import { QwikCity, RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city";
import { QwikSpeak } from "qwik-speak";
import { RouterHead } from "./components/router-head/router-head";
import { config, translateFn } from "./langConfig";

import "./global.css";

export default component$(() => {
    /**
     * The root of a QwikCity site always start with the <QwikCity> component,
     * immediately followed by the document's <head> and <body>.
     *
     * Dont remove the `<head>` and `<body>` elements.
     */
    return (
        <QwikSpeak config={config} translateFn={translateFn}>
            <QwikCity>
                <head>
                    <meta charSet="utf-8" />
                    <RouterHead />
                </head>
                <body lang="en">
                    <RouterOutlet />
                    <ServiceWorkerRegister />
                </body>
            </QwikCity>
        </QwikSpeak>
    );
});
