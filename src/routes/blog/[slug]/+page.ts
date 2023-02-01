import type { PageLoad } from './$types'

export const load = async ({ params }: PageLoad) => {
	const post = await import(`../../../../posts/${params.slug}.md`)
	const { title, date } = post.metadata
	const content = post.default

	console.log(`title ${title}`)

	return {
		content,
		title,
		date
	}
}
