import { trpc } from '../../../../utils/trpc'
import { BlogDetailMapper } from '../../infrastructure/mappers/blog-detail.mapper'

export const GetBlogDetailController = (id: string) => {
	const data = trpc.GetBlogsDetailAPI.useQuery({ id })
	const { toDomain } = BlogDetailMapper()
	return toDomain(data.data!)
}

