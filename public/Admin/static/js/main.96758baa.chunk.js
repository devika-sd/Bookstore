(this["webpackJsonpdatta-able-rv18.0.4"]=this["webpackJsonpdatta-able-rv18.0.4"]||[]).push([[3],{10:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"h",(function(){return l}));var o="COLLAPSE_MENU",a="COLLAPSE_TOGGLE",r="FULL_SCREEN",c="FULL_SCREEN_EXIT",u="CHANGE_LAYOUT",i="NAV_CONTENT_LEAVE",s="NAV_COLLAPSE_LEAVE",l="SEARCH"},11:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"g",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"f",(function(){return d})),n.d(t,"l",(function(){return f})),n.d(t,"k",(function(){return h})),n.d(t,"n",(function(){return p})),n.d(t,"j",(function(){return g})),n.d(t,"i",(function(){return O})),n.d(t,"m",(function(){return b})),n.d(t,"h",(function(){return m}));var o=n(1),a=n(9),r="FETCH_USERS",c="UPDATE_USER",u="LOGIN_USER",i="ADD_USER",s="ERROR_USER",l="FILTER_USER",d="RESET_USER",f=function(e,t,n){console.log("***************"+e,t,n);var o="email[regex]="+e+"&page="+t+"&limit="+n;return console.log("*************"+o+"************"),function(e){fetch("http://localhost:8080/api/v1/users/?sort=name&"+o,{headers:Object(a.a)()}).then((function(e){return e.json()})).then((function(t){console.log(t),e({type:l,payload:t})}))}},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return console.log("***************"+e),function(n){fetch("http://localhost:8080/api/v1/users?sort=name&"+e,{headers:Object(a.a)()}).then((function(e){return e.json()})).then((function(e){console.log(e.total);var a=Object(o.a)(Object(o.a)({},e),{},{message:t});n({type:r,payload:a})}))}},p=function(e,t){return function(n){fetch("http://localhost:8080/api/v1/users/"+e,{method:"PUT",headers:Object(a.a)(),body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log("*************"+e.success),!0===e.success?n({type:c,payload:e}):(console.log("*************"+e.success),n({type:s,payload:e}))}))}},g=function(e,t){return function(n){fetch("http://localhost:8080/api/v1/users/"+e,{method:"DELETE",headers:Object(a.a)()}).then((function(e){return e.json()})).then((function(e){console.log(e),n(h(t,e.message))}))}},O=function(e,t,n){return function(o){fetch("http://localhost:8080/api/v1/users/block/"+e+"&"+!t,{method:"PATCH",headers:Object(a.a)()}).then((function(e){return e.json()})).then((function(e){o(h(n,e.message))}))}},b=function(e){return function(t){return fetch("http://localhost:8080/api/v1/users/login",{headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.success?(console.log("token"+e.token),localStorage.setItem("token",e.token),t({type:u,payload:e})):t({type:s,payload:e})}))}},m=function(e){return function(t){fetch("http://localhost:8080/api/v1/users/",{method:"POST",headers:Object(a.a)(),body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log(e),e.success?t(function(e){return{type:i,payload:e}}(e)):t({type:s,payload:e})}))}}},12:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"f",(function(){return f}));var o=n(9),a="FETCH_ORDERS",r="UPDATE_ORDERS",c="ERROR_ORDERS",u="RESET_ORDERS",i="FETCH_STATUS_COUNT",s="http://localhost:8080/api/v1/orders/",l=function(e){return console.log("*******ORDER********"+e),function(t){fetch(s+"?sort=-orderDate&"+e,{headers:Object(o.a)()}).then((function(e){return e.json()})).then((function(e){console.log(e),console.log(e.total),t({type:a,payload:e})}))}},d=function(e,t){return function(n){fetch(s+e,{method:"PATCH",headers:Object(o.a)(),body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log("*************"+e.success),!0===e.success?n({type:r,payload:e}):(console.log("*************"+e.success),n({type:c,payload:e.message}))}))}},f=function(){return function(e){fetch(s+"piecount",{headers:Object(o.a)()}).then((function(e){return e.json()})).then((function(t){console.log("********FETCH_STATUS_COUNT******"),console.log(t.data),e({type:i,payload:t.data})}))}}},21:function(e,t,n){"use strict";t.a={defaultPath:"/login",basename:"admin",layout:"vertical",preLayout:null,collapseMenu:!1,layoutType:"menu-light",navIconColor:!1,headerBackColor:"header-default",navBackColor:"navbar-default",navBrandColor:"brand-default",navBackImage:!1,rtlLayout:!1,navFixedLayout:!0,headerFixedLayout:!1,boxLayout:!1,navDropdownIcon:"style1",navListIcon:"style1",navActiveListColor:"active-default",navListTitleColor:"title-default",navListTitleHide:!1,configBlock:!1,layout6Background:"linear-gradient(to right, #A445B2 0%, #D41872 52%, #FF0066 100%)",layout6BackSize:""}},26:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r}));var o="USER_LOGIN",a="RESET_AUTH",r=function(e){return console.log("In fech workout action *******************************"),function(t){return fetch("http://localhost:8080/api/v1/users/login",{headers:{"content-type":"application/json"},method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){var n;console.log(e),e.success&&(console.log("In auth servicee ......"),localStorage.setItem("token",e.token),t((n=e.success,console.log("In auth action: ",n),n||(console.log("Removing token ****************** "),localStorage.removeItem("token")),{type:o,payload:n})))}))}}},27:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(){return a.a.createElement("div",{className:"loader-bg"},a.a.createElement("div",{className:"loader-track"},a.a.createElement("div",{className:"loader-fill"})))}},32:function(e,t,n){"use strict";t.a=function(e){return e.children}},44:function(e,t,n){e.exports=n(55)},55:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(34),c=n.n(r),u=n(33),i=n(23),s=n(17),l=n(18),d=n(20),f=n(19),h=n(3),p=n(41),g=n.n(p),O=(n(52),n(27)),b=n(32),m=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),n}(a.a.Component),y=Object(h.i)(m),j=[{path:"/login",exact:!0,name:"Signin 1",component:a.a.lazy((function(){return Promise.all([n.e(1),n.e(10),n.e(9)]).then(n.bind(null,353))}))}],v=g()({loader:function(){return Promise.all([n.e(1),n.e(8),n.e(7)]).then(n.bind(null,361))},loading:O.a}),E=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=j.map((function(e,t){return e.component?a.a.createElement(h.b,{key:t,path:e.path,exact:e.exact,name:e.name,render:function(t){return a.a.createElement(e.component,t)}}):null}));return a.a.createElement(b.a,null,a.a.createElement(y,null,a.a.createElement(o.Suspense,{fallback:a.a.createElement(O.a,null)},a.a.createElement(h.d,null,e,a.a.createElement(h.b,{path:"/",component:v})))))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=n(22),T=n(1),R=n(10),k=n(21),C=Object(T.a)(Object(T.a)({isOpen:[],isTrigger:[]},k.a),{},{isFullScreen:!1,searchword:""}),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,n=[],o=[];switch(t.type){case R.h:return Object(T.a)(Object(T.a)({},e),{},{searchword:t.payload});case R.b:return Object(T.a)(Object(T.a)({},e),{},{collapseMenu:!e.collapseMenu});case R.c:if("sub"===t.menu.type){o=e.isOpen;var a=(n=e.isTrigger).indexOf(t.menu.id);a>-1&&(o=o.filter((function(e){return e!==t.menu.id})),n=n.filter((function(e){return e!==t.menu.id}))),-1===a&&(o=[].concat(Object(S.a)(o),[t.menu.id]),n=[].concat(Object(S.a)(n),[t.menu.id]))}else{o=e.isOpen;var r=e.isTrigger.indexOf(t.menu.id);n=-1===r?[t.menu.id]:[],o=-1===r?[t.menu.id]:[]}return Object(T.a)(Object(T.a)({},e),{},{isOpen:o,isTrigger:n});case R.g:return Object(T.a)(Object(T.a)({},e),{},{isOpen:o,isTrigger:n});case R.f:if("sub"===t.menu.type){o=e.isOpen;var c=(n=e.isTrigger).indexOf(t.menu.id);return c>-1&&(o=o.filter((function(e){return e!==t.menu.id})),n=n.filter((function(e){return e!==t.menu.id}))),Object(T.a)(Object(T.a)({},e),{},{isOpen:o,isTrigger:n})}return Object(T.a)({},e);case R.d:return Object(T.a)(Object(T.a)({},e),{},{isFullScreen:!e.isFullScreen});case R.e:return Object(T.a)(Object(T.a)({},e),{},{isFullScreen:!1});case R.a:return Object(T.a)(Object(T.a)({},e),{},{layout:t.layout});default:return e}},_=(n(54),n(14)),A=n(11),U={users:[{email:"",password:"",name:"",photo:"",phone:"",addresses:[]}],currentUser:"",totaluser:"",message:""},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(console.log("Action recieved at reducer***  ",t),t.type){case A.c:return Object(T.a)(Object(T.a)({},e),{},{message:t.payload.message,users:t.payload.data,totaluser:t.payload.total});case A.g:return Object(T.a)(Object(T.a)({},e),{},{users:t.payload.data,message:t.payload.message});case A.e:return Object(T.a)(Object(T.a)({},e),{},{currentUser:t.payload.userid,message:t.payload.message});case A.b:case A.a:return Object(T.a)(Object(T.a)({},e),{},{message:t.payload.message});case A.d:return Object(T.a)(Object(T.a)({},e),{},{users:t.payload.data,totaluser:t.payload.total});case A.f:return U;default:return e}},N=n(26),I={authenticated:!1},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(console.log("Action recieved at reducer***  ",t),t.type){case N.b:return{authenticated:t.payload};case N.a:return I;default:return e}},F=n(12),P={orders:[],orderStatusCount:[{New:0},{Packed:0},{Shipped:0},{Completed:0},{Cancelled:0},{Delayed:0}],totalorders:"",message:""},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(console.log("Action recieved at reducer***  ",t),t.type){case F.b:return Object(T.a)(Object(T.a)({},e),{},{orders:t.payload.data,totalorders:t.payload.total});case F.e:case F.a:return Object(T.a)(Object(T.a)({},e),{},{message:t.payload.message});case F.c:return Object(T.a)(Object(T.a)({},e),{},{orderStatusCount:t.payload});case F.d:return P;default:return e}},B=n(42),H=Object(_.a)((function(e){return function(t){return function(n){console.log("dispatching",n);var o=t(n);return console.log("next state",e.getState()),o}}}),B.a),J=Object(_.d)(Object(_.c)({userReducer:w,authReducer:D,orderReducer:x,reducer:L}),H);window.store=J;var G=a.a.createElement(u.a,{store:J},a.a.createElement(i.a,{basename:k.a.basename},a.a.createElement(E,null)));c.a.render(G,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){"use strict";t.a=function(){var e=localStorage.getItem("token");return e?{Authorization:"Bearer "+e,"content-type":"application/json"}:{"content-type":"application/json"}}}},[[44,4,6]]]);
//# sourceMappingURL=main.96758baa.chunk.js.map