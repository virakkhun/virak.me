export interface Blog {
	id: number
	attributes: {
		title: string
		thumnail: Thumnail
		author: string
		tags: string[]
	}
}

export interface Thumnail {
	data: {
		attributes: {
			name: string
			alternativeText: string
			url: string
		}
	}
}

export interface BlogDetail {
	id: number
	attributes: {
		title: string
		thumnail: Thumnail
		author: string
		tags: string[]
		blog_detail: {
			data: {
				id: number
				attributes: {
					detail: string
				}
			}
		}
	}
}

