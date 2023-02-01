import{S as ct,i as ht,s as pt,k as r,q as a,a as w,l as i,m as c,r as l,h as s,c as _,n as h,b as f,D as e,B as De}from"./index-57d6417f.js";function ft(it){let u,K,v,Q,X,J,E,Y,V,y,$,W,b,ee,B,d,P,A,n,te,S,se,ae,C,le,ne,k,oe,re,N,ie,ce,g,he,pe,j,fe,ue,I,ve,de,M,me,we,T,_e,Ee,x,ye,be,H,Pe,Ae,D,Se,Ce,L,ke,Ne,U,ge,je,R,Ie,Me,O,q,Te,Z,F,xe,z,G,m,He;return{c(){u=r("p"),K=a("Just pushed the first cut of a small framework to connect with the newly launched chatservice "),v=r("a"),Q=a("Convore"),X=a(". In short Convore is an attempt to create a better way to chat than IRC and also support a web frontend while making it possible to connect with native clients."),J=w(),E=r("p"),Y=a("The API will likely change a bit and it’s fresh out of the editor so might be a bit flaky still."),V=w(),y=r("p"),$=a("The API makes heavy use of blocks for actions initiated from your code and a client listener for notifications initiated from the server."),W=w(),b=r("p"),ee=a("A small example of how you use the API, I will add a better example later."),B=w(),d=r("div"),P=r("div"),A=r("pre"),n=r("code"),te=a("- ("),S=r("span"),se=a("void"),ae=a(`)connectToServer
{
    MHConvoreClient *client = [MHConvoreClient clientWithUsername:`),C=r("span"),le=a('@"u"'),ne=a(" password:"),k=r("span"),oe=a('@"p"'),re=a(`];
    client.listener = `),N=r("span"),ie=a("self"),ce=a(`;

    [client verifyAccount:^ (MHConvoreUser *user, `),g=r("span"),he=a("NSError"),pe=a(` *error) {
        `),j=r("span"),fe=a("if"),ue=a(" (error == "),I=r("span"),ve=a("nil"),de=a(`) {
            `),M=r("span"),me=a("//   [self doSomething];"),we=a(`
            [client listen];
        } `),T=r("span"),_e=a("else"),Ee=a(` {
            `),x=r("span"),ye=a("NSLog"),be=a("("),H=r("span"),Pe=a('@"Error while verifying account: %@"'),Ae=a(`, error);
        }
    }];
}

`),D=r("span"),Se=a("/* Called when the client receives a new message */"),Ce=a(`
- (`),L=r("span"),ke=a("void"),Ne=a(`)newMessage:(MHConvoreMessage *)message
{
    `),U=r("span"),ge=a("NSLog"),je=a("("),R=r("span"),Ie=a('@"[%@]: %@"'),Me=a(`, message.user.name, message.message);
}`),O=w(),q=r("p"),Te=a("To connect to Convore you first need to create an account through their website."),Z=w(),F=r("p"),xe=a("There still is work that needs to be done to it so feel free to fork and hack on it. For example there is currently no way to cancel the listener."),z=w(),G=r("p"),m=r("a"),He=a("The code at Github"),this.h()},l(t){u=i(t,"P",{});var p=c(u);K=l(p,"Just pushed the first cut of a small framework to connect with the newly launched chatservice "),v=i(p,"A",{href:!0,rel:!0});var Le=c(v);Q=l(Le,"Convore"),Le.forEach(s),X=l(p,". In short Convore is an attempt to create a better way to chat than IRC and also support a web frontend while making it possible to connect with native clients."),p.forEach(s),J=_(t),E=i(t,"P",{});var Ue=c(E);Y=l(Ue,"The API will likely change a bit and it’s fresh out of the editor so might be a bit flaky still."),Ue.forEach(s),V=_(t),y=i(t,"P",{});var Re=c(y);$=l(Re,"The API makes heavy use of blocks for actions initiated from your code and a client listener for notifications initiated from the server."),Re.forEach(s),W=_(t),b=i(t,"P",{});var qe=c(b);ee=l(qe,"A small example of how you use the API, I will add a better example later."),qe.forEach(s),B=_(t),d=i(t,"DIV",{class:!0});var Fe=c(d);P=i(Fe,"DIV",{class:!0});var Ge=c(P);A=i(Ge,"PRE",{class:!0});var Je=c(A);n=i(Je,"CODE",{});var o=c(n);te=l(o,"- ("),S=i(o,"SPAN",{class:!0});var Ve=c(S);se=l(Ve,"void"),Ve.forEach(s),ae=l(o,`)connectToServer
{
    MHConvoreClient *client = [MHConvoreClient clientWithUsername:`),C=i(o,"SPAN",{class:!0});var We=c(C);le=l(We,'@"u"'),We.forEach(s),ne=l(o," password:"),k=i(o,"SPAN",{class:!0});var Be=c(k);oe=l(Be,'@"p"'),Be.forEach(s),re=l(o,`];
    client.listener = `),N=i(o,"SPAN",{class:!0});var Oe=c(N);ie=l(Oe,"self"),Oe.forEach(s),ce=l(o,`;

    [client verifyAccount:^ (MHConvoreUser *user, `),g=i(o,"SPAN",{class:!0});var Ze=c(g);he=l(Ze,"NSError"),Ze.forEach(s),pe=l(o,` *error) {
        `),j=i(o,"SPAN",{class:!0});var ze=c(j);fe=l(ze,"if"),ze.forEach(s),ue=l(o," (error == "),I=i(o,"SPAN",{class:!0});var Ke=c(I);ve=l(Ke,"nil"),Ke.forEach(s),de=l(o,`) {
            `),M=i(o,"SPAN",{class:!0});var Qe=c(M);me=l(Qe,"//   [self doSomething];"),Qe.forEach(s),we=l(o,`
            [client listen];
        } `),T=i(o,"SPAN",{class:!0});var Xe=c(T);_e=l(Xe,"else"),Xe.forEach(s),Ee=l(o,` {
            `),x=i(o,"SPAN",{class:!0});var Ye=c(x);ye=l(Ye,"NSLog"),Ye.forEach(s),be=l(o,"("),H=i(o,"SPAN",{class:!0});var $e=c(H);Pe=l($e,'@"Error while verifying account: %@"'),$e.forEach(s),Ae=l(o,`, error);
        }
    }];
}

`),D=i(o,"SPAN",{class:!0});var et=c(D);Se=l(et,"/* Called when the client receives a new message */"),et.forEach(s),Ce=l(o,`
- (`),L=i(o,"SPAN",{class:!0});var tt=c(L);ke=l(tt,"void"),tt.forEach(s),Ne=l(o,`)newMessage:(MHConvoreMessage *)message
{
    `),U=i(o,"SPAN",{class:!0});var st=c(U);ge=l(st,"NSLog"),st.forEach(s),je=l(o,"("),R=i(o,"SPAN",{class:!0});var at=c(R);Ie=l(at,'@"[%@]: %@"'),at.forEach(s),Me=l(o,`, message.user.name, message.message);
}`),o.forEach(s),Je.forEach(s),Ge.forEach(s),Fe.forEach(s),O=_(t),q=i(t,"P",{});var lt=c(q);Te=l(lt,"To connect to Convore you first need to create an account through their website."),lt.forEach(s),Z=_(t),F=i(t,"P",{});var nt=c(F);xe=l(nt,"There still is work that needs to be done to it so feel free to fork and hack on it. For example there is currently no way to cancel the listener."),nt.forEach(s),z=_(t),G=i(t,"P",{});var ot=c(G);m=i(ot,"A",{href:!0,rel:!0});var rt=c(m);He=l(rt,"The code at Github"),rt.forEach(s),ot.forEach(s),this.h()},h(){h(v,"href","http://convore.com/"),h(v,"rel","nofollow"),h(S,"class","hljs-type"),h(C,"class","hljs-string"),h(k,"class","hljs-string"),h(N,"class","hljs-keyword"),h(g,"class","hljs-built_in"),h(j,"class","hljs-keyword"),h(I,"class","hljs-literal"),h(M,"class","hljs-comment"),h(T,"class","hljs-keyword"),h(x,"class","hljs-built_in"),h(H,"class","hljs-string"),h(D,"class","hljs-comment"),h(L,"class","hljs-type"),h(U,"class","hljs-built_in"),h(R,"class","hljs-string"),h(A,"class","highlight"),h(P,"class","highlight"),h(d,"class","highlighter-rouge language-objc"),h(m,"href","https://github.com/hallski/mhconvore"),h(m,"rel","nofollow")},m(t,p){f(t,u,p),e(u,K),e(u,v),e(v,Q),e(u,X),f(t,J,p),f(t,E,p),e(E,Y),f(t,V,p),f(t,y,p),e(y,$),f(t,W,p),f(t,b,p),e(b,ee),f(t,B,p),f(t,d,p),e(d,P),e(P,A),e(A,n),e(n,te),e(n,S),e(S,se),e(n,ae),e(n,C),e(C,le),e(n,ne),e(n,k),e(k,oe),e(n,re),e(n,N),e(N,ie),e(n,ce),e(n,g),e(g,he),e(n,pe),e(n,j),e(j,fe),e(n,ue),e(n,I),e(I,ve),e(n,de),e(n,M),e(M,me),e(n,we),e(n,T),e(T,_e),e(n,Ee),e(n,x),e(x,ye),e(n,be),e(n,H),e(H,Pe),e(n,Ae),e(n,D),e(D,Se),e(n,Ce),e(n,L),e(L,ke),e(n,Ne),e(n,U),e(U,ge),e(n,je),e(n,R),e(R,Ie),e(n,Me),f(t,O,p),f(t,q,p),e(q,Te),f(t,Z,p),f(t,F,p),e(F,xe),f(t,z,p),f(t,G,p),e(G,m),e(m,He)},p:De,i:De,o:De,d(t){t&&s(u),t&&s(J),t&&s(E),t&&s(V),t&&s(y),t&&s(W),t&&s(b),t&&s(B),t&&s(d),t&&s(O),t&&s(q),t&&s(Z),t&&s(F),t&&s(z),t&&s(G)}}}const vt={comments:!1,date:"2011-02-16T00:00:00Z",section:"blog",tags:["objective-c"],title:"Initial release of MHConvore"};class dt extends ct{constructor(u){super(),ht(this,u,null,ft,pt,{})}}export{dt as default,vt as metadata};
