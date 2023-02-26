'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CryptoService } from '../../../shared/services/crypto.service'
import { Blog } from '../domain/models/blog'

const BlogCard: React.FC<Blog> = ({
	description,
	tags,
	thumbnailUrl,
	title,
	id,
	author,
}) => {
	const blogId = id

	const thumbnail = `https://api.virak.me${thumbnailUrl}`

	return (
		<>
			<Link href={`/blogs/${blogId}`}>
				<div className='dark:bg-black/80 bg-lightAction dark:text-lightDefault text-default shadow-xl flex flex-col gap-2 border dark:border-lightAction/20 border-action/20 rounded-lg'>
					<div className='object-cover aspect-video overflow-hidden'>
						<Image
							src={thumbnail}
							alt='thumbnail'
							className='aspect-video hover:scale-110 transition-all duration-200 object-contain'
							loading={'lazy'}
							width={400}
							height={400}
						/>
					</div>
					<div className='p-2 flex flex-col gap-4 px-3 max-w-full'>
						<p className='font-bold text-xl capitalize'>{title}</p>
						<p className='font-md text-md max-w-full line-clamp-2'>
							{description}
						</p>
						<div className='flex items-center justify-between'>
							<p className='px-3 text-sm py-1 dark:bg-primary bg-lightPrimary rounded-full w-fit dark:text-lightDefault text-default'>
								{author}
							</p>
							<div className='flex items-center gap-2'>
								{tags.map((t, i) => (
									<span key={i} className='text-sm text-white'>
										#{t}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</Link>
		</>
	)
}

export default BlogCard

