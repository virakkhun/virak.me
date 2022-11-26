import Head from 'next/head'
import Blog from '../../components/blog'
import Loading from '../../components/loading'
import { NextPage } from 'next'
import { trpc } from '../../utils/trpc'

const BlogIndex: NextPage = () => {
	const { data } = trpc.getBlogs.useQuery()

	if (!data) return <Loading text='Blog | Loading...' />
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
			<div className='flex flex-col items-center justify-center gap-10 mt-10 px-4'>
				<div className='text-center flex justify-center items-center flex-col gap-2'>
					<h1 className='font-bold text-2xl dark:text-lightPrimary text-primary'>
						Blogs
					</h1>
					<p className='font-semibold dark:text-lightDefault text-default'>
						A blog where get you to understand in a easy way.
					</p>
					<div className='h-2 w-20 rounded-full bg-slate-500' />
				</div>
				<div className='grid lg:grid-cols-3 md:grid-cols-2 lg:w-full md:w-4/5 mx-auto grid-cols-1 gap-6'>
					{data.map((d) => (
						<Blog attributes={d.attributes} id={d.id} key={d.id} />
					))}
				</div>
			</div>
		</>
	)
}

export default BlogIndex

