(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40d99816"],{"012d":function(t,s,i){"use strict";var a=i("1bcb"),n=i.n(a);n.a},"1bcb":function(t,s,i){},bc1a:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"sidebar"}},[i("div",{staticClass:"header"},[i("div",{staticClass:"img"},[i("img",{ref:"img",attrs:{src:t.user.avatarUrl,alt:""}})]),i("div",{ref:"name",staticClass:"name"},[t._v(t._s(t.user.signature))])]),i("div",{ref:"nickname",staticClass:"nickname"},[t._v(t._s(t.user.nickname))]),i("div",{staticClass:"icon"},[i("div",{staticClass:"added",on:{click:t.nohave}},[i("van-icon",{attrs:{name:"comment-o"}}),i("div",{staticClass:"iconname"},[t._v("我的消息")])],1),i("div",{staticClass:"added",on:{click:t.nohave}},[i("van-icon",{attrs:{name:"friends-o"}}),i("div",{staticClass:"iconname"},[t._v("我的好友")])],1),i("div",{staticClass:"added",on:{click:t.nohave}},[i("van-icon",{attrs:{name:"music-o"}}),i("div",{staticClass:"iconname"},[t._v("听歌识曲")])],1),i("div",{staticClass:"added",on:{click:t.nohave}},[i("van-icon",{attrs:{name:"star-o"}}),i("div",{staticClass:"iconname"},[t._v("个信装扮")])],1)]),i("div",{staticClass:"nav"},[i("router-link",{attrs:{to:"/user"}},[i("div",{staticClass:"user"},[t._v("用户信息")])]),i("div",{staticClass:"tool",on:{click:t.nohave}},[t._v("工具")]),i("div",{staticClass:"Scan",on:{click:t.nohave}},[t._v("扫一扫")]),i("router-link",{attrs:{to:"/login"}},[i("div",{staticClass:"login"},[t._v("切换账号")])]),i("router-link",{attrs:{to:"/about"}},[i("div",{staticClass:"about"},[t._v("关于我们")])]),i("div",{staticClass:"setting",on:{click:t.nohave}},[t._v("设置")])],1),i("footer",[i("div",{staticClass:"imgicon",on:{click:t.signout}},[i("i",{staticClass:"iconfont"},[t._v("")])])])])},n=[],e=(i("b0c0"),{name:"sidebar",data:function(){return{user:[]}},inject:["reload"],methods:{nohave:function(){this.$toast("对不起，你所点击的功能暂时还在开发中！,请你关注我们的消息.")},signout:function(){var t=this;this.$dialog.confirm({message:"您确定要退出当前账号吗?",confirmButtonText:"退出",cancelButtonText:"取消"}).then((function(){sessionStorage.removeItem("uid"),t.reload(),t.$router.push("/login")})).catch((function(){}))},getuser:function(){var t=this;JSON.parse(sessionStorage.getItem("uid"))?(""==this.$store.state.uid&&(this.$store.state.uid=JSON.parse(sessionStorage.getItem("uid"))),this.axios.get("/user/detail?uid="+this.$store.state.uid).then((function(s){t.user=s.data.profile}))):(this.$refs.img.src="https://blog-1259178461.cos.ap-chengdu.myqcloud.com/vue-music/default.jpg",this.$refs.name.innerHTML="当前无账号,请登录!",this.$notify({type:"danger",message:"当前没有登录账号，请登录账号"}))}},mounted:function(){this.getuser()}}),o=e,c=(i("012d"),i("2877")),r=Object(c["a"])(o,a,n,!1,null,"7a085b0c",null);s["default"]=r.exports}}]);
//# sourceMappingURL=chunk-40d99816.174f1c71.js.map