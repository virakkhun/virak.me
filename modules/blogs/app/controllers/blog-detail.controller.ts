import { trpc } from '../../../../utils/trpc'
import { BlogDetailMapper } from '../../infrastructure/mappers/blog-detail.mapper'

export const GetBlogDetailController = (id: string) => {
	const { data } = trpc.GetBlogsDetailAPI.useQuery({ id })
	const { toDomain } = BlogDetailMapper()

	if (data) {
		return toDomain(data.data)
	}

	return null
}

