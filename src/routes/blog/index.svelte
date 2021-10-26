<script context="module" lang="ts">
  const posts = import.meta.glob('./*.svx')
  import { base } from "$app/paths"

  let body = []

  for (const path in posts) {
    body.push(posts[path]().then(({metadata}) => metadata))
  }
  /**
	* @type {import('@sveltejs/kit').Load}
	*/
  export async function load({ page, fetch }) {
    const posts = await Promise.all(body)
    return {
      props: {
        posts
      }
    };
  }
</script>

<script lang="ts">
  export let posts;
</script>

<h1>Blog archive</h1>

{#each posts as {title, url, date}}
<article>
  <a class="article-list-link" href={`${base}/${url}`}>
    {title}
  </a>
  <time class="post-date" datetime="2002">
    {date}
  </time>
</article>
{/each}