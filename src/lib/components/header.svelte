<script context="module">
	import { page } from '$app/stores'
</script>

<script lang="ts">
	$: activePage = $page.url.pathname
</script>

<header>
	<nav class="navbar">
		<a class="nav-link" class:active={activePage === '/'} href="/">Home</a>
		<ul>
			<!--li class="{% if page.section == 'blog' %}active{% endif %}"-->
			<li class:active={activePage === '/blog'}>
				<a href="/blog" class="nav-link">Articles</a>
			</li>
			<!--li class="{% if page.section == 'about' %}active{% endif %}"-->
			<li class:active={activePage === '/about'}>
				<a href="/about" class="nav-link">About</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 40px;
		margin: 18px 0;
		background: var(--clr-box-bg);
		text-transform: uppercase;
		font-size: var(--fs-nav-links);
	}

	.navbar ul {
		list-style: none;
	}

	.navbar li {
		display: inline-block;
		padding: 0 10px;
	}
	.navbar a {
		color: var(--clr-link);
	}

	.active {
		text-decoration: underline;
	}
</style>
