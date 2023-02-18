import React from 'react'

const Loading: React.FC<{ text: string }> = ({ text }) => {
	return (
		<>
			<div className='w-full h-32 my-auto flex justify-center items-center bg-primary mt-10'>
				<div className='backdrop-blur-md flex flex-col gap-4 justify-center items-center'>
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

