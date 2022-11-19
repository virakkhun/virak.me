export const dateKit = {
	/**
	 * @format
	 * Nov, 17 2000
	 *
	 * @param date
	 */
	format: (date: string): string => {
		/**
		 * @proto Thu Nov 17 2022
		 */
		const newDate = new Date(date).toDateString()
		const splitDate = newDate.split(' ')

		return `${splitDate[1]}, ${splitDate[2]} ${splitDate[3]}`
	},
}

