import { GetServerSideProps } from 'next'
import { fetchApi } from '../utils/FetchApi'
import { Home, SideProjects } from '../utils/types/home.type'

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetchApi<Home, { Authorization: string }>(
		`${process.env.BASE_URL}/homes/1`,
		'GET',
		{
			Authorization: `Bearer ${process.env.TOKEN!}`,
		},
	)

	const side = await fetchApi<SideProjects, { Authorization: string }>(
		`${process.env.BASE_URL}/side-projects`,
		'GET',
		{
			Authorization: `Bearer ${process.env.TOKEN!}`,
		},
	)

	return {
		props: { res, side },
	}
}

