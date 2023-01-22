import { trpc } from '../../../../utils/trpc'

export const SideProjectsAPI = () => trpc.GetSideProjectsAPI.useQuery()

