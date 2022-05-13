import{S as f,i as g,s as j,y as d,r as y,u as b,v,w as h,m as x,k as w,x as S,I as m,e as c,g as _,a as k,c as i,n as N,f as p}from"./index-a9b4120b.js";import{B as O}from"./blog-layout-6dd02b2d.js";function C(r){let e,a,n,l,s;return{c(){e=c("p"),e.innerHTML="A problem when you want to expand some items in an <em>NSOutlineView</em> programatically at application start is that the <em>NSTreeController</em> prepares it\u2019s content after <code>awakeFromNib</code> is called on your controller.",a=_(),n=c("p"),n.innerHTML="To ensure that the data is loaded before you try to expand the items you can observe the <code>content</code> key on the tree controller and expand the nodes as you receive the the <code>observeValueForKeyPath:</code> message as shown below:",l=_(),s=c("div"),s.innerHTML=`<div class="highlight"><pre class="highlight"><code>- (<span class="hljs-type">void</span>)observeValueForKeyPath:(<span class="hljs-built_in">NSString</span> *)keyPath
                      ofObject:(<span class="hljs-type">id</span>)object
                        change:(<span class="hljs-built_in">NSDictionary</span> *)change
                       context:(<span class="hljs-type">void</span> *)context
{
    <span class="hljs-keyword">if</span> (object == treeController) {
        <span class="hljs-comment">// Expand the first row (which is our section header)</span>
        [sourceList expandItem:[sourceList itemAtRow:<span class="hljs-number">0</span>]
                expandChildren:<span class="hljs-literal">NO</span>];
        [treeController removeObserver:<span class="hljs-keyword">self</span>
                            forKeyPath:<span class="hljs-string">@&quot;content&quot;</span>];
    }
}

- (<span class="hljs-type">void</span>)awakeFromNib
{
    <span class="hljs-comment">// Listen on the treeController to expand the root node</span>
    <span class="hljs-comment">// when it has prepared it&#39;s content.</span>
    [treeController addObserver:<span class="hljs-keyword">self</span>
                     forKeyPath:<span class="hljs-string">@&quot;content&quot;</span>
                        options:<span class="hljs-number">0</span>
                        context:<span class="hljs-literal">nil</span>];
}</code></pre></div>`,k(s,"class","highlighter-rouge language-objc")},m(t,o){i(t,e,o),i(t,a,o),i(t,n,o),i(t,l,o),i(t,s,o)},p:N,d(t){t&&p(e),t&&p(a),t&&p(n),t&&p(l),t&&p(s)}}}function T(r){let e,a;const n=[r[0],u];let l={$$slots:{default:[C]},$$scope:{ctx:r}};for(let s=0;s<n.length;s+=1)l=d(l,n[s]);return e=new O({props:l}),{c(){y(e.$$.fragment)},m(s,t){b(e,s,t),a=!0},p(s,[t]){const o=t&1?v(n,[t&1&&h(s[0]),t&0&&h(u)]):{};t&2&&(o.$$scope={dirty:t,ctx:s}),e.$set(o)},i(s){a||(x(e.$$.fragment,s),a=!0)},o(s){w(e.$$.fragment,s),a=!1},d(s){S(e,s)}}}const u={comments:!1,date:"2009-04-06T00:00:00Z",section:"blog",tags:["objective-c"],title:"Expanding NSOutlineView nodes at application start"};function $(r,e,a){return r.$$set=n=>{a(0,e=d(d({},e),m(n)))},e=m(e),[e]}class L extends f{constructor(e){super(),g(this,e,$,T,j,{})}}var E=Object.freeze(Object.defineProperty({__proto__:null,default:L,metadata:u},Symbol.toStringTag,{value:"Module"}));export{L as E,E as _,u as m};
