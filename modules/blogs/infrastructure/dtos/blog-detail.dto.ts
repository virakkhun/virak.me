import { BlogDTO } from './blogs.dto'

export interface BlogDescriptionDetailDTO {
	data: {
		id: number
		attributes: {
			detail: string
			table: Array<string>
			blog: BlogDTO
			publishedAt: string
			updatedAt: string
		}
	}
}

