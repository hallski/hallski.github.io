export function get(): { body: string } {
	const body = JSON.stringify({ content: 'content of a blog post' });

	return {
		body
	};
}
