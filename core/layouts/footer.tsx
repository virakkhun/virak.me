'use client'

import Link from 'next/link'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

const Footer = () => {
	const _currentDate = new Date().getFullYear()

	return (
		<div className='md:w-full w-4/5 mx-auto md:mt-24 mb-5 mt-5 flex flex-col justify-center items-center gap-4'>
			<div className='w-full flex gap-2 justify-center'>
				<a
					href='https://kh.linkedin.com/in/khun-virak-9025b1210'
					target='_blank'
					rel='noreferrer'
				>
					<FaLinkedin className='w-6 h-6 cursor-pointer fill-primary dark:fill-lightPrimary' />
				</a>
				<a href='#' target='_blank' rel='noreferrer'>
					<FaTwitter className='w-6 h-6 cursor-pointer fill-primary dark:fill-lightPrimary' />
				</a>
				<a href='mailto:virak.dev.2000@gmail.com' rel='noreferrer'>
					<IoMdMail className='w-6 h-6 cursor-pointer fill-primary dark:fill-lightPrimary' />
				</a>
			</div>

			<Link href='/unsplash' className='uppercase underline underline-offset-4'>
				my unsplash
			</Link>

			<p className='text-sm bold'>Copyright ©{_currentDate}</p>
		</div>
	)
}

export default Footer

