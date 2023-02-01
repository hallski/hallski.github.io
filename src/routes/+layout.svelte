<script lang="ts">
	import Header from '$lib/components/header.svelte'
	import Footer from '$lib/components/footer.svelte'
</script>

<svelte:head>
	<link rel="alternate" type="application/atom+xml" href="https://hallski.org/atom.xml" />
	<link rel="alternate" type="application/rss+xml" href="https://hallski.org/feed/rss" />
	<link rel="alternate" type="application/json" href="https://hallski.org/feed/json" />
	<link rel="stylesheet" href="/css/style.css" type="text/css" />
</svelte:head>

<Header />

<main class="main">
	<div class="content"><slot /></div>
</main>

<Footer />
