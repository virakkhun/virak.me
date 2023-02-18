import { trpc } from '../../../../utils/trpc'
import { BlogMapper } from '../../infrastructure/mappers/blog.mapper'

export const GetBlogController = () => {
	const { data } = trpc.GetBlogsAPI.useQuery()
	const { toDomain } = BlogMapper()

	if (data) {
		return toDomain(data?.data!)
	}

	return null
}

