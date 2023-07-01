'use client'

import Link from 'next/link'

export const HeaderComponent = () => {
	return (
		<header className='flex justify-between items-center py-2'>
			<div className='flex items-center gap-4'>
				<Link href='/blogs'>Blogs</Link>
			</div>
		</header>
	)
}

