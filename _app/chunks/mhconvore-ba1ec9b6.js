import{S as M,i as T,s as q,y as C,r as S,u as H,v as I,w as x,m as $,k as A,x as L,I as k,e as p,g as u,a as P,c as n,n as N,f as l}from"./index-a9b4120b.js";import{B}from"./blog-layout-6dd02b2d.js";function E(m){let s,i,r,c,t,a,f,w,h,b,_,y,d,j,v;return{c(){s=p("p"),s.innerHTML='Just pushed the first cut of a small framework to connect with the newly launched chatservice <a href="http://convore.com/" rel="nofollow">Convore</a>. In short Convore is an attempt to create a better way to chat than IRC and also support a web frontend while making it possible to connect with native clients.',i=u(),r=p("p"),r.textContent="The API will likely change a bit and it\u2019s fresh out of the editor so might be a bit flaky still.",c=u(),t=p("p"),t.textContent="The API makes heavy use of blocks for actions initiated from your code and a client listener for notifications initiated from the server.",a=u(),f=p("p"),f.textContent="A small example of how you use the API, I will add a better example later.",w=u(),h=p("div"),h.innerHTML=`<div class="highlight"><pre class="highlight"><code>- (<span class="hljs-type">void</span>)connectToServer
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
- (<span class="hljs-type">void</span>)newMessage:(MHConvoreMessage *)message
{
    <span class="hljs-built_in">NSLog</span>(<span class="hljs-string">@&quot;[%@]: %@&quot;</span>, message.user.name, message.message);
}</code></pre></div>`,b=u(),_=p("p"),_.textContent="To connect to Convore you first need to create an account through their website.",y=u(),d=p("p"),d.textContent="There still is work that needs to be done to it so feel free to fork and hack on it. For example there is currently no way to cancel the listener.",j=u(),v=p("p"),v.innerHTML='<a href="https://github.com/hallski/mhconvore" rel="nofollow">The code at Github</a>',P(h,"class","highlighter-rouge language-objc")},m(e,o){n(e,s,o),n(e,i,o),n(e,r,o),n(e,c,o),n(e,t,o),n(e,a,o),n(e,f,o),n(e,w,o),n(e,h,o),n(e,b,o),n(e,_,o),n(e,y,o),n(e,d,o),n(e,j,o),n(e,v,o)},p:N,d(e){e&&l(s),e&&l(i),e&&l(r),e&&l(c),e&&l(t),e&&l(a),e&&l(f),e&&l(w),e&&l(h),e&&l(b),e&&l(_),e&&l(y),e&&l(d),e&&l(j),e&&l(v)}}}function O(m){let s,i;const r=[m[0],g];let c={$$slots:{default:[E]},$$scope:{ctx:m}};for(let t=0;t<r.length;t+=1)c=C(c,r[t]);return s=new B({props:c}),{c(){S(s.$$.fragment)},m(t,a){H(s,t,a),i=!0},p(t,[a]){const f=a&1?I(r,[a&1&&x(t[0]),a&0&&x(g)]):{};a&2&&(f.$$scope={dirty:a,ctx:t}),s.$set(f)},i(t){i||($(s.$$.fragment,t),i=!0)},o(t){A(s.$$.fragment,t),i=!1},d(t){L(s,t)}}}const g={comments:!1,date:"2011-02-16T00:00:00Z",section:"blog",tags:["objective-c"],title:"Initial release of MHConvore"};function U(m,s,i){return m.$$set=r=>{i(0,s=C(C({},s),k(r)))},s=k(s),[s]}class z extends M{constructor(s){super(),T(this,s,U,O,q,{})}}var J=Object.freeze(Object.defineProperty({__proto__:null,default:z,metadata:g},Symbol.toStringTag,{value:"Module"}));export{z as M,J as _,g as m};
