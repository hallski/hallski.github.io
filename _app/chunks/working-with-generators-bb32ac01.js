import{S as Is,i as Cs,s as Ls,y as xs,r as Hs,u as Ss,v as Ws,w as Ts,m as zs,k as Gs,x as Ds,I as Ms,e as n,g as t,a as u,c as a,n as $s,f as l}from"./index-0d9ad2d2.js";import{B as Os}from"./blog-layout-f66b7ab1.js";function As(f){let i,r,c,h,p,o,d,N,x,Z,k,F,T,K,m,Q,M,V,j,X,I,Y,C,ss,v,es,L,as,H,ls,S,ns,W,ts,z,is,_,ps,G,os,D,rs,$,cs,O,us,w,hs,A,ds,E,fs,y,ms,R,js,q,vs,b,_s,P,ws,B,ys,J,bs,g,gs,U;return{c(){i=n("h2"),i.textContent="Javascript Generator Series",r=t(),c=n("p"),c.textContent="This article is part of a series of articles about ES6 generators. The plan is to explore iterators and generators, starting with what they are and show casing different situations where they can be useful.",h=t(),p=n("ol"),p.innerHTML=`<li><a href="/blog/intro-to-es6-iter-and-generators">Introduction to ES6 Iterators and Generators</a></li> 
<li>Working with Generators</li> 
<li><a href="/blog/async-await-with-generators">Async/Await with Generators</a></li>`,o=t(),d=n("h2"),d.textContent="Introduction",N=t(),x=n("p"),x.innerHTML='Generators have a lot of great applications, such as the <code>randomInts</code> generator below. In this article we\u2019ll however force the example a bit by also combining this generator with a <code>zip</code> generator to produce a <code>rollCharacter</code> function for <a href="https://en.wikipedia.org/wiki/Dungeons_%26_Dragons" rel="nofollow">D&amp;D</a> character creation.',Z=t(),k=n("p"),k.innerHTML="In D&amp;D there are six different attributes: <em>Strength</em>, <em>Constitution</em>, <em>Dexterity</em>, <em>Intelligence</em>, <em>Wisdom</em> and <em>Charisma</em>. Each attribute is rolled by the use of 3d6 (roll three six sided dice and add the results).",F=t(),T=n("p"),T.textContent="The attributes will be modelled as an array of strings:",K=t(),m=n("div"),m.innerHTML=`<div class="highlight"><pre class="highlight"><code><span class="hljs-keyword">const</span> characterAttributes = [
	<span class="hljs-string">&#39;Strength&#39;</span>,
	<span class="hljs-string">&#39;Constituion&#39;</span>,
	<span class="hljs-string">&#39;Dexterity&#39;</span>,
	<span class="hljs-string">&#39;Intelligence&#39;</span>,
	<span class="hljs-string">&#39;Wisdom&#39;</span>,
	<span class="hljs-string">&#39;Charisma&#39;</span>
]</code></pre></div>`,Q=t(),M=n("p"),M.innerHTML="The result of calling <code>rollCharacter</code> should work like this:",V=t(),j=n("div"),j.innerHTML=`<div class="highlight"><pre class="highlight"><code><span class="hljs-title function_">rollCharacter</span>()
<span class="hljs-comment">// [[ &#39;Strength&#39;, 17 ],</span>
<span class="hljs-comment">//  [ &#39;Constituion&#39;, 6 ],</span>
<span class="hljs-comment">//  [ &#39;Dexterity&#39;, 15 ],</span>
<span class="hljs-comment">//  [ &#39;Intelligence&#39;, 12 ],</span>
<span class="hljs-comment">//  [ &#39;Wisdom&#39;, 8 ],</span>
<span class="hljs-comment">//  [ &#39;Charisma&#39;, 11 ]]</span></code></pre></div>`,X=t(),I=n("h2"),I.textContent="Infinite random number generator",Y=t(),C=n("p"),C.innerHTML="The dice can be simulated as an infinite generator where each call to <code>next()</code> simulates a roll. Our generator function will be called <code>randomInt(lower, upper, seed)</code> and take a lower value, an upper value and a seed.",ss=t(),v=n("div"),v.innerHTML=`<div class="highlight"><pre class="highlight"><code><span class="hljs-keyword">const</span> <span class="hljs-title function_">randomSeed</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">floor</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>() * <span class="hljs-number">1000</span>)

<span class="hljs-keyword">function</span>* <span class="hljs-title function_">randomInts</span>(<span class="hljs-params">lower, upper, seed = randomSeed()</span>) {
	<span class="hljs-keyword">while</span> (<span class="hljs-literal">true</span>) {
		<span class="hljs-keyword">const</span> x = <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">sin</span>(seed++) * <span class="hljs-number">10000</span>
		<span class="hljs-keyword">const</span> random = x - <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">floor</span>(x)
		<span class="hljs-keyword">yield</span> <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">round</span>(lower + random * (upper - lower))
	}
}

<span class="hljs-keyword">const</span> d20 = <span class="hljs-title function_">randomInts</span>(<span class="hljs-number">1</span>, <span class="hljs-number">20</span>)
d20.<span class="hljs-title function_">next</span>().<span class="hljs-property">value</span> <span class="hljs-comment">// 13</span>
d20.<span class="hljs-title function_">next</span>().<span class="hljs-property">value</span> <span class="hljs-comment">// 1 - oh no, a fumble!</span></code></pre></div>`,es=t(),L=n("p"),L.innerHTML="One benefit of defining a <code>randomInt</code> as a generator instead of a normal function is that we can produce a reproducable stream of values by giving the generator the same seed value, since it\u2019s keeping all it\u2019s state internal. This is great for testing.",as=t(),H=n("h2"),H.textContent="Combining iterators",ls=t(),S=n("p"),S.innerHTML="Since both arrays (our <code>characterAttributes</code>) and generators are <em>Iterable</em> it would be nice if we could simply iterate them together and create pairs like <code>[&#39;Strength&#39;, 13]</code>. One pair for each attribute.",ns=t(),W=n("p"),W.innerHTML='Many functional languages have a function called <code>zip</code> that does just that. While Javascript doesn\u2019t come with <code>zip</code> by default, <a href="https://lodash.com/" rel="nofollow">Lodash</a> has it. Unfortunately the Lodash version does not support iterators so let\u2019s define our own.',ts=t(),z=n("p"),z.innerHTML="<code>zip</code> will take any number of Iterables and generate groups until any of the iterations are exhausted.",is=t(),_=n("div"),_.innerHTML='<div class="highlight"><pre class="highlight"><code>;[...<span class="hljs-title function_">zip</span>([<span class="hljs-string">&#39;a&#39;</span>, <span class="hljs-string">&#39;b&#39;</span>, <span class="hljs-string">&#39;c&#39;</span>], [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>])] <span class="hljs-comment">// =&gt; [[&#39;a&#39;, 1], [&#39;b&#39;, 2], [&#39;c&#39;, 3]]</span></code></pre></div>',ps=t(),G=n("p"),G.innerHTML="The <code>...</code> in front of <code>zip</code> is the <em>spread operator</em> (also part of ES6) which will <em>\u201Cspread out\u201D</em> all values generated by <code>zip</code>.",os=t(),D=n("p"),D.innerHTML="We\u2019ll start by implementing two helper generators, <code>produceWhile</code> and <code>mappedGenerator</code>.",rs=t(),$=n("h3"),$.textContent="produceWhile",cs=t(),O=n("p"),O.innerHTML="The generator <code>produceWhile</code> will continue to generate values through the <code>produce</code> function until the <code>predicate</code> returns <code>false</code>.",us=t(),w=n("div"),w.innerHTML=`<div class="highlight"><pre class="highlight"><code><span class="hljs-keyword">function</span>* <span class="hljs-title function_">produceWhile</span>(<span class="hljs-params">produce, predicate</span>) {
	<span class="hljs-keyword">let</span> value = <span class="hljs-title function_">produce</span>()
	<span class="hljs-keyword">while</span> (<span class="hljs-title function_">predicate</span>(value)) {
		<span class="hljs-keyword">yield</span> value
		value = <span class="hljs-title function_">produce</span>()
	}
}</code></pre></div>`,hs=t(),A=n("h3"),A.textContent="mappedGenerator",ds=t(),E=n("p"),E.innerHTML="<code>mappedGenerator</code> wraps another generator by mapping the values it produces with the <code>mapper</code> function:",fs=t(),y=n("div"),y.innerHTML=`<div class="highlight"><pre class="highlight"><code><span class="hljs-keyword">function</span>* <span class="hljs-title function_">mappedGenerator</span>(<span class="hljs-params">generator, mapper</span>) {
	<span class="hljs-keyword">let</span> result = generator.<span class="hljs-title function_">next</span>()
	<span class="hljs-keyword">while</span> (!result.<span class="hljs-property">done</span>) {
		<span class="hljs-keyword">yield</span> <span class="hljs-title function_">mapper</span>(result.<span class="hljs-property">value</span>)
		result = generator.<span class="hljs-title function_">next</span>()
	}
}</code></pre></div>`,ms=t(),R=n("h3"),R.textContent="zip",js=t(),q=n("p"),q.innerHTML="With these two helpers in place we are ready to implement our <code>zip</code> generator function.",vs=t(),b=n("div"),b.innerHTML=`<div class="highlight"><pre class="highlight"><code><span class="hljs-keyword">function</span>* <span class="hljs-title function_">zip</span>(<span class="hljs-params">...iterables</span>) {
	<span class="hljs-comment">// Get Iterators for each Iterable</span>
	<span class="hljs-keyword">const</span> iterators = iterables.<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">iterable</span>) =&gt;</span> iterable[<span class="hljs-title class_">Symbol</span>.<span class="hljs-property">iterator</span>]())

	<span class="hljs-comment">// Produce groups of iterator results [IterResult1, IterResult2, ...] where each</span>
	<span class="hljs-comment">// IterResult is an object like { value: x, done: true|false }. Stop when any</span>
	<span class="hljs-comment">// IterResult is marked as done.</span>
	<span class="hljs-keyword">const</span> producer = <span class="hljs-title function_">produceWhile</span>(
		<span class="hljs-function">() =&gt;</span> iterators.<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">iterator</span>) =&gt;</span> iterator.<span class="hljs-title function_">next</span>()),
		<span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> value.<span class="hljs-title function_">every</span>(<span class="hljs-function">(<span class="hljs-params">v</span>) =&gt;</span> !v.<span class="hljs-property">done</span>)
	)

	<span class="hljs-comment">// Unbox the value from the iterator results</span>
	<span class="hljs-keyword">yield</span>* <span class="hljs-title function_">mappedGenerator</span>(producer, <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> value.<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">v</span>) =&gt;</span> v.<span class="hljs-property">value</span>))
}</code></pre></div>`,_s=t(),P=n("p"),P.innerHTML="Notice that <code>zip</code> makes use of the <code>yield*</code> construct. This delegates generation to a another iterator, in this case the mapped generator.",ws=t(),B=n("h2"),B.textContent="Putting it all together",ys=t(),J=n("p"),J.innerHTML="With the <code>zip</code> implementation we can define our function as follows:",bs=t(),g=n("div"),g.innerHTML=`<div class="highlight"><pre class="highlight"><code><span class="hljs-keyword">const</span> zip = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;./zip&#39;</span>)
<span class="hljs-keyword">const</span> randomInts = <span class="hljs-built_in">require</span>(<span class="hljs-string">&#39;./randomInts&#39;</span>)

<span class="hljs-keyword">function</span> <span class="hljs-title function_">rollCharacter</span>(<span class="hljs-params"></span>) {
	<span class="hljs-keyword">const</span> attributes = [<span class="hljs-string">&#39;Strength&#39;</span>, <span class="hljs-string">&#39;Constituion&#39;</span>, <span class="hljs-string">&#39;Dexterity&#39;</span>, <span class="hljs-string">&#39;Intelligence&#39;</span>, <span class="hljs-string">&#39;Wisdom&#39;</span>, <span class="hljs-string">&#39;Charisma&#39;</span>]

	<span class="hljs-keyword">return</span> [...<span class="hljs-title function_">zip</span>(attributes, <span class="hljs-title function_">randomInts</span>(<span class="hljs-number">3</span>, <span class="hljs-number">18</span>))]
}

<span class="hljs-title function_">rollCharacter</span>()
<span class="hljs-comment">// [[ &#39;Strength&#39;, 17 ],</span>
<span class="hljs-comment">//  [ &#39;Constituion&#39;, 6 ],</span>
<span class="hljs-comment">//  [ &#39;Dexterity&#39;, 15 ],</span>
<span class="hljs-comment">//  [ &#39;Intelligence&#39;, 12 ],</span>
<span class="hljs-comment">//  [ &#39;Wisdom&#39;, 8 ],</span>
<span class="hljs-comment">//  [ &#39;Charisma&#39;, 11 ]]</span></code></pre></div>`,gs=t(),U=n("p"),U.innerHTML="Here we combine a finite <em>Iteratable</em>  <code>attributes</code> with an infinite one <code>randomInts</code>. Since <code>zip</code> stops when either is exhausted, it\u2019s safe to use it together with the infinite one and the spread operator.",u(m,"class","highlighter-rouge language-javascript"),u(j,"class","highlighter-rouge language-javascript"),u(v,"class","highlighter-rouge language-javascript"),u(_,"class","highlighter-rouge language-javascript"),u(w,"class","highlighter-rouge language-javascript"),u(y,"class","highlighter-rouge language-javascript"),u(b,"class","highlighter-rouge language-javascript"),u(g,"class","highlighter-rouge language-javascript")},m(s,e){a(s,i,e),a(s,r,e),a(s,c,e),a(s,h,e),a(s,p,e),a(s,o,e),a(s,d,e),a(s,N,e),a(s,x,e),a(s,Z,e),a(s,k,e),a(s,F,e),a(s,T,e),a(s,K,e),a(s,m,e),a(s,Q,e),a(s,M,e),a(s,V,e),a(s,j,e),a(s,X,e),a(s,I,e),a(s,Y,e),a(s,C,e),a(s,ss,e),a(s,v,e),a(s,es,e),a(s,L,e),a(s,as,e),a(s,H,e),a(s,ls,e),a(s,S,e),a(s,ns,e),a(s,W,e),a(s,ts,e),a(s,z,e),a(s,is,e),a(s,_,e),a(s,ps,e),a(s,G,e),a(s,os,e),a(s,D,e),a(s,rs,e),a(s,$,e),a(s,cs,e),a(s,O,e),a(s,us,e),a(s,w,e),a(s,hs,e),a(s,A,e),a(s,ds,e),a(s,E,e),a(s,fs,e),a(s,y,e),a(s,ms,e),a(s,R,e),a(s,js,e),a(s,q,e),a(s,vs,e),a(s,b,e),a(s,_s,e),a(s,P,e),a(s,ws,e),a(s,B,e),a(s,ys,e),a(s,J,e),a(s,bs,e),a(s,g,e),a(s,gs,e),a(s,U,e)},p:$s,d(s){s&&l(i),s&&l(r),s&&l(c),s&&l(h),s&&l(p),s&&l(o),s&&l(d),s&&l(N),s&&l(x),s&&l(Z),s&&l(k),s&&l(F),s&&l(T),s&&l(K),s&&l(m),s&&l(Q),s&&l(M),s&&l(V),s&&l(j),s&&l(X),s&&l(I),s&&l(Y),s&&l(C),s&&l(ss),s&&l(v),s&&l(es),s&&l(L),s&&l(as),s&&l(H),s&&l(ls),s&&l(S),s&&l(ns),s&&l(W),s&&l(ts),s&&l(z),s&&l(is),s&&l(_),s&&l(ps),s&&l(G),s&&l(os),s&&l(D),s&&l(rs),s&&l($),s&&l(cs),s&&l(O),s&&l(us),s&&l(w),s&&l(hs),s&&l(A),s&&l(ds),s&&l(E),s&&l(fs),s&&l(y),s&&l(ms),s&&l(R),s&&l(js),s&&l(q),s&&l(vs),s&&l(b),s&&l(_s),s&&l(P),s&&l(ws),s&&l(B),s&&l(ys),s&&l(J),s&&l(bs),s&&l(g),s&&l(gs),s&&l(U)}}}function Es(f){let i,r;const c=[f[0],ks];let h={$$slots:{default:[As]},$$scope:{ctx:f}};for(let p=0;p<c.length;p+=1)h=xs(h,c[p]);return i=new Os({props:h}),{c(){Hs(i.$$.fragment)},m(p,o){Ss(i,p,o),r=!0},p(p,[o]){const d=o&1?Ws(c,[o&1&&Ts(p[0]),o&0&&Ts(ks)]):{};o&2&&(d.$$scope={dirty:o,ctx:p}),i.$set(d)},i(p){r||(zs(i.$$.fragment,p),r=!0)},o(p){Gs(i.$$.fragment,p),r=!1},d(p){Ds(i,p)}}}const ks={comments:!0,date:"2017-11-13T00:00:00Z",excerpt:"In the second article about generators we'll explore infinite generators and why they can be useful.",redirect_from:"/blog/infinite-generators",section:"blog",tags:["javascript","generators","es6"],title:"Working with Generators"};function Rs(f,i,r){return f.$$set=c=>{r(0,i=xs(xs({},i),Ms(c)))},i=Ms(i),[i]}class qs extends Is{constructor(i){super(),Cs(this,i,Rs,Es,Ls,{})}}var Js=Object.freeze(Object.defineProperty({__proto__:null,default:qs,metadata:ks},Symbol.toStringTag,{value:"Module"}));export{qs as W,Js as _,ks as m};