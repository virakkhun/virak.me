import Head from 'next/head'
import BlogLayout from '../../../components/layouts/blog-layout'

import ReactMarkdown from 'react-markdown'
import { Components } from 'react-markdown'
import remark from 'remark-gfm'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'
import typscript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown'
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json'
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import rehypeRaw from 'rehype-raw'
import rangeParser from 'parse-numeric-range'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import React, { ReactElement, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { fetchApi } from '../../../utils/FetchApi'
import { BlogDetail } from '../../../utils/types/blogs.type'
import type { NextPageWithLayout } from '../../_app'

export const getServerSideProps: GetServerSideProps = async (event) => {
	const data = await fetchApi<BlogDetail>(
		`${process.env.BASE_URL}/blogs/${event.params!.id}?populate=*`,
		'GET',
		{ Authorization: `Bearer ${process.env.TOKEN}` },
	)

	return {
		props: data,
	}
}

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

const BlogDetail: NextPageWithLayout<{ data: BlogDetail }> = ({ data }) => {
	const syntaxTheme = nord

	const MarkdownComponents: Components = {
		code({ node, inline, className, ...props }) {
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
				/>
			) : (
				<code className={className} {...props} />
			)
		},
	}

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
					content='Blog content for sharing with others.'
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
					<span className='text-2xl'>{data.attributes.title}</span>
				</p>
				<div className='relative w-full'>
					<img
						src={`https://portfolio-cms.virak.me${data.attributes.thumnail.data.attributes.url}`}
						alt={data.attributes.thumnail.data.attributes.alternativeText}
						className='rounded-md'
					/>
					<div className='bg-primary/40 backdrop-blur-md py-2 flex items-center justify-between bottom-0 absolute w-full px-3'>
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
				</div>
				<div className='mt-6 bg-slate-900 p-4 rounded-md'>
					<ReactMarkdown
						remarkPlugins={[remark]}
						rehypePlugins={[rehypeRaw]}
						components={MarkdownComponents}
					>
						{data.attributes.blog_detail.data.attributes.detail}
					</ReactMarkdown>
				</div>
			</div>
		</>
	)
}

BlogDetail.getLayout = function getLayout(page: ReactElement) {
	return <BlogLayout>{page}</BlogLayout>
}

export default BlogDetail

