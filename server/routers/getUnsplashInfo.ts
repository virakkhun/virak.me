import { fetchApi } from '../../utils/FetchApi'
import { Unsplash } from '../../utils/types/unsplash.type'
import { publicProcedure } from '../trpc'

export const getUnsplashInfo = publicProcedure.query(async () => {
	const data = await fetchApi<
		Unsplash,
		{
			Authorization: string
		}
	>(process.env.UNSPLASH_URL!, 'GET', {
		Authorization: `Client-ID ${process.env.CLIENT_ID}`,
	})

	return data
})

