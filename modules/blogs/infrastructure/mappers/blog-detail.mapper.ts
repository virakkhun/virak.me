import { BaseResponseMapper } from '../../../../shared/infrastructure/mapper/base-response.mapper'
import { BlogDetail } from '../../domain/models/blog-detail'
import { BlogDescriptionDetailDTO } from '../dtos/blog-detail.dto'

export const BlogDetailMapper = (): BaseResponseMapper<
	BlogDescriptionDetailDTO,
	BlogDetail
> => {
	return {
		toDomain(dto) {
			return {
				author: dto?.data.attributes.blog.data.attributes.author,
				description: dto?.data.attributes.detail,
				published_at: dto?.data.attributes.publishedAt,
				tableContent: dto?.data.attributes.table,
				tags: dto?.data.attributes.blog.data.attributes.tags,
				title: dto?.data.attributes.blog.data.attributes.title,
				updated_at: dto?.data.attributes.updatedAt,
			}
		},
	}
}

