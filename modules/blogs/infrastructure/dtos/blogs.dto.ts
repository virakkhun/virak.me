import { ThumnailDTO } from './thumnail.dto'

export interface BlogDTO {
	data: {
		id: number
		attributes: {
			title: string
			description: string
			thumnail: ThumnailDTO
			author: string
			tags: Array<string>
		}
	}
}

export interface BlogsDTO {
	data: {
		id: number
		attributes: {
			title: string
			description: string
			thumnail: ThumnailDTO
			author: string
			tags: Array<string>
		}
	}[]
}

