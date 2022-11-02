import Head from 'next/head'
import Link from 'next/link'
import { ReactElement } from 'react'
import BlogLayout from '../../components/layouts/blog-layout'
import type { NextPageWithLayout } from '../_app'

const BlogIndex: NextPageWithLayout = () => {
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
					content='A Full Stack Developer based in Phnom Penh, Cambodia'
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
			<div className='w-full h-screen flex flex-col justify-center items-center'>
				<div className='dark:bg-default text-default dark:text-primary bg-primary lg:w-1/2 md:w-3/4 w-4/5 h-1/2 rounded-md flex flex-col items-center justify-center  gap-6'>
					<p>There is no blog currently!.</p>
					<p className='font-bold text-xl'>Coming Soon, like really soon ...</p>

					<Link href='/'>
						<button className='px-4 py-2 rounded-full bg-primary text-white'>
							home
						</button>
					</Link>
				</div>
			</div>
		</>
	)
}

BlogIndex.getLayout = function getLayout(page: ReactElement) {
	return <BlogLayout>{page}</BlogLayout>
}

export default BlogIndex

