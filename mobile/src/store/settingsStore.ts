import { ColorSchemeName } from "react-native";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

import { persistHelper } from "@src/common/helpers";

interface SettingsState {
    /** Has user viewed the welcome/intro slides */
    introViewed: boolean;
    /** Selected theme (Light/Dark/Default) */
    persistedTheme: ColorSchemeName;
    /** Set whether the user has viewed the intro slides or not */
    setIntroViewed: (viewed: boolean) => void;
    /** Updated theme value persisted in the store */
    setPersistedTheme: (theme: ColorSchemeName) => void;
}

/** Zustand hook to manage settings state */
export const useSettingsStore = create<SettingsState>()(
    devtools(
        persist(
            (set) => ({
                introViewed: false,
                persistedTheme: null,
                setIntroViewed: (introViewed) => set(() => ({ introViewed })),
                setPersistedTheme: (theme) => set(() => ({ persistedTheme: theme })),
            }),
            { getStorage: () => persistHelper, name: "settings-storage" }
        )
    )
);
