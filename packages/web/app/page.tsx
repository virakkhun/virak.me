import { Metadata } from 'next'
import Image from 'next/image'
import VirakPhoto from '../assets/images/virak_khun.jpg'

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Home - Virak Khun',
		colorScheme: 'dark light',
		themeColor: '#1A1A1A',
		description: 'A software engineer based on Phnom Penh',
		openGraph: {
			images: 'https://virak.me/api/og',
			title: 'Home - Virak Khun',
			authors: '@virakkhun',
			description: 'A software engineer based on Phnom Penh',
			locale: 'en-US',
			siteName: 'virak.me',
			url: 'virak.me',
		},
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
			title: 'Home - Virak Khun',
		},
	}
}

export default async function Page() {
	return (
		<div className='mt-10'>
			<div className='w-56 h-56 object-cover rounded-full overflow-hidden'>
				<Image src={VirakPhoto} alt='a picture of virak khun' />
			</div>
			<div className='mt-4'>
				<p className='text-xl font-semibold mb-2'>Hey, I&rsquo;m Virak Khun</p>
				<p>A software engineer based in Phnom Penh, Cambodia</p>
			</div>
		</div>
	)
}

