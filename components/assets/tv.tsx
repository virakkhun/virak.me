import Image from 'next/image'
import React from 'react'
import TvWithShadowImage from '../../public/images/tv-with-shadow.png'
import TvNoShadowImage from '../../public/images/tv-no-shadow.png'

interface Props {
	style: string
	isShadow: boolean
}

const TvAsset: React.FC<Props> = ({ style, isShadow }) => {
	return (
		<div className={`${style} flex justify-center items-center`}>
			<Image
				src={isShadow ? TvWithShadowImage : TvNoShadowImage}
				alt='tv-fly'
				className='w-full h-full'
			/>
		</div>
	)
}

export default TvAsset
