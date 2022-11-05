import { ThemeProvider } from 'next-themes'
import Footer from './footer'

interface Props {
	children: JSX.Element
}

const SharedLayout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<ThemeProvider
				attribute='class'
				enableSystem={true}
				themes={['dark', 'light', 'system']}
				defaultTheme='dark'
			>
				<div className='md:container mx-auto md:px-0 px-4'>
					<main>{children}</main>
					<Footer />
				</div>
			</ThemeProvider>
		</>
	)
}

export default SharedLayout

