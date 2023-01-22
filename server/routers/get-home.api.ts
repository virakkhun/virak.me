import { HomeDTO } from '../../modules/home/infrastructure/dtos/home.dto'
import { HttpClient } from '../../utils/infrastructure/api/http-client'
import { EndpointBuilder } from '../../utils/kits/endpoint'
import { publicProcedure } from '../trpc'

export const GetHomeAPI = publicProcedure.query(async () => {
	const url = EndpointBuilder().build(`homes/1`)
	const token = `Bearer ${process.env.TOKEN}`

	return await HttpClient<HomeDTO>(url, 'GET', {
		authorization: token,
	})
})

