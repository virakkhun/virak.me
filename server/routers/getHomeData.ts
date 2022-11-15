import { fetchApi } from '../../utils/FetchApi'
import { Home, SideProjects } from '../../utils/types/home.type'
import { publicProcedure } from '../trpc'

export const getHomeData = publicProcedure.query(async () => {
	const { data: Home } = await fetchApi<
		{ data: Home },
		{ Authorization: string }
	>(`${process.env.BASE_URL}/homes/1`, 'GET', {
		Authorization: `Bearer ${process.env.TOKEN!}`,
	})

	const { data: SideProjects } = await fetchApi<
		{ data: SideProjects[] },
		{ Authorization: string }
	>(`${process.env.BASE_URL}/side-projects`, 'GET', {
		Authorization: `Bearer ${process.env.TOKEN!}`,
	})

	return { Home, SideProjects }
})

