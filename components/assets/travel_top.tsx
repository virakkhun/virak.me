import { ChevronUpIcon } from '@heroicons/react/20/solid'
import React from 'react'

const TravelTop: React.FC<{ style: string }> = ({ style }) => {
	const toTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return (
		<div className='fixed bottom-4 right-4'>
			<button
				onClick={toTop}
				className={`hide ${style} rounded-full h-8 w-8 flex justify-center items-center bg-action/20 dark:bg-primary/20 backdrop-blur-md border border-action/20`}
			>
				<ChevronUpIcon className='h-5 w-5' />
			</button>
		</div>
	)
}

export default TravelTop
