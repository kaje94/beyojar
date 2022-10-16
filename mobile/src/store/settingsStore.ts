import { ColorSchemeName } from "react-native";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

import { persistHelper } from "@src/common/helpers";

interface SettingsState {
    /** Selected theme (Light/Dark/Default) */
    persistedTheme: ColorSchemeName;
    /** Updated theme value persisted in the store */
    setPersistedTheme: (theme: ColorSchemeName) => void;
}

/** Zustand hook to manage settings state */
export const useSettingsStore = create<SettingsState>()(
    devtools(
        persist(
            (set) => ({
                persistedTheme: null,
                setPersistedTheme: (theme) => set(() => ({ persistedTheme: theme })),
            }),
            { getStorage: () => persistHelper, name: "settings-storage" }
        )
    )
);
