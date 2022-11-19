import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
    const head = useDocumentHead();
    const loc = useLocation();

    return (
        <>
            <title>{head.title}</title>

            <link rel="canonical" href={loc.href} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" type="image/x-icon" href="/images/favicon.ico?v=2" />

            <meta name="theme-color" content="#7ab17c" />
            <meta name="og:type" content="website" />
            <meta name="og:image" content="/images/social_preview.jpg" />
            <meta name="og:url" content="https://beyojar.com" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:domain" content="beyojar.com" />
            <meta name="twitter:url" content="https://beyojar.com" />
            <meta name="twitter:image" content="/images/social_preview.jpg" />

            {head.meta.map((m) => (
                <meta {...m} />
            ))}

            {head.links.map((l) => (
                <link {...l} />
            ))}

            {head.styles.map((s) => (
                <style {...s.props} dangerouslySetInnerHTML={s.style} />
            ))}
        </>
    );
});
