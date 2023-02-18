export interface SideProjectsDTO {
	id: number
	attributes: {
		name: string
		github_link: string
		project_name: string
		stack: {
			stack: Array<string>
		}
	}
}
