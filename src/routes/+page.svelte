<script>
	import { base } from '$app/paths'
	import moment from 'moment'

	export let data

	const { posts } = data

	$: [latest, ...highlighted] = posts.slice(0, 4)
	$: console.log('Latest path', latest.path)

	const format = (date) => moment(date).format('MMMM DD, YYYY')
</script>

<section class="latest-post">
	<p class="section-title">latest</p>
	<header>
		<h1>{latest.meta.title}</h1>
		<span class="post-date">
			{format(latest.meta.date)}
		</span>
	</header>
	<p>{latest.meta.excerpt}</p>
	<footer>
		<a href={`${base}${latest.path}`}>Read more...</a>
	</footer>
</section>

<section class="article-list">
	<p class="section-title">previous posts</p>
	{#each highlighted as post}
		<!--  {% for post in site.posts limit:3 offset:1 %}-->
		<article>
			<a class="article-list-link" href={`${base}${post.path}`}>{post.meta.title}</a>
			<span class="post-date">{format(post.meta.date)}</span>
		</article>
	{/each}
</section>

<footer class="page-footer">
	Visit the <a href="/blog/">blog archive</a> for a full list of posts.
</footer>

<style>
	.latest-post {
		margin-bottom: 60px;
	}

	.latest-post h1 {
		margin: 0.5rem 0;
	}

	.latest-post header {
		margin-bottom: 2em;
	}
</style>
