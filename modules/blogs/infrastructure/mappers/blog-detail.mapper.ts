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
				author: dto.attributes?.author,
				description: dto.attributes?.blog_detail.data.attributes.detail,
				published_at: dto.attributes?.publishedAt,
				tableContent: dto.attributes?.blog_detail.data.attributes.table ?? [''],
				tags: dto.attributes?.tags ?? [''],
				thumbnailAlt: dto.attributes?.thumnail.data.attributes.alternativeText,
				thumbnailUrl: dto.attributes?.thumnail.data.attributes.url,
				title: dto.attributes?.title,
				updated_at: dto.attributes?.updatedAt,
			}
		},
	}
}

