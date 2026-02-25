import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LocaleState {
  locale: "en" | "pt" | "es";
  setLocale: (locale: "en" | "pt" | "es") => void;
}

export const useLocaleStore = create<LocaleState>()(
  persist(
    (set) => ({
      locale: "pt",
      setLocale: (locale: "en" | "pt" | "es") => set({ locale }),
    }),
    {
      name: "locale-storage",
    }
  )
);
