'use server'

import { getIronSession, IronSession, SessionOptions } from 'iron-session'
import { cookies } from 'next/headers'

import { z } from 'zod'

const preferencesSchema = z.object({
  language: z.enum(['es-ES', 'pt-BR', 'en-US']).optional().default('en-US')
})

export type Preferences = z.infer<typeof preferencesSchema>

export async function getPreferences<T = IronSession<Preferences>>(selector?: keyof Preferences) {
  const cookieStore = await cookies()
  const preferences = await getIronSession<Preferences>(cookieStore, {
    ttl: 0,
    password: process.env.COOKIES_SECRET || '',
    cookieName: 'preferences'
  })
  preferences.language = preferences.language ?? 'en-US'
  if (selector) return preferences[selector] as T
  return preferences as T
}

export async function setPreferences(extender: Partial<Preferences>) {
  const preferences: any = await getPreferences()
  Object.keys(extender).forEach((key) => {
    preferences[key] = (extender as any)[key]
  })
  await preferences.save()
}

export async function toggleLocalization(locale: Preferences['language']) {
  if (locale) await setPreferences({ language: locale ?? 'en-US' })
  return locale
}