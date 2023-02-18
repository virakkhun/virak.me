import { BlogDTO } from '../../modules/blogs/infrastructure/dtos/blogs.dto'
import { HttpClient } from '../../utils/infrastructure/api/http-client'
import { EndpointBuilder } from '../../utils/kits/endpoint'
import { publicProcedure } from '../trpc'

export const GetBlogsAPI = publicProcedure.query(async () => {
	const url = EndpointBuilder().build('blogs?populate=thumnail')
	const token = `Bearer ${process.env.TOKEN}`

	const { data } = await HttpClient<BlogDTO[]>(url, 'GET', {
		authorization: token,
	})

	return {
		data,
	}
})

