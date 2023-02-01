import { getFeed } from '$lib/feed'
export const prerender = true
export const GET = async () => {
	const feed = await getFeed()
	const options = {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		}
	}
	return new Response(feed.rss2(), options)
}
