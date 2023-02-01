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
				<a href="http://www.linkedin.com/in/mhallendal">LinkedIn</a>
			</nav>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		display: grid;
		grid-template-columns: var(--grid);
		margin-top: 80px;
		padding: 20px 0;
		background: var(--clr-box-bg);
	}

	.site-footer > * {
		grid-column: 2 / span 1;
	}

	.author {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: 20px 0;
		max-width: var(--content-max-width);
		font-size: var(--fs-nav-links);
	}

	.author-photo {
		width: 132px;
		height: 132px;
		clip-path: circle(50% at 50% 50%);
		margin-right: 1.5rem;
	}

	.author-name {
		font-size: 20px;
		font-weight: bold;
		margin: 0;
	}

	.author-info {
		color: var(--clr-text);
		opacity: 0.65;
		margin: 0;
	}

	.author-interests {
		color: var(--clr-gray);
	}

	.author-interests .interest {
		color: var(--clr-primary);
	}

	.find-me {
		display: flex;
		text-transform: uppercase;
	}

	.find-me * + * {
		margin-left: 20px;
	}

	@media (max-width: 520px) {
		.site-footer {
			justify-items: center;
		}
		.author {
			flex-direction: column;
			justify-items: center;
			text-align: center;
			max-width: 35ch;
		}
		.author-interests {
			margin: 2em 0;
		}

		.author-photo {
			margin-right: 0;
			margin-bottom: 2rem;
		}

		.find-me {
			justify-content: center;
		}
	}
</style>
