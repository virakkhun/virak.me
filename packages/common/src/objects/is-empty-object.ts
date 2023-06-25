import { isEmptyArray } from '../arrays/is-empty-array'
import { nullOrUndefined } from './null-or-undefined'

export const isEmptyObject = (obj: Object) => {
	if (nullOrUndefined(obj)) throw new Error(`obj is not provided, got ${obj}.`)

	return isEmptyArray(Object.entries(obj))
}

