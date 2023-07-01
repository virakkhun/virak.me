import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import {
	GITHUB,
	LINKEDIN,
	TWITTER,
} from '../domain/constants/social-link.const'

export const FooterComponent = () => {
	return (
		<>
			<footer className='py-2 flex items-center gap-2'>
				<div className='flex items-center gap-2'>
					<a href={GITHUB} target='_blank' rel='noreferrer'>
						<FaGithub className='w-7 h-7' />
					</a>
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

