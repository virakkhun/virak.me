import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Home - Virak Khun',
		colorScheme: 'dark light',
		themeColor: '#1A1A1A',
		description: 'A software engineer base on Phnom Penh',
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

async function fetchCommits() {
	const res = await fetch(
		'https://api.github.com/repos/virakkhun/personal-portfolio/commits',
		{
			method: 'GET',
			headers: {
				auth: `Bearer ${process.env.GH_TOKEN}`,
				'X-GitHub-Api-Version': '2022-11-28',
			},
		},
	)

	return { data: await res.json() }
}

export default async function Page() {
	const data = await fetchCommits()

	return (
		<div className='md:w-3/4 h-3/4 w-full md:px-0 px-4 overflow-x-scroll rounded-md relative scrollbar-none'>
			<p className='text-white text-2xl mb-3 sticky top-0 bg-default/10 backdrop-blur-md p-4 rounded-md'>
				rewriting...
			</p>
			<div className='flex flex-col gap-2'>
				{data.data.map((d: any, idx: any) => (
					<div key={idx} className='bg-black/80 rounded-md p-4'>
						<img
							src={d.author.avatar_url}
							alt={`${d.commit.author.name}'s avatar`}
							width={40}
							height={40}
							className='w-10 h-10 rounded-full'
						/>
						<div className='flex flex-col gap-1 mt-4'>
							<p className='font-bold text-white/80'>{d.commit.author.name}</p>
							<p className='text-sm text-white/50'>{d.commit.message}</p>
							<p className='text-sm text-white/50'>{d.commit.author.date}</p>
							<a
								href={d.html_url}
								target='_blank'
								rel='noreferrer'
								className='text-blue-500 font-semibold mt-2'
							>
								view commit
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

