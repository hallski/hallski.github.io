export async function get(): Promise<{
	headers: string;
	body: string;
}> {
	const posts = [];
	const body = xml(posts);

	const headers = JSON.stringify({
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	});

	return {
		headers,
		body
	};
}

const xml = (posts) => `
<?xml version="1.0"?>
<feed xmlns="http://www.w3.org/2005/Atom">

  <title>Mikael Hallendal</title>
  <link href="http://hallski.org/"/>
  <link type="application/atom+xml" rel="self" href="http://hallski.org/atom.xml"/>
  <updated>{{ site.time | date_to_xmlschema }}</updated>
  <id>http://hallski.org/</id>
  <author>
    <name>Mikael Hallendal</name>
  </author>

  ${posts.map(
		(post) => `
  <entry>
    <id>http://hallski.org{{ post.id }}</id>
    <link type="text/html" rel="alternate" href="http://hallski.org{{ post.url }}"/>
    <title>${post.title}</title>
    <published>${post.date}</published>
    <updated>${post.date}</updated>
    <content type="html">${post.content}</content>
  </entry>
  `
	)}

</feed>
`;
