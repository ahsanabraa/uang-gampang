const OfflinePage = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
				gap: '1rem',
				fontFamily: 'var(--font-family), sans-serif',
				color: '#333333'
			}}>
			<h1>You are offline</h1>
			<p>Please check your internet connection and try again.</p>
		</div>
	)
}

export default OfflinePage
