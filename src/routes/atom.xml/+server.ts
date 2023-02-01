import { getFeed } from '$lib/feed'
export const prerender = true
export const GET = async () => {
	const feed = await getFeed()

	return new Response(feed.atom1())
}
