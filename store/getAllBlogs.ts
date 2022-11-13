import { GetServerSideProps } from 'next'
import { fetchApi } from '../utils/FetchApi'
import { Blog } from '../utils/types/blogs.type'

export const getServerSideProps: GetServerSideProps = async () => {
	const data = await fetchApi<Blog[], { Authorization: string }>(
		`${process.env.BASE_URL}/blogs?populate=thumnail`,
		'GET',
		{
			Authorization: `Bearer ${process.env.TOKEN}`,
		},
	)

	return {
		props: data,
	}
}

