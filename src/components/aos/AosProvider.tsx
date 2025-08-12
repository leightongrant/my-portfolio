import AOS from 'aos'
import { useEffect } from 'react'

function AosProvider({ children }) {
	useEffect(() => {
		AOS.init({ duration: 1500, once: true })
	}, [])
	return <>{children}</>
}

export default AosProvider
