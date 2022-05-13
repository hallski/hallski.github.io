import{S as j,i as w,s as b,y as _,r as v,u as y,v as S,w as h,m as O,k as N,x,I as g,e as d,g as m,a as T,c as p,n as k,f as c}from"./index-0d9ad2d2.js";import{B as C}from"./blog-layout-f66b7ab1.js";function $(u){let e,n,l,i,t,a,o;return{c(){e=d("p"),e.textContent="As I just started out with Cocoa and started looking into the NSTreeController and NSOutlineView I realized that the objects seen by the outline view isn\u2019t the same as the ones you see when working with the tree controller.",n=m(),l=d("p"),l.innerHTML="The NSTreeController wraps your objects into another object and it took me some digging before I realized that you need to call <code>representedObject</code> to fetch the <em>real</em> object.",i=m(),t=d("p"),t.textContent="Example from implementing an NSOutlineView delegate:",a=m(),o=d("div"),o.innerHTML=`<div class="highlight"><pre class="highlight"><code><span class="hljs-comment">/* NSOutlineView Delegate Method */</span>
- (<span class="hljs-type">BOOL</span>)outlineView:(<span class="hljs-built_in">NSOutlineView</span> *)view
        isGroupItem:(<span class="hljs-type">id</span>)item
{
    <span class="hljs-keyword">if</span> ([item representedObject] == section) {
        <span class="hljs-keyword">return</span> <span class="hljs-literal">YES</span>;
    }

    <span class="hljs-keyword">return</span> <span class="hljs-literal">NO</span>;
}</code></pre></div>`,T(o,"class","highlighter-rouge language-objc")},m(s,r){p(s,e,r),p(s,n,r),p(s,l,r),p(s,i,r),p(s,t,r),p(s,a,r),p(s,o,r)},p:k,d(s){s&&c(e),s&&c(n),s&&c(l),s&&c(i),s&&c(t),s&&c(a),s&&c(o)}}}function V(u){let e,n;const l=[u[0],f];let i={$$slots:{default:[$]},$$scope:{ctx:u}};for(let t=0;t<l.length;t+=1)i=_(i,l[t]);return e=new C({props:i}),{c(){v(e.$$.fragment)},m(t,a){y(e,t,a),n=!0},p(t,[a]){const o=a&1?S(l,[a&1&&h(t[0]),a&0&&h(f)]):{};a&2&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){N(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}const f={comments:!1,date:"2009-04-04T00:00:00Z",section:"blog",tags:["objective-c"],title:"Retrieving the real object when using NSOutlineView with an NSTreeController"};function I(u,e,n){return u.$$set=l=>{n(0,e=_(_({},e),g(l)))},e=g(e),[e]}class M extends j{constructor(e){super(),w(this,e,I,V,b,{})}}var L=Object.freeze(Object.defineProperty({__proto__:null,default:M,metadata:f},Symbol.toStringTag,{value:"Module"}));export{M as N,L as _,f as m};