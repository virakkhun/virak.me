import Link from 'next/link'
import { Blog } from '../utils/types/blogs.type'

const Blog: React.FC<Blog> = ({ attributes, id }) => {
	return (
		<>
			<Link href={`/blog/detail/${id}`}>
				<a>
					<div className='bg-secondary/50 backdrop-blur-md flex flex-col gap-2'>
						<div className='overflow-hidden'>
							<img
								src={`https://portfolio-cms.virak.me${attributes.thumnail.data.attributes.url}`}
								alt='thumnail'
								className='w-full hover:scale-110 transition-all duration-150'
							/>
						</div>
						<div className='p-2 flex flex-col gap-2'>
							<p className='font-bold text-white text-2xl'>
								{attributes.title}
							</p>
							<div className='flex items-center justify-between'>
								<p className='px-3 py-1 bg-black rounded-full w-fit text-white text-sm'>
									{attributes.author}
								</p>
								<div className='flex items-center gap-2'>
									{attributes.tags.map((t, i) => (
										<span
											key={i}
											className='p-0.5 rounded-full text-sm bg-lime-100 text-primary'
										>
											#{t}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</a>
			</Link>
		</>
	)
}

export default Blog

