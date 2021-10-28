<script context="module">
	import { page } from '$app/stores';
</script>

<script lang="ts">
	$: activePage = $page.path;
	$: console.log('active path:', activePage);
</script>

<svelte:head>
	<link rel="alternate" type="application/atom+xml" href="/atom.xml" title="Atom feed" />
	<link rel="stylesheet" href="/css/style.css" type="text/css" />
</svelte:head>

<header>
	<nav role="navigation" class="navbar">
		<a class="nav-link" class:active={activePage === '/'} href="/">Home</a>
		<ul>
			<!--li class="{% if page.section == 'blog' %}active{% endif %}"-->
			<li class:active={activePage === '/blog'}>
				<a href="/blog/" class="nav-link">Articles</a>
			</li>
			<!--li class="{% if page.section == 'about' %}active{% endif %}"-->
			<li class:active={activePage === '/about'}>
				<a href="/about" class="nav-link">About</a>
			</li>
		</ul>
	</nav>
</header>
<main class="main">
	<div class="content"><slot /></div>
</main>
<footer class="site-footer">
	<div class="author">
		<img class="author-photo" src="/images/hallski.jpg" width="192" height="192" alt="Author" />
		<div>
			<p class="author-name">Mikael Hallendal</p>
			<p class="author-info">Developer who loves to learn new things.</p>
			<p class="author-interests">
				Current focus: <span class="interest">React</span>,
				<span class="interest">Javascript/Typescript</span> and
				<span class="interest">Elixir</span>
			</p>
			<nav class="find-me">
				<a href="http://github.com/hallski/">Github</a>
				<a href="http://twitter.com/mhallendal/">Twitter</a>
				<a href="http://www.linkedin.com/in/mhallendal">LinkedIn</a>
			</nav>
		</div>
	</div>
</footer>

<style>
	.active {
		text-decoration: underline;
	}
</style>
