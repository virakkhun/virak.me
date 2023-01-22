import { BaseResponseDTO } from '../../../../utils/infrastructure/dto/base-response.dto'
import { ThumnailDTO } from './thumnail.dto'

export interface BlogDTO
	extends BaseResponseDTO<{
		id: number
		attributes: {
			title: string
			description: string
			thumnail: ThumnailDTO
			author: string
			tags: Array<string>
		}
	}> {}

