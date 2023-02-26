import { BaseResponseMapper } from '../../../../shared/infrastructure/mapper/base-response.mapper'
import { Blog } from '../../domain/models/blog'
import { BlogsDTO } from '../dtos/blogs.dto'

export const BlogMapper = (): BaseResponseMapper<BlogsDTO, Blog[]> => ({
	toDomain: (dto) =>
		dto?.data?.map((d) => ({
			id: d.id,
			description: d.attributes.description,
			tags: d.attributes.tags,
			thumbnailUrl: d.attributes.thumnail.data.attributes.url,
			title: d.attributes.title,
			author: d.attributes.author,
		})),
})

