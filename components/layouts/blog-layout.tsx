import { ThemeProvider } from 'next-themes'
import { FaGithub, FaSun } from 'react-icons/fa'
import { RiMoonClearFill } from 'react-icons/ri'
import Link from 'next/link'
import Footer from './footer'

interface Props {
	children: JSX.Element
}

const BlogLayout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<ThemeProvider
				attribute='class'
				enableSystem={true}
				themes={['dark', 'light', 'system']}
				defaultTheme='dark'
			>
				<div className='md:container mx-auto'>
					<div className='md:w-full w-4/5 mx-auto my-2 z-50 flex justify-between items-center py-4 px-4'>
						<Link href='/'>
							<a className='font-bold'>VK</a>
						</Link>
						<div className='flex justify-between items-center gap-6'>
							<a href='https://github.com/virakkhun'>
								<FaGithub className='w-6 h-6 dark:fill-action fill-primary' />
							</a>
						</div>
					</div>
					<main>{children}</main>
					<Footer />
				</div>
			</ThemeProvider>
		</>
	)
}

export default BlogLayout

