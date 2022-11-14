import Head from 'next/head'
import BlogLayout from '../../../components/layouts/blog-layout'
import ReactMarkdown from 'react-markdown'
import remark from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { ReactElement } from 'react'
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

const BlogDetail: NextPageWithLayout<{ data: BlogDetail }> = ({ data }) => {
	return (
		<>
			<Head>
				<title>{`${data.attributes.title} | Detail`}</title>
				<meta property='og:site_name' content="Virak Khun's Portfolio" />
				<meta property='og:title' content='Virak Khun | Portfolio' />
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
			<div className='mx-auto w-3/4 my-6'>
				<p className='font-bold'>Introducing {data.attributes.title}</p>
				<img
					src={`https://portfolio-cms.virak.me${data.attributes.thumnail.data.attributes.url}`}
					alt={data.attributes.thumnail.data.attributes.alternativeText}
					className='rounded-md'
				/>
				<p>{data.attributes.author}</p>
				<div className='flex items-center gap-2'>
					{data.attributes.tags.map((t, i) => (
						<span
							key={i}
							className='bg-lime-100 text-primary text-sm rounded-full'
						>
							#{t}
						</span>
					))}
				</div>
				<div className='mt-6 bg-slate-900/50 p-4 rounded-md'>
					<ReactMarkdown remarkPlugins={[remark]} rehypePlugins={[rehypeRaw]}>
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

