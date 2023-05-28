import { BaseResponseDTO } from '../dto/base-response.dto'

const customFetch = async <R, T = unknown, H = any>(
	url: string,
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
	body?: T,
	headers?: H,
): Promise<BaseResponseDTO<R>> => {
	const res = await fetch(url, {
		headers: headers
			? headers
			: {
					authorization: `Bearer ${process.env.TOKEN}`,
			  },
		method: method,
		body:
			method === 'GET' || method === 'DELETE'
				? null
				: JSON.stringify({ ...body }),
	})

	if (res.ok) {
		const data = await res.json()

		return Promise.resolve({ data: data, error: null })
	}

	return Promise.resolve({
		data: null,
		error: { message: res.statusText, status: res.status },
	})
}

export const HttpClient = () => {
	return {
		get: <R>(url: string) => customFetch<R>(url, 'GET'),
		post: <R, T>(url: string, body?: T) => customFetch<R, T>(url, 'POST', body),
		put: <R, T>(url: string, body?: T) => customFetch<R, T>(url, 'PUT', body),
		patch: <R, T>(url: string, body?: T) =>
			customFetch<R, T>(url, 'PATCH', body),
		delete: <R>(url: string) => customFetch<R>(url, 'DELETE'),
		getUnsplash: <R>(url: string) =>
			customFetch<R>(url, 'GET', null, {
				authorization: `Client-ID ${process.env.CLIENT_ID}`,
			}),
	}
}

