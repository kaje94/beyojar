import { component$ } from "@builder.io/qwik";

/** Apple store and Google play store buttons */
export const StoreButtons = component$(() => {
    return (
        <>
            <a
                href="https://apps.apple.com/us/app/beyojar/id6443962955"
                className="w-32 transition duration-300 hover:shadow-lg transform hover:scale-105"
                target="_blank"
            >
                <picture>
                    <source srcSet="/images/app-store.avif" type="image/avif" />
                    <img
                        src="/images/app-store.png"
                        className="object-cover object-top w-full h-auto mx-auto"
                        alt="Apple app store download button"
                        width="128"
                        height="40"
                    />
                </picture>
            </a>
            <a
                href="https://play.google.com/store/apps/details?id=com.beyojar"
                className="w-32 transition duration-300 hover:shadow-lg transform hover:scale-105"
                target="_blank"
            >
                <picture>
                    <source srcSet="/images/google-play.avif" type="image/avif" />
                    <img
                        src="/images/google-play.png"
                        className="object-cover object-top w-full h-auto mx-auto"
                        alt="Google play store download button"
                        width="128"
                        height="40"
                    />
                </picture>
            </a>
        </>
    );
});
