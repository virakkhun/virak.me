import { HomeAPI } from '../infrastructure/apis/home.api'
import { GetHomeMapper } from '../infrastructure/mappers/get-home.mapper'

export const GetHomeController = () => {
	return {
		getHome: () => {
			const data = HomeAPI()

			if (data.data !== undefined)
				return GetHomeMapper().toDomain(data.data.data)
		},
	}
}

