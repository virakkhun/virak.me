export interface GithubFrequency {
	type: string[]
	items: {
		title: string
		description: string
		type: string[]
		items: {
			type: string[]
		}
	}
}
