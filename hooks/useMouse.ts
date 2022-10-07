import { useEffect, useState } from 'react'

export const useMouse = (): { x: number; y: number } => {
	const [x, setX] = useState<number>(0)
	const [y, setY] = useState<number>(0)

	function init(event: MouseEvent) {
		if (typeof event === 'undefined') {
			setX(0)
			setY(0)
		}

		setX(event.pageX)
		setY(event.pageY)
	}

	useEffect(() => {
		window.addEventListener('mousemove', init)

		return () => window.removeEventListener('mousemove', init)
	}, [x, y])

	return {
		x: x,
		y: y,
	}
}
