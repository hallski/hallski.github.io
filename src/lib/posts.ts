import * as R from 'ramda'

const imported = import.meta.globEager('../routes/blog/*.md')

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const posts = R.reverse(
	R.pipe(
		R.toPairs,
		R.map(([path, post]) => {
			console.log('path', path)
			return {
				...post['metadata'],
				path: path.replace('.md', '').replace('../routes', '')
			}
		}),
		R.map((post) => {
			console.log('path after:', post.path)
			return post
		}),
		R.sortBy(R.prop('date'))
	)(imported)
)
