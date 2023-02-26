import { BaseErrorResponseDTO } from './base-error.dto'

export type BaseResponseDTO<T> = {
	data: T | null
	error: BaseErrorResponseDTO | null
}

