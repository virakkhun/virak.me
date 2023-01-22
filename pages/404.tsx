import Link from 'next/link'

export default function ErrorPage() {
	return (
		<>
			<div className='w-full h-screen flex justify-center items-center gap-4 flex-col bg-primary text-white'>
				<p className='text-2xl font-semibold uppercase'>
					You look like you are losing!
				</p>
				<Link href='/'>
					<a className='bg-white py-1 px-3 text-primary rounded-full'>
						Back Home
					</a>
				</Link>
			</div>
		</>
	)
}

