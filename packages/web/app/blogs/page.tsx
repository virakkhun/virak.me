import { Metadata } from 'next'
import Link from 'next/link'

export function generateMetadata(): Metadata {
	return {
		title: 'Blogs - Virak Khun',
		colorScheme: 'dark light',
		themeColor: '#1A1A1A',
		description: 'A software engineer based on Phnom Penh',
		keywords: [
			'portfolio',
			'personal website',
			'virakkhun',
			'khunvirak',
			'khun virak',
			'virak dev',
			'software engineer',
		],
		creator: 'virakkhun',
		referrer: 'no-referrer',
		twitter: {
			card: 'summary_large_image',
			title: 'Blogs - Virak Khun',
		},
	}
}

export default function NotFound() {
	return (
		<div className='flex flex-col gap-2 items-center p-4 rounded-md text-secondary'>
			<p>Coming soon...</p>
			<Link href='/'>
				<button className='bg-action py-2 px-4 rounded-md'>back home</button>
			</Link>
		</div>
	)
}

