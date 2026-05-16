'use client'

import styles from './Modal.module.css'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	title?: string
	children: React.ReactNode
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
	if (!isOpen) {
		return null
	}

	return (
		<div
			className={styles.overlay}
			onClick={onClose}
			onKeyDown={undefined}
			role="presentation">
			<div
				className={styles.modal}
				onClick={(e) => e.stopPropagation()}
				onKeyDown={undefined}
				role="dialog">
				{title && <div className={styles.header}>{title}</div>}
				<div className={styles.body}>{children}</div>
			</div>
		</div>
	)
}

export default Modal
