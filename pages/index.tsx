import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/about'
import TvAsset from '../components/assets/tv'
import Loading from '../components/loading'
import SideProject from '../components/side'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import Avatar from '../public/images/Avatar.png'
import Diagram from '../public/images/diagram.png'
import { trpc } from '../utils/trpc'

const Home: NextPage = () => {
	useIntersectionObserver({
		className: 'fadeUp',
		target: '.side',
		threshold: 0.3,
	})

	const { data } = trpc.getHomeData.useQuery()

	if (!data) return <Loading text='Loading ...' />

	const projects = data.SideProjects
	const home = data.Home

	return (
		<>
			<Head>
				<title>Virak Khun | Portfolio</title>
				<meta property='og:site_name' content={`Virak Khun's Portfolio`} />
				<meta property='og:title' content='Virak Khun | Portfolio' />
				<meta property='og:url' content='https://virak.me' />
				<meta property='og:type' content='website' />
				<meta
					property='og:description'
					content='A Full Stack Developer based in Phnom Penh, Cambodia'
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
				<meta name='twitter:url' content='https://virak.me' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta
					name='twitter:description'
					content='A Full Stack Developer based in Phnom Penh, Cambodia'
				/>
				<meta
					name='description'
					content='A Full Stack Developer based in Phnom Penh, Cambodia'
				/>
				<link rel='canonical' href='https://virak.me' />
				<link rel='alternate' href='https://virak.me' />
			</Head>
			<div className='md:mt-24 mt-5 h-screen relative'>
				<div className='flex flex-col justify-center items-center gap-6 w-full'>
					<div className='w-40 h-40'>
						<Image src={Avatar} alt='avatar' />
					</div>
					<div className='text-center flex flex-col gap-2'>
						<p className='text-[2.5rem] font-extrabold dark:text-lightDefault text-default'>
							{home.attributes.author_name}
						</p>
						<p className='dark:text-lightDefault text-default text-[1.2rem] font-bold rounded-md bg-gradient-to-r from-secondary/50 to-action/20 border border-action/20 backdrop-blur-md p-2'>
							{home.attributes.description}
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
					<div className='text-center md:w-4/6 w-4/5 mx-auto dark:text-lightDefault text-default font-bold text-[1.5rem]'>
						<p>{home.attributes.description_1}</p>
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
			<div className='md:mt-24 mt-5 h-screen w-4/5 mx-auto flex justify-center'>
				<About text={home.attributes.about} />
			</div>
			<div
				className='md:mt-24 mt-5 h-screen w-4/5 mx-auto flex justify-center items-start flex-col'
				id='side'
			>
				<div className='w-full flex flex-col justify-center items-center font-extrabold'>
					<div className='w-32 h-32'>
						<Image src={Diagram} alt='side projects' />
					</div>
					<p className='dark:text-lightDefault text-default text-[2rem]'>
						These are my side projects.
					</p>
				</div>
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 w-full'>
					{projects.map((p) => (
						<div key={p.id}>
							<SideProject
								ghLink={p.attributes.github_link}
								ghRepoName={p.attributes.project_name}
								ghTitle={p.attributes.name}
								className='side'
							>
								<div className='flex items-center gap-2 text-sm'>
									{p.attributes.stack.stack.map((s, i) => (
										<span
											key={i}
											className='py-0.5 px-1 rounded-full dark:bg-white/50 bg-primary/50 text-white'
										>
											{s}
										</span>
									))}
								</div>
							</SideProject>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Home

