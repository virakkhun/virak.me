import Image from 'next/image'
import BackpackWithNoShadow from '../public/images/backpack-no-shadow.png'

const About = () => {
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
							<p className='indent-4 text-justify'>
								I am currently working as a front-end developer at Uvacancy. I
								majored in Computer Science at Royal University of Phnom Penh. I
								have started in 2018 after graduated from high school in 2018. I
								am truly amazed by choosing Computer Science as my major. I am
								really grateful to join in this industry.
							</p>
							<p className='indent-4 text-justify'>
								I do{' '}
								<a href='#side' className='underline underline-offset-2'>
									side-project
								</a>{' '}
								sometimes to gain more khowledges and all that. I prefer to try
								new thing and dive deep into it.
							</p>
						</div>
					</div>
					<div className='w-1/2 flex justify-center items-center'>
						<div className='w-56 h-56'>
							<Image src={BackpackWithNoShadow} alt='Backpack with Shadow' />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default About
