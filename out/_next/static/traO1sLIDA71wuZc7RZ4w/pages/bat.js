(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{238:function(e,n,t){__NEXT_REGISTER_PAGE("/bat",function(){return e.exports=t(239),{page:e.exports.default}})},239:function(e,n,t){"use strict";t.r(n);var r=t(30),o=t.n(r),s=t(0),u=t.n(s),a=t(21),i=t(47),c=t.n(i);function l(e,n,t,r,o,s,u){try{var a=e[s](u),i=a.value}catch(e){return void t(e)}a.done?n(i):Promise.resolve(i).then(r,o)}var f=function(e){return u.a.createElement(a.a,null,u.a.createElement("h1",null,e.show.name),u.a.createElement("p",null,e.show&&e.show.summary.replace(/<[\/]?p>/g,"")),u.a.createElement("img",{src:e.show.image.medium}))};f.getInitialProps=function(){var e,n=(e=o.a.mark(function e(n){var t,r,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.id,e.next=3,c()("https://api.tvmaze.com/shows/".concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:return s=e.sent,console.log("Fetched show: ".concat(s.name)),e.abrupt("return",{show:s});case 9:case"end":return e.stop()}},e,this)}),function(){var n=this,t=arguments;return new Promise(function(r,o){var s=e.apply(n,t);function u(e){l(s,r,o,u,a,"next",e)}function a(e){l(s,r,o,u,a,"throw",e)}u(void 0)})});return function(e){return n.apply(this,arguments)}}(),n.default=f},30:function(e,n,t){e.exports=t(78)},45:function(e,n,t){"use strict";t.r(n),n.default=function(e,n){return n=n||{},new Promise(function(t,r){var o=new XMLHttpRequest;for(var s in o.open(n.method||"get",e,!0),n.headers)o.setRequestHeader(s,n.headers[s]);function u(){var e,n=[],t=[],r={};return o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(o,s,u){n.push(s=s.toLowerCase()),t.push([s,u]),r[s]=(e=r[s])?e+","+u:u}),{ok:2==(o.status/100|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:u,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return n},entries:function(){return t},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}o.withCredentials="include"==n.credentials,o.onload=function(){t(u())},o.onerror=r,o.send(n.body||null)})}},47:function(e,n,t){e.exports=window.fetch||(window.fetch=t(45).default||t(45))}},[[238,1,0]]]);