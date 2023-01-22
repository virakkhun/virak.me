import { useEffect, useState } from 'react'

export const useWindowSize = (): { width: number; height: number } => {
	const [width, setWidth] = useState<number>(0)
	const [height, setHeight] = useState<number>(0)

	function init() {
		setWidth(document.body.clientWidth)
		setHeight(document.body.clientHeight)
	}

	useEffect(() => {
		init()
	}, [width, height])

	return {
		width: width,
		height: height,
	}
}

