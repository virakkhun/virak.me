export interface Unsplash {
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
	photos: UnsplashPhoto[]
	downloads: number
}

export interface UnsplashPhoto {
	id: string
	urls: {
		regular: string
	}
}

