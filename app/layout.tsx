// import Footer from '../shared/layouts/footer'
// import Header from '../shared/layouts/header'
import '../styles/globals.css'
import '../styles/util.css'
import '../styles/animation.css'
import { PoweredByComponent } from '../core/components/powered-by.component'

interface Props {
	children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang='en'>
			<body>
				{/* <Header /> */}
				<div className='relative w-full h-screen flex justify-center items-center'>
					{children}
				</div>
				{/* <Footer /> */}
				<PoweredByComponent />
			</body>
		</html>
	)
}

