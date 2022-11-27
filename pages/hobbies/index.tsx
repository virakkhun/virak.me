import { useState } from 'react'
import { BsPatchCheckFill, BsMap } from 'react-icons/bs'
import { FaUnsplash } from 'react-icons/fa'
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
				<meta property='og:url' content='https://virak.me' />
				<meta property='og:type' content='website' />
				<meta
					property='og:description'
					content='This is my photos on https://unsplash.com'
				/>
				<meta
					property='og:image'
					content={`https://images.unsplash.com/photo-1623053071809-80ed5bc65f2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80`}
				/>
				<meta name='twitter:title' content='Virak Khun | Portfolio' />
				<meta
					name='twitter:image'
					content={`https://images.unsplash.com/photo-1623053071809-80ed5bc65f2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80`}
				/>
				<meta name='twitter:author' content='@virak' />
				<meta name='twitter:url' content='https://virak.me' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta
					name='twitter:description'
					content='This is my photos on https://unsplash.com'
				/>
				<meta
					name='description'
					content='This is my photos on https://unsplash.com'
				/>
				<link rel='canonical' href='https://virak.me/hobbies' />
				<link rel='alternate' href='https://virak.me/hobbies' />
			</Head>
			<div className={`mt-5 md:px-4 ${isAmbient ? 'filter-150' : ''}`}>
				<div className='flex justify-between items-center mb-2'>
					<p className='uppercase text-2xl font-bold'>My Unsplash</p>
					<button
						className='flex items-center gap-2'
						onClick={() => setIsAmbient(!isAmbient)}
					>
						<span>Ambient Light</span>
						<div className='w-8 h-4 rounded-full dark:bg-default bg-lightDefault relative'>
							<div
								className={`absolute top-0 bg-white w-4 h-4 rounded-full ${
									isAmbient ? 'right-0' : 'left-0'
								}`}
							></div>
						</div>
					</button>
				</div>
				<div
					className={`rounded-md dark:bg-default bg-lightDefault dark:text-lightDefault text-default p-4 w-full relative ${
						isAmbient ? 'dark:bg-default/20 bg-lightDefault/20' : ''
					}`}
				>
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
								<BsPatchCheckFill className='w-3 h-3 dark:fill-lightDefault fill-default' />
								<span className='text-sm'>
									{data.for_hire ? 'Available for hire' : 'Not Available'}
								</span>
							</p>
							<p className='flex items-center gap-2'>
								<BsMap className='w-3 h-3 dark:fill-lightDefault fill-default' />
								<span className='text-sm'>{data.location}</span>
							</p>
						</div>
					</div>
					<div className='mt-4'>
						<p>{data.bio}</p>
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
									{data.downloads}
								</p>
							</div>
							<div className='dark:bg-secondary bg-lightSecondary  shadow-lg rounded-md p-4 flex md:flex-row flex-col md:w-auto w-full items-center gap-2'>
								<p className='text-default'>Total Photos</p>
								<p className='px-2 py-1 rounded-md dark:bg-default bg-lightDefault backdrop-blur-md'>
									{data.total_photos}
								</p>
							</div>
						</div>
					</div>

					<div className='mt-4'>
						<div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
							{data.photos.map((i, index) => (
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
export default FavIndex

