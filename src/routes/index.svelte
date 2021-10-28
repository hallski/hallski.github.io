<script context="module">
	import { posts } from '$lib/posts';
	import moment from 'moment';

	export async function load() {
		return {
			props: { posts: posts }
		};
	}
</script>

<script>
	import { base } from '$app/paths';

	export let posts;
	$: [latest, ...highlighted] = posts.slice(0, 4);
	$: console.log('Latest:', latest, 'highlighted', highlighted);

	const format = (date) => moment(date).format('MMMM DD, YYYY');
</script>

<section class="latest-post">
	<p class="section-title">latest</p>
	<header>
		<h1>{latest.title}</h1>
		<span class="post-date">
			{format(latest.date)}
		</span>
	</header>
	<p>{latest.excerpt}</p>
	<footer>
		<a href={`${base}/${latest.path}`}>Read more...</a>
	</footer>
</section>

<section class="article-list">
	<p class="section-title">previous posts</p>
	{#each highlighted as post}
		<!--  {% for post in site.posts limit:3 offset:1 %}-->
		<article>
			<a class="article-list-link" href={`${base}/${post.path}`}>{post.title}</a>
			<span class="post-date">{format(post.date)}</span>
		</article>
	{/each}
</section>

<footer class="page-footer">
	Visit the <a href="/blog/">blog archive</a> for a full list of posts.
</footer>
