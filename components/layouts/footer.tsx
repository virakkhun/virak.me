import Link from 'next/link'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
	return (
		<div className='md:w-full w-4/5 mx-auto md:mt-24 mb-5 mt-5 flex md:flex-row flex-col md:justify-between justify-center md:items-start items-center md:gap-0 gap-2'>
			<div className='flex gap-2'>
				<a
					href='https://facebook.com/virakkhun.dev'
					target='_blank'
					rel='noreferrer'
				>
					<FaFacebook className='w-6 h-6 cursor-pointer fill-primary dark:fill-action' />
				</a>
				<a
					href='https://kh.linkedin.com/in/khun-virak-9025b1210'
					target='_blank'
					rel='noreferrer'
				>
					<FaLinkedin className='w-6 h-6 cursor-pointer fill-primary dark:fill-action' />
				</a>
				<a href='#' target='_blank' rel='noreferrer'>
					<FaTwitter className='w-6 h-6 cursor-pointer fill-primary dark:fill-action' />
				</a>
			</div>
			<div>
				<span>Authorized by</span>
				<span className='font-bold pl-2 dark:text-default text-primary'>
					virak@info.com
				</span>
			</div>
		</div>
	)
}

export default Footer
