import Link from 'next/link'
import { Blog } from '../utils/types/blogs.type'

const Blog: React.FC<Blog> = ({ attributes, id }) => {
	return (
		<>
			<Link href={`/blog/detail/${id}`}>
				<div className='bg-secondary/50 backdrop-blur-md flex flex-col gap-4'>
					<img
						src={`https://portfolio-cms.virak.me${attributes.thumnail.data.attributes.url}`}
						alt='thumnail'
						className='w-full'
					/>
					<div className='p-2 flex flex-col gap-2'>
						<p className='font-bold text-white text-xl'>{attributes.title}</p>
						<p className='px-3 py-1 bg-black rounded-full w-fit text-white text-sm'>
							{attributes.author}
						</p>
						<div className='flex items-center gap-2'>
							{attributes.tags.map((t, i) => (
								<span
									key={i}
									className='p-0.5 text-sm bg-lime-100 text-primary'
								>
									#{t}
								</span>
							))}
						</div>
					</div>
				</div>
			</Link>
		</>
	)
}

export default Blog

