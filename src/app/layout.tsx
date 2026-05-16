import { Rubik } from 'next/font/google'

import type { PropsExtendChildren } from '@/types/common'
import type { Metadata, Viewport } from 'next'
import type { FC } from 'react'

import '@/styles/global.css'

const nextFont = Rubik({
	style: ['normal', 'italic'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-family',
	adjustFontFallback: false
})

export const metadata: Metadata = {
	title: 'next-blank',
	description: 'Next.js blank'
}

export const viewport: Viewport = {
	themeColor: '#FAFAFA',
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
	viewportFit: 'cover'
}

const RootLayout: FC<PropsExtendChildren> = ({ children }) => {
	return (
		<html lang="id">
			<body className={`${nextFont.variable}`}>
				<main className="mobile-container">{children}</main>
			</body>
		</html>
	)
}

export default RootLayout
