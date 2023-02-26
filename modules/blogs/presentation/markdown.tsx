'use client'

import React, { useContext, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import MarkdownRenderComponent from './mardown-render'
import { MarkdownThemes } from '../app/services/markdown-themes.service'
import { CodeTheme } from './code-theme'

interface Props {
	content: string
}

const MarkdownComponent: React.FC<Props> = ({ content }) => {
	const allThemes = MarkdownThemes
	const [theme, setTheme] = useState(allThemes[0].theme)

	return (
		<>
			<ReactMarkdown
				remarkPlugins={[remarkGfm, remarkParse]}
				rehypePlugins={[rehypeRaw, rehypeStringify]}
				components={MarkdownRenderComponent({ syntaxTheme: theme })}
			>
				{content}
			</ReactMarkdown>

			<CodeTheme
				currentTheme={theme}
				switchTheme={(id) => setTheme(allThemes[id].theme)}
			/>
		</>
	)
}

export default MarkdownComponent

