export interface Home {
	id: string
	attributes: {
		author_name: string
		description: string
		description_1: string
		about: string
	}
}

export interface SideProjects {
	id: number
	attributes: {
		name: string
		github_link: string
		project_name: string
		stack: {
			stack: string[]
		}
	}
}

