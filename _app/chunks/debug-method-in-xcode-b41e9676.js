import{S as k,i as w,s as x,w as h,f as M,m as S,j as T,k as v,q as $,n as D,o as H,P as y,e as c,g as m,a as L,b as n,d as l}from"./vendor-952ab843.js";import{B as q}from"./blog-layout-d30acb2f.js";function I(r){let t,i,u,d,s,a,p,g,f,b,_;return{c(){t=c("p"),t.innerHTML="I often find myself add a bunch of <tt>#ifdef</tt>s for code that I only want executed during the development but not in the shipped products. In order to make the code a bit easier to read I decided to make a small method that takes a C block (available in iOS 4.0 and Mac OS X 10.6) instead.",i=m(),u=c("p"),u.textContent="You would use it like this:",d=m(),s=c("div"),s.innerHTML=`<div class="highlight"><pre class="highlight"><code><span class="hljs-comment">/*
 * Simple example of usage
 */</span>

<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&quot;debug.h&quot;</span></span>

<span class="hljs-keyword">int</span>
main(<span class="hljs-keyword">int</span> argc, **argv)
{
    debug(^ {
        <span class="hljs-comment">// Your debug code here</span>
    });

    <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
}</code></pre></div>`,a=m(),p=c("p"),p.innerHTML='You can download <tt>debug.[ch]</tt> from <a href="http://gist.github.com/534487">GitHub</a> and simply add them to your project. You also need to edit your project settings for the Debug configuration to set the <tt>DEBUG</tt> macro.',g=m(),f=c("p"),f.innerHTML='<img src="/images/posts/project-settings-debug.png" alt="Project Settings Dialog"/>',b=m(),_=c("p"),_.innerHTML='<a href="http://gist.github.com/534487" rel="nofollow">http://gist.github.com/534487</a>',L(s,"class","highlighter-rouge language-objc")},m(e,o){n(e,t,o),n(e,i,o),n(e,u,o),n(e,d,o),n(e,s,o),n(e,a,o),n(e,p,o),n(e,g,o),n(e,f,o),n(e,b,o),n(e,_,o)},d(e){e&&l(t),e&&l(i),e&&l(u),e&&l(d),e&&l(s),e&&l(a),e&&l(p),e&&l(g),e&&l(f),e&&l(b),e&&l(_)}}}function Y(r){let t,i;const u=[r[0],j];let d={$$slots:{default:[I]},$$scope:{ctx:r}};for(let s=0;s<u.length;s+=1)d=h(d,u[s]);return t=new q({props:d}),{c(){M(t.$$.fragment)},m(s,a){S(t,s,a),i=!0},p(s,[a]){const p=a&1?T(u,[a&1&&v(s[0]),a&0&&v(j)]):{};a&2&&(p.$$scope={dirty:a,ctx:s}),t.$set(p)},i(s){i||($(t.$$.fragment,s),i=!0)},o(s){D(t.$$.fragment,s),i=!1},d(s){H(t,s)}}}const j={comments:!1,date:"2010-08-18T00:00:00Z",section:"blog",tags:"objective-c",title:"Debug Method in Xcode"};function B(r,t,i){return r.$$set=u=>{i(0,t=h(h({},t),y(u)))},t=y(t),[t]}class C extends k{constructor(t){super();w(this,t,B,Y,x,{})}}var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C,metadata:j});export{C as D,P as _,j as m};
