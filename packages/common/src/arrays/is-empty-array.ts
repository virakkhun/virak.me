import { nullOrUndefined } from '../objects/null-or-undefined'

export const isEmptyArray = <T>(arr: Array<T>) => {
	if (nullOrUndefined(arr)) throw new Error(`arr is not provided, got ${arr}`)

	return arr.length === 0
}

