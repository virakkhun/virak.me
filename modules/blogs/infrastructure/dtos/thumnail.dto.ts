import { BaseResponseDTO } from '../../../../utils/infrastructure/dto/base-response.dto'

export interface ThumnailDTO
	extends BaseResponseDTO<{
		attributes: {
			name: string
			alternativeText: string
			url: string
		}
	}> {}

