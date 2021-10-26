const imports = import.meta.globEager('./posts/*.md');

export const posts = [];
for (const path in imports) {
	const post = imports[path];

	if (post) {
		console.log('Post: ', post);
		posts.push(post);
	}
}
