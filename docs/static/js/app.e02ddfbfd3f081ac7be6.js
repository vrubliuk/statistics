webpackJsonp([1],{"+XRe":function(t,e,n){t.exports=n.p+"static/img/10.02e2f0c.jpg"},"0Dlm":function(t,e,n){t.exports=n.p+"static/img/12.b9a9031.jpg"},"0KfL":function(t,e){},"1oiw":function(t,e,n){t.exports=n.p+"static/img/4.ac9dc8d.jpg"},"6XGT":function(t,e,n){t.exports=n.p+"static/img/7.10c8c21.jpg"},"6tUv":function(t,e){},BLAR:function(t,e){},IDOM:function(t,e){},LTqm:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("Dd8w"),r=n.n(i),s=(n("e0XP"),n("7t+N")),c=n.n(s),o=n("U7BN"),u=n.n(o),l=n("X6NW"),_=n.n(l),p=n("ZzJE"),d=n.n(p),m=n("1oiw"),f=n.n(m),h=n("mdRj"),b=n.n(h),v=n("l4kz"),g=n.n(v),C=n("6XGT"),x=n.n(C),w=n("Y7JV"),T=n.n(w),k=n("PyhS"),N=n.n(k),S=n("+XRe"),j=n.n(S),R=n("xWwM"),P=n.n(R),V=n("0Dlm"),y=n.n(V),E=n("pExe"),z=n.n(E),U=n("mm10"),M=n.n(U),$=n("Tk64"),D=n.n($),O={1:u.a,2:_.a,3:d.a,4:f.a,5:b.a,6:g.a,7:x.a,8:T.a,9:N.a,10:j.a,11:P.a,12:y.a,13:z.a,14:M.a,15:D.a},W=n("NYxO"),A=n("g/Ny"),L=n.n(A),X={data:function(){return{preloaderImage:L.a}}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Preloader"},[e("img",{attrs:{src:this.preloaderImage,alt:"Loading..."}})])},staticRenderFns:[]};var I=n("VU/8")(X,F,!1,function(t){n("jBCk")},null,null).exports,B={computed:r()({},Object(W.b)(["currentTab","tabs"])),methods:r()({},Object(W.c)(["switchTab"]))},Q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Navigation"},[n("div",{staticClass:"Navigation__triangle Navigation__triangle_triangle-top"}),t._v(" "),t._l(t.tabs,function(e){return n("div",{key:e.name,staticClass:"Navigation__button",class:{Navigation__button_active:e.name===t.currentTab},on:{click:function(n){t.switchTab(e.name)}}},[n("i",{class:e.icon,attrs:{"aria-hidden":"true"}})])}),t._v(" "),n("div",{staticClass:"Navigation__triangle Navigation__triangle_triangle-bottom"})],2)},staticRenderFns:[]};var J=n("VU/8")(B,Q,!1,function(t){n("6tUv")},null,null).exports,Y=(n("0KfL"),{computed:r()({},Object(W.b)(["counterValue","counterMaximized","animationType","animationDuration","animationRunning","currentTab"])),methods:r()({},Object(W.c)(["increaseCounter","decreaseCounter","runAnimation","stopAnimation","resizeCounter"]),{handleClick:function(){var t=this;this.animationRunning||(this.counterValue<999?(this.increaseCounter(),this.runAnimation(),setTimeout(function(){t.stopAnimation()},this.animationDuration)):alert("You've reached the limit!"))}}),mounted:function(){var t=this;c()(document).keydown(function(e){"counter"===t.currentTab&&(38===parseInt(e.which,10)?t.increaseCounter():40===parseInt(e.which,10)&&t.decreaseCounter())})}}),Z={render:function(){var t,e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"Counter",class:(t={Counter_maximized:e.counterMaximized},t["animated "+e.animationType]=e.animationRunning,t),style:{"animation-duration":e.animationDuration+"ms"}},[a("div",{staticClass:"Counter__number",on:{click:e.handleClick}},[e._v(e._s(e.counterValue))]),e._v(" "),a("div",{staticClass:"Counter__resize-button",on:{click:e.resizeCounter}},[a("i",{class:e.counterMaximized?"fa fa-compress":"fa fa-expand",attrs:{"aria-hidden":"true"}})])])},staticRenderFns:[]};var q=n("VU/8")(Y,Z,!1,function(t){n("BLAR")},null,null).exports,G={data:function(){return{}},computed:r()({},Object(W.b)(["counterValue"])),methods:{switchTab:function(t){this.currentTab=t}},components:{}},H={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Send"},[n("table",{staticClass:"Send__table"},[n("tr",{staticClass:"Send__table__main"},[n("td",[t._v("Released:")]),t._v(" "),n("td",[t._v(t._s(t.counterValue))])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"Send__table__main"},[e("td",[this._v("Shared inbox:")]),this._v(" "),e("td",[e("label",{staticClass:"Send__checkbox"},[e("input",{staticClass:"Send__checkbox__input",attrs:{type:"checkbox"}}),this._v(" "),e("span",{staticClass:"Send__checkbox__slider"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"Send__table__main"},[e("td",[this._v("Audit:")]),this._v(" "),e("td",[e("label",{staticClass:"Send__checkbox"},[e("input",{staticClass:"Send__checkbox__input",attrs:{type:"checkbox"}}),this._v(" "),e("span",{staticClass:"Send__checkbox__slider"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"Send__table__main"},[e("td",[this._v("Report:")]),this._v(" "),e("td",[e("label",{staticClass:"Send__checkbox"},[e("input",{staticClass:"Send__checkbox__input",attrs:{type:"checkbox"}}),this._v(" "),e("span",{staticClass:"Send__checkbox__slider"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"Send__table__main"},[e("td",[this._v("Short-term hold:")]),this._v(" "),e("td",[e("label",{staticClass:"Send__checkbox"},[e("input",{staticClass:"Send__checkbox__input",attrs:{type:"checkbox"}}),this._v(" "),e("span",{staticClass:"Send__checkbox__slider"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticClass:"Send__table__footer"},[e("td",{attrs:{colspan:"2"}},[e("button",{staticClass:"Send__button"},[this._v("Create email")])])])}]};var K=n("VU/8")(G,H,!1,function(t){n("O0uQ")},null,null).exports,tt={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"Preferences__Counter"})},staticRenderFns:[]},et={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Send__Subject"},[e("textarea",{attrs:{name:"",id:"",cols:"30",rows:"10"}},[this._v("    ffgfg\n  ")])])}]};var nt={data:function(){return{currentTab:"Counter",tabs:["Counter","Wallpaper","User","Recipients"]}},methods:{switchTab:function(t){this.currentTab=t}},components:{Preferences__Counter:n("VU/8")({},tt,!1,null,null,null).exports,Preferences__Wallpaper:n("VU/8")({},et,!1,function(t){n("IDOM")},null,null).exports,Preferences__User:n("VU/8")(null,null,!1,null,null,null).exports,Preferences__Recipients:n("VU/8")(null,null,!1,null,null,null).exports}},at={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Preferences"},[n("table",{staticClass:"Preferences__table"},[n("tr",[n("td",{staticClass:"Preferences__nav"},t._l(t.tabs,function(e){return n("div",{key:e,staticClass:"Preferences__tab",class:{"Preferences__tab-active":e===t.currentTab}},[n("div",{on:{click:function(n){t.switchTab(e)}}},[t._v(t._s(e))])])})),t._v(" "),n("td",{staticClass:"Preferences__content"},[n("Preferences__"+t.currentTab,{tag:"component"})],1)])])])},staticRenderFns:[]};var it=n("VU/8")(nt,at,!1,function(t){n("LTqm")},null,null).exports,rt={data:function(){return{}},computed:r()({},Object(W.b)(["showPreloader","currentWallpaperNumber","currentTab"]),{wallpaper:function(){return{"background-image":"url("+O[this.currentWallpaperNumber]+")"}}}),methods:r()({},Object(W.c)(["hidePreloader"])),components:{Preloader:I,Navigation:J,Counter:q,Send:K,Preferences:it},mounted:function(){var t=this;window.addEventListener("load",function(){setTimeout(function(){c()(".Preloader").fadeOut("slow",function(){t.hidePreloader()})},1e3)})}},st={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:this.wallpaper,attrs:{id:"App"}},[e("navigation"),this._v(" "),e(this.currentTab,{tag:"component"})],1)},staticRenderFns:[]};var ct=n("VU/8")(rt,st,!1,function(t){n("eumZ")},null,null).exports,ot={state:{preloader:!0},getters:{showPreloader:function(t){return t.preloader}},mutations:{hidePreloader:function(t){t.preloader=!1}}},ut={state:{wallpaperQuantity:15,wallpaperNumber:8},getters:{currentWallpaperNumber:function(t){return t.wallpaperNumber}},mutations:{changeWallpaperPrevious:function(t){1===t.wallpaperNumber?t.wallpaperNumber=t.wallpaperQuantity:t.wallpaperNumber--},changeWallpaperNext:function(t){t.wallpaperNumber===t.wallpaperQuantity?t.wallpaperNumber=1:t.wallpaperNumber++},changeWallpaperRandom:function(t){t.wallpaperNumber=Math.floor(Math.random()*t.wallpaperQuantity+1)}}},lt={state:{tab:"send",tabData:[{name:"counter",icon:"fa fa-star"},{name:"send",icon:"fa fa-paper-plane"},{name:"preferences",icon:"fa fa-cog"}]},getters:{currentTab:function(t){return t.tab},tabs:function(t){return t.tabData}},mutations:{switchTab:function(t,e){t.tab=e}}},_t={state:{counterValue:0,counterMaximized:!1,animationType:"flipInX",animationDuration:700,animationRunning:!1},getters:{counterValue:function(t){return t.counterValue},counterMaximized:function(t){return t.counterMaximized},animationType:function(t){return t.animationType},animationDuration:function(t){return t.animationDuration},animationRunning:function(t){return t.animationRunning}},mutations:{increaseCounter:function(t){t.counterValue<999&&t.counterValue++},decreaseCounter:function(t){t.counterValue>0&&t.counterValue--},resetCounter:function(t){t.counterValue=0},setCounter:function(t,e){t.counterValue=""===e?0:e},runAnimation:function(t){t.animationRunning=!0},stopAnimation:function(t){t.animationRunning=!1},resizeCounter:function(t){t.counterMaximized=!t.counterMaximized}}},pt={state:{userName:"Name",userSurname:"Surname",userTeamLead:!1,userSignature:""},getters:{signature:function(t){return t.userSignature}},mutations:{switchTab:function(t,e){t.tab=e}}},dt={state:{emailReceivers:[]},getters:{emailDate:function(){}},mutations:{}};a.a.use(W.a);var mt=new W.a.Store({modules:{preloader:ot,wallpaper:ut,tab:lt,counter:_t,user:pt,email:dt}});a.a.config.productionTip=!1,new a.a({store:mt,render:function(t){return t(ct)}}).$mount("#App")},O0uQ:function(t,e){},PyhS:function(t,e,n){t.exports=n.p+"static/img/9.71f6950.jpg"},Tk64:function(t,e,n){t.exports=n.p+"static/img/15.8bb5cb7.jpg"},U7BN:function(t,e,n){t.exports=n.p+"static/img/1.96959a7.jpg"},X6NW:function(t,e,n){t.exports=n.p+"static/img/2.7fa7321.jpg"},Y7JV:function(t,e,n){t.exports=n.p+"static/img/8.fe5925f.jpg"},ZzJE:function(t,e,n){t.exports=n.p+"static/img/3.60e41d3.jpg"},e0XP:function(t,e){},eumZ:function(t,e){},"g/Ny":function(t,e,n){t.exports=n.p+"static/img/preloader.a8c98ef.gif"},jBCk:function(t,e){},l4kz:function(t,e,n){t.exports=n.p+"static/img/6.8e73cd1.jpg"},mdRj:function(t,e,n){t.exports=n.p+"static/img/5.f3e8e33.jpg"},mm10:function(t,e,n){t.exports=n.p+"static/img/14.633fb02.jpg"},pExe:function(t,e,n){t.exports=n.p+"static/img/13.16a7e04.jpg"},xWwM:function(t,e,n){t.exports=n.p+"static/img/11.baf991e.jpg"}},["NHnr"]);
//# sourceMappingURL=app.e02ddfbfd3f081ac7be6.js.map