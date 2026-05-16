'use client'

import { ChevronDown, ChevronRight, Coins, Info, Tag, TrendingDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Header from '@/components/Header/Header'
import Modal from '@/components/Modal/Modal'

export default function AjukanPage() {
	const router = useRouter()
	const [selectedPeriod, setSelectedPeriod] = useState(12)
	const [isLoading, setIsLoading] = useState(false)
	const [currentAttempts, setCurrentAttempts] = useState(0)

	const [modalState, setModalState] = useState<{ isOpen: boolean; type: 'success' | 'failed' }>({
		isOpen: false,
		type: 'success'
	})

	useEffect(() => {
		// Cleanup any old keys to avoid confusion
		const oldKeys = ['loan_scenario', 'loan_attempts', 'loan_attempts_final']

		oldKeys.forEach((key) => window.localStorage.removeItem(key))
	}, [])

	const handleAjukan = () => {
		setIsLoading(true)

		// Read history from localStorage
		const historyRaw = window.localStorage.getItem('loan_history_v1') || '[]'
		let history: number[] = []

		try {
			history = JSON.parse(historyRaw)
		} catch (_e) {
			// invalid JSON, use empty array
		}

		// Success if length is even (0, 2, 4...)
		const isSuccess = history.length % 2 === 0

		// Record this attempt immediately
		history.push(Date.now())
		window.localStorage.setItem('loan_history_v1', JSON.stringify(history))

		// Update local state just for display if needed
		setCurrentAttempts(history.length)

		setTimeout(() => {
			setModalState({ isOpen: true, type: isSuccess ? 'success' : 'failed' })
			setIsLoading(false)
		}, 2000)
	}

	const handleCloseModal = () => {
		setModalState({ ...modalState, isOpen: false })

		if (modalState.type === 'success') {
			router.push('/')
		}
	}

	return (
		<div className={styles.container}>
			<Header
				title="Ajukan pinjaman"
				showBack
				rightIcons="sub"
			/>

			<div className={styles.content}>
				<div className={styles.sectionCard}>
					<div className={styles.sectionHeader}>
						<h3 className={styles.sectionTitle}>Jumlah Pinjaman</h3>
						<span className={styles.limitBadge}>Naik Limit {'>'}</span>
					</div>
					<p className={styles.helperText}>Masukkan jumlah antara Rp500.000-Rp4.700.000</p>
					<div className={styles.amountDisplay}>
						<span className={styles.amountValue}>Rp 4.000.000</span>
						<button
							type="button"
							className={styles.changeButton}>
							Ubah
						</button>
					</div>
					<div className={styles.discountInfo}>
						<Info
							size={14}
							style={{ marginRight: '8px' }}
						/>
						<span>Diskon Terbesar: Anda telah menghemat bunga Rp1.762.950</span>
					</div>
				</div>

				<div className={styles.sectionCard}>
					<div className={styles.row}>
						<span className={styles.label}>Hari Setiap Periode</span>
						<span className={styles.value}>1 Bulan</span>
					</div>
					<div className={styles.row}>
						<span className={styles.label}>Periode Cicilan</span>
						<div className={styles.valueWithIcon}>
							<span className={styles.value}>{selectedPeriod} Periode</span>
							<ChevronDown size={20} />
						</div>
					</div>
					<div className={styles.periodGrid}>
						{[3, 6, 9, 12].map((period) => (
							<button
								type="button"
								key={period}
								className={`${styles.periodItem} ${selectedPeriod === period ? styles.periodActive : ''}`}
								onClick={() => setSelectedPeriod(period)}>
								{period} Periode
							</button>
						))}
					</div>
				</div>

				<div className={styles.discountDetails}>
					<div className={styles.discountHeader}>
						<div className={styles.discountTitle}>
							<Coins
								size={20}
								className={styles.discountIcon}
							/>
							<span>Rincian Diskon</span>
						</div>
						<div className={styles.totalSavings}>
							Total Hemat <span>Rp1.762.950</span>
						</div>
					</div>
					<div className={styles.discountBody}>
						<div className={styles.discountRow}>
							<div className={styles.discountLabel}>
								<span className={styles.mainLabel}>
									Penurunan Bunga{' '}
									<span className={styles.percentageBadge}>
										<TrendingDown size={10} /> Diskon50%
									</span>
								</span>
								<span className={styles.subLabel}>Suku bunga terendah 0,4% 0,2%</span>
							</div>
							<span
								className={styles.discountValue}
								style={{ color: '#2ecc71' }}>
								-Rp1.679.000
							</span>
						</div>
						<div className={styles.discountRow}>
							<div className={styles.discountLabel}>
								<span className={styles.mainLabel}>
									Kupon{' '}
									<span className={styles.percentageBadge}>
										<Tag size={10} /> Diskon3%
									</span>
								</span>
								<span className={styles.subLabel}>Diskon maksimum diterapkan</span>
							</div>
							<div
								className={styles.valueWithIcon}
								style={{ color: '#2ecc71' }}>
								<span className={styles.discountValue}>-Rp83.950</span>
								<ChevronRight size={16} />
							</div>
						</div>
					</div>
				</div>

				<div className={styles.summary}>
					<span className={styles.label}>Jumlah Diterima</span>
					<div className={styles.valueWithIcon}>
						<span className={styles.value}>Rp4.000.000</span>
						<ChevronRight
							size={20}
							color="#9ca3af"
						/>
					</div>
				</div>
			</div>

			<div className={styles.footer}>
				<Button
					type="button"
					fullWidth
					className={styles.submitButton}
					onClick={handleAjukan}
					disabled={isLoading}>
					{isLoading ? (
						<div className={styles.loadingWrapper}>
							<div
								className="global-spinner-anim"
								style={{
									width: '18px',
									height: '18px',
									border: '2px solid rgba(255, 255, 255, 0.4)',
									borderTopColor: '#ffffff',
									borderRadius: '50%'
								}}
							/>
							<span>Memproses...</span>
						</div>
					) : (
						'Ajukan Sekarang'
					)}
				</Button>
			</div>

			<Modal
				isOpen={modalState.isOpen}
				onClose={handleCloseModal}
				title={modalState.type === 'success' ? 'Pengajuan Diterima' : 'Pengajuan Gagal'}>
				<div className={styles.modalContent}>
					{modalState.type === 'success' ? (
						<div className={styles.successMessage}>
							<div className={styles.successIcon}>✓</div>
							<p>pengajuan pinjaman sedang di tinjau, dana akan masuk dalam 1x24 jam</p>
							<Button
								fullWidth
								onClick={handleCloseModal}
								className={styles.modalButton}>
								Oke
							</Button>
						</div>
					) : (
						<div className={styles.failedMessage}>
							<div className={styles.failedIcon}>!</div>
							<p>pengajuan pinjaman gagal, silahkan ajukan pinjaman kembali</p>
							<Button
								fullWidth
								onClick={() => {
									setModalState({ ...modalState, isOpen: false })
									router.push('/')
								}}
								className={styles.modalButton}>
								Ajukan Lagi
							</Button>
						</div>
					)}
				</div>
			</Modal>

			{/* Debug Info (Can be removed later) */}
			<div style={{ fontSize: '10px', color: '#ccc', textAlign: 'center', marginTop: '20px', paddingBottom: '20px' }}>Attempt: {currentAttempts}</div>
		</div>
	)
}
