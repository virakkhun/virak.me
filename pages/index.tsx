import { ReactElement } from 'react'
import { Home, SideProjects } from '../utils/types/home.type'
import type { NextPageWithLayout } from './_app'

import Head from 'next/head'
import Image from 'next/image'
import About from '../components/about'
import TvAsset from '../components/assets/tv'
import SideProject from '../components/side'
import Avatar from '../public/images/Avatar.png'
import Diagram from '../public/images/diagram.png'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import Layout from '../components/layouts/layout'
export { getServerSideProps } from '../store/getHomeData'

const Home: NextPageWithLayout<{
	res: {
		data: Home
	}
	side: {
		data: SideProjects[]
	}
}> = ({ res, side }) => {
	useIntersectionObserver({
		className: 'fadeUp',
		target: '.side',
		threshold: 0.3,
	})

	const data = res.data
	const projects = side.data

	return (
		<>
			<Head>
				<title>Virak Khun | Portfolio</title>
				<meta property='og:site_name' content={`Virak Khun's Portfolio`} />
				<meta property='og:title' content='Virak Khun | Portfolio' />
				<meta property='og:url' content='https://virak-portfolio.vercel.app' />
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
				<meta name='twitter:url' content='https://virak-portfolio.vercel.app' />
				<meta name='twitter:card' content='summary' />
				<meta
					name='twitter:description'
					content='A Full Stack Developer based in Phnom Penh, Cambodia'
				/>
				<meta
					name='description'
					content='A Full Stack Developer based in Phnom Penh, Cambodia'
				/>
			</Head>
			<div className='md:mt-24 mt-5 h-screen relative'>
				<div className='flex flex-col justify-center items-center gap-6 w-full'>
					<div className='w-40 h-40 filter-100-hover'>
						<Image src={Avatar} alt='avatar' />
					</div>
					<div className='text-center flex flex-col gap-2 text-action'>
						<p className='text-2xl font-bold'>{data.attributes.author_name}</p>
						<p className='p-2 rounded-md bg-gradient-to-r from-secondary/50 to-action/20 border border-action/20 backdrop-blur-md'>
							{data.attributes.description}
						</p>
					</div>
					<div className='relative w-56 h-56 ml-24'>
						<TvAsset isShadow={true} style='w-full h-full' />
						<p className='flex flex-col items-center gap-1 absolute top-24 text-secondary left-3 very-small-text'>
							<span>TypeScript</span>
							<span>Nuxt 🥷 Next</span>
							<span>Express</span>
						</p>
					</div>
					<div className='text-center md:w-4/6 w-4/5 mx-auto text-action/80 font-bold'>
						<p>{data.attributes.description_1}</p>
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
				<About text={data.attributes.about} />
			</div>
			<div
				className='md:mt-24 mt-5 h-screen w-4/5 mx-auto flex justify-center items-start flex-col'
				id='side'
			>
				<div className='flex items-center gap-2 max-w-fit text-center bg-gradient-to-br from-action/20 to-primary/20 p-1 rounded shadow-xl border border-action/20'>
					<a href='#side'>#side</a>
					<div className='w-5 h-5'>
						<Image src={Diagram} alt='Diagram' />
					</div>
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

Home.getLayout = function getLayout(home: ReactElement) {
	return <Layout>{home}</Layout>
}

export default Home

