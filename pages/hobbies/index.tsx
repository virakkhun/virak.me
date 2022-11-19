import { useState } from 'react'
import { BsPatchCheckFill, BsMap } from 'react-icons/bs'
import { trpc } from '../../utils/trpc'
import { NextPage } from 'next'
import Head from 'next/head'
import Loading from '../../components/loading'

const FavIndex: NextPage = () => {
	const { data } = trpc.getUnsplashInfo.useQuery()
	const [isAmbient, setIsAmbient] = useState(false)

	if (!data) return <Loading text='Loading...' />

	return (
		<>
			<Head>
				<title>Photography</title>
				<meta property='og:site_name' content="Virak Khun's Portfolio" />
				<meta property='og:title' content='Virak Khun | Portfolio' />
				<meta property='og:url' content='https://virak-portfolio.vercel.app' />
				<meta property='og:type' content='website' />
				<meta
					property='og:description'
					content='I enjoy doing photography in my free time.'
				/>
				<meta
					property='og:image'
					content='https://my-image-upload-storage.s3.amazonaws.com/1665226426753banner.png'
				/>
				<meta name='twitter:title' content='Virak Khun | Portfolio' />
				<meta
					name='twitter:image'
					content='https://my-image-upload-storage.s3.amazonaws.com/1665226426753banner.png'
				/>
				<meta name='twitter:author' content='@virak' />
				<meta name='twitter:url' content='https://virak-portfolio.vercel.app' />
				<meta name='twitter:card' content='summary' />
				<meta
					name='twitter:description'
					content='I do photography on free time.'
				/>
				<meta
					name='description'
					content='I enjoy doing photography in my free time.'
				/>
			</Head>
			<div className={`mt-5 px-4 ${isAmbient ? 'filter-150' : ''}`}>
				<div className='flex justify-between items-center mb-2'>
					<p className='uppercase text-2xl font-bold'>My Unsplash</p>
					<button
						className='flex items-center gap-2'
						onClick={() => setIsAmbient(!isAmbient)}
					>
						<span>Ambient Light</span>
						<div className='w-8 h-4 rounded-full dark:bg-default bg-primary relative'>
							<div
								className={`absolute top-0 bg-white w-4 h-4 rounded-full ${
									isAmbient ? 'right-0' : 'left-0'
								}`}
							></div>
						</div>
					</button>
				</div>
				<div className='rounded-md dark:bg-secondary/20 bg-gray-600 text-white backdrop-blur-md p-4 w-full relative'>
					<div className='flex items-center gap-4'>
						<a href={data.links.html} target='_blank' rel='noreferrer'>
							<img
								src={data.profile_image.large}
								alt='Profile'
								className='w-20 h-20 rounded-full'
							/>
						</a>
						<div className='flex flex-col gap-2'>
							<p className='font-bold'>{data.name}</p>
							<p className='flex items-center gap-1'>
								<BsPatchCheckFill className='w-3 h-3 fill-default' />
								<span className='text-sm'>
									{data.for_hire ? 'Available for hire' : 'Not Available'}
								</span>
							</p>
							<p className='flex items-center gap-2'>
								<BsMap className='w-3 h-3 fill-default' />
								<span className='text-sm'>{data.location}</span>
							</p>
						</div>
					</div>
					<div className='mt-4'>
						<p>{data.bio}</p>
					</div>

					<div className='mt-4'>
						<div className='flex items-center gap-4'>
							<div className='dark:bg-secondary/50 bg-gray-700 shadow-lg rounded-md p-4 flex md:flex-row flex-col md:w-auto w-full items-center gap-2'>
								<p className='text-default'>Total Downloads</p>
								<p className='px-2 py-1 rounded-md bg-secondary/10 backdrop-blur-md'>
									{data.downloads}
								</p>
							</div>
							<div className='dark:bg-secondary/50 bg-gray-700 shadow-lg rounded-md p-4 flex md:flex-row flex-col md:w-auto w-full items-center gap-2'>
								<p className='text-default'>Total Photos</p>
								<p className='px-2 py-1 rounded-md bg-secondary/10 backdrop-blur-md'>
									{data.total_photos}
								</p>
							</div>
						</div>
					</div>

					<div className='mt-4'>
						<div className='flex flex-col gap-2'>
							{data.photos.map((i, index) => (
								<div key={index}>
									<img
										src={i.urls.regular}
										alt={i.urls.regular}
										className={`rounded-md shadow-xl w-full ${
											index === 1 ? 'hidden' : 'block'
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
export default FavIndex

