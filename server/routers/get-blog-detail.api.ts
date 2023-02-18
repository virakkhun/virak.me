import { z } from 'zod'
import { BlogDetailDTO } from '../../modules/blogs/infrastructure/dtos/blog-detail.dto'
import { HttpClient } from '../../utils/infrastructure/api/http-client'
import { EndpointBuilder } from '../../utils/kits/endpoint'
import { publicProcedure } from '../trpc'

export const GetBlogsDetailAPI = publicProcedure
	.input(
		z.object({
			id: z.string().nullish(),
		}),
	)
	.query(async ({ input }) => {
		const url = EndpointBuilder().build(`blogs/${input.id}?populate=*`)
		const token = `Bearer ${process.env.TOKEN}`

		const { data } = await HttpClient<BlogDetailDTO>(url, 'GET', {
			authorization: token,
		})

		return { data }
	})

