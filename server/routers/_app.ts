import * as Router from '.'
import { router } from '../trpc'

export const appRouter = router({
	...Router,
})

export type AppRouter = typeof appRouter

