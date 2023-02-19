import Head from 'next/head'
import React, { useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { cryptoKit } from '../../utils/kits/crypto'
import { GetBlogDetailController } from '../../modules/blogs/app/controllers/blog-detail.controller'
import { MarkdownThemes } from '../../modules/blogs/app/services/markdown-themes.service'
import Loading from '../../components/loading'
import MarkdownComponent from '../../modules/blogs/presentation/markdown'
import BlogDetailFooterComponent from '../../modules/blogs/presentation/blog-detail-footer'

const BlogDetailPage: NextPage = () => {
	const router = useRouter()
	const { id } = router.query

	const serialize = cryptoKit().decrypt(
		id as string,
		`${process.env.ENCRYPT_KEY}`,
	)

	const data = GetBlogDetailController(serialize)

	const availableTheme = MarkdownThemes
	const [syntaxTheme, setTheme] = useState(MarkdownThemes[0].theme)

	const switchTheme = (idx: number) => {
		setTheme(availableTheme[idx].theme)
	}

	if (!data) return <Loading text='Blog Detail | Loading...' />

	return (
		<>
			<Head>
				<title>{`${data.title?.toUpperCase() ?? ''} | Detail`}</title>
				<meta property='og:site_name' content="Virak Khun's Portfolio" />
				<meta property='og:title' content={data.title} />
				<meta property='og:url' content={`https://virak.me/blogs/${id}`} />
				<meta property='og:type' content='article' />
				<meta property='og:description' content={data.description} />
				<meta
					property='og:image'
					content={`https://api.virak.me${data.thumbnailUrl}`}
				/>
				<meta name='twitter:title' content='Virak Khun | Portfolio' />
				<meta
					name='twitter:image'
					content={`https://api.virak.me${data.thumbnailUrl}`}
				/>
				<meta name='twitter:author' content='@virak' />
				<meta name='twitter:url' content={`https://virak.me/blogs/${id}`} />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:description' content={data.description} />
				<meta name='description' content={data.description} />
				<link rel='canonical' href={`https://virak.me/blogs/${id}`} />
				<link rel='alternate' href={`https://virak.me/blogs/${id}`} />
			</Head>
			<div className='mx-auto w-full my-6 flex gap-4 items-start'>
				<div className='md:w-4/5 w-full'>
					<div className='font-bold mb-2'>
						<p className='text-2xl text-green-600 capitalize'>{data.title}</p>
					</div>

					<div className='mt-6 dark:text-lightDefault text-default rounded-md relative'>
						<MarkdownComponent
							content={data.description}
							syntaxTheme={syntaxTheme}
						/>
					</div>

					<BlogDetailFooterComponent
						authorName={data.author}
						createdAt={data.published_at}
						updatedAt={data.updated_at}
						tags={data.tags}
					/>
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
								className={`px-3 py-1 mt-1 bg-black/30 mx-1 text-[10px] rounded-full capitalize focus:outline focus:outline-secondary/30 ${
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
							onClick={() => router.push('/blogs')}
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

