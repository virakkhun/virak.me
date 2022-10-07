import { useEffect, useState } from 'react'

export const useWindowScroll = (initState: number = 0): { y: number } => {
	const [y, setY] = useState<number>(initState)

	const initScroll = () => {
		setY(window.scrollY)
	}

	useEffect(() => {
		window.addEventListener('scroll', initScroll)
		return () => window.removeEventListener('scroll', initScroll)
	}, [y])

	return { y }
}
