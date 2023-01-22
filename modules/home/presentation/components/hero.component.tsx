import Image from 'next/image'
import TvAsset from '../../../../components/assets/tv'
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
					<p className='dark:text-lightDefault text-default text-[1.2rem] font-bold rounded-md bg-gradient-to-r from-secondary/50 to-action/20 border border-action/20 backdrop-blur-md p-2'>
						{description}
					</p>
				</div>
				<div className='relative w-56 h-56 ml-24'>
					<TvAsset isShadow={true} style='w-full h-full' />
					<p className='flex flex-col items-center gap-1 absolute top-24 dark:text-lightDefault text-default left-3 very-small-text'>
						<span>TypeScript</span>
						<span>Nuxt 🥷 Next</span>
						<span>Express</span>
					</p>
				</div>
			</div>
			<TvAsset
				isShadow={false}
				style='absolute top-16 md:right-32 right-12 md:w-16 w-8 md:h-16 h-8 rotate-45 hover:rotate-0 transition-all duration-1000 hover:scale-110 filter-100'
			/>

			<TvAsset
				isShadow={false}
				style='absolute top-32 md:left-32 left-12 md:w-16 w-8 md:h-16  h-8 -rotate-45 hover:rotate-0 transition-all duration-1000 hover:scale-110 filter-100'
			/>
		</div>
	)
}

export default HomeHeroComponent

