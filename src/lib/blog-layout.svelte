<script context="module">
	import moment from 'moment'
</script>

<script>
	export let title
	export let date

	$: formattedDate = moment(date).format('MMMM DD, YYYY')
</script>

<article class="post">
	<header>
		<h1>{title}</h1>
		<span class="post-date">{formattedDate}</span>
	</header>
	<slot />
</article>
