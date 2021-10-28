import * as R from 'ramda';

const imported = import.meta.globEager('../routes/blog/*.md');

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const posts = R.pipe(
	R.toPairs(),
	R.map(([path, post]) => {
		return {
			...post.metadata,
			path: path.replace('.md', '').replace('/routes', '')
		};
	}),
	R.sortBy(R.prop('date')),
	R.reverse()
)(imported);
