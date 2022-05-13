import{S as x,i as k,s as w,y as b,r as M,u as S,v as T,w as v,m as $,k as D,x as H,I as y,e as c,g as m,a as I,c as n,n as L,f as l}from"./index-0d9ad2d2.js";import{B as O}from"./blog-layout-f66b7ab1.js";function Y(d){let t,i,u,p,s,a,r,g,f,h,_;return{c(){t=c("p"),t.innerHTML="I often find myself add a bunch of <tt>#ifdef</tt>s for code that I only want executed during the development but not in the shipped products. In order to make the code a bit easier to read I decided to make a small method that takes a C block (available in iOS 4.0 and Mac OS X 10.6) instead.",i=m(),u=c("p"),u.textContent="You would use it like this:",p=m(),s=c("div"),s.innerHTML=`<div class="highlight"><pre class="highlight"><code><span class="hljs-comment">/*
 * Simple example of usage
 */</span>

<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&quot;debug.h&quot;</span></span>

<span class="hljs-type">int</span>
main(<span class="hljs-type">int</span> argc, **argv)
{
    debug(^ {
        <span class="hljs-comment">// Your debug code here</span>
    });

    <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
}</code></pre></div>`,a=m(),r=c("p"),r.innerHTML='You can download <tt>debug.[ch]</tt> from <a href="http://gist.github.com/534487">GitHub</a> and simply add them to your project. You also need to edit your project settings for the Debug configuration to set the <tt>DEBUG</tt> macro.',g=m(),f=c("p"),f.innerHTML='<img src="/images/posts/project-settings-debug.png" alt="Project Settings Dialog"/>',h=m(),_=c("p"),_.innerHTML='<a href="http://gist.github.com/534487" rel="nofollow">http://gist.github.com/534487</a>',I(s,"class","highlighter-rouge language-objc")},m(e,o){n(e,t,o),n(e,i,o),n(e,u,o),n(e,p,o),n(e,s,o),n(e,a,o),n(e,r,o),n(e,g,o),n(e,f,o),n(e,h,o),n(e,_,o)},p:L,d(e){e&&l(t),e&&l(i),e&&l(u),e&&l(p),e&&l(s),e&&l(a),e&&l(r),e&&l(g),e&&l(f),e&&l(h),e&&l(_)}}}function q(d){let t,i;const u=[d[0],j];let p={$$slots:{default:[Y]},$$scope:{ctx:d}};for(let s=0;s<u.length;s+=1)p=b(p,u[s]);return t=new O({props:p}),{c(){M(t.$$.fragment)},m(s,a){S(t,s,a),i=!0},p(s,[a]){const r=a&1?T(u,[a&1&&v(s[0]),a&0&&v(j)]):{};a&2&&(r.$$scope={dirty:a,ctx:s}),t.$set(r)},i(s){i||($(t.$$.fragment,s),i=!0)},o(s){D(t.$$.fragment,s),i=!1},d(s){H(t,s)}}}const j={comments:!1,date:"2010-08-18T00:00:00Z",section:"blog",tags:"objective-c",title:"Debug Method in Xcode"};function B(d,t,i){return d.$$set=u=>{i(0,t=b(b({},t),y(u)))},t=y(t),[t]}class C extends x{constructor(t){super(),k(this,t,B,q,w,{})}}var X=Object.freeze(Object.defineProperty({__proto__:null,default:C,metadata:j},Symbol.toStringTag,{value:"Module"}));export{C as D,X as _,j as m};
