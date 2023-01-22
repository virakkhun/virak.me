export const EndpointBuilder = () => {
	const BASE_URL = process.env.BASE_URL
	return {
		baseUrl: () => BASE_URL!,
		build: (endpoint: string) => `${BASE_URL}/${endpoint}`,
	}
}

