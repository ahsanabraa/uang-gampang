'use client'

import { Share2, ShieldAlert, ShieldCheck, Star, Zap } from 'lucide-react'
import Link from 'next/link'

import styles from './page.module.css'
import BottomNav from '@/components/BottomNav/BottomNav'
import Button from '@/components/Button/Button'
import Card from '@/components/Card/Card'
import Header from '@/components/Header/Header'

export default function Home() {
	return (
		<div className={styles.home}>
			<Header />

			<section className={styles.hero}>
				<div className={styles.stars}>
					<Star
						size={16}
						fill="currentColor"
					/>
					<Star
						size={16}
						fill="currentColor"
					/>
					<Star
						size={16}
						fill="currentColor"
					/>
					<Star
						size={16}
						fill="currentColor"
					/>
					<Star
						size={16}
						fill="currentColor"
					/>
				</div>
				<h2 className={styles.heroTitle}>LEBIH AMAN DENGAN UANG GAMPANG</h2>
				<p className={styles.heroSubtitle}>Bunga rendah • Pencairan cepat</p>
			</section>

			<Card className={styles.mainCard}>
				<span className={styles.limitLabel}>Limit Anda (Rp)</span>
				<h1 className={styles.limitAmount}>4.700.000</h1>
				<p className={styles.interestInfo}>Bunga harian 0,2%</p>

				<div className={styles.promoBadge}>
					<Zap
						size={14}
						fill="currentColor"
					/>
					<span>Pemotongan bunga hingga Rp1.679.000</span>
				</div>

				<Link
					href="/ajukan"
					style={{ width: '100%', display: 'block' }}>
					<Button fullWidth>Ajukan Pinjaman</Button>
				</Link>
			</Card>

			<Card className={styles.billCard}>
				<div className={styles.billHeader}>
					<h3 className={styles.billTitle}>Tagihan Belum Dibayar</h3>
					<span className={styles.billStatus}>36 hari tersisa</span>
				</div>
				<div className={styles.billFooter}>
					<div>
						<div className={styles.billAmount}>128.835</div>
						<div className={styles.billDueDate}>Tanggal Jatuh tempo : 18/06/2026</div>
					</div>
					<Button
						variant="primary"
						style={{ padding: '0.5rem 1.5rem' }}>
						Bayar
					</Button>
				</div>
			</Card>

			<div className={styles.footerLinks}>
				<div className={styles.footerLink}>
					<div className={styles.footerIcon}>
						<Share2 size={24} />
					</div>
					<span>Undang</span>
				</div>
				<div className={styles.footerLink}>
					<div className={styles.footerIcon}>
						<ShieldAlert size={24} />
					</div>
					<span>Hati2 Penipu</span>
				</div>
			</div>

			<div className={styles.compliance}>
				<div className={styles.complianceIcons}>
					<div style={{ fontWeight: 800, fontSize: '0.75rem' }}>TKB90 99,01%</div>
					<div style={{ borderLeft: '1px solid #ddd', height: '20px' }} />
					<ShieldCheck
						size={24}
						color="#22c55e"
					/>
					<div style={{ fontSize: '0.625rem', fontWeight: 600 }}>OJK</div>
				</div>
				<p className={styles.complianceText}>PT Indonesia Fintopia Technology Berizin dan Diawasi oleh: Otoritas Jasa Keuangan (OJK)</p>
			</div>

			<BottomNav />
		</div>
	)
}
