import { ThumnailDTO } from './thumnail.dto'

export interface BlogDTO {
	id: number
	attributes: {
		title: string
		description: string
		thumnail: ThumnailDTO
		author: string
		tags: Array<string>
	}
}

