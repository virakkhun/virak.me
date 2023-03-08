import HomeHeroComponent from '../modules/home/presentation/components/hero.component'
import About from '../modules/home/presentation/components/about.component'
import { GetHomeController } from '../modules/home/app/get-home.controller'
import { GetSideProjectsController } from '../modules/home/app/get-side-projects.controller'
import { HomeSideProjectComponent } from '../modules/home/presentation/components/side-project.component'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Home - Virak Khun',
		colorScheme: 'dark light',
		themeColor: '#1A1A1A',
		twitter: {
			card: 'summary_large_image',
			title: 'Home - Virak Khun',
		},
	}
}

export default async function Page() {
	const [generalInfo, sideProjects] = await Promise.all([
		GetHomeController(),
		GetSideProjectsController(),
	])

	return (
		<>
			<HomeHeroComponent
				author={generalInfo!.author!}
				description={generalInfo!.description!}
				sub_description={generalInfo!.sub_description!}
			/>
			<About text={generalInfo!.about!} />
			<HomeSideProjectComponent sideProjects={sideProjects!} />
		</>
	)
}

