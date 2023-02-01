import{S as vt,i as mt,s as _t,k as l,q as t,a as dt,l as r,m as c,r as s,h as o,c as ut,n as i,b as M,D as e,B as Re}from"./index-57d6417f.js";function Et(ft){let p,z,L,G,H,T,J,Q,I,U,W,B,u,X,R,Y,$,q,ee,te,Z,f,v,m,a,se,_,ae,ne,E,oe,le,y,re,ce,b,ie,he,N,pe,de,P,ue,fe,S,ve,me,w,_e,Ee,x,ye,be,j,Ne,Pe,A,Se,we,g,xe,je,C,Ae,ge,O,Ce,Oe,k,ke,De,D,Ve,Fe,V,Ke,Le,F,Te,Ie;return{c(){p=l("p"),z=t("A problem when you want to expand some items in an "),L=l("em"),G=t("NSOutlineView"),H=t(" programatically at application start is that the "),T=l("em"),J=t("NSTreeController"),Q=t(" prepares it’s content after "),I=l("code"),U=t("awakeFromNib"),W=t(" is called on your controller."),B=dt(),u=l("p"),X=t("To ensure that the data is loaded before you try to expand the items you can observe the "),R=l("code"),Y=t("content"),$=t(" key on the tree controller and expand the nodes as you receive the the "),q=l("code"),ee=t("observeValueForKeyPath:"),te=t(" message as shown below:"),Z=dt(),f=l("div"),v=l("div"),m=l("pre"),a=l("code"),se=t("- ("),_=l("span"),ae=t("void"),ne=t(")observeValueForKeyPath:("),E=l("span"),oe=t("NSString"),le=t(` *)keyPath
                      ofObject:(`),y=l("span"),re=t("id"),ce=t(`)object
                        change:(`),b=l("span"),ie=t("NSDictionary"),he=t(` *)change
                       context:(`),N=l("span"),pe=t("void"),de=t(` *)context
{
    `),P=l("span"),ue=t("if"),fe=t(` (object == treeController) {
        `),S=l("span"),ve=t("// Expand the first row (which is our section header)"),me=t(`
        [sourceList expandItem:[sourceList itemAtRow:`),w=l("span"),_e=t("0"),Ee=t(`]
                expandChildren:`),x=l("span"),ye=t("NO"),be=t(`];
        [treeController removeObserver:`),j=l("span"),Ne=t("self"),Pe=t(`
                            forKeyPath:`),A=l("span"),Se=t('@"content"'),we=t(`];
    }
}

- (`),g=l("span"),xe=t("void"),je=t(`)awakeFromNib
{
    `),C=l("span"),Ae=t("// Listen on the treeController to expand the root node"),ge=t(`
    `),O=l("span"),Ce=t("// when it has prepared it's content."),Oe=t(`
    [treeController addObserver:`),k=l("span"),ke=t("self"),De=t(`
                     forKeyPath:`),D=l("span"),Ve=t('@"content"'),Fe=t(`
                        options:`),V=l("span"),Ke=t("0"),Le=t(`
                        context:`),F=l("span"),Te=t("nil"),Ie=t(`];
}`),this.h()},l(h){p=r(h,"P",{});var d=c(p);z=s(d,"A problem when you want to expand some items in an "),L=r(d,"EM",{});var qe=c(L);G=s(qe,"NSOutlineView"),qe.forEach(o),H=s(d," programatically at application start is that the "),T=r(d,"EM",{});var Me=c(T);J=s(Me,"NSTreeController"),Me.forEach(o),Q=s(d," prepares it’s content after "),I=r(d,"CODE",{});var Be=c(I);U=s(Be,"awakeFromNib"),Be.forEach(o),W=s(d," is called on your controller."),d.forEach(o),B=ut(h),u=r(h,"P",{});var K=c(u);X=s(K,"To ensure that the data is loaded before you try to expand the items you can observe the "),R=r(K,"CODE",{});var Ze=c(R);Y=s(Ze,"content"),Ze.forEach(o),$=s(K," key on the tree controller and expand the nodes as you receive the the "),q=r(K,"CODE",{});var ze=c(q);ee=s(ze,"observeValueForKeyPath:"),ze.forEach(o),te=s(K," message as shown below:"),K.forEach(o),Z=ut(h),f=r(h,"DIV",{class:!0});var Ge=c(f);v=r(Ge,"DIV",{class:!0});var He=c(v);m=r(He,"PRE",{class:!0});var Je=c(m);a=r(Je,"CODE",{});var n=c(a);se=s(n,"- ("),_=r(n,"SPAN",{class:!0});var Qe=c(_);ae=s(Qe,"void"),Qe.forEach(o),ne=s(n,")observeValueForKeyPath:("),E=r(n,"SPAN",{class:!0});var Ue=c(E);oe=s(Ue,"NSString"),Ue.forEach(o),le=s(n,` *)keyPath
                      ofObject:(`),y=r(n,"SPAN",{class:!0});var We=c(y);re=s(We,"id"),We.forEach(o),ce=s(n,`)object
                        change:(`),b=r(n,"SPAN",{class:!0});var Xe=c(b);ie=s(Xe,"NSDictionary"),Xe.forEach(o),he=s(n,` *)change
                       context:(`),N=r(n,"SPAN",{class:!0});var Ye=c(N);pe=s(Ye,"void"),Ye.forEach(o),de=s(n,` *)context
{
    `),P=r(n,"SPAN",{class:!0});var $e=c(P);ue=s($e,"if"),$e.forEach(o),fe=s(n,` (object == treeController) {
        `),S=r(n,"SPAN",{class:!0});var et=c(S);ve=s(et,"// Expand the first row (which is our section header)"),et.forEach(o),me=s(n,`
        [sourceList expandItem:[sourceList itemAtRow:`),w=r(n,"SPAN",{class:!0});var tt=c(w);_e=s(tt,"0"),tt.forEach(o),Ee=s(n,`]
                expandChildren:`),x=r(n,"SPAN",{class:!0});var st=c(x);ye=s(st,"NO"),st.forEach(o),be=s(n,`];
        [treeController removeObserver:`),j=r(n,"SPAN",{class:!0});var at=c(j);Ne=s(at,"self"),at.forEach(o),Pe=s(n,`
                            forKeyPath:`),A=r(n,"SPAN",{class:!0});var nt=c(A);Se=s(nt,'@"content"'),nt.forEach(o),we=s(n,`];
    }
}

- (`),g=r(n,"SPAN",{class:!0});var ot=c(g);xe=s(ot,"void"),ot.forEach(o),je=s(n,`)awakeFromNib
{
    `),C=r(n,"SPAN",{class:!0});var lt=c(C);Ae=s(lt,"// Listen on the treeController to expand the root node"),lt.forEach(o),ge=s(n,`
    `),O=r(n,"SPAN",{class:!0});var rt=c(O);Ce=s(rt,"// when it has prepared it's content."),rt.forEach(o),Oe=s(n,`
    [treeController addObserver:`),k=r(n,"SPAN",{class:!0});var ct=c(k);ke=s(ct,"self"),ct.forEach(o),De=s(n,`
                     forKeyPath:`),D=r(n,"SPAN",{class:!0});var it=c(D);Ve=s(it,'@"content"'),it.forEach(o),Fe=s(n,`
                        options:`),V=r(n,"SPAN",{class:!0});var ht=c(V);Ke=s(ht,"0"),ht.forEach(o),Le=s(n,`
                        context:`),F=r(n,"SPAN",{class:!0});var pt=c(F);Te=s(pt,"nil"),pt.forEach(o),Ie=s(n,`];
}`),n.forEach(o),Je.forEach(o),He.forEach(o),Ge.forEach(o),this.h()},h(){i(_,"class","hljs-type"),i(E,"class","hljs-built_in"),i(y,"class","hljs-type"),i(b,"class","hljs-built_in"),i(N,"class","hljs-type"),i(P,"class","hljs-keyword"),i(S,"class","hljs-comment"),i(w,"class","hljs-number"),i(x,"class","hljs-literal"),i(j,"class","hljs-keyword"),i(A,"class","hljs-string"),i(g,"class","hljs-type"),i(C,"class","hljs-comment"),i(O,"class","hljs-comment"),i(k,"class","hljs-keyword"),i(D,"class","hljs-string"),i(V,"class","hljs-number"),i(F,"class","hljs-literal"),i(m,"class","highlight"),i(v,"class","highlight"),i(f,"class","highlighter-rouge language-objc")},m(h,d){M(h,p,d),e(p,z),e(p,L),e(L,G),e(p,H),e(p,T),e(T,J),e(p,Q),e(p,I),e(I,U),e(p,W),M(h,B,d),M(h,u,d),e(u,X),e(u,R),e(R,Y),e(u,$),e(u,q),e(q,ee),e(u,te),M(h,Z,d),M(h,f,d),e(f,v),e(v,m),e(m,a),e(a,se),e(a,_),e(_,ae),e(a,ne),e(a,E),e(E,oe),e(a,le),e(a,y),e(y,re),e(a,ce),e(a,b),e(b,ie),e(a,he),e(a,N),e(N,pe),e(a,de),e(a,P),e(P,ue),e(a,fe),e(a,S),e(S,ve),e(a,me),e(a,w),e(w,_e),e(a,Ee),e(a,x),e(x,ye),e(a,be),e(a,j),e(j,Ne),e(a,Pe),e(a,A),e(A,Se),e(a,we),e(a,g),e(g,xe),e(a,je),e(a,C),e(C,Ae),e(a,ge),e(a,O),e(O,Ce),e(a,Oe),e(a,k),e(k,ke),e(a,De),e(a,D),e(D,Ve),e(a,Fe),e(a,V),e(V,Ke),e(a,Le),e(a,F),e(F,Te),e(a,Ie)},p:Re,i:Re,o:Re,d(h){h&&o(p),h&&o(B),h&&o(u),h&&o(Z),h&&o(f)}}}const bt={comments:!1,date:"2009-04-06T00:00:00Z",section:"blog",tags:["objective-c"],title:"Expanding NSOutlineView nodes at application start"};class Nt extends vt{constructor(p){super(),mt(this,p,null,Et,_t,{})}}export{Nt as default,bt as metadata};
