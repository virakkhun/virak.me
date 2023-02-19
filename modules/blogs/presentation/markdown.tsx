import React, { CSSProperties } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import MarkdownRenderComponent from './mardown-render'

interface Props {
	content: string
	syntaxTheme:
		| {
				[k in string]: CSSProperties
		  }
		| undefined
}

const MarkdownComponent: React.FC<Props> = ({ content, syntaxTheme }) => {
	const Component = MarkdownRenderComponent({
		syntaxTheme,
	})

	return (
		<ReactMarkdown
			remarkPlugins={[remarkGfm, remarkParse]}
			rehypePlugins={[rehypeRaw, rehypeStringify]}
			components={Component}
		>
			{content}
		</ReactMarkdown>
	)
}

export default MarkdownComponent

