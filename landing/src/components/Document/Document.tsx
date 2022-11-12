import { component$, JSXChildren } from "@builder.io/qwik";

interface TextProps {
    text: JSXChildren;
}

/** Component to display titles within the document page */
export const Header = component$(({ text }: TextProps) => {
    return <h1 className="mt-4 mb-2 text-3xl text-left lg:text-4xl">{text}</h1>;
});

/** Component to display sub title within the document page */
export const SubHeader = component$(({ text }: TextProps) => {
    return <h1 className="mt-2 mb-1 text-2xl text-left lg:text-2xl">{text}</h1>;
});

/** Component to display paragraph text within the document page */
export const Paragraph = component$(({ text }: TextProps) => {
    return <h1 className="whitespace-pre-line">{text}</h1>;
});
