import { UnsplashAPI } from '../infrastructure/apis/unsplash.api'

export const UnsplashController = async () => {
	const data = await UnsplashAPI()

	if (data) return data
}

