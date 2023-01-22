import { SideProjectsAPI } from '../infrastructure/apis/side-project.api'
import { GetSideProjectMapper } from '../infrastructure/mappers/get-side-project.mapper'

export const GetSideProjectsController = () => {
	return {
		get: () => {
			const data = SideProjectsAPI()

			if (data.data !== undefined)
				return GetSideProjectMapper().toDomain(data.data)
		},
	}
}

