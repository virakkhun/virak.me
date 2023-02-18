import { BaseResponseMapper } from '../../../../utils/infrastructure/mapper/base-response.mapper'
import { BlogDetail } from '../../domain/models/blog-detail'
import { BlogDetailDTO } from '../dtos/blog-detail.dto'

export const BlogDetailMapper = (): BaseResponseMapper<
	BlogDetailDTO,
	BlogDetail
> => {
	return {
		toDomain(dto) {
			return {
				author: dto.data.attributes.author,
				description: dto.data.attributes.blog_detail.data.attributes.detail,
				published_at: dto.data.attributes.publishedAt,
				tableContent: dto.data.attributes.blog_detail.data.attributes.table,
				tags: dto.data.attributes.tags,
				thumbnailAlt:
					dto.data.attributes.thumnail.data.attributes.alternativeText,
				thumbnailUrl: dto.data.attributes.thumnail.data.attributes.url,
				title: dto.data.attributes.title,
				updated_at: dto.data.attributes.updatedAt,
			}
		},
	}
}

