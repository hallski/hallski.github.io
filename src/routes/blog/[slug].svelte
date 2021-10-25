<script context="module">
  import { base } from "$app/paths";

  export const prerender = true

  export async function load({page, fetch}) {
    const slug = page.params.slug
    const post = await fetch(`${base}/${slug}.json`).then((res) => res.json())
    return {
      props: { post }
    }
  }
</script>

<script lang="ts">
    export let post;
</script>

{post.content}