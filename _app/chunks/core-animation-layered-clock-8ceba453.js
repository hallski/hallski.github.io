import{S as ms,i as js,s as ks,y as hs,r as Cs,u as ws,v as Ls,w as fs,m as gs,k as _s,x as vs,I as bs,e as t,g as n,a as y,c as a,n as Ts,f as l}from"./index-0d9ad2d2.js";import{B as As}from"./blog-layout-f66b7ab1.js";function Ss(h){let o,p,c,u,i,r,d,O,w,P,f,z,L,$,g,Y,_,E,v,X,T,K,b,Z,A,D,S,J,M,Q,R,V,m,ss,I,es,x,as,j,ls,B,ts,F,ns,G,os,N,is,k,rs,q,ps,C,cs,W,us,H,ds,U;return{c(){o=t("p"),o.innerHTML='I wanted to get into Core Animation a bit over the weekend and decided to write a simple digital clock. With the help from <a href="http://rhult.github.com/" rel="nofollow">Richard</a> I set out to hack it up and figured it might be useful for others just starting out with Core Animation.',p=n(),c=t("p"),c.innerHTML='<img src="/images/posts/glossy-clock.png" alt="Resulting App"/>',u=n(),i=t("p"),i.textContent="After creating a normal Cocoa Application and setting up a custom view in Interface Builder it\u2019s time to setup the layers that will make up the final interface. Make sure that you set the custom view to your class so that it is actually used:",r=n(),d=t("p"),d.innerHTML='<img src="/images/posts/glossy-clock-ib.png" alt="Info panel in Interface Builder"/>',O=n(),w=t("p"),w.innerHTML="Layers in Core Animation are built up as a tree where the layer you set to your view with <code>setLayer:</code> is the root layer. All other layers are added as sublayers to the root layer or another layer with <code>addSublayer:</code>. In the code snippets below <code>backgroundLayer</code> is my root layer.",P=n(),f=t("div"),f.innerHTML=`<div class="highlight"><pre class="highlight"><code>- (<span class="hljs-built_in">CALayer</span> *)setupLayers
{
    backgroundLayer = [<span class="hljs-keyword">self</span> setupBackgroundLayer];

    [backgroundLayer addSublayer:[<span class="hljs-keyword">self</span> setupClockFaceLayer]];
    [backgroundLayer addSublayer:[<span class="hljs-keyword">self</span> setupBorderLayer]];
    [backgroundLayer addSublayer:[<span class="hljs-keyword">self</span> setupGlossLayer]];

    <span class="hljs-keyword">return</span> backgroundLayer;
}

- (<span class="hljs-type">id</span>)initWithFrame:(<span class="hljs-built_in">NSRect</span>)frame
{
    <span class="hljs-keyword">self</span> = [<span class="hljs-variable language_">super</span> initWithFrame:frame];
    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">self</span>) {
        clockTimer = [[ClockTimer alloc] init];

        [<span class="hljs-keyword">self</span> setLayer:[<span class="hljs-keyword">self</span> setupLayers]];
    }
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">self</span>;
}

- (<span class="hljs-type">void</span>)awakeFromNib
{
    [<span class="hljs-keyword">self</span> setWantsLayer:<span class="hljs-literal">YES</span>];
}</code></pre></div>`,z=n(),L=t("p"),L.innerHTML="<code>ClockTimer</code> is a simple class that updates the string displaying the time once a second. This string is available through the property <code>outputString</code> on the <code>ClockTimer</code> object.",$=n(),g=t("p"),g.textContent="As you can see the clock is built up from four different layers: The background layer, a clock face layer, a border layer and finally a gloss layer adding the nice shine.",Y=n(),_=t("h2"),_.textContent="The Background Layer:",E=n(),v=t("p"),v.innerHTML="The background layer is created as a <code>CAGradientLayer</code> to give the clock background the nice blue gradient. This layer type was added in 10.6 so it won\u2019t work on earlier versions of Mac OS X but should be fairly straight forward to do manually.",X=n(),T=t("p"),T.textContent="In order to help with positioning of layers Core Animation comes with the notion of Layout Managers which can be added to a layer in order to layout its sublayers. The CAConstraintLayoutManager lets us set constraints on the layers sublayers in order to control how they are positioned. In this case the constraints will be set on the clock face to make it centered on the background.",K=n(),b=t("div"),b.innerHTML=`<div class="highlight"><pre class="highlight"><code>- (<span class="hljs-built_in">CALayer</span> *)setupBackgroundLayer
{
    backgroundLayer = [<span class="hljs-built_in">CAGradientLayer</span> layer];

    <span class="hljs-built_in">CGColorRef</span> gradientColor1 = <span class="hljs-built_in">CGColorCreateGenericRGB</span>(<span class="hljs-number">13.0</span>f / <span class="hljs-number">255.0</span>, <span class="hljs-number">116.0</span>f / <span class="hljs-number">255.0</span>, <span class="hljs-number">1.0</span>, <span class="hljs-number">1.0</span>f);
    <span class="hljs-built_in">CGColorRef</span> gradientColor2 = <span class="hljs-built_in">CGColorCreateGenericRGB</span>(<span class="hljs-number">0.0</span>f, <span class="hljs-number">53.0</span>f/<span class="hljs-number">255.0</span>f, <span class="hljs-number">126.0</span>f/<span class="hljs-number">255.0</span>f, <span class="hljs-number">1.0</span>f);

    <span class="hljs-built_in">NSArray</span> *colors = [<span class="hljs-built_in">NSArray</span> arrayWithObjects:(<span class="hljs-type">id</span>)gradientColor1, (<span class="hljs-type">id</span>)gradientColor2, <span class="hljs-literal">nil</span>];

    <span class="hljs-built_in">CFRelease</span>(gradientColor1);
    <span class="hljs-built_in">CFRelease</span>(gradientColor2);

    [(<span class="hljs-built_in">CAGradientLayer</span> *)backgroundLayer setColors:colors];
    [backgroundLayer setCornerRadius:<span class="hljs-number">12.0</span>f];

    <span class="hljs-built_in">CAConstraintLayoutManager</span> *layout = [<span class="hljs-built_in">CAConstraintLayoutManager</span> layoutManager];
    [backgroundLayer setLayoutManager:layout];

    <span class="hljs-keyword">return</span> backgroundLayer;
}</code></pre></div>`,Z=n(),A=t("h2"),A.textContent="The ClockFace Layer:",D=n(),S=t("p"),S.innerHTML="Core Animation comes with several layer types to help us with various tasks. One of these is the <code>CATextLayer</code> which like the name suggests, make it really easy to output text. It also makes it really easy to customize how the text is displayed by setting font and font size. Using the normal shadow properties from <code>CALayer</code> you can add a nice drop shadow on the text.",J=n(),M=t("p"),M.innerHTML="Using Cocoa bindings I connect the text layers <code>string</code> property with the <code>outputString</code> on my <code>ClockTimer</code>. This way the layer will automatically redraw itself everytime the timer updates the output string.",Q=n(),R=t("p"),R.textContent="This is also where we setup the constraints mentioned above to make sure that the text is centered in relation to its super layer (in this case the background).",V=n(),m=t("div"),m.innerHTML=`<div class="highlight"><pre class="highlight"><code>- (<span class="hljs-built_in">CALayer</span> *)setupClockFaceLayer {
    <span class="hljs-built_in">CATextLayer</span> *clockFaceLayer = [<span class="hljs-built_in">CATextLayer</span> layer];
    [clockFaceLayer bind:<span class="hljs-string">@&quot;string&quot;</span> toObject:clockTimer withKeyPath:<span class="hljs-string">@&quot;outputString&quot;</span> options:<span class="hljs-literal">nil</span>];
    [clockFaceLayer setFont:<span class="hljs-string">@&quot;Menlo&quot;</span>];
    [clockFaceLayer setFontSize:<span class="hljs-number">60.0</span>f];
    [clockFaceLayer setShadowOpacity:<span class="hljs-number">.9</span>f];

    <span class="hljs-comment">// Constrain the text layer in the middle</span>
    <span class="hljs-built_in">CAConstraint</span> *constraint = [<span class="hljs-built_in">CAConstraint</span> constraintWithAttribute:kCAConstraintMidX
                                                          relativeTo:<span class="hljs-string">@&quot;superlayer&quot;</span>
                                                           attribute:kCAConstraintMidX];
    [clockFaceLayer addConstraint:constraint];

    constraint = [<span class="hljs-built_in">CAConstraint</span> constraintWithAttribute:kCAConstraintMidY
                                            relativeTo:<span class="hljs-string">@&quot;superlayer&quot;</span>
                                             attribute:kCAConstraintMidY];
    [clockFaceLayer addConstraint:constraint];

    <span class="hljs-keyword">return</span> clockFaceLayer;
}</code></pre></div>`,ss=n(),I=t("h2"),I.textContent="The Border Layer:",es=n(),x=t("p"),x.textContent="There are likely other ways of doing this but by using a separate layer I can use built in functionality to draw a border around a layer. I make the layer slightly smaller than the background layer, set its corner radius to the same value used for the background and simply set it to draw its border with a white color.",as=n(),j=t("div"),j.innerHTML=`<div class="highlight"><pre class="highlight"><code>- (<span class="hljs-built_in">CALayer</span> *)setupBorderLayer
{
    <span class="hljs-built_in">CALayer</span> *borderLayer = [<span class="hljs-built_in">CALayer</span> layer];
    <span class="hljs-built_in">CGRect</span> borderRect = <span class="hljs-built_in">CGRectInset</span>([<span class="hljs-keyword">self</span> frame], <span class="hljs-number">8.0</span>f, <span class="hljs-number">8.0</span>f);
    [borderLayer setCornerRadius:<span class="hljs-number">12.0</span>f];
    [borderLayer setBorderColor:<span class="hljs-built_in">CGColorGetConstantColor</span>(kCGColorWhite)];
    [borderLayer setBorderWidth:<span class="hljs-number">2.0</span>f];
    [borderLayer setFrame:borderRect];

    <span class="hljs-keyword">return</span> borderLayer;
}</code></pre></div>`,ls=n(),B=t("p"),B.textContent="Notice that I do not have to set any constraints here as I create the layer frame from simply shrinking the frame size on all sides which ensures it will be set in the middle already.",ts=n(),F=t("h2"),F.textContent="The Gloss Layer:",ns=n(),G=t("p"),G.textContent="As a final touch I wanted to add the shine to give the clock a glossy look. The simplest way I could figure out to do this was to create a transparent image in Photoshop and setup the layer to draw it. Optimally it should be generated in code or at least use a scalable image to make the clock resizable without loosing any quality in the gloss layer.",os=n(),N=t("p"),N.innerHTML="Even if we set the same corner radius as the background layer the layer will happily draw the image outside of this unless we call <code>setMasksToBounds</code> to ensure that it doesn\u2019t draw the image outside of the rounded corners.",is=n(),k=t("div"),k.innerHTML=`<div class="highlight"><pre class="highlight"><code>- (<span class="hljs-built_in">CALayer</span> *)setupGlossLayer
{
    <span class="hljs-built_in">CALayer</span> *glossLayer = [<span class="hljs-built_in">CALayer</span> layer];
    <span class="hljs-built_in">NSString</span> *filePath = [[<span class="hljs-built_in">NSBundle</span> mainBundle] pathForResource:<span class="hljs-string">@&quot;clock-gloss&quot;</span> ofType:<span class="hljs-string">@&quot;png&quot;</span>];
    <span class="hljs-built_in">NSURL</span> *fileURL = [<span class="hljs-built_in">NSURL</span> fileURLWithPath:filePath];

    <span class="hljs-built_in">CGImageSourceRef</span> glossySource = <span class="hljs-built_in">CGImageSourceCreateWithURL</span>((<span class="hljs-built_in">CFURLRef</span>)fileURL, <span class="hljs-literal">NULL</span>);
    <span class="hljs-built_in">CGImageRef</span> glossyImage = <span class="hljs-built_in">CGImageSourceCreateImageAtIndex</span>(glossySource, <span class="hljs-number">0</span>, <span class="hljs-literal">NULL</span>);
    <span class="hljs-built_in">CFRelease</span>(glossySource);
    [glossLayer setContents:(<span class="hljs-type">id</span>)glossyImage];
    <span class="hljs-built_in">CFRelease</span>(glossyImage);

    [glossLayer setOpacity:<span class="hljs-number">0.8</span>f];
    [glossLayer setCornerRadius:<span class="hljs-number">12.0</span>f];
    [glossLayer setMasksToBounds:<span class="hljs-literal">YES</span>];
    [glossLayer setFrame:[<span class="hljs-keyword">self</span> frame]];

    <span class="hljs-keyword">return</span> glossLayer;
}</code></pre></div>`,rs=n(),q=t("p"),q.innerHTML="Finally I subclassed <code>NSWindow</code> in order to turn off the window decoration and shape the window as the background layer.",ps=n(),C=t("div"),C.innerHTML=`<div class="highlight"><pre class="highlight"><code>- (<span class="hljs-type">id</span>)initWithContentRect:(<span class="hljs-built_in">NSRect</span>)contentRect
                styleMask:(<span class="hljs-built_in">NSUInteger</span>)aStyle
                  backing:(<span class="hljs-built_in">NSBackingStoreType</span>)bufferingType
                    defer:(<span class="hljs-type">BOOL</span>)flag
{
    <span class="hljs-keyword">self</span> = [<span class="hljs-variable language_">super</span> initWithContentRect:contentRect
                            styleMask:<span class="hljs-built_in">NSBorderlessWindowMask</span>
                              backing:bufferingType
                                defer:flag];
    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">self</span>) {
        [<span class="hljs-keyword">self</span> setOpaque:<span class="hljs-literal">NO</span>];
        [<span class="hljs-keyword">self</span> setBackgroundColor:[<span class="hljs-built_in">NSColor</span> clearColor]];
        [<span class="hljs-keyword">self</span> setMovableByWindowBackground:<span class="hljs-literal">YES</span>];
        [<span class="hljs-keyword">self</span> setLevel:<span class="hljs-built_in">NSPopUpMenuWindowLevel</span>];
    }

    <span class="hljs-keyword">return</span> <span class="hljs-keyword">self</span>;
}</code></pre></div>`,cs=n(),W=t("p"),W.innerHTML="<code>NSBorderlessWindowMask</code> makes the window draw without the border and <code>setOpaque</code> together with setting the background color to <code>[NSColor clearColor]</code>. Using the <code>NSPopUpMenuWindowLevel</code> ensures that the clock is always on top of other windows.",us=n(),H=t("p"),H.textContent="I hope you find this helpful and please make sure to subscribe to my feed if you did. I\u2019ll do my best to answer any questions you might have in the comment section below.",ds=n(),U=t("p"),U.innerHTML='The full source as an Xcode project can be browsed at: <a href="http://github.com/hallski/glossyclock" rel="nofollow">Github</a> or <a href="http://github.com/hallski/glossyclock/zipball/master" rel="nofollow">downloaded</a>.',y(f,"class","highlighter-rouge language-objc"),y(b,"class","highlighter-rouge language-objc"),y(m,"class","highlighter-rouge language-objc"),y(j,"class","highlighter-rouge language-objc"),y(k,"class","highlighter-rouge language-objc"),y(C,"class","highlighter-rouge language-objc")},m(s,e){a(s,o,e),a(s,p,e),a(s,c,e),a(s,u,e),a(s,i,e),a(s,r,e),a(s,d,e),a(s,O,e),a(s,w,e),a(s,P,e),a(s,f,e),a(s,z,e),a(s,L,e),a(s,$,e),a(s,g,e),a(s,Y,e),a(s,_,e),a(s,E,e),a(s,v,e),a(s,X,e),a(s,T,e),a(s,K,e),a(s,b,e),a(s,Z,e),a(s,A,e),a(s,D,e),a(s,S,e),a(s,J,e),a(s,M,e),a(s,Q,e),a(s,R,e),a(s,V,e),a(s,m,e),a(s,ss,e),a(s,I,e),a(s,es,e),a(s,x,e),a(s,as,e),a(s,j,e),a(s,ls,e),a(s,B,e),a(s,ts,e),a(s,F,e),a(s,ns,e),a(s,G,e),a(s,os,e),a(s,N,e),a(s,is,e),a(s,k,e),a(s,rs,e),a(s,q,e),a(s,ps,e),a(s,C,e),a(s,cs,e),a(s,W,e),a(s,us,e),a(s,H,e),a(s,ds,e),a(s,U,e)},p:Ts,d(s){s&&l(o),s&&l(p),s&&l(c),s&&l(u),s&&l(i),s&&l(r),s&&l(d),s&&l(O),s&&l(w),s&&l(P),s&&l(f),s&&l(z),s&&l(L),s&&l($),s&&l(g),s&&l(Y),s&&l(_),s&&l(E),s&&l(v),s&&l(X),s&&l(T),s&&l(K),s&&l(b),s&&l(Z),s&&l(A),s&&l(D),s&&l(S),s&&l(J),s&&l(M),s&&l(Q),s&&l(R),s&&l(V),s&&l(m),s&&l(ss),s&&l(I),s&&l(es),s&&l(x),s&&l(as),s&&l(j),s&&l(ls),s&&l(B),s&&l(ts),s&&l(F),s&&l(ns),s&&l(G),s&&l(os),s&&l(N),s&&l(is),s&&l(k),s&&l(rs),s&&l(q),s&&l(ps),s&&l(C),s&&l(cs),s&&l(W),s&&l(us),s&&l(H),s&&l(ds),s&&l(U)}}}function Ms(h){let o,p;const c=[h[0],ys];let u={$$slots:{default:[Ss]},$$scope:{ctx:h}};for(let i=0;i<c.length;i+=1)u=hs(u,c[i]);return o=new As({props:u}),{c(){Cs(o.$$.fragment)},m(i,r){ws(o,i,r),p=!0},p(i,[r]){const d=r&1?Ls(c,[r&1&&fs(i[0]),r&0&&fs(ys)]):{};r&2&&(d.$$scope={dirty:r,ctx:i}),o.$set(d)},i(i){p||(gs(o.$$.fragment,i),p=!0)},o(i){_s(o.$$.fragment,i),p=!1},d(i){vs(o,i)}}}const ys={comments:null,date:"2009-10-12T00:00:00Z",section:"blog",tags:["objective-c"],title:"Core Animation Layered Clock"};function Rs(h,o,p){return h.$$set=c=>{p(0,o=hs(hs({},o),bs(c)))},o=bs(o),[o]}class Is extends ms{constructor(o){super(),js(this,o,Rs,Ms,ks,{})}}var Fs=Object.freeze(Object.defineProperty({__proto__:null,default:Is,metadata:ys},Symbol.toStringTag,{value:"Module"}));export{Is as C,Fs as _,ys as m};
