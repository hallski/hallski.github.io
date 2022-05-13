import{S as b,i as x,s as I,y as g,r as $,u as C,v as J,w as y,m as S,k,x as M,I as w,e as f,g as m,a as T,c as n,n as q,f as o}from"./index-a9b4120b.js";import{B as G}from"./blog-layout-6dd02b2d.js";function O(u){let t,i,r,c,s,a,p,v,_,h,d;return{c(){t=f("p"),t.textContent="I have never really had any need for getting into Javascript before but after switching job earlier this month it\u2019s likely that I will be writing quite a lot of Javascript going forward.",i=m(),r=f("p"),r.textContent="I came to Javascript with a lot of preconceptions about the language based on scattered comments and lack of personal insight. While some of them have turned out to be true, Javascript have also surprised me in a positive way.",c=m(),s=f("p"),s.innerHTML="For example I love the <em>object literal syntax</em> to create objects on the fly without having to define a class first.",a=m(),p=f("div"),p.innerHTML=`<div class="highlight"><pre class="highlight"><code><span class="hljs-keyword">const</span> todoItem = {
	<span class="hljs-attr">done</span>: <span class="hljs-literal">false</span>,
	<span class="hljs-attr">title</span>: <span class="hljs-string">&#39;Newly created item&#39;</span>
}

assert.<span class="hljs-title function_">equal</span>(todoItem.<span class="hljs-property">done</span>, <span class="hljs-literal">false</span>) <span class="hljs-comment">// OK</span></code></pre></div>`,v=m(),_=f("p"),_.textContent="Some other really nice features include deconstruction, well integrated Promises (with async/await syntax) and closures with low syntactic overhead.",h=m(),d=f("p"),d.textContent="More on that later.",T(p,"class","highlighter-rouge language-javascript")},m(e,l){n(e,t,l),n(e,i,l),n(e,r,l),n(e,c,l),n(e,s,l),n(e,a,l),n(e,p,l),n(e,v,l),n(e,_,l),n(e,h,l),n(e,d,l)},p:q,d(e){e&&o(t),e&&o(i),e&&o(r),e&&o(c),e&&o(s),e&&o(a),e&&o(p),e&&o(v),e&&o(_),e&&o(h),e&&o(d)}}}function B(u){let t,i;const r=[u[0],j];let c={$$slots:{default:[O]},$$scope:{ctx:u}};for(let s=0;s<r.length;s+=1)c=g(c,r[s]);return t=new G({props:c}),{c(){$(t.$$.fragment)},m(s,a){C(t,s,a),i=!0},p(s,[a]){const p=a&1?J(r,[a&1&&y(s[0]),a&0&&y(j)]):{};a&2&&(p.$$scope={dirty:a,ctx:s}),t.$set(p)},i(s){i||(S(t.$$.fragment,s),i=!0)},o(s){k(t.$$.fragment,s),i=!1},d(s){M(t,s)}}}const j={comments:null,date:"2017-09-19T00:00:00Z",section:"blog",tags:["javascript"],title:"Getting into Javascript"};function H(u,t,i){return u.$$set=r=>{i(0,t=g(g({},t),w(r)))},t=w(t),[t]}class L extends b{constructor(t){super(),x(this,t,H,B,I,{})}}var F=Object.freeze(Object.defineProperty({__proto__:null,default:L,metadata:j},Symbol.toStringTag,{value:"Module"}));export{L as G,F as _,j as m};
