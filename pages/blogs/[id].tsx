import Head from 'next/head'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rangeParser from 'parse-numeric-range'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import rehypeStringify from 'rehype-stringify'
import { Components } from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'
import typscript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown'
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json'
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import {
	coldarkDark,
	a11yDark,
	nord,
} from 'react-syntax-highlighter/dist/cjs/styles/prism'

import React, { useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { cryptoKit } from '../../utils/kits/crypto'
import Loading from '../../components/loading'
import { dateKit } from '../../utils/kits/date_kit'
import { GetBlogDetailController } from '../../modules/blogs/app/controllers/blog-detail.controller'

const languages: { name: string; obj: any }[] = [
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

languages.forEach((l) => {
	SyntaxHighlighter.registerLanguage(l.name, l.obj)
})

const BlogDetailPage: NextPage = () => {
	const router = useRouter()
	const { id } = router.query
	const serialize = cryptoKit().decrypt(
		id as string,
		`${process.env.ENCRYPT_KEY}`,
	)

	const data = GetBlogDetailController(serialize)

	const availableTheme = [
		{
			name: 'coldarkDark',
			theme: coldarkDark,
		},
		{
			name: 'a11yDark',
			theme: a11yDark,
		},
		{
			name: 'nord',
			theme: nord,
		},
	]
	const [syntaxTheme, setTheme] = useState(coldarkDark)

	const switchTheme = (idx: number) => {
		setTheme(availableTheme[idx].theme)
	}

	const MarkdownComponents: Components = {
		code({ node, inline, className, style, children, ...props }) {
			const match = /language-(\w+)/.exec(className || '')
			const hasMeta = node.data?.meta as string
			const meta = node.data?.meta as string

			const applyHighlights: object = (applyHighlights: number) => {
				if (hasMeta) {
					const RE = /{([\d,-]+)}/
					const metadata = meta.replace(/\s/g, '')
					const strlineNumbers = RE?.test(metadata)
						? RE.exec(metadata)![1]
						: '0'

					const highlightLines = rangeParser(strlineNumbers)
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

	if (!data) return <Loading text='Blog Detail | Loading...' />

	return (
		<>
			<Head>
				<title>{`${data.title} | Detail`}</title>
				<meta property='og:site_name' content="Virak Khun's Portfolio" />
				<meta property='og:title' content={`${data.title}`} />
				<meta property='og:url' content={`https://virak.me/blog/${id}`} />
				<meta property='og:type' content='article' />
				<meta property='og:description' content={data.description} />
				<meta
					property='og:image'
					content={`https://portfolio-cms.virak.me${data.thumbnailUrl}`}
				/>
				<meta name='twitter:title' content='Virak Khun | Portfolio' />
				<meta
					name='twitter:image'
					content={`https://portfolio-cms.virak.me${data.thumbnailUrl}`}
				/>
				<meta name='twitter:author' content='@virak' />
				<meta name='twitter:url' content={`https://virak.me/blog/${id}`} />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:description' content={data.description} />
				<meta name='description' content={data.description} />
				<link rel='canonical' href={`https://virak.me/blog/${id}`} />
				<link rel='alternate' href={`https://virak.me/blog/${id}`} />
			</Head>
			<div className='mx-auto w-full md:px-4 my-6 flex gap-4 items-start'>
				<div className='md:w-4/5 w-full py-2 px-4 dark:bg-default bg-lightSecondary rounded-xl'>
					<div className='font-bold mb-2'>
						<p className='text-sm'>Introducing</p>
						<p className='text-2xl text-green-600'>{data.title}</p>
					</div>
					<div className='relative w-full'>
						<div className='overflow-hidden rounded-tr-md rounded-tl-md'>
							<img
								src={`https://portfolio-cms.virak.me${data.thumbnailUrl}`}
								alt={data.thumbnailAlt}
								className='w-full hover:scale-110 transition-all duration-300'
							/>
						</div>
					</div>

					<div className='dark:bg-action bg-lightAction rounded-br-md rounded-bl-md backdrop-blur-md py-2 flex items-center justify-between w-full px-3'>
						<p className='dark:text-lightDefault text-default'>{data.author}</p>
						<div className='flex items-center gap-2'>
							{data.tags.map((t, i) => (
								<span
									key={i}
									className='bg-lime-100 text-primary text-sm rounded-full px-1'
								>
									#{t}
								</span>
							))}
						</div>
					</div>

					<div className='mt-4 py-2 text-sm flex justify-between items-center dark:text-action text-lightAction'>
						<p>{`Posted ${dateKit.format(data.published_at)}`}</p>
						<p>{`Updated ${dateKit.format(data.updated_at)}`}</p>
					</div>

					<div className='mt-6 dark:text-lightDefault text-default rounded-md relative'>
						<ReactMarkdown
							remarkPlugins={[remarkGfm, remarkParse]}
							rehypePlugins={[rehypeRaw, rehypeStringify]}
							components={MarkdownComponents}
						>
							{data.description}
						</ReactMarkdown>
					</div>
				</div>
				<div className='md:w-1/5 md:block hidden sticky top-5 pl-8'>
					<p className='uppercase dark:text-lightDefault text-default text-sm mb-2'>
						contents
					</p>
					<div className='border-l dark:border-lightDefault border-default flex flex-col gap-2 dark:text-lightSecondary text-secondary pl-2'>
						{data.tableContent.map((t, idx) => (
							<React.Fragment key={idx}>
								<a
									href={`#${t}`}
									className='hover:text-green-500 duration-300 transition-colors'
								>
									{t}
								</a>
							</React.Fragment>
						))}
					</div>
					<p className='uppercase dark:text-lightDefault text-default text-sm mb-2 mt-6'>
						code themes
					</p>
					<div className='pl-2 border-l dark:border-lightDefault border-default'>
						{availableTheme.map((a, i) => (
							<button
								key={i}
								onClick={() => switchTheme(i)}
								className={`px-3 py-1 bg-black/30 mx-1 text-[10px] rounded-full capitalize ${
									syntaxTheme === a.theme ? 'text-gray-300' : 'text-green-900'
								}`}
							>
								{a.name}
							</button>
						))}
					</div>

					<div className='pl-2 border-l dark:border-lightDefault border-default mt-6 hover:dark:text-green-800 transition-colors duration-200'>
						<button
							className='border-b border-dotted border-spacing-2 dark:border-lightDefault border-default'
							onClick={() => router.back()}
						>
							Back
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
export default BlogDetailPage

