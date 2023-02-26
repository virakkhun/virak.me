export const EndpointBuilderService = () => {
	const BASE_URL = process.env.BASE_URL
	const unsplashUrl = process.env.UNSPLASH_URL
	return {
		baseUrl: () => BASE_URL!,
		build: (endpoint: string) => `${BASE_URL}/${endpoint}`,
		unsplashUrl: () => unsplashUrl!,
	}
}

