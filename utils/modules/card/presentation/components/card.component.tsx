import Link from 'next/link'
import { CardEntity } from '../../model/card.entity'

const CoreCardComponent: React.FC<CardEntity> = ({ children, link }) => {
	return (
		<div className={link ? 'cursor-pointer' : ''}>
			<Link href={link ?? ''}>
				<div className='p-4 rounded-md dark:bg-lightPrimary/20 bg-primary/20'>
					{children}
				</div>
			</Link>
		</div>
	)
}

export default CoreCardComponent

