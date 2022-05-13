import{S as b,i as v,s as x,y as g,r as T,u as k,v as M,w as y,m as S,k as $,x as q,I as w,e as c,g as _,a as j,c as r,n as O,f as o}from"./index-0d9ad2d2.js";import{B as C}from"./blog-layout-f66b7ab1.js";function L(m){let s,l,n,p,e,a,u,f,d;return{c(){s=c("p"),s.innerHTML="<strong>This is a repost from my old blog</strong>",l=_(),n=c("p"),n.textContent="Was playing around a bit with the Twitter4R library the other day and realized that in order to make it to work on Mac OS X (Leopard) you need to also require \u2018time\u2019. Or you will get an error similar to",p=_(),e=c("div"),e.innerHTML='<div class="highlight"><pre class="highlight"><code>lib/twitter/model.rb:268:in `init\u2019: undefined method `parse\u2019 for Time:Class (NoMethodError).</code></pre></div>',a=_(),u=c("p"),u.textContent="A small snippet to display my public tweets:",f=_(),d=c("div"),d.innerHTML=`<div class="highlight"><pre class="highlight"><code><span class="hljs-keyword">require</span> <span class="hljs-string">&#39;rubygems&#39;</span>
gem(<span class="hljs-string">&#39;twitter4r&#39;</span>, <span class="hljs-string">&#39;0.3.0&#39;</span>)
<span class="hljs-keyword">require</span> <span class="hljs-string">&#39;twitter&#39;</span>

<span class="hljs-comment"># Required on Mac OS X Leopard</span>
<span class="hljs-keyword">require</span> <span class="hljs-string">&#39;time&#39;</span>

twitter = Twitter::Client.new

mh_timeline = twitter.timeline_for(<span class="hljs-symbol">:user</span>, <span class="hljs-symbol">:id</span> =&gt; <span class="hljs-string">&#39;mhallendal&#39;</span>)

mh_timeline.each <span class="hljs-keyword">do</span> |<span class="hljs-params">status</span>|
  puts status.text
<span class="hljs-keyword">end</span></code></pre></div>`,j(e,"class","highlighter-rouge language-text"),j(d,"class","highlighter-rouge language-ruby")},m(t,i){r(t,s,i),r(t,l,i),r(t,n,i),r(t,p,i),r(t,e,i),r(t,a,i),r(t,u,i),r(t,f,i),r(t,d,i)},p:O,d(t){t&&o(s),t&&o(l),t&&o(n),t&&o(p),t&&o(e),t&&o(a),t&&o(u),t&&o(f),t&&o(d)}}}function H(m){let s,l;const n=[m[0],h];let p={$$slots:{default:[L]},$$scope:{ctx:m}};for(let e=0;e<n.length;e+=1)p=g(p,n[e]);return s=new C({props:p}),{c(){T(s.$$.fragment)},m(e,a){k(s,e,a),l=!0},p(e,[a]){const u=a&1?M(n,[a&1&&y(e[0]),a&0&&y(h)]):{};a&2&&(u.$$scope={dirty:a,ctx:e}),s.$set(u)},i(e){l||(S(s.$$.fragment,e),l=!0)},o(e){$(s.$$.fragment,e),l=!1},d(e){q(s,e)}}}const h={comments:!1,date:"2008-05-31T00:00:00Z",section:"blog",tags:["ruby"],title:"Using Twitter4R on Mac OS X"};function R(m,s,l){return m.$$set=n=>{l(0,s=g(g({},s),w(n)))},s=w(s),[s]}class U extends b{constructor(s){super(),v(this,s,R,H,x,{})}}var B=Object.freeze(Object.defineProperty({__proto__:null,default:U,metadata:h},Symbol.toStringTag,{value:"Module"}));export{U,B as _,h as m};
