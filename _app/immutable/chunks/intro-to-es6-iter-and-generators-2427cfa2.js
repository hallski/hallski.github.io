import{S as Lr,i as Rr,s as zr,k as r,q as t,a as u,l as o,m as n,r as a,h as s,c as v,n as i,b as p,D as e,B as dl}from"./index-57d6417f.js";function Ur(Vr){let x,Tt,pt,B,Mt,dt,A,Je,Wt,qt,Ve,H,Bt,Ht,Le,J,Jt,ut,V,Vt,vt,S,Lt,Re,Rt,zt,ze,Ut,Kt,Ue,Qt,Zt,Et,C,L,R,_,z,Ft,Xt,U,Yt,$t,K,ea,ta,Q,aa,sa,Z,la,ra,F,oa,na,X,ia,ca,_t,I,ha,Ke,fa,pa,Qe,da,ua,mt,O,Y,$,d,ee,va,Ea,te,_a,ma,ae,wa,ba,se,Sa,Pa,le,ja,Aa,re,Ia,ya,oe,Na,xa,ne,Da,ka,ie,Ga,ga,ce,Ca,Oa,wt,D,Ta,Ze,Ma,Wa,bt,y,qa,Fe,Ba,Ha,T,Xe,Ja,Va,St,he,La,Pt,m,Ra,Ye,za,Ua,$e,Ka,Qa,et,Za,Fa,tt,Xa,Ya,at,$a,es,jt,k,ts,M,as,ss,At,fe,st,ls,It,w,rs,lt,os,ns,rt,is,cs,ot,hs,fs,nt,ps,ds,it,us,vs,yt,N,Es,ct,_s,ms,ht,ws,bs,Nt,W,pe,de,c,ue,Ss,Ps,ve,js,As,ft,Is,Ee,ys,Ns,_e,xs,Ds,me,ks,Gs,we,gs,Cs,be,Os,Ts,Se,Ms,Ws,Pe,qs,Bs,je,Hs,Js,Ae,Vs,Ls,Ie,Rs,zs,ye,Us,Ks,Ne,Qs,Zs,xe,Fs,Xs,De,Ys,$s,ke,el,tl,Ge,al,sl,ge,ll,rl,Ce,ol,xt,G,nl,q,il,cl,Dt,Oe,hl,kt,Te,fl,Gt,Me,pl;return{c(){x=r("h2"),Tt=t("Javascript Generator Series"),pt=u(),B=r("p"),Mt=t("This article is part of a series of articles about ES6 generators. The plan is to explore iterators and generators, starting with what they are and show casing different situations where they can be useful."),dt=u(),A=r("ol"),Je=r("li"),Wt=t("Introduction to ES6 Iterators and Generators"),qt=u(),Ve=r("li"),H=r("a"),Bt=t("Working with Generators"),Ht=u(),Le=r("li"),J=r("a"),Jt=t("Async/Await with Generators"),ut=u(),V=r("h2"),Vt=t("Iterator basics"),vt=u(),S=r("p"),Lt=t("Iterators in Javascript are objects that implement "),Re=r("code"),Rt=t("next()"),zt=t(" which returns an object with two properties, "),ze=r("code"),Ut=t("done"),Kt=t(" and "),Ue=r("code"),Qt=t("value"),Zt=t("."),Et=u(),C=r("div"),L=r("div"),R=r("pre"),_=r("code"),z=r("span"),Ft=t("// Simple Iterator"),Xt=t(`
{
	`),U=r("span"),Yt=t("next"),$t=t(": "),K=r("span"),ea=t("() =>"),ta=t(" ({ "),Q=r("span"),aa=t("done"),sa=t(": "),Z=r("span"),la=t("false"),ra=t(", "),F=r("span"),oa=t("value"),na=t(": "),X=r("span"),ia=t("1"),ca=t(` })
}`),_t=u(),I=r("p"),ha=t("An "),Ke=r("em"),fa=t("Iterable"),pa=t(" is an object that can be iterated over, the informal protocol for an Iterable is an object that defines the "),Qe=r("code"),da=t("Symbol.iterable"),ua=t(" method which returns an iterator."),mt=u(),O=r("div"),Y=r("div"),$=r("pre"),d=r("code"),ee=r("span"),va=t("// Simple Iterable"),Ea=t(`
{
  [`),te=r("span"),_a=t("Symbol"),ma=t("."),ae=r("span"),wa=t("iterator"),ba=t("]: "),se=r("span"),Sa=t("() =>"),Pa=t(" ({ "),le=r("span"),ja=t("next"),Aa=t(": "),re=r("span"),Ia=t("() =>"),ya=t(" ({ "),oe=r("span"),Na=t("done"),xa=t(": "),ne=r("span"),Da=t("false"),ka=t(", "),ie=r("span"),Ga=t("value"),ga=t(": "),ce=r("span"),Ca=t("1"),Oa=t(` })})
}`),wt=u(),D=r("p"),Ta=t("These aren’t very useful since all they do is return an infinite stream of the number "),Ze=r("code"),Ma=t("1"),Wa=t(" when iterated over."),bt=u(),y=r("p"),qa=t("By conforming to the "),Fe=r("em"),Ba=t("Iterable"),Ha=t(" protocol an object can be used in the "),T=r("a"),Xe=r("code"),Ja=t("for...of"),Va=t(" construct."),St=u(),he=r("h2"),La=t("Generator Basics"),Pt=u(),m=r("p"),Ra=t("So, what do "),Ye=r("em"),za=t("Iterator"),Ua=t(" and "),$e=r("em"),Ka=t("Iterable"),Qa=t(" have to do with "),et=r("em"),Za=t("Generators"),Fa=t("? Turns out, a lot, since Generators conform to both "),tt=r("em"),Xa=t("Iterable"),Ya=t(" and "),at=r("em"),$a=t("Iterator"),es=t("."),jt=u(),k=r("p"),ts=t("In short, generators are "),M=r("a"),as=t("coroutines"),ss=t(". Here is the short description from MDN:"),At=u(),fe=r("blockquote"),st=r("p"),ls=t("Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances."),It=u(),w=r("p"),rs=t("When the generator is iterated over, through "),lt=r("code"),os=t("next()"),ns=t(", it executes to the first "),rt=r("code"),is=t("yield"),cs=t(" statement. There it will save it’s state and return the value passed to yield. The next time "),ot=r("code"),hs=t("next()"),fs=t(" is called, the state will be restored and the code will continue executing where it left of. This will continue until the end of the function (or "),nt=r("code"),ps=t("return"),ds=t(") where the final value will be returned and the iterator marked as "),it=r("code"),us=t("done"),vs=t("."),yt=u(),N=r("p"),Es=t("A function is declared a generator by adding an "),ct=r("code"),_s=t("*"),ms=t(" after the keyword "),ht=r("code"),ws=t("function"),bs=t("."),Nt=u(),W=r("div"),pe=r("div"),de=r("pre"),c=r("code"),ue=r("span"),Ss=t("function"),Ps=t("* "),ve=r("span"),js=t("aGenerator"),As=t("("),ft=r("span"),Is=t(`) {
	`),Ee=r("span"),ys=t("yield"),Ns=t(" "),_e=r("span"),xs=t("1"),Ds=t(`
	`),me=r("span"),ks=t("yield"),Gs=t(" "),we=r("span"),gs=t("2"),Cs=t(`
	`),be=r("span"),Os=t("yield"),Ts=t(" "),Se=r("span"),Ms=t("3"),Ws=t(`
	`),Pe=r("span"),qs=t("return"),Bs=t(" "),je=r("span"),Hs=t("4"),Js=t(`
}

`),Ae=r("span"),Vs=t("const"),Ls=t(" gen = "),Ie=r("span"),Rs=t("aGenerator"),zs=t(`()
gen.`),ye=r("span"),Us=t("next"),Ks=t("() "),Ne=r("span"),Qs=t("// { value: 1, done: false }"),Zs=t(`
gen.`),xe=r("span"),Fs=t("next"),Xs=t("() "),De=r("span"),Ys=t("// { value: 2, done: false }"),$s=t(`
gen.`),ke=r("span"),el=t("next"),tl=t("() "),Ge=r("span"),al=t("// { value: 3, done: false }"),sl=t(`
gen.`),ge=r("span"),ll=t("next"),rl=t("() "),Ce=r("span"),ol=t("// { value: 4, done: true }"),xt=u(),G=r("p"),nl=t("See MDN for more in-depth information about "),q=r("a"),il=t("generator functions"),cl=t("."),Dt=u(),Oe=r("h2"),hl=t("Why are generators interesting"),kt=u(),Te=r("p"),fl=t("In the next couple of articles, we’ll have a look on various use cases for generators. Starting with infinite generators that generate an infinite stream of values and show how they can be useful in the context of a finite iteration."),Gt=u(),Me=r("p"),pl=t("In the later articles, we’ll look at more advanced use cases, where we pass values into the generator and even use them for synchronization when doing concurrent programming."),this.h()},l(l){x=o(l,"H2",{});var h=n(x);Tt=a(h,"Javascript Generator Series"),h.forEach(s),pt=v(l),B=o(l,"P",{});var ul=n(B);Mt=a(ul,"This article is part of a series of articles about ES6 generators. The plan is to explore iterators and generators, starting with what they are and show casing different situations where they can be useful."),ul.forEach(s),dt=v(l),A=o(l,"OL",{});var We=n(A);Je=o(We,"LI",{});var vl=n(Je);Wt=a(vl,"Introduction to ES6 Iterators and Generators"),vl.forEach(s),qt=v(We),Ve=o(We,"LI",{});var El=n(Ve);H=o(El,"A",{href:!0});var _l=n(H);Bt=a(_l,"Working with Generators"),_l.forEach(s),El.forEach(s),Ht=v(We),Le=o(We,"LI",{});var ml=n(Le);J=o(ml,"A",{href:!0});var wl=n(J);Jt=a(wl,"Async/Await with Generators"),wl.forEach(s),ml.forEach(s),We.forEach(s),ut=v(l),V=o(l,"H2",{});var bl=n(V);Vt=a(bl,"Iterator basics"),bl.forEach(s),vt=v(l),S=o(l,"P",{});var g=n(S);Lt=a(g,"Iterators in Javascript are objects that implement "),Re=o(g,"CODE",{});var Sl=n(Re);Rt=a(Sl,"next()"),Sl.forEach(s),zt=a(g," which returns an object with two properties, "),ze=o(g,"CODE",{});var Pl=n(ze);Ut=a(Pl,"done"),Pl.forEach(s),Kt=a(g," and "),Ue=o(g,"CODE",{});var jl=n(Ue);Qt=a(jl,"value"),jl.forEach(s),Zt=a(g,"."),g.forEach(s),Et=v(l),C=o(l,"DIV",{class:!0});var Al=n(C);L=o(Al,"DIV",{class:!0});var Il=n(L);R=o(Il,"PRE",{class:!0});var yl=n(R);_=o(yl,"CODE",{});var b=n(_);z=o(b,"SPAN",{class:!0});var Nl=n(z);Ft=a(Nl,"// Simple Iterator"),Nl.forEach(s),Xt=a(b,`
{
	`),U=o(b,"SPAN",{class:!0});var xl=n(U);Yt=a(xl,"next"),xl.forEach(s),$t=a(b,": "),K=o(b,"SPAN",{class:!0});var Dl=n(K);ea=a(Dl,"() =>"),Dl.forEach(s),ta=a(b," ({ "),Q=o(b,"SPAN",{class:!0});var kl=n(Q);aa=a(kl,"done"),kl.forEach(s),sa=a(b,": "),Z=o(b,"SPAN",{class:!0});var Gl=n(Z);la=a(Gl,"false"),Gl.forEach(s),ra=a(b,", "),F=o(b,"SPAN",{class:!0});var gl=n(F);oa=a(gl,"value"),gl.forEach(s),na=a(b,": "),X=o(b,"SPAN",{class:!0});var Cl=n(X);ia=a(Cl,"1"),Cl.forEach(s),ca=a(b,` })
}`),b.forEach(s),yl.forEach(s),Il.forEach(s),Al.forEach(s),_t=v(l),I=o(l,"P",{});var qe=n(I);ha=a(qe,"An "),Ke=o(qe,"EM",{});var Ol=n(Ke);fa=a(Ol,"Iterable"),Ol.forEach(s),pa=a(qe," is an object that can be iterated over, the informal protocol for an Iterable is an object that defines the "),Qe=o(qe,"CODE",{});var Tl=n(Qe);da=a(Tl,"Symbol.iterable"),Tl.forEach(s),ua=a(qe," method which returns an iterator."),qe.forEach(s),mt=v(l),O=o(l,"DIV",{class:!0});var Ml=n(O);Y=o(Ml,"DIV",{class:!0});var Wl=n(Y);$=o(Wl,"PRE",{class:!0});var ql=n($);d=o(ql,"CODE",{});var E=n(d);ee=o(E,"SPAN",{class:!0});var Bl=n(ee);va=a(Bl,"// Simple Iterable"),Bl.forEach(s),Ea=a(E,`
{
  [`),te=o(E,"SPAN",{class:!0});var Hl=n(te);_a=a(Hl,"Symbol"),Hl.forEach(s),ma=a(E,"."),ae=o(E,"SPAN",{class:!0});var Jl=n(ae);wa=a(Jl,"iterator"),Jl.forEach(s),ba=a(E,"]: "),se=o(E,"SPAN",{class:!0});var Vl=n(se);Sa=a(Vl,"() =>"),Vl.forEach(s),Pa=a(E," ({ "),le=o(E,"SPAN",{class:!0});var Ll=n(le);ja=a(Ll,"next"),Ll.forEach(s),Aa=a(E,": "),re=o(E,"SPAN",{class:!0});var Rl=n(re);Ia=a(Rl,"() =>"),Rl.forEach(s),ya=a(E," ({ "),oe=o(E,"SPAN",{class:!0});var zl=n(oe);Na=a(zl,"done"),zl.forEach(s),xa=a(E,": "),ne=o(E,"SPAN",{class:!0});var Ul=n(ne);Da=a(Ul,"false"),Ul.forEach(s),ka=a(E,", "),ie=o(E,"SPAN",{class:!0});var Kl=n(ie);Ga=a(Kl,"value"),Kl.forEach(s),ga=a(E,": "),ce=o(E,"SPAN",{class:!0});var Ql=n(ce);Ca=a(Ql,"1"),Ql.forEach(s),Oa=a(E,` })})
}`),E.forEach(s),ql.forEach(s),Wl.forEach(s),Ml.forEach(s),wt=v(l),D=o(l,"P",{});var gt=n(D);Ta=a(gt,"These aren’t very useful since all they do is return an infinite stream of the number "),Ze=o(gt,"CODE",{});var Zl=n(Ze);Ma=a(Zl,"1"),Zl.forEach(s),Wa=a(gt," when iterated over."),gt.forEach(s),bt=v(l),y=o(l,"P",{});var Be=n(y);qa=a(Be,"By conforming to the "),Fe=o(Be,"EM",{});var Fl=n(Fe);Ba=a(Fl,"Iterable"),Fl.forEach(s),Ha=a(Be," protocol an object can be used in the "),T=o(Be,"A",{href:!0,rel:!0});var Xl=n(T);Xe=o(Xl,"CODE",{});var Yl=n(Xe);Ja=a(Yl,"for...of"),Yl.forEach(s),Xl.forEach(s),Va=a(Be," construct."),Be.forEach(s),St=v(l),he=o(l,"H2",{});var $l=n(he);La=a($l,"Generator Basics"),$l.forEach(s),Pt=v(l),m=o(l,"P",{});var P=n(m);Ra=a(P,"So, what do "),Ye=o(P,"EM",{});var er=n(Ye);za=a(er,"Iterator"),er.forEach(s),Ua=a(P," and "),$e=o(P,"EM",{});var tr=n($e);Ka=a(tr,"Iterable"),tr.forEach(s),Qa=a(P," have to do with "),et=o(P,"EM",{});var ar=n(et);Za=a(ar,"Generators"),ar.forEach(s),Fa=a(P,"? Turns out, a lot, since Generators conform to both "),tt=o(P,"EM",{});var sr=n(tt);Xa=a(sr,"Iterable"),sr.forEach(s),Ya=a(P," and "),at=o(P,"EM",{});var lr=n(at);$a=a(lr,"Iterator"),lr.forEach(s),es=a(P,"."),P.forEach(s),jt=v(l),k=o(l,"P",{});var Ct=n(k);ts=a(Ct,"In short, generators are "),M=o(Ct,"A",{href:!0,rel:!0});var rr=n(M);as=a(rr,"coroutines"),rr.forEach(s),ss=a(Ct,". Here is the short description from MDN:"),Ct.forEach(s),At=v(l),fe=o(l,"BLOCKQUOTE",{});var or=n(fe);st=o(or,"P",{});var nr=n(st);ls=a(nr,"Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances."),nr.forEach(s),or.forEach(s),It=v(l),w=o(l,"P",{});var j=n(w);rs=a(j,"When the generator is iterated over, through "),lt=o(j,"CODE",{});var ir=n(lt);os=a(ir,"next()"),ir.forEach(s),ns=a(j,", it executes to the first "),rt=o(j,"CODE",{});var cr=n(rt);is=a(cr,"yield"),cr.forEach(s),cs=a(j," statement. There it will save it’s state and return the value passed to yield. The next time "),ot=o(j,"CODE",{});var hr=n(ot);hs=a(hr,"next()"),hr.forEach(s),fs=a(j," is called, the state will be restored and the code will continue executing where it left of. This will continue until the end of the function (or "),nt=o(j,"CODE",{});var fr=n(nt);ps=a(fr,"return"),fr.forEach(s),ds=a(j,") where the final value will be returned and the iterator marked as "),it=o(j,"CODE",{});var pr=n(it);us=a(pr,"done"),pr.forEach(s),vs=a(j,"."),j.forEach(s),yt=v(l),N=o(l,"P",{});var He=n(N);Es=a(He,"A function is declared a generator by adding an "),ct=o(He,"CODE",{});var dr=n(ct);_s=a(dr,"*"),dr.forEach(s),ms=a(He," after the keyword "),ht=o(He,"CODE",{});var ur=n(ht);ws=a(ur,"function"),ur.forEach(s),bs=a(He,"."),He.forEach(s),Nt=v(l),W=o(l,"DIV",{class:!0});var vr=n(W);pe=o(vr,"DIV",{class:!0});var Er=n(pe);de=o(Er,"PRE",{class:!0});var _r=n(de);c=o(_r,"CODE",{});var f=n(c);ue=o(f,"SPAN",{class:!0});var mr=n(ue);Ss=a(mr,"function"),mr.forEach(s),Ps=a(f,"* "),ve=o(f,"SPAN",{class:!0});var wr=n(ve);js=a(wr,"aGenerator"),wr.forEach(s),As=a(f,"("),ft=o(f,"SPAN",{class:!0}),n(ft).forEach(s),Is=a(f,`) {
	`),Ee=o(f,"SPAN",{class:!0});var br=n(Ee);ys=a(br,"yield"),br.forEach(s),Ns=a(f," "),_e=o(f,"SPAN",{class:!0});var Sr=n(_e);xs=a(Sr,"1"),Sr.forEach(s),Ds=a(f,`
	`),me=o(f,"SPAN",{class:!0});var Pr=n(me);ks=a(Pr,"yield"),Pr.forEach(s),Gs=a(f," "),we=o(f,"SPAN",{class:!0});var jr=n(we);gs=a(jr,"2"),jr.forEach(s),Cs=a(f,`
	`),be=o(f,"SPAN",{class:!0});var Ar=n(be);Os=a(Ar,"yield"),Ar.forEach(s),Ts=a(f," "),Se=o(f,"SPAN",{class:!0});var Ir=n(Se);Ms=a(Ir,"3"),Ir.forEach(s),Ws=a(f,`
	`),Pe=o(f,"SPAN",{class:!0});var yr=n(Pe);qs=a(yr,"return"),yr.forEach(s),Bs=a(f," "),je=o(f,"SPAN",{class:!0});var Nr=n(je);Hs=a(Nr,"4"),Nr.forEach(s),Js=a(f,`
}

`),Ae=o(f,"SPAN",{class:!0});var xr=n(Ae);Vs=a(xr,"const"),xr.forEach(s),Ls=a(f," gen = "),Ie=o(f,"SPAN",{class:!0});var Dr=n(Ie);Rs=a(Dr,"aGenerator"),Dr.forEach(s),zs=a(f,`()
gen.`),ye=o(f,"SPAN",{class:!0});var kr=n(ye);Us=a(kr,"next"),kr.forEach(s),Ks=a(f,"() "),Ne=o(f,"SPAN",{class:!0});var Gr=n(Ne);Qs=a(Gr,"// { value: 1, done: false }"),Gr.forEach(s),Zs=a(f,`
gen.`),xe=o(f,"SPAN",{class:!0});var gr=n(xe);Fs=a(gr,"next"),gr.forEach(s),Xs=a(f,"() "),De=o(f,"SPAN",{class:!0});var Cr=n(De);Ys=a(Cr,"// { value: 2, done: false }"),Cr.forEach(s),$s=a(f,`
gen.`),ke=o(f,"SPAN",{class:!0});var Or=n(ke);el=a(Or,"next"),Or.forEach(s),tl=a(f,"() "),Ge=o(f,"SPAN",{class:!0});var Tr=n(Ge);al=a(Tr,"// { value: 3, done: false }"),Tr.forEach(s),sl=a(f,`
gen.`),ge=o(f,"SPAN",{class:!0});var Mr=n(ge);ll=a(Mr,"next"),Mr.forEach(s),rl=a(f,"() "),Ce=o(f,"SPAN",{class:!0});var Wr=n(Ce);ol=a(Wr,"// { value: 4, done: true }"),Wr.forEach(s),f.forEach(s),_r.forEach(s),Er.forEach(s),vr.forEach(s),xt=v(l),G=o(l,"P",{});var Ot=n(G);nl=a(Ot,"See MDN for more in-depth information about "),q=o(Ot,"A",{href:!0,rel:!0});var qr=n(q);il=a(qr,"generator functions"),qr.forEach(s),cl=a(Ot,"."),Ot.forEach(s),Dt=v(l),Oe=o(l,"H2",{});var Br=n(Oe);hl=a(Br,"Why are generators interesting"),Br.forEach(s),kt=v(l),Te=o(l,"P",{});var Hr=n(Te);fl=a(Hr,"In the next couple of articles, we’ll have a look on various use cases for generators. Starting with infinite generators that generate an infinite stream of values and show how they can be useful in the context of a finite iteration."),Hr.forEach(s),Gt=v(l),Me=o(l,"P",{});var Jr=n(Me);pl=a(Jr,"In the later articles, we’ll look at more advanced use cases, where we pass values into the generator and even use them for synchronization when doing concurrent programming."),Jr.forEach(s),this.h()},h(){i(H,"href","/blog/working-with-generators"),i(J,"href","/blog/async-await-with-generators"),i(z,"class","hljs-comment"),i(U,"class","hljs-attr"),i(K,"class","hljs-function"),i(Q,"class","hljs-attr"),i(Z,"class","hljs-literal"),i(F,"class","hljs-attr"),i(X,"class","hljs-number"),i(R,"class","highlight"),i(L,"class","highlight"),i(C,"class","highlighter-rouge language-javascript"),i(ee,"class","hljs-comment"),i(te,"class","hljs-title class_"),i(ae,"class","hljs-property"),i(se,"class","hljs-function"),i(le,"class","hljs-attr"),i(re,"class","hljs-function"),i(oe,"class","hljs-attr"),i(ne,"class","hljs-literal"),i(ie,"class","hljs-attr"),i(ce,"class","hljs-number"),i($,"class","highlight"),i(Y,"class","highlight"),i(O,"class","highlighter-rouge language-javascript"),i(T,"href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of"),i(T,"rel","nofollow"),i(M,"href","https://en.wikipedia.org/wiki/Coroutine"),i(M,"rel","nofollow"),i(ue,"class","hljs-keyword"),i(ve,"class","hljs-title function_"),i(ft,"class","hljs-params"),i(Ee,"class","hljs-keyword"),i(_e,"class","hljs-number"),i(me,"class","hljs-keyword"),i(we,"class","hljs-number"),i(be,"class","hljs-keyword"),i(Se,"class","hljs-number"),i(Pe,"class","hljs-keyword"),i(je,"class","hljs-number"),i(Ae,"class","hljs-keyword"),i(Ie,"class","hljs-title function_"),i(ye,"class","hljs-title function_"),i(Ne,"class","hljs-comment"),i(xe,"class","hljs-title function_"),i(De,"class","hljs-comment"),i(ke,"class","hljs-title function_"),i(Ge,"class","hljs-comment"),i(ge,"class","hljs-title function_"),i(Ce,"class","hljs-comment"),i(de,"class","highlight"),i(pe,"class","highlight"),i(W,"class","highlighter-rouge language-javascript"),i(q,"href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*"),i(q,"rel","nofollow")},m(l,h){p(l,x,h),e(x,Tt),p(l,pt,h),p(l,B,h),e(B,Mt),p(l,dt,h),p(l,A,h),e(A,Je),e(Je,Wt),e(A,qt),e(A,Ve),e(Ve,H),e(H,Bt),e(A,Ht),e(A,Le),e(Le,J),e(J,Jt),p(l,ut,h),p(l,V,h),e(V,Vt),p(l,vt,h),p(l,S,h),e(S,Lt),e(S,Re),e(Re,Rt),e(S,zt),e(S,ze),e(ze,Ut),e(S,Kt),e(S,Ue),e(Ue,Qt),e(S,Zt),p(l,Et,h),p(l,C,h),e(C,L),e(L,R),e(R,_),e(_,z),e(z,Ft),e(_,Xt),e(_,U),e(U,Yt),e(_,$t),e(_,K),e(K,ea),e(_,ta),e(_,Q),e(Q,aa),e(_,sa),e(_,Z),e(Z,la),e(_,ra),e(_,F),e(F,oa),e(_,na),e(_,X),e(X,ia),e(_,ca),p(l,_t,h),p(l,I,h),e(I,ha),e(I,Ke),e(Ke,fa),e(I,pa),e(I,Qe),e(Qe,da),e(I,ua),p(l,mt,h),p(l,O,h),e(O,Y),e(Y,$),e($,d),e(d,ee),e(ee,va),e(d,Ea),e(d,te),e(te,_a),e(d,ma),e(d,ae),e(ae,wa),e(d,ba),e(d,se),e(se,Sa),e(d,Pa),e(d,le),e(le,ja),e(d,Aa),e(d,re),e(re,Ia),e(d,ya),e(d,oe),e(oe,Na),e(d,xa),e(d,ne),e(ne,Da),e(d,ka),e(d,ie),e(ie,Ga),e(d,ga),e(d,ce),e(ce,Ca),e(d,Oa),p(l,wt,h),p(l,D,h),e(D,Ta),e(D,Ze),e(Ze,Ma),e(D,Wa),p(l,bt,h),p(l,y,h),e(y,qa),e(y,Fe),e(Fe,Ba),e(y,Ha),e(y,T),e(T,Xe),e(Xe,Ja),e(y,Va),p(l,St,h),p(l,he,h),e(he,La),p(l,Pt,h),p(l,m,h),e(m,Ra),e(m,Ye),e(Ye,za),e(m,Ua),e(m,$e),e($e,Ka),e(m,Qa),e(m,et),e(et,Za),e(m,Fa),e(m,tt),e(tt,Xa),e(m,Ya),e(m,at),e(at,$a),e(m,es),p(l,jt,h),p(l,k,h),e(k,ts),e(k,M),e(M,as),e(k,ss),p(l,At,h),p(l,fe,h),e(fe,st),e(st,ls),p(l,It,h),p(l,w,h),e(w,rs),e(w,lt),e(lt,os),e(w,ns),e(w,rt),e(rt,is),e(w,cs),e(w,ot),e(ot,hs),e(w,fs),e(w,nt),e(nt,ps),e(w,ds),e(w,it),e(it,us),e(w,vs),p(l,yt,h),p(l,N,h),e(N,Es),e(N,ct),e(ct,_s),e(N,ms),e(N,ht),e(ht,ws),e(N,bs),p(l,Nt,h),p(l,W,h),e(W,pe),e(pe,de),e(de,c),e(c,ue),e(ue,Ss),e(c,Ps),e(c,ve),e(ve,js),e(c,As),e(c,ft),e(c,Is),e(c,Ee),e(Ee,ys),e(c,Ns),e(c,_e),e(_e,xs),e(c,Ds),e(c,me),e(me,ks),e(c,Gs),e(c,we),e(we,gs),e(c,Cs),e(c,be),e(be,Os),e(c,Ts),e(c,Se),e(Se,Ms),e(c,Ws),e(c,Pe),e(Pe,qs),e(c,Bs),e(c,je),e(je,Hs),e(c,Js),e(c,Ae),e(Ae,Vs),e(c,Ls),e(c,Ie),e(Ie,Rs),e(c,zs),e(c,ye),e(ye,Us),e(c,Ks),e(c,Ne),e(Ne,Qs),e(c,Zs),e(c,xe),e(xe,Fs),e(c,Xs),e(c,De),e(De,Ys),e(c,$s),e(c,ke),e(ke,el),e(c,tl),e(c,Ge),e(Ge,al),e(c,sl),e(c,ge),e(ge,ll),e(c,rl),e(c,Ce),e(Ce,ol),p(l,xt,h),p(l,G,h),e(G,nl),e(G,q),e(q,il),e(G,cl),p(l,Dt,h),p(l,Oe,h),e(Oe,hl),p(l,kt,h),p(l,Te,h),e(Te,fl),p(l,Gt,h),p(l,Me,h),e(Me,pl)},p:dl,i:dl,o:dl,d(l){l&&s(x),l&&s(pt),l&&s(B),l&&s(dt),l&&s(A),l&&s(ut),l&&s(V),l&&s(vt),l&&s(S),l&&s(Et),l&&s(C),l&&s(_t),l&&s(I),l&&s(mt),l&&s(O),l&&s(wt),l&&s(D),l&&s(bt),l&&s(y),l&&s(St),l&&s(he),l&&s(Pt),l&&s(m),l&&s(jt),l&&s(k),l&&s(At),l&&s(fe),l&&s(It),l&&s(w),l&&s(yt),l&&s(N),l&&s(Nt),l&&s(W),l&&s(xt),l&&s(G),l&&s(Dt),l&&s(Oe),l&&s(kt),l&&s(Te),l&&s(Gt),l&&s(Me)}}}const Qr={comments:!0,date:"2017-11-13T00:00:00Z",excerpt:"In this first article about generators we'll have a quick look at the basics of Iterator, Iterable and Generators.",section:"blog",tags:["javascript","generators","es6"],title:"Introduction to ES6 Iterators and Generators"};class Zr extends Lr{constructor(x){super(),Rr(this,x,null,Ur,zr,{})}}export{Zr as default,Qr as metadata};