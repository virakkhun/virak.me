import { useScrollPercent } from '../../hooks/useScrollPercent'
import { useWindowScroll } from '../../hooks/useWindowScroll'
import { IoMdPlanet } from 'react-icons/io'
import TravelTop from '../assets/travel_top'
import Footer from './footer'
import Header from './header'
interface Props {
	children: JSX.Element
}

const Layout: React.FC<Props> = ({ children }) => {
	const { percent } = useScrollPercent()
	const { y: ScrollY } = useWindowScroll()

	return (
		<>
			<div className='md:container mx-auto relative'>
				<div className='fixed h-screen left-2 top-0 py-2'>
					<div
						style={{ height: `${percent}%` }}
						className={`w-1 rounded-lg bg-gradient-to-b from-action/30 to-primary/60 backdrop-blur-md`}
					></div>
				</div>
				<div
					className='fixed right-2'
					style={{
						bottom: `${percent}%`,
						transform: `rotate(${parseInt(percent)}deg)`,
					}}
				>
					<IoMdPlanet
						className='h-7 w-7 filter-900'
						style={{
							color: `hsl(${percent}, ${percent}%, ${percent}%)`,
						}}
					/>
				</div>
				<Header />
				<main>{children}</main>
				<Footer />
				<TravelTop style={ScrollY > 400 ? 'show' : ''} />
				<div className='fixed -bottom-32 -left-64 w-32 h-32 rounded-full bg-primary filter-200'></div>
			</div>
		</>
	)
}

export default Layout
