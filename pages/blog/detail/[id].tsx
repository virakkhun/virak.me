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
import { trpc } from '../../../utils/trpc'
import { useRouter } from 'next/router'
import { cryptoKit } from '../../../utils/kits/crypto'
import Loading from '../../../components/loading'
import { dateKit } from '../../../utils/kits/date_kit'

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

const BlogDetail: NextPage = () => {
	const router = useRouter()
	const { id } = router.query
	const serialize = cryptoKit().decrypt(
		id as string,
		`${process.env.ENCRYPT_KEY}`,
	)

	const { data } = trpc.getBlogsDetail.useQuery({
		id: serialize,
	})

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
				<title>{`${data.attributes.title} | Detail`}</title>
				<meta property='og:site_name' content="Virak Khun's Portfolio" />
				<meta property='og:title' content={`${data.attributes.title}`} />
				<meta property='og:url' content='https://virak-portfolio.vercel.app' />
				<meta property='og:type' content='website' />
				<meta
					property='og:description'
					content={data.attributes.blog_detail.data.attributes.detail}
				/>
				<meta
					property='og:image'
					content='https://my-image-upload-storage.s3.amazonaws.com/1665226426753banner.png'
				/>
				<meta name='twitter:title' content='Virak Khun | Portfolio' />
				<meta
					name='twitter:image'
					content='https://my-image-upload-storage.s3.amazonaws.com/1665226426753banner.png'
				/>
				<meta name='twitter:author' content='@virak' />
				<meta name='twitter:url' content='https://virak-portfolio.vercel.app' />
				<meta name='twitter:card' content='summary' />
				<meta
					name='twitter:description'
					content='A Full Stack Developer based in Phnom Penh, Cambodia'
				/>
				<meta
					name='description'
					content='A Full Stack Developer based in Phnom Penh, Cambodia'
				/>
			</Head>
			<div className='mx-auto md:w-3/4 w-full md:px-0 px-2 my-6'>
				<p className='font-bold mb-2'>
					<span>Introducing</span>{' '}
					<span className='text-2xl text-green-600'>
						{data.attributes.title}
					</span>
				</p>
				<div className='relative w-full'>
					<div className='overflow-hidden'>
						<img
							src={`https://portfolio-cms.virak.me${data.attributes.thumnail.data.attributes.url}`}
							alt={data.attributes.thumnail.data.attributes.alternativeText}
							className='rounded-tr-md rounded-tl-md w-full hover:scale-110 transition-all duration-300'
						/>
					</div>
				</div>

				<div className='bg-black/90 backdrop-blur-md py-2 flex items-center justify-between w-full px-3'>
					<p>{data.attributes.author}</p>
					<div className='flex items-center gap-2'>
						{data.attributes.tags.map((t, i) => (
							<span
								key={i}
								className='bg-lime-100 text-primary text-sm rounded-full px-1'
							>
								#{t}
							</span>
						))}
					</div>
				</div>

				<div className='mt-4 py-2 text-sm flex justify-between items-center text-gray-800'>
					<p>{`Posted ${dateKit.format(data.attributes.publishedAt)}`}</p>
					<p>{`Updated ${dateKit.format(data.attributes.updatedAt)}`}</p>
				</div>

				<div className='mt-6 dark:bg-slate-900 bg-slate-800 text-white  p-4 rounded-md relative'>
					<ReactMarkdown
						remarkPlugins={[remarkGfm, remarkParse]}
						rehypePlugins={[rehypeRaw, rehypeStringify]}
						components={MarkdownComponents}
					>
						{data.attributes.blog_detail.data.attributes.detail}
					</ReactMarkdown>

					<div className='absolute bottom-3 right-2'>
						{availableTheme.map((a, i) => (
							<button
								key={i}
								onClick={() => switchTheme(i)}
								className={`px-3 py-1 bg-black/30 mx-1 text-sm rounded-full capitalize ${
									syntaxTheme === a.theme ? 'text-gray-300' : 'text-green-900'
								}`}
							>
								{a.name}
							</button>
						))}
					</div>
				</div>
			</div>
		</>
	)
}
export default BlogDetail

