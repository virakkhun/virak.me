import '../styles/globals.css'
import '../styles/util.css'
import '../styles/animation.css'
import { trpc } from '../utils/trpc'
import { ThemeProvider } from 'next-themes'
import type { AppProps, AppType } from 'next/app'
import Layout from '../components/layouts/layout'

const App: AppType = ({ Component, pageProps }: AppProps) => {
	return (
		<>
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
		</>
	)
}

export default trpc.withTRPC(App)

