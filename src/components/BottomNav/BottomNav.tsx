'use client'

import { FileText, Gift, Home, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './BottomNav.module.css'
import PwaInstallButton from '@/components/ButtonPwaInstall/ButtonPwaInstall'

const BottomNav = () => {
	const pathname = usePathname()

	const navItems = [
		{ label: 'Beranda', icon: <Home size={24} />, path: '/' },
		{ label: 'Tagihan', icon: <FileText size={24} />, path: '/tagihan' },
		{ label: 'Hadiah', icon: <Gift size={24} />, path: '/hadiah' },
		{ label: 'Saya', icon: <User size={24} />, path: '/saya' }
	]

	return (
		<div>
			<div style={{ padding: '0 16px 4px' }}>
				<PwaInstallButton />
			</div>
			<nav className={styles.nav}>
				{navItems.map((item) => (
					<Link
						key={item.path}
						href={item.path as never}
						className={`${styles.navItem} ${pathname === item.path ? styles.active : ''}`}>
						{item.icon}
						<span className={styles.label}>{item.label}</span>
					</Link>
				))}
			</nav>
		</div>
	)
}

export default BottomNav
