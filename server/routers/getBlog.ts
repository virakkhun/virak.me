import { fetchApi } from '../../utils/FetchApi'
import { publicProcedure } from '../trpc'
import { z } from 'zod'
import type { Blog, BlogDetail } from '../../utils/types/blogs.type'

export const getBlogs = publicProcedure.query(async () => {
	const data = await fetchApi<{ data: Blog[] }, { Authorization: string }>(
		`${process.env.BASE_URL}/blogs?populate=thumnail`,
		'GET',
		{
			Authorization: `Bearer ${process.env.TOKEN}`,
		},
	)

	return data.data
})

export const getBlogsDetail = publicProcedure
	.input(
		z.object({
			id: z.string().nullish(),
		}),
	)
	.query(async ({ input }) => {
		const { data } = await fetchApi<{ data: BlogDetail }>(
			`${process.env.BASE_URL}/blogs/${input.id}?populate=*`,
			'GET',
			{ Authorization: `Bearer ${process.env.TOKEN}` },
		)

		return data
	})

