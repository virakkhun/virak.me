import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'
import typscript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown'
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json'
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'

const MarkdownLanguages: { name: string; obj: unknown }[] = [
	{
		name: 'tsx',
		obj: tsx,
	},
	{
		name: 'jsx',
		obj: jsx,
	},
	{
		name: 'bash',
		obj: bash,
	},
	{
		name: 'markdown',
		obj: markdown,
	},
	{
		name: 'typescript',
		obj: typscript,
	},
	{
		name: 'json',
		obj: json,
	},
	{
		name: 'javascript',
		obj: javascript,
	},
]

export { MarkdownLanguages }
