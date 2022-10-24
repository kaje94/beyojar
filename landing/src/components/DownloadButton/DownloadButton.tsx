import { component$ } from "@builder.io/qwik";
import * as icons from "~/components/icons";

interface Props {
    title: string;
    subtitle: string;
    iconName: "AppStore" | "GooglePlay";
}

/** Component to display each feature of the app */
export const DownloadButton = component$(({ title, subtitle, iconName }: Props) => {
    const Icon = icons[iconName];
    return (
        <a
            href="#"
            className="w-full sm:w-auto flex bg-gray-800 duration-300 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
            <Icon />
            <div className="text-left">
                <div className="mb-1 text-xs">{title}</div>
                <div className="-mt-1 font-sans text-sm font-semibold">{subtitle}</div>
            </div>
        </a>
    );
});
