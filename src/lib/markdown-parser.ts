import { unified } from 'unified';
import { refractor } from 'refractor';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import markdown from 'refractor/lang/markdown';
import rehypePrismGenerator from 'rehype-prism-plus/generator';

export const markdownParser = (value: string) => {
	refractor.register(markdown);
	const rehypePrism = rehypePrismGenerator(refractor);

	return unified()
		.use(remarkParse)
		.use(remarkGfm)
		.use(remarkRehype)
		.use(rehypeFormat)
		.use(rehypeStringify)
		.use(rehypePrism, { showLineNumbers: true })
		.process(value);
};
