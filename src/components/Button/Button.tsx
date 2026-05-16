import styles from './Button.module.css'

interface ButtonProps {
	children: React.ReactNode
	onClick?: () => void
	variant?: 'primary' | 'outline' | 'ghost'
	fullWidth?: boolean
	className?: string
	disabled?: boolean
	type?: 'button' | 'submit' | 'reset'
	style?: React.CSSProperties
}

const Button = ({ children, onClick, variant = 'primary', fullWidth = false, className = '', disabled = false }: ButtonProps) => {
	return (
		<button
			type="button"
			className={`${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''} ${className}`}
			onClick={onClick}
			disabled={disabled}>
			{children}
		</button>
	)
}

export default Button
