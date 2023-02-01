type Metadata = {
	date: string
	title: string
	excerpt?: string
}

type Post = {
	meta: Metadata
	path: string
}

// TODO: Check proper type of Mdsvex imported file
export const fetchMarkdownPosts = async ({ sorted }: { sorted: boolean }) => {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md')
	const iterablePostFiles = Object.entries(allPostFiles)

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as { metadata: Metadata }
			const postPath = path.slice(11, -3)

			return {
				meta: metadata,
				path: postPath
			} as Post
		})
	)

	if (sorted) {
		return allPosts.sort((a, b) => {
			return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
		})
	}

	return allPosts
}
