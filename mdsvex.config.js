import hljs from 'highlight.js'
import { escapeSvelte } from 'mdsvex'

// TODO: mdsvex comes with Prism installed by default, look into switching to that
const hljsHighlighter = (code, lang) => {
	const highlighted = escapeSvelte(hljs.highlight(code, { language: lang }).value)
	return `<div class="highlighter-rouge language-${lang}"><div class="highlight"><pre class="highlight"><code>${highlighted}</code></pre></div></div>`
}

const config = {
	extensions: ['.svelte.md', '.md'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [],
	highlight: {
		highlighter: hljsHighlighter
	}
}

export default config
