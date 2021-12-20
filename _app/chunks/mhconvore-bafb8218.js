import{S as M,i as T,s as q,w as g,f as S,m as H,j as I,k,q as $,n as A,o as L,P as x,e as p,g as u,a as P,b as l,d as n}from"./vendor-952ab843.js";import{B as N}from"./blog-layout-d30acb2f.js";function B(m){let s,i,r,c,t,a,f,w,h,b,d,j,_,y,v;return{c(){s=p("p"),s.innerHTML='Just pushed the first cut of a small framework to connect with the newly launched chatservice <a href="http://convore.com/" rel="nofollow">Convore</a>. In short Convore is an attempt to create a better way to chat than IRC and also support a web frontend while making it possible to connect with native clients.',i=u(),r=p("p"),r.textContent="The API will likely change a bit and it\u2019s fresh out of the editor so might be a bit flaky still.",c=u(),t=p("p"),t.textContent="The API makes heavy use of blocks for actions initiated from your code and a client listener for notifications initiated from the server.",a=u(),f=p("p"),f.textContent="A small example of how you use the API, I will add a better example later.",w=u(),h=p("div"),h.innerHTML=`<div class="highlight"><pre class="highlight"><code>- (<span class="hljs-keyword">void</span>)connectToServer
{
    MHConvoreClient *client = [MHConvoreClient clientWithUsername:<span class="hljs-string">@&quot;u&quot;</span> password:<span class="hljs-string">@&quot;p&quot;</span>];
    client.listener = <span class="hljs-keyword">self</span>;

    [client verifyAccount:^ (MHConvoreUser *user, <span class="hljs-built_in">NSError</span> *error) {
        <span class="hljs-keyword">if</span> (error == <span class="hljs-literal">nil</span>) {
            <span class="hljs-comment">//   [self doSomething];</span>
            [client listen];
        } <span class="hljs-keyword">else</span> {
            <span class="hljs-built_in">NSLog</span>(<span class="hljs-string">@&quot;Error while verifying account: %@&quot;</span>, error);
        }
    }];
}

<span class="hljs-comment">/* Called when the client receives a new message */</span>
- (<span class="hljs-keyword">void</span>)newMessage:(MHConvoreMessage *)message
{
    <span class="hljs-built_in">NSLog</span>(<span class="hljs-string">@&quot;[%@]: %@&quot;</span>, message.user.name, message.message);
}</code></pre></div>`,b=u(),d=p("p"),d.textContent="To connect to Convore you first need to create an account through their website.",j=u(),_=p("p"),_.textContent="There still is work that needs to be done to it so feel free to fork and hack on it. For example there is currently no way to cancel the listener.",y=u(),v=p("p"),v.innerHTML='<a href="https://github.com/hallski/mhconvore" rel="nofollow">The code at Github</a>',P(h,"class","highlighter-rouge language-objc")},m(e,o){l(e,s,o),l(e,i,o),l(e,r,o),l(e,c,o),l(e,t,o),l(e,a,o),l(e,f,o),l(e,w,o),l(e,h,o),l(e,b,o),l(e,d,o),l(e,j,o),l(e,_,o),l(e,y,o),l(e,v,o)},d(e){e&&n(s),e&&n(i),e&&n(r),e&&n(c),e&&n(t),e&&n(a),e&&n(f),e&&n(w),e&&n(h),e&&n(b),e&&n(d),e&&n(j),e&&n(_),e&&n(y),e&&n(v)}}}function E(m){let s,i;const r=[m[0],C];let c={$$slots:{default:[B]},$$scope:{ctx:m}};for(let t=0;t<r.length;t+=1)c=g(c,r[t]);return s=new N({props:c}),{c(){S(s.$$.fragment)},m(t,a){H(s,t,a),i=!0},p(t,[a]){const f=a&1?I(r,[a&1&&k(t[0]),a&0&&k(C)]):{};a&2&&(f.$$scope={dirty:a,ctx:t}),s.$set(f)},i(t){i||($(s.$$.fragment,t),i=!0)},o(t){A(s.$$.fragment,t),i=!1},d(t){L(s,t)}}}const C={comments:!1,date:"2011-02-16T00:00:00Z",section:"blog",tags:["objective-c"],title:"Initial release of MHConvore"};function U(m,s,i){return m.$$set=r=>{i(0,s=g(g({},s),x(r)))},s=x(s),[s]}class z extends M{constructor(s){super();T(this,s,U,E,q,{})}}var J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:z,metadata:C});export{z as M,J as _,C as m};
