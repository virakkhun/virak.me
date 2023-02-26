import { SideProjectsAPI } from '../infrastructure/apis/side-projects.api'
import { GetSideProjectMapper } from '../infrastructure/mappers/get-side-project.mapper'

export const GetSideProjectsController = async () => {
	const data = await SideProjectsAPI()
	const mapper = GetSideProjectMapper()

	if (data.data) return mapper.toDomain(data.data)
}

