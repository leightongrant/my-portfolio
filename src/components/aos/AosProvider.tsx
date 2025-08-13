import AOS from 'aos'
import React, { useEffect } from 'react'
//Types
type AosProps = {
	children: React.ReactNode
}
function AosProvider({ children }: AosProps) {
	useEffect(() => {
		AOS.init({ duration: 1500, once: true })
	}, [])
	return <>{children}</>
}

export default AosProvider
