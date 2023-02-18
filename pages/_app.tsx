import '../styles/animation.css'
import '../styles/globals.css'
import '../styles/util.css'
import Layout from '../components/layouts/layout'
import { ThemeProvider } from 'next-themes'
import { trpc } from '../utils/trpc'
import { type AppProps, type AppType } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
const App: AppType = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider
			attribute='class'
			enableSystem={true}
			themes={['dark', 'light', 'system']}
			defaultTheme='dark'
		>
			<Layout>
				<>
					<Component {...pageProps} />
					<Analytics />
				</>
			</Layout>
		</ThemeProvider>
	)
}

export default trpc.withTRPC(App)

