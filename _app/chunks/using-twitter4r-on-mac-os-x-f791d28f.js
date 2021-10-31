import{S as b,i as v,s as x,w as g,f as T,m as k,j as M,k as y,q,n as S,o as $,P as w,e as c,g as _,a as j,b as o,d as r}from"./vendor-e167c7c5.js";import{B as C}from"./blog-layout-233a6880.js";function L(d){let s,l,n,p,e,a,u,f,m;return{c(){s=c("p"),s.innerHTML="<strong>This is a repost from my old blog</strong>",l=_(),n=c("p"),n.textContent="Was playing around a bit with the Twitter4R library the other day and realized that in order to make it to work on Mac OS X (Leopard) you need to also require \u2018time\u2019. Or you will get an error similar to",p=_(),e=c("div"),e.innerHTML='<div class="highlight"><pre class="highlight"><code>lib/twitter/model.rb:268:in `init\u2019: undefined method `parse\u2019 for Time:Class (NoMethodError).</code></pre></div>',a=_(),u=c("p"),u.textContent="A small snippet to display my public tweets:",f=_(),m=c("div"),m.innerHTML=`<div class="highlight"><pre class="highlight"><code><span class="hljs-keyword">require</span> <span class="hljs-string">&#39;rubygems&#39;</span>
gem(<span class="hljs-string">&#39;twitter4r&#39;</span>, <span class="hljs-string">&#39;0.3.0&#39;</span>)
<span class="hljs-keyword">require</span> <span class="hljs-string">&#39;twitter&#39;</span>

<span class="hljs-comment"># Required on Mac OS X Leopard</span>
<span class="hljs-keyword">require</span> <span class="hljs-string">&#39;time&#39;</span>

twitter = Twitter::Client.new

mh_timeline = twitter.timeline_for(<span class="hljs-symbol">:user</span>, <span class="hljs-symbol">:id</span> =&gt; <span class="hljs-string">&#39;mhallendal&#39;</span>)

mh_timeline.each <span class="hljs-keyword">do</span> <span class="hljs-params">|status|</span>
  puts status.text
<span class="hljs-keyword">end</span></code></pre></div>`,j(e,"class","highlighter-rouge language-text"),j(m,"class","highlighter-rouge language-ruby")},m(t,i){o(t,s,i),o(t,l,i),o(t,n,i),o(t,p,i),o(t,e,i),o(t,a,i),o(t,u,i),o(t,f,i),o(t,m,i)},d(t){t&&r(s),t&&r(l),t&&r(n),t&&r(p),t&&r(e),t&&r(a),t&&r(u),t&&r(f),t&&r(m)}}}function O(d){let s,l;const n=[d[0],h];let p={$$slots:{default:[L]},$$scope:{ctx:d}};for(let e=0;e<n.length;e+=1)p=g(p,n[e]);return s=new C({props:p}),{c(){T(s.$$.fragment)},m(e,a){k(s,e,a),l=!0},p(e,[a]){const u=a&1?M(n,[a&1&&y(e[0]),a&0&&y(h)]):{};a&2&&(u.$$scope={dirty:a,ctx:e}),s.$set(u)},i(e){l||(q(s.$$.fragment,e),l=!0)},o(e){S(s.$$.fragment,e),l=!1},d(e){$(s,e)}}}const h={comments:!1,date:"2008-05-31T00:00:00Z",section:"blog",tags:["ruby"],title:"Using Twitter4R on Mac OS X"};function H(d,s,l){return d.$$set=n=>{l(0,s=g(g({},s),w(n)))},s=w(s),[s]}class R extends b{constructor(s){super();v(this,s,H,O,x,{})}}var z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:R,metadata:h});export{R as U,z as _,h as m};
