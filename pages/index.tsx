import { NextPage } from 'next'
import { GetHomeController } from '../modules/home/app/get-home.controller'
import Head from 'next/head'
import Loading from '../components/loading'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import HomeHeroComponent from '../modules/home/presentation/components/hero.component'
import HomeSideProjectComponent from '../modules/home/presentation/components/side-project.component'
import { GetSideProjectsController } from '../modules/home/app/get-side-projects.controller'
import About from '../modules/home/presentation/components/about.component'

const HomePage: NextPage = () => {
	useIntersectionObserver({
		className: 'fadeUp',
		target: '.side',
		threshold: 0.3,
	})

	const _generalInfo = GetHomeController().getHome()
	const _sideProject = GetSideProjectsController().get()

	const data = { ..._generalInfo, _sideProject }

	if (!data) return <Loading text='Loading ...' />

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

			<HomeHeroComponent
				author={data.author!}
				description={data.description!}
				sub_description={data.sub_description!}
			/>
			<About text={data.about!} />
			<HomeSideProjectComponent sideProjects={data._sideProject!} />
		</>
	)
}

export default HomePage

