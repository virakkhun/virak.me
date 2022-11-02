export const fetchApi = async <R, T = {}>(url: string, opts: T): Promise<R> => {
	const res = await fetch(url, {
		headers: opts as any,
	})

	const data = await res.json()

	return data as R
}

