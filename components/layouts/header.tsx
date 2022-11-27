import { useTheme } from 'next-themes'
import { FaGithub, FaSun } from 'react-icons/fa'
import { RiMoonClearFill } from 'react-icons/ri'
import Link from 'next/link'

const Header = () => {
	const { theme, setTheme } = useTheme()
	return (
		<>
			<div className='lg:w-full md:w-4/5 max-w-[90rem] mx-auto z-50 flex justify-between items-center py-4 relative md:px-[4rem] px-4 border-b dark:border-lightDefault/20 border-default/20'>
				<Link href='/'>
					<a className='font-bold text-2xl'>VK</a>
				</Link>
				<div className='flex justify-between items-center gap-6'>
					<Link href='/blog'>
						<a className='text-lg font-semibold hover:text-pink-600/90 duration-200 transition-all'>
							Blog
						</a>
					</Link>
					<a href='https://github.com/virakkhun'>
						<FaGithub className='w-6 h-6 dark:fill-lightAction fill-primary' />
					</a>
					<button
						className='w-6 h-6 rounded-full dark:bg-lightPrimary bg-primary relative filter-100'
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
					>
						{theme === 'dark' ? (
							<FaSun className='w-6 h-5 absolute top-0.5 left-0 dark:fill-primary fill-lightPrimary' />
						) : (
							<RiMoonClearFill className='w-6 h-5 absolute top-0.5 right-0 dark:fill-primary fill-lightPrimary' />
						)}
					</button>
				</div>
			</div>
		</>
	)
}

export default Header

