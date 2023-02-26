import { HttpClient } from '../../../../shared/infrastructure/api/http-client'
import { EndpointBuilderService } from '../../../../shared/services/endpoint.service'
import { BlogDescriptionDetailDTO } from '../dtos/blog-detail.dto'

export const BlogDetailAPI = (blogId: string) => {
	const { build } = EndpointBuilderService()
	const httpClient = HttpClient()
	const endpoint = build(`blog-details/${blogId}?populate=*`)

	return httpClient.get<BlogDescriptionDetailDTO>(endpoint)
}

