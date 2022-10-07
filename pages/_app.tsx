import '../styles/globals.css'
import '../styles/util.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/layouts/layout'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className='relative'>
			<ThemeProvider
				attribute='class'
				enableSystem={true}
				themes={['dark', 'light', 'system']}
				defaultTheme='dark'
			>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</div>
	)
}

export default MyApp

