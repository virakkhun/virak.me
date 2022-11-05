import { useTheme } from 'next-themes'
import Link from 'next/link'
import { FaGithub, FaSun } from 'react-icons/fa'
import { IoMdHome } from 'react-icons/io'
import { RiMoonClearFill } from 'react-icons/ri'

const Header = () => {
	const { theme, setTheme } = useTheme()
	return (
		<>
			<div className='md:w-full w-4/5 mx-auto my-2 z-50 flex justify-between items-center py-4 px-4'>
				<p className='font-bold'>VK</p>
				<div className='flex justify-between items-center gap-6'>
					<Link href='/blog'>
						<button className='text-lg font-semibold hover:text-pink-600/90 duration-200 transition-all'>
							Blog
						</button>
					</Link>
					<a href='https://github.com/virakkhun'>
						<FaGithub className='w-6 h-6 dark:fill-action fill-primary' />
					</a>
					<button
						className='w-6 h-6 rounded-full dark:bg-action bg-primary relative filter-100'
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
					>
						{theme === 'dark' ? (
							<FaSun className='w-6 h-5 absolute top-0.5 left-0 fill-primary' />
						) : (
							<RiMoonClearFill className='w-6 h-5 absolute top-0.5 right-0 fill-white transition-all duration-500' />
						)}
					</button>
				</div>
			</div>
		</>
	)
}

export default Header

