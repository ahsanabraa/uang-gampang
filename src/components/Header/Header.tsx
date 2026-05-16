'use client'

import { ChevronLeft, Headset, MessageCircleMore } from 'lucide-react'
import { useRouter } from 'next/navigation'

import styles from './Header.module.css'

interface HeaderProps {
	title?: string
	showBack?: boolean
	rightIcons?: 'home' | 'sub'
}

const Header = ({ title, showBack = false, rightIcons = 'home' }: HeaderProps) => {
	const router = useRouter()

	return (
		<header className={`${styles.header} ${title ? styles.hasTitle : ''}`}>
			<div className={styles.left}>
				{showBack && (
					<button
						type="button"
						onClick={() => router.back()}
						className={styles.backButton}>
						<ChevronLeft size={28} />
					</button>
				)}
				{title && <h1 className={styles.title}>{title}</h1>}
			</div>
			<div className={styles.right}>
				<Headset
					size={24}
					className={styles.icon}
				/>
				{rightIcons === 'home' && (
					<MessageCircleMore
						size={24}
						className={styles.icon}
					/>
				)}
			</div>
		</header>
	)
}

export default Header
