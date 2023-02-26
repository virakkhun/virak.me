import BlogHeader from '../../modules/blogs/presentation/blog-header'
import BlogCard from '../../modules/blogs/presentation/blog-card'
import { GetBlogController } from '../../modules/blogs/app/controllers/blog.controller'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Blogs - Virak Khun',
		colorScheme: 'dark light',
		themeColor: '#1A1A1A',
		twitter: {
			card: 'summary_large_image',
			title: 'Home - Virak Khun',
		},
	}
}

export default async function BlogIndex() {
	const data = await GetBlogController()

	if (!data) throw new Error()

	return (
		<>
			<BlogHeader />
			<div className='grid lg:grid-cols-3 md:grid-cols-2 lg:w-full md:w-4/5 mx-auto grid-cols-1 gap-6'>
				{data?.map((d) => (
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

