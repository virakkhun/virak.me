import Link from 'next/link'
import { cryptoKit } from '../utils/kits/crypto'
import { Blog } from '../utils/types/blogs.type'

const Blog: React.FC<Blog> = ({ attributes, id }) => {
	const blogId = cryptoKit().encrypt(String(id), `${process.env.ENCRYPT_KEY}`)

	return (
		<>
			<Link href={`/blog/${blogId}`}>
				<a>
					<div className='dark:bg-black/80 bg-lightAction rounded-xl dark:text-lightDefault text-default shadow-xl flex flex-col gap-2 border dark:border-lightAction/20 border-action/20'>
						<div className='overflow-hidden'>
							<img
								src={`https://portfolio-cms.virak.me${attributes.thumnail.data.attributes.url}`}
								alt='thumnail'
								className='w-full hover:scale-110 transition-all duration-150'
							/>
						</div>
						<div className='p-2 flex flex-col gap-2'>
							<p className='font-bold text-green-600 text-2xl'>
								{attributes.title}
							</p>
							<p>{attributes.description}</p>
							<div className='border-b dark:border-b-lightAction/20 border-b-primary/20 my-2' />
							<div className='flex items-center justify-between'>
								<p className='px-3 py-1 dark:bg-primary bg-lightPrimary rounded-full w-fit dark:text-lightDefault text-default text-sm'>
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

