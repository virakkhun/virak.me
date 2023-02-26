import { HttpClient } from '../../../../shared/infrastructure/api/http-client'
import { EndpointBuilderService } from '../../../../shared/services/endpoint.service'
import { SideProjectsDTO } from '../dtos/side-project.dto'

export const SideProjectsAPI = () => {
	const { build } = EndpointBuilderService()
	const httpClient = HttpClient()
	const endpoint = build('side-projects')

	return httpClient.get<SideProjectsDTO>(endpoint)
}

