import type { Blog } from '../../models/blog';

export type BlogDetail = Blog & { content: string; author: string };
