import { useTheme } from 'next-themes'
import { FaGithub, FaSun, FaMoon } from 'react-icons/fa'
import Link from 'next/link'

const Header = () => {
	const { theme, setTheme } = useTheme()
	return (
		<div className='md:w-full w-4/5 mx-auto md:my-10 z-50 my-5 flex justify-between items-center py-4 px-4 dark:bg-action/10 bg-primary/10 backdrop-blur-md rounded-md border dark:border-white/10 border-primary/10 filter-dark'>
			<div className='flex items-center gap-2'>
				<a href='#about'>#about</a>
				<a href='#side'>#side_project</a>
			</div>
			<div className='flex justify-between items-center gap-3'>
				<Link href='#'>
					<FaGithub className='w-6 h-6 dark:fill-action fill-primary' />
				</Link>
				<button
					className='w-6 h-6 rounded-full dark:bg-action bg-primary relative filter-100'
					onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				>
					{theme === 'dark' ? (
						<FaSun className='w-6 h-5 absolute top-0.5 left-0 fill-primary' />
					) : (
						<FaMoon className='w-6 h-5 absolute top-0.5 right-0 fill-action -rotate-180 transition-all duration-500' />
					)}
				</button>
			</div>
		</div>
	)
}

export default Header
