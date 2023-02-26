import { HttpClient } from '../../../../shared/infrastructure/api/http-client'
import { EndpointBuilderService } from '../../../../shared/services/endpoint.service'
import { BlogDTO } from '../dtos/blogs.dto'

export const BlogsAPI = () => {
	const { build } = EndpointBuilderService()
	const httpClient = HttpClient()
	const endpoint = build('blogs?populate=thumnail')

	return httpClient.get<BlogDTO>(endpoint)
}

