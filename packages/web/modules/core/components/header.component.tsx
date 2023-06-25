'use client'

import Link from 'next/link'
import { FaGithub } from 'react-icons/fa6'

export const HeaderComponent = () => {
	return (
		<header className='flex justify-between items-center py-2'>
			<div>
				<FaGithub className='w-7 h-7' />
			</div>
			<div className='flex items-center gap-4'>
				<Link href='/blogs'>Blogs</Link>
			</div>
		</header>
	)
}

