import { trpc } from '../../../../utils/trpc'

export const HomeAPI = () => trpc.GetHomeAPI.useQuery()

