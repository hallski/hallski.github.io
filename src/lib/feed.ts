import type { FeedOptions } from 'feed'
import { Feed } from 'feed'

import { fetchMarkdownPosts } from './posts'

const feedOptions: FeedOptions = {
	title: 'Mikael Hallendal',
	id: 'http://hallski.org/',
	link: 'https://hallski.org/',
	language: 'en',
	favicon: 'https://hallski.org/favicon.png',
	copyright: `All rights reserved ${new Date().getFullYear}, Mikael Hallendal`,
	updated: new Date(), // optional, default = today
	generator: 'awesome', // optional, default = 'Feed for Node.js'
	feedLinks: {
		json: 'https://hallski.org/json',
		atom: 'https://hallski.org/atom.xml',
		rss2: 'https://hallski.org/feed'
	},
	author: {
		name: 'Mikael Hallendal'
	}
}

const baseUrl = 'https://hallski.org'

export const getFeed = async () => {
	const allPosts = await fetchMarkdownPosts({ sorted: true })

	const feed = new Feed(feedOptions)

	allPosts.forEach((post) => {
		const url = `${baseUrl}/${post.path}`
		feed.addItem({
			title: post.meta.title,
			id: url,
			link: url,
			description: post.meta.excerpt,
			date: new Date(post.meta.date)
		})
	})

	return feed
}
