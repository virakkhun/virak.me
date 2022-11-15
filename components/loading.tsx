import React from 'react'

const Loading: React.FC<{ text: string }> = ({ text }) => {
	return (
		<>
			<div className='w-full h-screen flex justify-center items-center fixed top-0 left-0 bg-primary'>
				<div className='w-3/4 h-3/4 rounded-md shadow-md bg-slate-900 backdrop-blur-md flex flex-col gap-4 justify-center items-center'>
					<div>
						<p>{text}</p>
					</div>
					<div className='spinner-container'>
						<div className='spinnerWrap'>
							<div className='spinner' id='spinner5' />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Loading

