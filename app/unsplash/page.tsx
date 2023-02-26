import { Metadata } from 'next'
import { BsPatchCheckFill, BsMap } from 'react-icons/bs'
import { FaUnsplash } from 'react-icons/fa'
import { UnsplashController } from '../../modules/unsplash/app/unsplash.controller'

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Unsplash - Virak Khun',
		colorScheme: 'dark light',
		themeColor: '#1A1A1A',
		twitter: {
			card: 'summary_large_image',
			title: 'Home - Virak Khun',
		},
	}
}

export default async function UnsplashPage() {
	const data = await UnsplashController()
	return (
		<>
			<div>
				<div className='flex justify-between items-center mb-2 mt-10'>
					<p className='uppercase text-2xl font-bold'>My Unsplash</p>
				</div>
				<div
					className={`rounded-md dark:bg-default bg-lightDefault dark:text-lightDefault text-default p-4 w-full relative`}
				>
					<div className='flex items-center gap-4'>
						<a href={data?.data!.links.html} target='_blank' rel='noreferrer'>
							<img
								src={data?.data!.profile_image.large}
								alt='Profile'
								className='w-20 h-20 rounded-full'
							/>
						</a>
						<div className='flex flex-col gap-2'>
							<p className='font-bold'>{data?.data!.name}</p>
							<p className='flex items-center gap-1'>
								<BsPatchCheckFill className='w-3 h-3 dark:fill-lightDefault fill-default' />
								<span className='text-sm'>
									{data?.data!.for_hire
										? 'Available for hire'
										: 'Not Available'}
								</span>
							</p>
							<p className='flex items-center gap-2'>
								<BsMap className='w-3 h-3 dark:fill-lightDefault fill-default' />
								<span className='text-sm'>{data?.data!.location}</span>
							</p>
						</div>
					</div>
					<div className='mt-4'>
						<p>{data?.data!.bio}</p>
					</div>

					<a
						href='https://unsplash.com/@khunvirak'
						className='flex items-center gap-2 absolute top-2 right-2'
					>
						<FaUnsplash className='dark:fill-action fill-lightAction w-5 h-5' />
					</a>

					<div className='mt-4'>
						<div className='flex items-center gap-4'>
							<div className='dark:bg-secondary bg-lightSecondary shadow-lg rounded-md p-4 flex md:flex-row flex-col md:w-auto w-full items-center gap-2'>
								<p className='text-default'>Total Downloads</p>
								<p className='px-2 py-1 rounded-md dark:bg-default bg-lightDefault backdrop-blur-md'>
									{data?.data!.downloads}
								</p>
							</div>
							<div className='dark:bg-secondary bg-lightSecondary  shadow-lg rounded-md p-4 flex md:flex-row flex-col md:w-auto w-full items-center gap-2'>
								<p className='text-default'>Total Photos</p>
								<p className='px-2 py-1 rounded-md dark:bg-default bg-lightDefault backdrop-blur-md'>
									{data?.data!.total_photos}
								</p>
							</div>
						</div>
					</div>

					<div className='mt-4'>
						<div className='flex flex-col items-center gap-2'>
							{data?.data!.photos.map((i, index) => (
								<div key={index}>
									<img
										src={i.urls.regular}
										alt={i.urls.regular}
										className={`rounded-md shadow-xl aspect-video object-cover ${
											index === 2 ? 'hidden' : 'block'
										}`}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

