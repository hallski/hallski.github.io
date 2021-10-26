import { posts } from '$lib/posts';

export async function get({ params }) {
	return {
		body: {
			posts: posts
		}
	};
}
