'use client'

import { FaGithub } from 'react-icons/fa'
import { SideProjectEntity } from '../../domain/entities/side-project.entity'

const SideProject: React.FC<SideProjectEntity> = ({
	ghLink,
	ghRepoName,
	ghTitle,
	children,
}) => {
	return (
		<div
			className={`mt-4 border dark:border-secondary/20 p-2 rounded-md bg-gradient-to-br from-primary/50 to-secondary/50 backdrop-blur-2xl`}
		>
			<div className='flex justify-between items-center p-2 rounded-md border border-action/10 bg-gradient-to-tl from-default/50 to-secondary/50 backdrop-blur-2xl'>
				<p className='text-lg font-bold dark:text-lightDefault text-default'>
					{ghTitle}
				</p>
				<a href={ghLink} target='_blank' rel='noreferrer'>
					<FaGithub className='fill-primary dark:fill-lightPrimary' />
				</a>
			</div>
			<div className='border-b border-action/10 mt-4' />
			<div className='flex flex-col gap-2 justify-between items-center mt-4'>
				<p className='font-bold dark:text-lightDefault text-default'>
					{ghRepoName}
				</p>
				{children}
			</div>
		</div>
	)
}

export default SideProject

