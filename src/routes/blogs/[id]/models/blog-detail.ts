import type { JoinType } from '$lib';
import type { Blog } from '../../models/blog';

export type BlogDetail = JoinType<
	Blog,
	{ created_at: Date; content: string; author: string; tags: Array<string> }
>;
