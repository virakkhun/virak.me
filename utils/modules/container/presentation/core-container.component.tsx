interface Props {
	children: JSX.Element
}
export default function CoreContainer({ children }: Props) {
	return (
		<div className='max-w-7xl container mx-auto md:px-0 px-4'>{children}</div>
	)
}

