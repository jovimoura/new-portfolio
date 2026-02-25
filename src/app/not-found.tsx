'use client'

import Link from 'next/link'
import { useLocalization } from '@/providers/localization-provider'

export default function NotFound() {
  const { localized } = useLocalization()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-3xl font-bold">{localized['not-found-title']}</h2>
      <p>{localized['not-found-description']}</p>
      <Link
        href="/"
        className="rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600"
      >
        {localized['not-found-return-home']}
      </Link>
    </div>
  )
}
