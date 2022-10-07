import { useEffect, useState } from 'react'

export const useScrollPercent = (): { percent: string } => {
	const [percent, setPercent] = useState<number>(0)

	function init() {
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop

		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight

		setPercent((winScroll / height) * 100)
	}

	useEffect(() => {
		window.addEventListener('scroll', init)
		return () => window.removeEventListener('scroll', init)
	}, [percent])

	return { percent: String(percent) }
}
