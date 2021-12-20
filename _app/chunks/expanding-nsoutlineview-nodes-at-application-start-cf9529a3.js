import{S as f,i as b,s as j,w as p,f as g,m as y,j as v,k as h,q as w,n as x,o as k,P as m,e as d,g as _,a as S,b as i,d as c}from"./vendor-952ab843.js";import{B as N}from"./blog-layout-d30acb2f.js";function C(r){let e,a,n,l,s;return{c(){e=d("p"),e.innerHTML="A problem when you want to expand some items in an <em>NSOutlineView</em> programatically at application start is that the <em>NSTreeController</em> prepares it\u2019s content after <code>awakeFromNib</code> is called on your controller.",a=_(),n=d("p"),n.innerHTML="To ensure that the data is loaded before you try to expand the items you can observe the <code>content</code> key on the tree controller and expand the nodes as you receive the the <code>observeValueForKeyPath:</code> message as shown below:",l=_(),s=d("div"),s.innerHTML=`<div class="highlight"><pre class="highlight"><code>- (<span class="hljs-keyword">void</span>)observeValueForKeyPath:(<span class="hljs-built_in">NSString</span> *)keyPath
                      ofObject:(<span class="hljs-keyword">id</span>)object
                        change:(<span class="hljs-built_in">NSDictionary</span> *)change
                       context:(<span class="hljs-keyword">void</span> *)context
{
    <span class="hljs-keyword">if</span> (object == treeController) {
        <span class="hljs-comment">// Expand the first row (which is our section header)</span>
        [sourceList expandItem:[sourceList itemAtRow:<span class="hljs-number">0</span>]
                expandChildren:<span class="hljs-literal">NO</span>];
        [treeController removeObserver:<span class="hljs-keyword">self</span>
                            forKeyPath:<span class="hljs-string">@&quot;content&quot;</span>];
    }
}

- (<span class="hljs-keyword">void</span>)awakeFromNib
{
    <span class="hljs-comment">// Listen on the treeController to expand the root node</span>
    <span class="hljs-comment">// when it has prepared it&#39;s content.</span>
    [treeController addObserver:<span class="hljs-keyword">self</span>
                     forKeyPath:<span class="hljs-string">@&quot;content&quot;</span>
                        options:<span class="hljs-number">0</span>
                        context:<span class="hljs-literal">nil</span>];
}</code></pre></div>`,S(s,"class","highlighter-rouge language-objc")},m(t,o){i(t,e,o),i(t,a,o),i(t,n,o),i(t,l,o),i(t,s,o)},d(t){t&&c(e),t&&c(a),t&&c(n),t&&c(l),t&&c(s)}}}function O(r){let e,a;const n=[r[0],u];let l={$$slots:{default:[C]},$$scope:{ctx:r}};for(let s=0;s<n.length;s+=1)l=p(l,n[s]);return e=new N({props:l}),{c(){g(e.$$.fragment)},m(s,t){y(e,s,t),a=!0},p(s,[t]){const o=t&1?v(n,[t&1&&h(s[0]),t&0&&h(u)]):{};t&2&&(o.$$scope={dirty:t,ctx:s}),e.$set(o)},i(s){a||(w(e.$$.fragment,s),a=!0)},o(s){x(e.$$.fragment,s),a=!1},d(s){k(e,s)}}}const u={comments:!1,date:"2009-04-06T00:00:00Z",section:"blog",tags:["objective-c"],title:"Expanding NSOutlineView nodes at application start"};function T(r,e,a){return r.$$set=n=>{a(0,e=p(p({},e),m(n)))},e=m(e),[e]}class $ extends f{constructor(e){super();b(this,e,T,O,j,{})}}var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$,metadata:u});export{$ as E,P as _,u as m};
