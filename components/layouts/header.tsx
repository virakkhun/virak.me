import { useTheme } from 'next-themes'
import Link from 'next/link'
import { FaGithub, FaSun } from 'react-icons/fa'
import { IoMdHome } from 'react-icons/io'
import { RiMoonClearFill } from 'react-icons/ri'

const Header = () => {
	const { theme, setTheme } = useTheme()
	return (
		<div className='sticky top-2 md:w-full w-4/5 mx-auto md:my-10 z-50 my-5 flex justify-between items-center py-4 px-4 dark:bg-action/10 bg-primary/10 backdrop-blur-md rounded-md border dark:border-white/10 border-primary/10 filter-dark'>
			<div className='flex items-end gap-4'>
				<a href='#'>
					<IoMdHome className='w-6 h-6 dark:fill-action fill-primary' />
				</a>
				<a
					href='#about'
					className='text-sm hover:text-primary/90 duration-300 transition-all'
				>
					About
				</a>
				<a
					href='#side'
					className='text-sm hover:text-primary/90 duration-300 transition-all'
				>
					Projects
				</a>
				<Link href='/blog'>
					<button className='text-sm hover:text-primary/90 duration-300 transition-all'>
						Blog
					</button>
				</Link>
			</div>
			<div className='flex justify-between items-center gap-3'>
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
	)
}

export default Header

