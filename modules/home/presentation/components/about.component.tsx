'use client'

import Image from 'next/image'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import Backpack from '../../../../public/images/backpack-no-shadow.png'

const About: React.FC<{ text: string }> = ({ text }) => {
	return (
		<>
			<div className='mt-10'>
				<div className='md:w-1/2 w-full mx-auto'>
					<div className='text-center dark:text-lightDefault text-default font-semibold flex flex-col gap-6 justify-center items-center p-4 border dark:border-secondary/50 border-lightSecondary/50 rounded-md dark:bg-lightPrimary/20 bg-primary/20 backdrop-blur-lg'>
						<div className='w-32 h-32'>
							<Image
								src={Backpack}
								alt='Backpack with Shadow'
								width={400}
								height={400}
							/>
						</div>
						<ReactMarkdown>{text}</ReactMarkdown>
					</div>
				</div>
			</div>
		</>
	)
}

export default About

