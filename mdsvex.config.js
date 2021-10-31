import hljs from 'highlight.js'
import { escapeSvelte } from 'mdsvex'

const hljsHighlighter = (code, lang) => {
	const highlighted = escapeSvelte(hljs.highlight(code, { language: lang }).value)
	return `<div class="highlighter-rouge language-${lang}"><div class="highlight"><pre class="highlight"><code>${highlighted}</code></pre></div></div>`
}

const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [],
	layout: './src/lib/blog-layout.svelte',
	highlight: {
		highlighter: hljsHighlighter
	}
}

export default config
