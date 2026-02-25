'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Locale } from 'date-fns/locale'
import { enUS, es as esES, ptBR } from 'date-fns/locale'
import localization from '@/localization.json'
import { ReactNode } from 'react'

type LocalizationJSON = typeof localization
export type LocalizationKey = keyof LocalizationJSON
export type LocaleOption = 'pt-BR' | 'es-ES' | 'en-US'

type LocalizedStrings = Record<LocalizationKey, string>

interface LocalizationState {
  locale: LocaleOption
  setLocale: (locale: LocaleOption) => void
  localizer: Locale
  normalized_locale: string
  localized: LocalizedStrings
}

const getLocalizer = (locale: LocaleOption): Locale => {
  switch (locale) {
    case 'pt-BR':
      return ptBR
    case 'es-ES':
      return esES
    default:
      return enUS
  }
}

const getLocalizedStrings = (locale: LocaleOption): LocalizedStrings => {
  const dictionary = {} as LocalizedStrings

  for (const key in localization) {
    dictionary[key as LocalizationKey] = localization[key as LocalizationKey][locale]
  }

  return dictionary
}

const initialState = {
  locale: 'pt-BR' as LocaleOption,
  localizer: getLocalizer('pt-BR'),
  normalized_locale: 'pt_BR',
  localized: getLocalizedStrings('pt-BR'),
}

export const useLocalization = create<LocalizationState>()(
  persist(
    (set) => ({
      ...initialState,
      setLocale: (locale) =>
        set({
          locale,
          localizer: getLocalizer(locale),
          normalized_locale: locale.replace('-', '_'),
          localized: getLocalizedStrings(locale),
        }),
    }),
    {
      name: 'locale-storage',
      partialize: (state) => ({ locale: state.locale }),
      onRehydrateStorage: () => (state) => {
        if (!state?.locale) return
        const locale = state.locale as string
        const normalized: LocaleOption =
          locale === 'en' ? 'en-US' : locale === 'pt' ? 'pt-BR' : locale === 'es' ? 'es-ES' : locale as LocaleOption
        if (['pt-BR', 'en-US', 'es-ES'].includes(normalized)) {
          useLocalization.getState().setLocale(normalized)
        }
      },
    }
  )
)

export function LocalizationProvider({ children }: { children: ReactNode }) {
  return <>{children}</>
}