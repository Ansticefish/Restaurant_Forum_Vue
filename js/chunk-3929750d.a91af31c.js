(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3929750d"],{"22ab":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("NavTabs"),r("h1",{staticClass:"mt-5"},[e._v(" 美食達人 ")]),r("hr"),r("div",{staticClass:"row text-center mt-5"},e._l(e.users,(function(e){return r("UsersCard",{key:e.id,attrs:{"initial-user":e}})})),1)],1)},n=[],a=r("1da1"),o=(r("96cf"),r("8bb1")),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-3"},[r("router-link",{attrs:{to:{name:"user",params:{id:e.user.id}}}},[r("img",{attrs:{src:e._f("emptyImage")(e.user.image),width:"140px",height:"140px"}})]),r("h2",[e._v(e._s(e.user.name))]),r("span",{staticClass:"badge badge-secondary"},[e._v("追蹤人數："+e._s(e.user.FollowerCount))]),r("p",{staticClass:"mt-3"},[e.user.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){return e.removeFollow(e.user.id)}}},[e._v(" 取消追蹤 ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return e.addFollow(e.user.id)}}},[e._v(" 追蹤 ")])])],1)},i=[],u=r("5530"),l=(r("d9e2"),r("2708")),d=r("4cce"),p=r("2fa3"),f={props:{initialUser:{type:Object,required:!0}},data:function(){return{user:this.initialUser}},methods:{addFollow:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d["a"].followUser(e);case 3:if(s=r.sent,n=s.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:t.user=Object(u["a"])(Object(u["a"])({},t.user),{},{isFollowed:!0,FollowerCount:t.user.FollowerCount+1}),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log("error",r.t0),p["a"].fire({icon:"error",title:"無法追蹤該帳號，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},removeFollow:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d["a"].unfollowUser(e);case 3:if(s=r.sent,n=s.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:t.user=Object(u["a"])(Object(u["a"])({},t.user),{},{isFollowed:!1,FollowerCount:t.user.FollowerCount-1}),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log("error",r.t0),p["a"].fire({icon:"error",title:"無法取消追蹤該帳號，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()}},mixins:[l["a"]]},w=f,b=(r("45a0"),r("2877")),m=Object(b["a"])(w,c,i,!1,null,"1c571adc",null),h=m.exports,v={name:"UsersTop",components:{NavTabs:o["a"],UsersCard:h},data:function(){return{users:[]}},methods:{fetchUsers:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d["a"].getUsersTop();case 3:r=t.sent,s=r.data,e.users=s.users,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log("error",t.t0),p["a"].fire({icon:"error",title:"無法取得使用者資料，請稍後再試"});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},created:function(){this.fetchUsers()}},g=v,x=Object(b["a"])(g,s,n,!1,null,null,null);t["default"]=x.exports},"45a0":function(e,t,r){"use strict";r("acb5")},acb5:function(e,t,r){}}]);
//# sourceMappingURL=chunk-3929750d.a91af31c.js.map