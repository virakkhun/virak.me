import { HomeAPI } from '../infrastructure/apis/home.api'
import { GetHomeMapper } from '../infrastructure/mappers/get-home.mapper'

export const GetHomeController = async () => {
	const data = await HomeAPI()
	const mapper = GetHomeMapper()

	if (data.data) return mapper.toDomain(data.data)
}

