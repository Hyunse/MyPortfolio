webpackJsonp([0],{"991W":function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("7+uW"),s=(e("991W"),{render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("modal",{attrs:{name:"project-modal",transition:"nice-modal-fade","min-width":300,"min-height":600,"max-height":800,width:"70%",height:"auto",scrollable:!0,delay:400,adaptive:!0}},[e("div",{staticClass:"project-modal-content"},[e("div",{staticClass:"modal-header"},[e("p",[t._v(t._s(t.modalData.title))])]),t._v(" "),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"modal-image"},[e("carousel",{attrs:{"per-page":1}},t._l(t.modalData.images,function(t,a){return e("slide",{key:a,staticClass:"modal-slide"},[e("img",{attrs:{src:t}})])}),1)],1),t._v(" "),e("div",{staticClass:"modal-content"},[e("p",{staticStyle:{"font-weight":"bold"}},[t._v("Info")]),t._v(" "),e("p",{staticClass:"project-info"},[t._v(t._s(t.modalData.info))]),t._v(" "),e("p",{staticStyle:{"font-weight":"bold"}},[t._v("Technologies")]),t._v(" "),e("p",[t._v(t._s(t.modalData.tech))])])])])])},staticRenderFns:[]});var n=e("VU/8")({name:"infoModal",props:["modalData"],data:function(){return{modal:{title:"",info:""}}},methods:{}},s,!1,function(t){e("xgQJ")},null,null).exports,o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{attrs:{href:"#none"},on:{click:function(a){return t.openModal(t.project)}}},[t._v(t._s(t.project.name))]),t._v(" "),e("div",[t._m(0),t._v(" "),e("p",{staticClass:"project-info"},[t._v(t._s(t.project.time))])]),t._v(" "),e("div",[t._m(1),t._v(" "),e("p",{staticClass:"project-info"},[t._v(t._s(t.project.company))])]),t._v(" "),e("div",[t._m(2),t._v(" "),e("p",{staticClass:"project-info"},[t._v(t._s(t.project.position)+" Developer")])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"project-icon"},[a("i",{staticClass:"far fa-clock"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"project-icon"},[a("i",{staticClass:"far fa-building"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"project-icon"},[a("i",{staticClass:"fas fa-child"})])}]};var r=e("VU/8")({name:"Project",props:["project","openModal"],data:function(){return{}}},o,!1,function(t){e("ZgmZ")},null,null).exports,c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("h3",[this._v("Contact")]),this._v(" "),a("ul",[a("li",[a("i",{staticClass:"far fa-envelope"}),this._v(" "),a("span",{staticClass:"contact-content"},[this._v("anzmf12@naver.com")])]),this._v(" "),a("li",[a("i",{staticClass:"fab fa-github"}),this._v(" "),a("a",{attrs:{href:"https://github.com/Hyunse"}},[a("span",{staticClass:"contact-content"},[this._v("https://github.com/Hyunse")])])])])])}]};var l=e("VU/8")({name:"Contact",data:function(){return{}}},c,!1,function(t){e("UYBy")},null,null).exports,m=e("/kJX"),p=e.n(m);const u=[{name:"Remote AR Homepage",company:"Virnect",time:"2017.06 ~ 2017.12",position:"Web Front-End",info:"Remote AR Homepage has 3 part pages. First of all, main page is introducing RemoteAR application.\n           And there is RemoateAR service page. Also, it has analytics pages to give usage information for \n           RemoteAR customers.",images:["./static/images/remotear/remotear_1.png","./static/images/remotear/remotear_2.png","./static/images/remotear/remotear_3.png","./static/images/remotear/remotear_4.png"],tech:"Vue.js, Javascript, ES6, Responsive Web, C3 Chart, Node.js Express, Azure."},{name:"Software Center Busan Univ",company:"Virnect",time:"2017.10 ~ 2017.11",position:"Web Front-End",info:"It's a website for university students and teachers to introduce Busan University's software center\n          and share resources, such as pictures and video",images:["./static/images/busan/busan_1.jpg","./static/images/busan/busan_2.jpg","./static/images/busan/busan_3.jpg","./static/images/busan/busan_4.jpg"],tech:"Jquery, Javascript, Node.js Express, GoogleMap API, Youtube API, Azure."},{name:"See Real Homepage",company:"Virnect",time:"2017.04 ~ 2017.05",position:"Web Front-End",info:"It's a single page web to inroduce SeeReal application.",images:["./static/images/seereal/seereal_1.png"],tech:"Spring Framework, Java, Mybatis, Jquery, Responsive Web, Ms-sql, Azure."},{name:"Processed Meat,Red Meat Calculation Program APP",company:"ABC Solutuon",time:"2016.12 ~ 2016.12",position:"Full Stack",info:"It's a hybrid web app to calculate calorie in a processed meat and red meat user eat. \n    I made a registration page in which user can register a food they eat,\n    a board page in which user can check calorie in each time period,\n    a graph page to use JqPlot Chart.",images:["./static/images/cal/cal_1.jpg","./static/images/cal/cal_2.jpg","./static/images/cal/cal_3.jpg","./static/images/cal/cal_4.jpg"],tech:"Spring Framework, Java, Mybatis, Jquery, JqPlot Chart, Altibase."},{name:"Kyongnam Bank Internet Banking",company:"ABC Solutuon",time:"2016.02 ~ 2016.12",position:"Full Stack",info:"It's internet banking system. I made foreign exchange part like Foreign Currency Remittance, \n    Direct Remittance Service, Foreign Currency Time Deposit, Exchange rate inquiry and so on.",images:["./static/images/knbank/k_1.jpg","./static/images/knbank/k_2.jpg","./static/images/knbank/k_3.jpg","./static/images/knbank/k_4.jpg"],tech:"Java, Jquery, Oracle."},{name:"Nutrient Calculation Program WEB",company:"ABC Solutuon",time:"2015.12 ~ 2016.01",position:"Full Stack",info:"Nutritional contents program is a tool calculating nutritional contents in food.\n    I did data migration, made a nutritional contents program, made its admin pages to use WebSquare.",images:["./static/images/eat/eat_1.jpg","./static/images/eat/eat_2.jpg","./static/images/eat/eat_3.jpg","./static/images/eat/eat_4.jpg"],tech:"Spring Framework, Java, Mybatis, Jquery, WebSquare5, Altibase."},{name:"Bosch Master Tool",company:"ABC Solutuon",time:"2015.06 ~ 2015.12",position:"Full Stack",info:"Master Tool is a web application for a field worker and officer in Bosch.\n          It was my first web project in my career. I made a analytics page using c3.js,\n          batch program to send Email on specific day and time, \n          validation check form and uploaded Excel, etc.",images:["./static/images/bosch/mastertool_1.png","./static/images/bosch/mastertool_2.png","./static/images/bosch/mastertool_3.png"],tech:"Spring Data JPA, Hibernate, Jquery, DHtmlX Grid, C3 Chart, Ms-sql, Bootstrap."}];var d={name:"App",data:function(){return{ready:!1,modal:{title:"",info:"",images:[],tech:""},projects:u}},moounted:function(){},methods:{show:function(t){this.modal.title=t.name,this.modal.info=t.info,this.modal.images=t.images,this.modal.tech=t.tech,this.$modal.show("project-modal")}},components:{Carousel:m.Carousel,Slide:m.Slide,infoModal:n,Project:r,Contact:l}},g={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"app-container"},[e("div",{staticClass:"app-content"},[e("div",{staticClass:"app-content-vertically-center"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"app-lists"},[e("div",{staticClass:"app-list"},[e("h3",[t._v("Projects")]),t._v(" "),t._l(t.projects,function(a,i){return e("ul",{key:i},[e("Project",{attrs:{project:a,openModal:t.show}})],1)})],2)]),t._v(" "),e("div",{staticClass:"app-lists"},[e("div",{staticClass:"app-list"},[e("Contact")],1)])])])]),t._v(" "),e("infoModal",{attrs:{modalData:t.modal}})],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"intro"},[a("div",[a("img",{staticStyle:{width:"30%",height:"30%"},attrs:{src:e("O2OG"),alt:""}})]),this._v(" "),a("span",{staticClass:"tagline"},[this._v("Web Developer")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"my-bio"},[a("p",[this._v("\n            Hello, my name is Kim Hyunse. I'm a Web Developer living in Toronto, Canada.\n            I'm looking for a job as Web Developer. I love to work with people having a passion and enjoy learning something new.\n            I can deal with both front-end and back-end technologies. I know how to create your website\n            using the latest technologies available.\n            I'm inquisitive about web programming.\n          ")])])}]};var h=e("VU/8")(d,g,!1,function(t){e("hJ3I")},null,null).exports,v=e("/ocq");i.a.use(v.a);var f=new v.a({routes:[{path:"/",name:"HelloWorld"}]}),_=e("rifk"),b=e.n(_);i.a.config.productionTip=!1,i.a.use(p.a),i.a.use(b.a,{dynamic:!0}),new i.a({el:"#app",router:f,components:{App:h},template:"<App/>"})},O2OG:function(t,a,e){t.exports=e.p+"static/img/me.9780870.jpg"},UYBy:function(t,a){},ZgmZ:function(t,a){},hJ3I:function(t,a){},xgQJ:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.96042162103c6f0dd96a.js.map