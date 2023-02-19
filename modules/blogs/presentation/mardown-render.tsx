import { Components } from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { MarkdownLanguages } from '../app/services/markdown-language.service'
import rangeParser from 'parse-numeric-range'
import React, { CSSProperties } from 'react'

interface Props {
	syntaxTheme:
		| {
				[k in string]: CSSProperties
		  }
		| undefined
}

const MarkdownRenderComponent = ({ syntaxTheme }: Props): Components => {
	MarkdownLanguages.forEach((l) => {
		SyntaxHighlighter.registerLanguage(l.name, l.obj)
	})

	return {
		code({ node, inline, className, style, children, ...props }) {
			const match = /language-(\w+)/.exec(className || '')
			const hasMeta = node.data?.meta as string
			const meta = node.data?.meta as string

			const applyHighlights: object = (applyHighlights: number) => {
				if (hasMeta) {
					const RE = /{([\d,-]+)}/
					const metadata = meta.replace(/\s/g, '')
					const lineNumbers = RE?.test(metadata) ? RE.exec(metadata)![1] : '0'

					const highlightLines = rangeParser(lineNumbers)
					const highlight = highlightLines
					const data: string | null = highlight.includes(applyHighlights)
						? 'highlight'
						: null

					return { data }
				} else {
					return {}
				}
			}

			return match ? (
				<SyntaxHighlighter
					style={syntaxTheme}
					language={match[1]}
					PreTag='div'
					className='codeStyle'
					wrapLines={hasMeta ? true : false}
					useInlineStyles={true}
					lineProps={applyHighlights}
					{...props}
				>
					{String(children).replace(/\n$/, '')}
				</SyntaxHighlighter>
			) : (
				<code className={className} {...props} />
			)
		},
	}
}

export default MarkdownRenderComponent

