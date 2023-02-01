import type { PageLoad } from './$types'

export const load = async ({ fetch }: PageLoad) => {
	const response = await fetch(`/api/posts`)
	const posts = await response.json()

	return {
		posts
	}
}
