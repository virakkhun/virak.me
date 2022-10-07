import type { NextPage } from 'next'
import {
	SiTypescript,
	SiRedux,
	SiReact,
	SiFastify,
	SiMongodb,
	SiPrisma,
} from 'react-icons/si'
import { FaVuejs } from 'react-icons/fa'
import { useRouter } from 'next/router'

import Head from 'next/head'
import Image from 'next/image'
import About from '../components/about'
import TvAsset from '../components/assets/tv'
import SideProject from '../components/side'
import Avatar from '../public/images/Avatar.png'
import Diagram from '../public/images/diagram.png'
import Banner from '../public/images/banner.png'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Virak - Portfolio</title>
				<meta property='og:title' content='Virak - Portfolio' />
				<meta
					property='og:description'
					content='A Full Stack Developer based in Phnom Penh, Cambodia'
				/>
				<meta property='og:url' content={useRouter().pathname} />
				<meta property='og:image' content={`${Banner}`} />
				<meta property='og:site_name' content={`Virak Khun's Portfolio`} />
				<meta property='og:type' content='Website' />
			</Head>
			<div className='md:mt-24 mt-5 h-screen relative'>
				<div className='flex flex-col justify-center items-center gap-6 w-full'>
					<div className='w-40 h-40 filter-100-hover'>
						<Image src={Avatar} alt='avatar' />
					</div>
					<div className='text-center flex flex-col gap-2 text-action'>
						<p className='text-2xl font-bold'>Virak Khun</p>
						<p className='p-2 rounded-md bg-gradient-to-r from-primary/20 to-action/20 border border-action/20 backdrop-blur-md'>
							A Full Stack Developer based in Phnom Penh
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
						<p>Bringing UX to life, using the cutting edge technology.</p>
						<p>
							Providing SEO out of the box, guarantee with Beautiful UI and
							smooth user interactivities.
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
			<div className='md:mt-24 mt-5 h-screen w-4/5 mx-auto flex justify-center'>
				<About />
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
					<SideProject
						ghLink='https://github.com/virakkhun/bloG'
						ghRepoName='\blog'
						ghTitle='mini blog'
					>
						<div className='flex items-center gap-2 text-sm'>
							<SiReact />
							<SiTypescript />
							<SiRedux />
						</div>
					</SideProject>
					<SideProject
						ghRepoName='\blog-backend'
						ghTitle='backend for mini blog'
						ghLink='https://github.com/virakkhun/bloG-backend'
					>
						<div className='flex items-center gap-2 text-sm'>
							<SiFastify />
							<SiTypescript />
							<SiMongodb />
							<SiPrisma />
						</div>
					</SideProject>
					<SideProject
						ghLink='https://github.com/virakkhun/c-bookstore'
						ghRepoName='\c-bookstore'
						ghTitle='a mini library'
					>
						<div className='flex items-center gap-2 text-sm'>
							<FaVuejs />
							<SiTypescript />
						</div>
					</SideProject>
				</div>
			</div>
		</>
	)
}

export default Home

