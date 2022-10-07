import { useEffect, useState } from 'react'

export const useWindowSize = (): { width: number; height: number } => {
	const [width, setWidth] = useState<number>(0)
	const [height, setheight] = useState<number>(0)

	function init() {
		setWidth(document.body.clientWidth)
		setheight(document.body.clientHeight)
	}

	useEffect(() => {
		init()
	}, [width, height])

	return {
		width: width,
		height: height,
	}
}
