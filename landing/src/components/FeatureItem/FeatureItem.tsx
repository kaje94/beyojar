import { component$ } from "@builder.io/qwik";

interface Props {
    /** Title of the feature */
    title: string;
    /** Description of the feature */
    description: string;
}

/** Component to display each feature of the app */
export const FeatureItem = component$(({ title, description }: Props) => {
    return (
        <div className="flex flex-row max-w-md sm:mx-auto duration-300 transform hover:scale-105">
            <div className="mr-4">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                    <svg className="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
                    </svg>
                </div>
            </div>
            <div>
                <p className="mb-3 text-xl font-bold leading-5">{title}</p>
                <p className="mb-3 text-sm text-gray-800">{description}</p>
            </div>
        </div>
    );
});
