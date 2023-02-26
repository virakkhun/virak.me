import { HttpClient } from '../../../../shared/infrastructure/api/http-client'
import { EndpointBuilderService } from '../../../../shared/services/endpoint.service'
import { UnsplashDTO } from '../dtos/unsplash.dto'

export const UnsplashAPI = () => {
	const endpointBuilder = EndpointBuilderService()
	const url = endpointBuilder.unsplashUrl()
	const httpClient = HttpClient()

	return httpClient.getUnsplash<UnsplashDTO>(url)
}

