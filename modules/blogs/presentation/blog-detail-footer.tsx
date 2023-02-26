'use client'

import React from 'react'
import { DateService } from '../../../shared/services/data.service'

interface Props {
	authorName: string
	tags: string[]
	updatedAt: string
	createdAt: string
}

const BlogDetailFooterComponent: React.FC<Props> = ({
	authorName,
	tags,
	createdAt,
	updatedAt,
}) => {
	const { format } = DateService

	return (
		<div>
			<div className='dark:bg-action bg-lightAction my-4 rounded-md backdrop-blur-md py-2 flex items-center justify-between w-full px-3'>
				<p className='dark:text-lightDefault text-default'>{authorName}</p>
				<div className='flex items-center gap-2'>
					{tags.map((t, i) => (
						<span
							key={i}
							className='bg-lime-100 text-primary text-sm rounded-full px-1'
						>
							#{t}
						</span>
					))}
				</div>
			</div>

			<div className='mt-4 py-2 text-sm flex justify-between items-center dark:text-action text-lightAction'>
				<p>{`Posted ${format(createdAt)}`}</p>
				<p>{`Updated ${format(updatedAt)}`}</p>
			</div>
		</div>
	)
}

export default BlogDetailFooterComponent

