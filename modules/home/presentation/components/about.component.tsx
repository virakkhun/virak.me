import Image from 'next/image'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import useIntersectionObserver from '../../../../hooks/useIntersectionObserver'
import BackpackWithNoShadow from '../../../../public/images/backpack-no-shadow.png'
import CoreContainer from '../../../../utils/modules/container/presentation/core-container.component'

const About: React.FC<{ text: string }> = ({ text }) => {
	useIntersectionObserver({
		className: 'rotation',
		target: '.backpack',
	})

	return (
		<>
			<div className='mt-10'>
				<CoreContainer>
					<div className='md:w-1/2 w-full mx-auto'>
						<div className='text-center dark:text-lightDefault text-default font-semibold flex flex-col gap-6 justify-center items-center p-4 border dark:border-secondary/50 border-lightSecondary/50 rounded-md dark:bg-lightPrimary/20 bg-primary/20 backdrop-blur-lg'>
							<div className='w-32 h-32 backpack'>
								<Image src={BackpackWithNoShadow} alt='Backpack with Shadow' />
							</div>
							<ReactMarkdown>{text}</ReactMarkdown>
						</div>
					</div>
				</CoreContainer>
			</div>
		</>
	)
}

export default About

