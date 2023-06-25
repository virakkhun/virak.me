import { FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { LINKEDIN, TWITTER } from '../domains/constants/social-link.const'
import { Divider } from '@virak.me/ui'

export const FooterComponent = () => {
	return (
		<>
			<footer className='py-2 flex items-center gap-2'>
				<div className='flex items-center gap-2'>
					<a href={TWITTER} target='_blank' rel='noreferrer'>
						<FaTwitter className='w-7 h-7' />
					</a>
					<a href={LINKEDIN} target='_blank' rel='noreferrer'>
						<FaLinkedin className='w-7 h-7' />
					</a>
					<span>|</span>
					<p>All right reserved</p>
					<span>|</span>
					<p>2023</p>
				</div>
			</footer>
		</>
	)
}

