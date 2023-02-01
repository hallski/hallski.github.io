<script lang="ts">
	import Header from '$lib/components/header.svelte'
	import Footer from '$lib/components/footer.svelte'
</script>

<svelte:head>
	<link rel="alternate" type="application/atom+xml" href="/atom.xml" title="Atom feed" />
	<link rel="stylesheet" href="/css/style.css" type="text/css" />
</svelte:head>

<Header />

<main class="main">
	<div class="content"><slot /></div>
</main>

<Footer />
