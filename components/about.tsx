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
				className='w-full flex flex-col justify-center gap-4 items-start'
			>
				<span className='flex items-center gap-2 max-w-fit text-center bg-gradient-to-br from-action/20 to-primary/20 p-1 rounded shadow-xl border border-action/20'>
					<a href='#about'>#about</a>
					<div className='w-5 h-5'>
						<Image src={BackpackWithNoShadow} alt='Backpack with no shadows' />
					</div>
				</span>
				<div className='flex md:flex-row flex-col items-center md:gap-0 gap-6'>
					<div className='md:w-1/2 w-full flex flex-col gap-2'>
						<div className='filter-200 text-action flex flex-col gap-2 p-4 border border-action/20 rounded-md dark:bg-action/20 bg-primary/20 backdrop-blur-lg'>
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

