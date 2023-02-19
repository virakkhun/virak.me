import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'
import typscript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown'
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json'
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import go from 'react-syntax-highlighter/dist/cjs/languages/prism/go'
import kotlin from 'react-syntax-highlighter/dist/cjs/languages/prism/kotlin'
import java from 'react-syntax-highlighter/dist/cjs/languages/prism/java'
import rust from 'react-syntax-highlighter/dist/cjs/languages/prism/rust'
import elixir from 'react-syntax-highlighter/dist/cjs/languages/prism/elixir'
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python'

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
	{
		name: 'go',
		obj: go,
	},
	{
		name: 'kotlin',
		obj: kotlin,
	},
	{
		name: 'java',
		obj: java,
	},
	{
		name: 'rust',
		obj: rust,
	},
	{
		name: 'elixir',
		obj: elixir,
	},
	{
		name: 'python',
		obj: python,
	},
]

export { MarkdownLanguages }

