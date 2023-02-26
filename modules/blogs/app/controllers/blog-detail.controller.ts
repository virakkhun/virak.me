import { BlogDetailAPI } from '../../infrastructure/apis/blog-detail.api'
import { BlogDetailMapper } from '../../infrastructure/mappers/blog-detail.mapper'

export const GetBlogDetailController = async (blogId: string) => {
	const data = await BlogDetailAPI(blogId)
	const mapper = BlogDetailMapper()

	if (data.data) return mapper.toDomain(data.data)
}

