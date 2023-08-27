import { describe, expect, it } from 'vitest';
import { DT } from '../src/lib/datetime';

const now = `Aug 27 2023 16:01:11 GMT+0700`;
const pastMin = `Aug 27 2023 15:11:11 GMT+0700`;
const pastHours = `Aug 27 2023 14:01:11 GMT+0700`;
const pastDay = 'Aug 22 2023 16:01:11 GMT+0700';
const pastWeek = `Aug 07 2023 16:01:11 GMT+0700`;
const pastMonth = `Jul 14 2023 16:01:11 GMT+0700`;

describe('Diff date time', () => {
	it(`get minutes different between ${now} and ${pastMin}`, () => {
		expect(DT.diff(pastMin, now)).toBe('50min ago');
	});

	it(`get hours different between ${now} and ${pastHours}`, () => {
		expect(DT.diff(pastHours, now)).toBe('2h ago');
	});

	it(`get days different between ${now} and ${pastDay}`, () => {
		expect(DT.diff(pastDay, now)).toBe('5d ago');
	});

	it(`get weeks different between ${now} and ${pastWeek}`, () => {
		expect(DT.diff(pastWeek, now)).toBe('2w ago');
	});

	it(`get months different between ${now} and ${pastMonth}`, () => {
		expect(DT.diff(pastMonth, now)).toBe('1m ago');
	});
});
