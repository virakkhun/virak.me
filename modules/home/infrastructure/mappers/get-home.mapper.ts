import { BaseResponseMapper } from '../../../../shared/infrastructure/mapper/base-response.mapper'
import { HomeHeroModel } from '../../domain/models/home-hero.model'
import { HomeDTO } from '../dtos/home.dto'

export const GetHomeMapper = (): BaseResponseMapper<
	HomeDTO,
	HomeHeroModel
> => ({
	toDomain(dto: HomeDTO) {
		const { author_name, description, description_1, about } =
			dto?.data?.attributes

		return {
			author: author_name ?? null,
			description: description ?? null,
			sub_description: description_1 ?? null,
			about: about ?? null,
		}
	},
})

