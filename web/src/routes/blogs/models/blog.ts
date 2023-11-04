export type Blog = {
	id: number;
	title: string;
	desc: string;
	created_at: string;
	tags: string;
	view: number;
	content: string;
};

export type Blogs = Array<Blog>;
