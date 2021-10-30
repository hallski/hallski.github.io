<script>
	import { base } from '$app/paths';
	import { posts } from '$lib/posts';
</script>

<h1>Blog archive</h1>
<div class="article-list">
	{#each posts as post}
		<article>
			<a class="article-list-link" href={`${base}/${post.path}`}>
				{post.title}
			</a>
			<time class="post-date" datetime="2002">
				{post.date}
			</time>
		</article>
	{/each}
</div>

<style>
</style>
