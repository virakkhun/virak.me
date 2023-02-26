import MarkdownComponent from '../../../modules/blogs/presentation/markdown'
import BlogDetailFooterComponent from '../../../modules/blogs/presentation/blog-detail-footer'
import React from 'react'
import Link from 'next/link'
import { GetBlogDetailController } from '../../../modules/blogs/app/controllers/blog-detail.controller'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Detail - Virak Khun',
		colorScheme: 'dark light',
		themeColor: '#1A1A1A',
		twitter: {
			card: 'summary_large_image',
			title: 'Home - Virak Khun',
		},
	}
}

export default async function BlogDetailPage({
	params,
}: {
	params: { id: string }
}) {
	const { id } = params

	const data = await GetBlogDetailController(id)

	return (
		<>
			<div className='mx-auto w-full my-6 flex gap-4 items-start'>
				<div className='md:w-4/5 w-full'>
					<div className='font-bold mb-2'>
						<p className='text-2xl text-green-600 capitalize'>{data!.title}</p>
					</div>

					<div className='mt-6 dark:text-lightDefault text-default rounded-md relative'>
						<MarkdownComponent content={data!.description} />
					</div>

					<BlogDetailFooterComponent
						authorName={data!.author}
						createdAt={data!.published_at}
						updatedAt={data!.updated_at}
						tags={data!.tags}
					/>
				</div>
				<div className='md:w-1/5 md:block hidden sticky top-5 pl-8'>
					<p className='uppercase dark:text-lightDefault text-default text-sm mb-2'>
						contents
					</p>
					<div className='border-l dark:border-lightDefault border-default flex flex-col gap-2 dark:text-lightSecondary text-secondary pl-2'>
						{data!.tableContent.map((t, idx) => (
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

					<div className='pl-2 border-l dark:border-lightDefault border-default mt-6 hover:dark:text-green-800 transition-colors duration-200'>
						<Link
							href='/blogs'
							className='border-b border-dotted border-spacing-2 dark:border-lightDefault border-default'
						>
							Back
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

