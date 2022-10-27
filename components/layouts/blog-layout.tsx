import { ThemeProvider } from 'next-themes'

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
					<main>{children}</main>
				</div>
			</ThemeProvider>
		</>
	)
}

export default BlogLayout

