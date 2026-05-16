import type { MetadataRoute } from 'next'

const manifest = (): MetadataRoute.Manifest => {
	return {
		name: 'Uang Gampang',
		short_name: 'Uang Gampang',
		start_url: '/',
		id: 'uang-gampang',
		theme_color: '#0f172a',
		background_color: '#0f172a',
		display: 'standalone',
		scope: '/',
		categories: ['finance'],
		description: 'Pinjaman uang cepat dan mudah',
		orientation: 'portrait',
		icons: [
			{
				src: '/icons/icon-192x192.png',
				sizes: '192x192',
				type: 'image/png',
				purpose: 'maskable'
			},
			{
				src: '/icons/icon-512x512.png',
				sizes: '512x512',
				type: 'image/png'
			}
		],
		screenshots: [
			{
				src: '/images/home.jpeg',
				sizes: '1080x2340',
				type: 'image/jpeg'
			},
			{
				src: '/images/pengajuan.jpeg',
				sizes: '1080x2340',
				type: 'image/jpeg'
			}
		],
		lang: 'id-ID'
	}
}

export default manifest
