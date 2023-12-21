export type Blog = {
	id: number;
	title: string;
	desc: string;
	created_at: string;
	tags: string | string[];
	view: number;
	content: string;
	slug: string;
};

export type Blogs = Blog[];
