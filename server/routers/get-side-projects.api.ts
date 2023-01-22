import { SideProjectsDTO } from '../../modules/home/infrastructure/dtos/side-project.dto'
import { HttpClient } from '../../utils/infrastructure/api/http-client'
import { EndpointBuilder } from '../../utils/kits/endpoint'
import { publicProcedure } from '../trpc'

export const GetSideProjectsAPI = publicProcedure.query(async () => {
	const url = EndpointBuilder().build('side-projects')
	const token = `Bearer ${process.env.TOKEN}`

	const { data } = await HttpClient<Array<SideProjectsDTO>>(url, 'GET', {
		authorization: token,
	})

	return data
})

