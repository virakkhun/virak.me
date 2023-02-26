import { BlogsAPI } from '../../infrastructure/apis/blogs.api'
import { BlogMapper } from '../../infrastructure/mappers/blog.mapper'

export const GetBlogController = async () => {
	const data = await BlogsAPI()
	const mapper = BlogMapper()

	if (data.data) return mapper.toDomain(data.data)
}

