import SideProject from './side-project-card.component'
import { type HomeSideProjectEntity } from '../../domain/entities/home-side-project.entity'
import CoreContainer from '../../../../utils/modules/container/presentation/core-container.component'

const HomeSideProjectComponent: React.FC<HomeSideProjectEntity> = ({
	sideProjects,
}) => {
	return (
		<div className='mt-10'>
			<CoreContainer>
				<div className='md:w-3/4 w-full mx-auto'>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
						{sideProjects
							? sideProjects.map((p, idx) => (
									<div key={idx}>
										<SideProject
											ghLink={p.ghLink}
											ghRepoName={p.ghRepoName}
											ghTitle={p.ghTitle}
											style='side'
										>
											<div className='flex items-center gap-2 text-sm'>
												{p.stack.map((s, i) => (
													<span
														key={i}
														className='py-0.5 px-1 rounded-full dark:bg-white/50 bg-primary/50 text-white'
													>
														{s}
													</span>
												))}
											</div>
										</SideProject>
									</div>
							  ))
							: ''}
					</div>
				</div>
			</CoreContainer>
		</div>
	)
}

export default HomeSideProjectComponent

