export interface UnsplashDTO {
	name: string
	bio: string
	location: string
	links: {
		html: string
	}
	profile_image: {
		large: string
	}
	total_photos: number
	for_hire: boolean
	photos: Array<UnsplashPhoto>
	downloads: number
}

interface UnsplashPhoto {
	id: string
	urls: {
		regular: string
	}
}

