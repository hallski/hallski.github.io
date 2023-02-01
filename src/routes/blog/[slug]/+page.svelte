<script context="module">
	import moment from 'moment'
</script>

<script>
	export let data

	const { title, date, content } = data

	$: formattedDate = moment(date).format('MMMM DD, YYYY')
</script>

<article class="post">
	<header>
		<h1>{title}</h1>
		<span class="post-date">{formattedDate}</span>
	</header>
	<svelte:component this={content} />
</article>
