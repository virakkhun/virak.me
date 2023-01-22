import { BaseResponseMapper } from '../../../../utils/infrastructure/mapper/base-response.mapper'
import { HomeHeroModel } from '../../domain/models/home-hero.model'
import { HomeDTO } from '../dtos/home.dto'

export const GetHomeMapper = (): BaseResponseMapper<
	HomeDTO,
	HomeHeroModel
> => ({
	toDomain(dto: HomeDTO) {
		const { author_name, description, description_1, about } = dto.attributes

		return {
			author: author_name,
			description: description,
			sub_description: description_1,
			about: about,
		}
	},
})

