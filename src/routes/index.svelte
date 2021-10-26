<script context="module">
  import { base } from "$app/paths"

  export async function load({fetch}) {
    const posts = await fetch(`${base}/posts.json`).then(res => res.json())
    return {
      props: { posts: posts.posts }
    }
  }
</script>

<script>
  export let posts
  $: [latest, ...highlighted] = posts.slice(0,4)
  $: console.log("Latest:",latest, "highlighted", highlighted)
</script>

<section class="latest-post">
  <p class="section-title">latest</p>
  <!-- {% assign post = site.posts[0] %} -->
  <header>
    <h1>{latest.title}</h1>
    <time class="post-date" datetime="{latest.date}">
      {latest.date}
    </time>
  </header>
  <p>{latest.excerpt }</p>
  <footer>
    <a href="{ latest.url }">Read more...</a>
  </footer>
</section>

<section class="article-list">
  <p class="section-title">previous posts</p>
  {#each highlighted as post }
<!--  {% for post in site.posts limit:3 offset:1 %}-->
  <article>
    <a class="article-list-link" href="{post.url}">{ post.title }</a>
    <time class="post-date" datetime="{ post.date }">
      { post.date}
    </time>
  </article>
  {/each}
</section>

<footer class="page-footer">
  Visit the <a href="/blog/">blog archive</a> for a full list of posts.
</footer>
