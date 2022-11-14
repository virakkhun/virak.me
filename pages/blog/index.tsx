import Head from 'next/head'
import BlogLayout from '../../components/layouts/blog-layout'
import Blog from '../../components/blog'
import type { NextPageWithLayout } from '../_app'
import { ReactElement } from 'react'
import { Blog as SchemaBlog } from '../../utils/types/blogs.type'
export { getServerSideProps } from '../../store/getAllBlogs'

const BlogIndex: NextPageWithLayout<{
	data: SchemaBlog[]
}> = ({ data }) => {
	return (
		<>
			<Head>
				<title>Blog</title>
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
			<div className='flex flex-col items-center justify-center gap-10 mt-10'>
				<div className='text-center flex justify-center items-center flex-col gap-2'>
					<h1 className='font-bold text-2xl'>Blogs</h1>
					<p className='font-semibold'>
						A blog where get you to understand in a easy way.
					</p>
					<div className='h-2 w-20 rounded-full bg-slate-500'></div>
				</div>
				<div className='grid md:grid-cols-3 grid-cols-1 gap-3'>
					{data.map((d) => (
						<Blog attributes={d.attributes} id={d.id} key={d.id} />
					))}
				</div>
			</div>
		</>
	)
}

BlogIndex.getLayout = function getLayout(page: ReactElement) {
	return <BlogLayout>{page}</BlogLayout>
}

export default BlogIndex

