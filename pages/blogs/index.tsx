import { NextPage } from 'next'
import { GetBlogController } from '../../modules/blogs/app/controllers/blog.controller'
import Head from 'next/head'
import Loading from '../../components/loading'
import BlogHeader from '../../modules/blogs/presentation/blog-header'
import BlogCard from '../../modules/blogs/presentation/blog-card'

const BlogIndex: NextPage = () => {
	const data = GetBlogController()

	if (!data) return <Loading text='Blog | Loading...' />
	const seoThumbnail = `https://cms-service-1e6h.onrender.com${data[0].thumbnailUrl}`

	return (
		<>
			<Head>
				<title>Blog</title>
				<meta property='og:site_name' content="Virak Khun's Portfolio" />
				<meta property='og:title' content='Virak Khun | Portfolio' />
				<meta property='og:url' content='https://virak.me' />
				<meta property='og:type' content='article' />
				<meta
					property='og:description'
					content='Blog content for sharing with others.'
				/>
				<meta property='og:image' content={seoThumbnail} />
				<meta name='twitter:title' content='Virak Khun | Portfolio' />
				<meta name='twitter:image' content={seoThumbnail} />
				<meta name='twitter:author' content='@virak' />
				<meta name='twitter:url' content='https://virak.me' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta
					name='twitter:description'
					content='Blog content for sharing with others.'
				/>
				<meta
					name='description'
					content='Blog content for sharing with others.'
				/>
				<link rel='canonical' href='https://virak.me/blog' />
				<link rel='alternate' href='https://virak.me/blog' />
			</Head>
			<BlogHeader />
			<div className='grid lg:grid-cols-3 md:grid-cols-2 lg:w-full md:w-4/5 mx-auto grid-cols-1 gap-6'>
				{data.map((d) => (
					<BlogCard
						author={d.author}
						description={d.description}
						id={d.id}
						tags={d.tags}
						key={d.id}
						title={d.title}
						thumbnailUrl={d.thumbnailUrl}
					/>
				))}
			</div>
		</>
	)
}

export default BlogIndex

