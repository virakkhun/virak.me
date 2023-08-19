import type { JoinType } from '$lib';
import type { Blog } from '../../models/blog';

export type BlogDetail = JoinType<Blog, { content: string; author: string }>;
