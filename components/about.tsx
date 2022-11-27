import Image from 'next/image'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import BackpackWithNoShadow from '../public/images/backpack-no-shadow.png'

const About: React.FunctionComponent<{ text: string }> = ({ text }) => {
	useIntersectionObserver({
		className: 'rotation',
		target: '.backpack',
	})

	return (
		<>
			<div
				id='about'
				className='w-full flex flex-col justify-center gap-4 items-start '
			>
				<div className='flex flex-col-reverse items-center gap-6 text-[1.3rem]'>
					<div className='md:w-3/4 w-full flex flex-col gap-2'>
						<div className='dark:text-lightDefault text-default flex flex-col gap-2 p-4 border dark:border-secondary/50 border-lightSecondary/50 rounded-md dark:bg-lightPrimary/20 bg-primary/20 backdrop-blur-lg'>
							<ReactMarkdown>{text}</ReactMarkdown>
						</div>
					</div>
					<div className='w-1/2 flex justify-center items-center'>
						<div className='w-56 h-56 backpack'>
							<Image src={BackpackWithNoShadow} alt='Backpack with Shadow' />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default About

