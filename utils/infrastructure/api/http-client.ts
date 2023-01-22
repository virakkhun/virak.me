import { BaseResponseDTO } from '../dto/base-response.dto'

export const HttpClient = async <R, T = { authorization: string }>(
	url: string,
	method: 'GET' | 'POST',
	opts: T,
): Promise<BaseResponseDTO<R>> => {
	const res = await fetch(url, {
		headers: { ...opts } as any,
		method: method,
	})

	const data = await res.json()

	return data as BaseResponseDTO<R>
}

