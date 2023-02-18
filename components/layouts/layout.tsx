import { useScrollPercent } from '../../hooks/useScrollPercent'
import { useWindowScroll } from '../../hooks/useWindowScroll'
import TravelTop from '../assets/travel_top'
import Footer from './footer'
import Header from './header'
import { ThemeProvider } from 'next-themes'
interface Props {
	children: JSX.Element
}

const Layout: React.FC<Props> = ({ children }) => {
	const { percent } = useScrollPercent()
	const { y: ScrollY } = useWindowScroll()

	return (
		<>
			<ThemeProvider
				attribute='class'
				enableSystem={true}
				themes={['dark', 'light', 'system']}
				defaultTheme='dark'
			>
				<div className='fixed h-screen left-2 top-0 py-2'>
					<div
						style={{ height: `${percent}%` }}
						className={`w-1 rounded-lg bg-gradient-to-b from-action/30 to-primary/60 backdrop-blur-md`}
					/>
				</div>
				<Header />
				<div className='max-w-7xl md:container mx-auto relative md:px-20 px-4'>
					{children}
				</div>
				<Footer />
				<TravelTop style={ScrollY > 400 ? 'show' : ''} />
				<div className='fixed -bottom-32 -left-64 w-32 h-32 rounded-full bg-primary filter-200'></div>
			</ThemeProvider>
		</>
	)
}

export default Layout

