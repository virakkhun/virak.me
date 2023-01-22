import { BaseResponseDTO } from '../../../../utils/infrastructure/dto/base-response.dto'
import { ThumnailDTO } from './thumnail.dto'

interface InnerBlogDetailDTO
	extends BaseResponseDTO<{
		id: number
		attributes: {
			detail: string
			table: Array<string>
		}
	}> {}

export interface BlogDetailDTO
	extends BaseResponseDTO<{
		id: number
		attributes: {
			title: string
			thumnail: ThumnailDTO
			author: string
			tags: Array<string>
			blog_detail: InnerBlogDetailDTO
			publishedAt: string
			updatedAt: string
		}
	}> {}

