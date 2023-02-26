import { HttpClient } from '../../../../shared/infrastructure/api/http-client'
import { EndpointBuilderService } from '../../../../shared/services/endpoint.service'
import { HomeDTO } from '../dtos/home.dto'

export const HomeAPI = () => {
	const { build } = EndpointBuilderService()
	const httpClient = HttpClient()
	const endpoint = build('homes/1')

	return httpClient.get<HomeDTO>(endpoint)
}

