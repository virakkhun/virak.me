import CoreCardComponent from '../../../../utils/modules/card/presentation/components/card.component'
import { FaBlog } from 'react-icons/fa'

const BlogCardComponent = () => {
	const _linkToBlogPage = '/blogs'
	const _blog = 'Blog'

	return (
		<>
			<CoreCardComponent link={_linkToBlogPage}>
				<div className='w-full flex flex-col gap-4 justify-center items-center'>
					<FaBlog className='w-20 h-20' />
					<p className='font-bold text-4xl'>{_blog}</p>
				</div>
			</CoreCardComponent>
		</>
	)
}

export default BlogCardComponent

