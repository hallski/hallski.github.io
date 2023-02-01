import { fetchMarkdownPosts } from '$lib/posts'
import { json } from '@sveltejs/kit'

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts({ sorted: true })

	return json(allPosts)
}
