(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{PEml:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),o=u("+PY3");class e{constructor(l,n){this.donneesService=l,this.router=n}ngOnInit(){this.donneesService.recupererPresentateurs().subscribe(l=>this.presentateurTab=l)}afficherDetails(l){this.router.navigate(["/devfest2018/presentateurs/"+l])}}const r=()=>u.e(17).then(u.bind(null,"cLKp")).then(l=>l.DetailsPresentateurPageModuleNgFactory);class i{}var a=u("pMnS"),b=u("oBZk"),c=u("ZZ/e"),s=u("SVse"),p=u("iInd"),d=t.ob({encapsulation:0,styles:[[".py-no[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}"]],data:{}});function f(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,9,"ion-item",[["button",""],["color","dark"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.afficherDetails(l.context.$implicit.id)&&t),t}),b.J,b.m)),t.pb(1,49152,null,0,c.F,[t.h,t.k,t.x],{button:[0,"button"],color:[1,"color"]},null),(l()(),t.qb(2,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,b.y,b.b)),t.pb(3,49152,null,0,c.d,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.qb(5,0,null,0,2,"ion-label",[],null,null,null,b.K,b.n)),t.pb(6,49152,null,0,c.L,[t.h,t.k,t.x],null,null),(l()(),t.Gb(7,0,["",""])),(l()(),t.qb(8,0,null,0,1,"ion-icon",[["name","information-circle-outline"]],null,null,null,b.H,b.k)),t.pb(9,49152,null,0,c.A,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"","dark"),l(n,9,0,"information-circle-outline")}),(function(l,n){l(n,4,0,"https://devfest2018.gdgnantes.com/"+n.context.$implicit.photoUrl),l(n,7,0,n.context.$implicit.name)}))}function h(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,5,"ion-content",[["color","dark"]],null,null,null,b.D,b.g)),t.pb(1,49152,null,0,c.s,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.qb(2,0,null,0,3,"ion-list",[["class"," py-no"]],null,null,null,b.L,b.o)),t.pb(3,49152,null,0,c.M,[t.h,t.k,t.x],null,null),(l()(),t.fb(16777216,null,0,1,null,f)),t.pb(5,278528,null,0,s.i,[t.L,t.I,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.qb(6,0,null,null,6,"ion-footer",[],null,null,null,b.G,b.j)),t.pb(7,49152,null,0,c.x,[t.h,t.k,t.x],null,null),(l()(),t.qb(8,0,null,0,4,"ion-toolbar",[["class","ion-text-center"],["color","primary"]],null,null,null,b.T,b.w)),t.pb(9,49152,null,0,c.Ab,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.qb(10,0,null,0,2,"ion-title",[],null,null,null,b.S,b.v)),t.pb(11,49152,null,0,c.yb,[t.h,t.k,t.x],null,null),(l()(),t.Gb(-1,0,["Sessions"]))],(function(l,n){var u=n.component;l(n,1,0,"dark"),l(n,5,0,u.presentateurTab),l(n,9,0,"primary")}),null)}function m(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,1,"app-presentateurs",[],null,null,null,h,d)),t.pb(1,114688,null,0,e,[o.a,p.m],null,null)],(function(l,n){l(n,1,0)}),null)}var k=t.mb("app-presentateurs",e,m,{},{},[]),g=u("s7LF");u.d(n,"PresentateursPageModuleNgFactory",(function(){return x}));var x=t.nb(i,[],(function(l){return t.yb([t.zb(512,t.j,t.Y,[[8,[a.a,k]],[3,t.j],t.v]),t.zb(4608,s.l,s.k,[t.s,[2,s.s]]),t.zb(4608,g.g,g.g,[]),t.zb(4608,c.a,c.a,[t.x,t.g]),t.zb(4608,c.Eb,c.Eb,[c.a,t.j,t.p]),t.zb(4608,c.Hb,c.Hb,[c.a,t.j,t.p]),t.zb(1073742336,s.c,s.c,[]),t.zb(1073742336,g.f,g.f,[]),t.zb(1073742336,g.a,g.a,[]),t.zb(1073742336,c.Cb,c.Cb,[]),t.zb(1073742336,p.n,p.n,[[2,p.s],[2,p.m]]),t.zb(1073742336,i,i,[]),t.zb(1024,p.k,(function(){return[[{path:"",component:e},{path:":id",loadChildren:r}]]}),[])])}))}}]);