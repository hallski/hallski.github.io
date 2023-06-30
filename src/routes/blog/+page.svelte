<script>
	import { base } from '$app/paths'
	//	import { posts } from '$lib/posts'
	import moment from 'moment'

	export let data
	const { posts } = data

	const format = (date) => moment(date).format('MMMM DD, YYYY')
</script>

<svelte:head>
	<title>Hallskis Blog archive</title>
</svelte:head>

<h1>Blog archive</h1>
<div class="article-list">
	{#each posts as post}
		<article>
			<a class="article-list-link" href={`${base}${post.path}`}>
				{post.meta.title}
			</a>
			<time class="post-date" datetime="2002">
				{format(post.meta.date)}
			</time>
		</article>
	{/each}
</div>

<style>
</style>
