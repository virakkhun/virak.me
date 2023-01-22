export interface BaseResponseMapper<T, R> {
	toDomain: (args: T) => R
}

