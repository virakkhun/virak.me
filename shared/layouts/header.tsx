'use client'

import { useTheme } from 'next-themes'
import { FaGithub, FaSun, FaMoon, FaHome } from 'react-icons/fa'
import Link from 'next/link'

const Header = () => {
	const { theme, setTheme } = useTheme()

	const _switchTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<div className='z-50 border-b dark:border-lightDefault/20 border-default/20'>
			<div className='py-4 md:px-20 px-4 flex justify-between items-center relative max-w-7xl mx-auto'>
				<Link
					href='/'
					className='font-md py-1.5 px-4 rounded-md bg-secondary/20 hover:bg-secondary/40 focus:outline focus:outline-secondary/10 transition-all duration-200'
				>
					<FaHome className='w-5 h-5' />
				</Link>
				<div className='flex justify-between items-center gap-6'>
					<Link
						href='/blogs'
						className='font-bold py-1.5 px-4 rounded-md bg-secondary/20 hover:bg-secondary/40 focus:outline focus:outline-secondary/10 transition-all duration-200'
					>
						BLOGS
					</Link>
					<Link href='https://github.com/virakkhun' target={'_blank'}>
						<FaGithub className='w-6 h-6 dark:fill-lightAction fill-primary' />
					</Link>
					<button
						className='h-7 w-7 rounded-full dark:bg-lightPrimary/40 border darK:border-lightPrimary/20 bg-primary/20 border-primary/20 flex justify-center items-center'
						onClick={_switchTheme}
					>
						{theme === 'light' ? (
							<FaSun className='w-5 h-5 fill-lightPrimary' />
						) : (
							<FaMoon className='w-5 h-5 fill-primary' />
						)}
					</button>
				</div>
			</div>
		</div>
	)
}

export default Header

