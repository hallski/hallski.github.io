import{S as U,i as ss,s as es,y as Z,r as ts,u as as,v as ls,w as K,m as os,k as ns,x as is,I as Q,e as l,g as i,a as Y,c as t,n as ps,f as a}from"./index-a9b4120b.js";import{B as rs}from"./blog-layout-6dd02b2d.js";function cs(f){let o,r,c,u,n,p,m,S,b,R,h,$,w,q,_,B,j,O,v,W,k,A,d,E,M,F,y,N,C,P,x,z,g,D,T,G,L,V,H,X,I;return{c(){o=l("p"),o.innerHTML='Yesterday I published a post about <a href="/blog/cocoa-prototyping-with-webview">Cocoa Prototyping with Webview</a> and today I found out about <a href="http://www.macruby.org/" rel="nofollow">Macruby</a> thanks to <a href="http://twitter.com/sarnesjo" rel="nofollow">@sarnesjo</a>. Already looking for ways of prototyping in Cocoa it\u2019s hard to not find Macruby very interesting.',r=i(),c=l("p"),c.textContent="Macruby turns out to be a very powerful tool for prototyping (as well as writing entire applications in) as it fits perfectly fine in a normal Objective-C code base. What I wanted was something like this:",u=i(),n=l("div"),n.innerHTML=`<div class="highlight"><pre class="highlight"><code><span class="hljs-keyword">class</span> <span class="hljs-title class_">SimpleController</span>
    <span class="hljs-keyword">attr_accessor</span> <span class="hljs-symbol">:label</span>
    <span class="hljs-keyword">attr_accessor</span> <span class="hljs-symbol">:button</span>
    <span class="hljs-keyword">attr_accessor</span> <span class="hljs-symbol">:my_view</span>

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">buttonPressed</span>(<span class="hljs-params">sender</span>)
        label.setStringValue(<span class="hljs-string">&quot;I am (im)pressed!&quot;</span>)
        my_view.backgroundColor = NSColor.redColor
    <span class="hljs-keyword">end</span>
<span class="hljs-keyword">end</span></code></pre></div>`,p=i(),m=l("p"),m.innerHTML="Where the view <code>:my_view</code> is implemented in Objective-C.",S=i(),b=l("p"),b.textContent="Here are the simple steps I used to hook it into a normal Xcode Cocoa project.",R=i(),h=l("p"),h.textContent="First of all, install Macruby which is as easy as downloading the zip-file from the website and run the installer.",$=i(),w=l("p"),w.textContent="In order to link to the Macruby framework you need to use garbage collection in your project, if you aren\u2019t already you enable it in the project inspector:",q=i(),_=l("p"),_.innerHTML='<img src="/images/posts/macruby-in-xcode-gc.png" alt="Set the project to use Garbage Collection"/>',B=i(),j=l("p"),j.textContent="Next you need to make your project link against the Macruby framework:",O=i(),v=l("p"),v.innerHTML='<img src="/images/posts/macruby-in-xcode-add-framework.png" alt="Add the Macruby framework"/>',W=i(),k=l("p"),k.innerHTML="That\u2019s it for the project settings, let\u2019s hook it up in the code. When you use the built-in project template for a Macruby project a small Ruby file called <em>rb_main.rb</em> is created for you. Since I\u2019m using a generic Cocoa application template I needed to create this file and simply copied the file into my new project (its code below). It loads all Ruby files in your bundle and starts the Cocoa main loop.",A=i(),d=l("div"),d.innerHTML=`<div class="highlight"><pre class="highlight"><code><span class="hljs-comment"># Loading the Cocoa framework. If you need to load more frameworks, you can</span>
<span class="hljs-comment"># do that here too.</span>
framework <span class="hljs-string">&#39;Cocoa&#39;</span>

<span class="hljs-comment"># Loading all the Ruby project files.</span>
dir_path = NSBundle.mainBundle.resourcePath.fileSystemRepresentation
Dir.entries(dir_path).each <span class="hljs-keyword">do</span> |<span class="hljs-params">path</span>|
  <span class="hljs-keyword">if</span> path != File.basename(<span class="hljs-variable constant_">__FILE__</span>) <span class="hljs-keyword">and</span> path[-<span class="hljs-number">3</span>..-<span class="hljs-number">1</span>] == <span class="hljs-string">&#39;.rb&#39;</span>
    <span class="hljs-keyword">require</span>(path)
  <span class="hljs-keyword">end</span>
<span class="hljs-keyword">end</span>

<span class="hljs-comment"># Starting the Cocoa main loop.</span>
NSApplicationMain(<span class="hljs-number">0</span>, <span class="hljs-literal">nil</span>)</code></pre></div>`,E=i(),M=l("p"),M.innerHTML="To start the actual Ruby interpreter the file <em>main.m</em> needs to be modified. Since the Ruby code now starts the Cocoa main loop we no longer need to do that in <code>main</code>. <em>Main.m</em> simply becomes:",F=i(),y=l("div"),y.innerHTML=`<div class="highlight"><pre class="highlight"><code><span class="hljs-meta">#import <span class="hljs-string">&lt;MacRuby/MacRuby.h&gt;</span></span>

<span class="hljs-type">int</span> <span class="hljs-title function_">main</span><span class="hljs-params">(<span class="hljs-type">int</span> argc, <span class="hljs-type">char</span> *argv[])</span>
{
    <span class="hljs-keyword">return</span> macruby_main(<span class="hljs-string">&quot;rb_main.rb&quot;</span>, argc, argv);
}</code></pre></div>`,N=i(),C=l("p"),C.textContent="With these changes you can now start writing code in either Ruby or Objective-C within the same project. Here are the files I ended up with in my very small example.",P=i(),x=l("p"),x.innerHTML='<img src="/images/posts/macruby-in-xcode-files.png" alt="Example Files"/>',z=i(),g=l("p"),g.textContent="The final application simply shows a small window with a button:",D=i(),T=l("p"),T.innerHTML='<img src="/images/posts/macruby-in-xcode-example.png" alt="Example window"/>',G=i(),L=l("p"),L.innerHTML='Make sure to watch the great <a href="http://pragmaticstudio.com/screencasts/6-macruby" rel="nofollow">introductionary screencast</a> then download the example project and get started tinkering.',V=i(),H=l("p"),H.textContent="If you find this as cool and useful as I did, let me hear about it!",X=i(),I=l("p"),I.innerHTML="<strong>Edit:</strong> Be sure to read Laurents comment below for an alternative way of loading your Ruby files into your application.",Y(n,"class","highlighter-rouge language-ruby"),Y(d,"class","highlighter-rouge language-ruby"),Y(y,"class","highlighter-rouge language-c")},m(s,e){t(s,o,e),t(s,r,e),t(s,c,e),t(s,u,e),t(s,n,e),t(s,p,e),t(s,m,e),t(s,S,e),t(s,b,e),t(s,R,e),t(s,h,e),t(s,$,e),t(s,w,e),t(s,q,e),t(s,_,e),t(s,B,e),t(s,j,e),t(s,O,e),t(s,v,e),t(s,W,e),t(s,k,e),t(s,A,e),t(s,d,e),t(s,E,e),t(s,M,e),t(s,F,e),t(s,y,e),t(s,N,e),t(s,C,e),t(s,P,e),t(s,x,e),t(s,z,e),t(s,g,e),t(s,D,e),t(s,T,e),t(s,G,e),t(s,L,e),t(s,V,e),t(s,H,e),t(s,X,e),t(s,I,e)},p:ps,d(s){s&&a(o),s&&a(r),s&&a(c),s&&a(u),s&&a(n),s&&a(p),s&&a(m),s&&a(S),s&&a(b),s&&a(R),s&&a(h),s&&a($),s&&a(w),s&&a(q),s&&a(_),s&&a(B),s&&a(j),s&&a(O),s&&a(v),s&&a(W),s&&a(k),s&&a(A),s&&a(d),s&&a(E),s&&a(M),s&&a(F),s&&a(y),s&&a(N),s&&a(C),s&&a(P),s&&a(x),s&&a(z),s&&a(g),s&&a(D),s&&a(T),s&&a(G),s&&a(L),s&&a(V),s&&a(H),s&&a(X),s&&a(I)}}}function us(f){let o,r;const c=[f[0],J];let u={$$slots:{default:[cs]},$$scope:{ctx:f}};for(let n=0;n<c.length;n+=1)u=Z(u,c[n]);return o=new rs({props:u}),{c(){ts(o.$$.fragment)},m(n,p){as(o,n,p),r=!0},p(n,[p]){const m=p&1?ls(c,[p&1&&K(n[0]),p&0&&K(J)]):{};p&2&&(m.$$scope={dirty:p,ctx:n}),o.$set(m)},i(n){r||(os(o.$$.fragment,n),r=!0)},o(n){ns(o.$$.fragment,n),r=!1},d(n){is(o,n)}}}const J={comments:!1,date:"2009-05-06T00:00:00Z",section:"blog",tags:["ruby"],title:"Macruby Support in any Cocoa Application"};function ms(f,o,r){return f.$$set=c=>{r(0,o=Z(Z({},o),Q(c)))},o=Q(o),[o]}class fs extends U{constructor(o){super(),ss(this,o,ms,us,es,{})}}var bs=Object.freeze(Object.defineProperty({__proto__:null,default:fs,metadata:J},Symbol.toStringTag,{value:"Module"}));export{fs as M,bs as _,J as m};
