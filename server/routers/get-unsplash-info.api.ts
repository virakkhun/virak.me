import { UnsplashDTO } from '../../modules/unsplash/infrastructure/dtos/unsplash.dto'
import { UnsplashClient } from '../../utils/infrastructure/api/http-client'
import { EndpointBuilder } from '../../utils/kits/endpoint'
import { publicProcedure } from '../trpc'

export const GetUnsplashInfoAPI = publicProcedure.query(async () => {
	const url = EndpointBuilder().unsplashUrl()
	const auth = `Client-ID ${process.env.CLIENT_ID}`

	const data = await UnsplashClient<UnsplashDTO>(url, 'GET', {
		authorization: auth,
	})

	return { data }
})

