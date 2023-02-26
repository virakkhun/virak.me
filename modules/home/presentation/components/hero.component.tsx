'use client'

import Image from 'next/image'
import Avatar from '../../../../public/images/Avatar.png'
import { type HomeHeroEntity } from '../../domain/entities/home-hero.entity'

const HomeHeroComponent: React.FC<HomeHeroEntity> = ({
	author,
	description,
	sub_description,
}) => {
	return (
		<div className='md:mt-24 mt-5 h-full relative'>
			<div className='flex flex-col justify-center items-center gap-6 w-full'>
				<div className='w-40 h-40'>
					<Image src={Avatar} alt='avatar' />
				</div>
				<div className='text-center flex flex-col gap-2'>
					<p className='text-[2.5rem] font-extrabold dark:text-lightDefault text-default'>
						{author}
					</p>
					<p className='dark:text-lightDefault text-default'>{description}</p>
					<p className='dark:text-lightDefault text-default'>
						{`"${sub_description}"`}
					</p>
				</div>
			</div>
		</div>
	)
}

export default HomeHeroComponent

