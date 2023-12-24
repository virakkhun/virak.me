import type { Blog } from '../../models/blog';

export type BlogDetail = Blog & { author: string };
