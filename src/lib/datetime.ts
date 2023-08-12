import { DateTime } from 'luxon';

const { timeZone, locale, numberingSystem } = Intl.DateTimeFormat().resolvedOptions();

export const DT = {
	parse: (date: string) =>
		DateTime.fromISO(date, { zone: timeZone, setZone: true, numberingSystem }).toLocaleString(
			DateTime.DATE_MED,
			{ locale }
		)
};
