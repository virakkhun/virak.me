// import { useScrollPercent } from '../../hooks/useScrollPercent'
// import { useWindowScroll } from '../../hooks/useWindowScroll'
// import TravelTop fro../components/travel_toptop'
import Footer from './footer'
import Header from './header'
// import { ThemeProvider } from 'next-themes'
interface Props {
	children: JSX.Element | React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
	// const { percent } = useScrollPercent()
	// const { y: ScrollY } = useWindowScroll()

	return (
		// <>
		// 	<ThemeProvider
		// 		attribute='class'
		// 		enableSystem={true}
		// 		themes={['dark', 'light', 'system']}
		// 		defaultTheme='dark'
		// 	>
		// 		<div className='fixed h-screen left-2 top-0 py-2'>
		// 			<div
		// 				style={{ height: `${percent}%` }}
		// 				className={`w-1 rounded-lg bg-gradient-to-b from-action/30 to-primary/60 backdrop-blur-md`}
		// 			/>
		// 		</div>
		// 		<TravelTop style={ScrollY > 400 ? 'show' : ''} />
		// 	</ThemeProvider>
		// </>
		<html>
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}

export default Layout

