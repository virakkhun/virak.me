import { useEffect } from 'react'

interface IntersectionObserverProps {
	className: string
	threshold?: number | number[]
	rootMargin?: string
	target: string
}

const useIntersectionObserver = ({
	className,
	threshold,
	rootMargin,
	target,
}: IntersectionObserverProps) => {
	useEffect(() => {
		if (typeof IntersectionObserver !== 'undefined') {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						entry.target.classList.toggle(className, entry.isIntersecting)
						if (entry.isIntersecting) {
							observer.unobserve(entry.target)
						}
					})
				},
				{
					threshold: threshold ?? 0,
					rootMargin: rootMargin ?? `0px`,
				},
			)

			document.querySelectorAll(target).forEach((t) => {
				observer.observe(t)
			})
		}
	})
}

export default useIntersectionObserver
