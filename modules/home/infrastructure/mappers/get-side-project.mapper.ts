import { BaseResponseMapper } from '../../../../utils/infrastructure/mapper/base-response.mapper'
import { HomeSideProjectModel } from '../../domain/models/home-side-project.model'
import { SideProjectsDTO } from '../dtos/side-project.dto'

export const GetSideProjectMapper = (): BaseResponseMapper<
	Array<SideProjectsDTO>,
	Array<HomeSideProjectModel>
> => ({
	toDomain: (dto) => {
		return dto.map((res) => ({
			ghLink: res.attributes.github_link,
			ghRepoName: res.attributes.project_name,
			ghTitle: res.attributes.name,
			stack: [...res.attributes.stack.stack],
		}))
	},
})

