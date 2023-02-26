'use client'

import { CSSProperties } from 'react'
import { MarkdownThemes } from '../app/services/markdown-themes.service'

interface Props {
	switchTheme: (idx: number) => void
	currentTheme: {
		[key in string]: CSSProperties
	}
}

export const CodeTheme = ({ switchTheme, currentTheme }: Props) => {
	const allCodeThemes = MarkdownThemes

	return (
		<>
			<p className='uppercase dark:text-lightDefault text-default text-sm mb-2 mt-6'>
				code themes
			</p>
			<div className='pl-2 border-l dark:border-lightDefault border-default'>
				{allCodeThemes.map((a, i) => (
					<button
						key={i}
						onClick={() => switchTheme(i)}
						className={`px-3 py-1 mt-1 bg-black/30 mx-1 text-[10px] rounded-full capitalize focus:outline focus:outline-secondary/30 ${
							a.theme === currentTheme ? 'text-green-400' : ''
						}`}
						disabled={false}
					>
						{a.name}
					</button>
				))}
			</div>
		</>
	)
}

