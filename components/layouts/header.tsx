import { useTheme } from 'next-themes'
import { FaGithub, FaSun, FaMoon } from 'react-icons/fa'
import Link from 'next/link'

const Header = () => {
	const { theme, setTheme } = useTheme()

	const _switchTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	const _idDarkTheme = theme === 'dark'

	return (
		<div className='z-50 border-b dark:border-lightDefault/20 border-default/20'>
			<div className='py-4 md:px-0 px-4 flex justify-between items-center relative max-w-7xl mx-auto'>
				<Link href='/'>
					<a className='font-bold text-2xl'>VK</a>
				</Link>
				<div className='flex justify-between items-center gap-6'>
					<a href='https://github.com/virakkhun'>
						<FaGithub className='w-6 h-6 dark:fill-lightAction fill-primary' />
					</a>
					<button
						className='w-12 h-7 rounded-full dark:bg-lightPrimary/20 border darK:border-lightPrimary/20 bg-primary/20 border-primary/20 relative filter-100'
						onClick={_switchTheme}
					>
						<div
							className={`absolute top-0 flex justify-center items-center h-full ${
								_idDarkTheme ? 'left-1' : 'right-1'
							}`}
						>
							{_idDarkTheme ? (
								<FaSun className='w-5 h-5 fill-lightPrimary' />
							) : (
								<FaMoon className='rotate-180 w-5 h-5 fill-primary' />
							)}
						</div>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Header

