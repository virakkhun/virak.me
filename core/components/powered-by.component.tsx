import pkg from '../../package.json'

export const PoweredByComponent = () => {
	return (
		<>
			<div className='fixed w-full mx-auto bottom-2 text-white/50 flex justify-center items-center'>
				<div className='flex items-center gap-2'>
					<p>Powered by</p>
					<a href='https://nextjs.org' className='text-blue-300'>
						Nextjs {pkg.dependencies.next}
					</a>
				</div>
			</div>
		</>
	)
}

