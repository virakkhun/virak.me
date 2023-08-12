import type { Blog } from '../models/blog';

export type CreateBlogDTO = Pick<Blog, 'author' | 'desc' | 'content' | 'tags' | 'title'>;
