(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0608":function(e,t,n){var a=n("b2b5");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=n("4f06").default;o("3501aa04",a,!0,{sourceMap:!1,shadowMode:!1})},"06e4":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;i(n("44f9"));var a=n("2f62"),o=i(n("ddfd"));function i(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r={components:{mInput:o.default},data:function(){return{providerList:[],hasProvider:!1,account:"",password:"",positionTop:0}},computed:(0,a.mapState)(["forcedLogin"]),methods:f({},(0,a.mapMutations)(["login"]),{initProvider:function(){var e=this,t=["weixin","qq","sinaweibo"];uni.getProvider({service:"oauth",success:function(n){if(n.provider&&n.provider.length){for(var a=0;a<n.provider.length;a++)~t.indexOf(n.provider[a])&&e.providerList.push({value:n.provider[a],image:"../../static/img/"+n.provider[a]+".png"});e.hasProvider=!0}},fail:function(e){console.error("获取服务供应商失败："+JSON.stringify(e))}})},initPosition:function(){this.positionTop=uni.getSystemInfoSync().windowHeight-100},bindLogin:function(){},oauth:function(e){var t=this;uni.login({provider:e,success:function(n){uni.getUserInfo({provider:e,success:function(e){t.toMain(e.userInfo.nickName)}})},fail:function(e){console.error("授权登录失败："+JSON.stringify(e))}})},toMain:function(e){this.login(e),this.forcedLogin?uni.reLaunch({url:"../main/main"}):uni.navigateBack()}}),onLoad:function(){this.initPosition(),this.initProvider()}};t.default=r},"1aeb":function(e,t,n){"use strict";n.r(t);var a=n("89d1"),o=n("f82f");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("4a55");var f=n("2877"),c=Object(f["a"])(o["default"],a["a"],a["b"],!1,null,"42b136e5",null);t["default"]=c.exports},"3bef":function(e,t,n){"use strict";n.r(t);var a=n("aca7"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=o.a},"42c9":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".m-input-view[data-v-a61c6ef4]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding:0 %?10?%}.m-input-input[data-v-a61c6ef4]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:100%}.m-input-icon[data-v-a61c6ef4]{width:20px}",""])},"44f9":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="USERS_KEY",o=function(){var e="";return e=uni.getStorageSync(a),e||(e="[]"),JSON.parse(e)},i=function(e){var t=o();t.push({account:e.account,password:e.password}),uni.setStorageSync(a,JSON.stringify(t))},f={getUsers:o,addUser:i};t.default=f},4744:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"m-input-view"},[n("v-uni-input",{staticClass:"m-input-input",attrs:{focus:e.focus_,type:e.inputType,value:e.value,placeholder:e.placeholder,password:"password"===e.type&&!e.showPassword},on:{input:function(t){t=e.$handleEvent(t),e.onInput(t)},focus:function(t){t=e.$handleEvent(t),e.onFocus(t)},blur:function(t){t=e.$handleEvent(t),e.onBlur(t)}}}),e.clearable_&&!e.displayable_&&e.value.length?n("v-uni-view",{staticClass:"m-input-icon"},[n("m-icon",{attrs:{color:"#666666",type:"clear",size:"20"},on:{click:function(t){t=e.$handleEvent(t),e.clear(t)}}})],1):e._e(),e.displayable_?n("v-uni-view",{staticClass:"m-input-icon"},[n("m-icon",{attrs:{color:e.showPassword?"#666666":"#cccccc",type:"eye",size:"20"},on:{click:function(t){t=e.$handleEvent(t),e.display(t)}}})],1):e._e()],1)},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},"4a55":function(e,t,n){"use strict";var a=n("756a"),o=n.n(a);o.a},"5d24":function(e,t,n){"use strict";n.r(t);var a=n("f770"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=o.a},"5dcb":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".content[data-v-42b136e5]{padding-left:%?80?%;padding-right:%?80?%}.title[data-v-42b136e5]{color:rgba(0,0,0,.7);font-size:%?48?%;margin-top:%?80?%;margin-bottom:%?108?%}.input-row[data-v-42b136e5]{border:%?2?% solid rgba(0,0,0,.1);border-radius:%?12?%;height:%?90?%;margin-bottom:%?40?%;padding-left:%?40?%;padding-right:%?34?%;font-size:%?26?%;color:rgba(0,0,0,.7);-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.get_code[data-v-42b136e5]{color:rgba(0,0,0,.7);margin-left:%?28?%;font-size:%?28?%}.primary[data-v-42b136e5]{background-color:#427dff;border-radius:%?12?%;color:#fff;font-size:%?28?%;height:%?94?%;line-height:%?94?%}.action-row[data-v-42b136e5]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.action-row uni-navigator[data-v-42b136e5]{color:#007aff;padding:0 %?20?%}.oauth-row[data-v-42b136e5]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0;left:0;width:100%}.oauth-image[data-v-42b136e5]{width:%?100?%;height:%?100?%;border:%?1?% solid #ddd;border-radius:%?100?%;margin:0 %?40?%;background-color:#fff}.oauth-image uni-image[data-v-42b136e5]{width:%?60?%;height:%?60?%;margin:%?20?%}",""])},6411:function(e,t,n){"use strict";n.r(t);var a=n("bcd0"),o=n("3bef");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("a966");var f=n("2877"),c=Object(f["a"])(o["default"],a["a"],a["b"],!1,null,"ffa41e7a",null);t["default"]=c.exports},"756a":function(e,t,n){var a=n("5dcb");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=n("4f06").default;o("3f9cbf7e",a,!0,{sourceMap:!1,shadowMode:!1})},"89d1":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"uni-center-item title"},[e._v("快捷登录注册")]),n("v-uni-view",{staticClass:"input-row border"},[n("m-input",{staticClass:"m-input",attrs:{type:"text","placeholder-class":"input_place_holder",focus:"",placeholder:"请输入手机号"},model:{value:e.account,callback:function(t){e.account=t},expression:"account"}}),n("v-uni-text",[e._v("|")]),n("v-uni-text",{staticClass:"get_code"},[e._v("发送验证码")])],1),n("v-uni-view",{staticClass:"input-row"},[n("m-input",{attrs:{type:"password",placeholder:"请输入验证码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("v-uni-view",[n("v-uni-button",{staticClass:"primary",attrs:{type:"primary","hover-class":"button-hover"},on:{click:function(t){t=e.$handleEvent(t),e.bindLogin(t)}}},[e._v("登录")])],1)],1)},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},a966:function(e,t,n){"use strict";var a=n("0608"),o=n.n(a);o.a},aca7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={props:{type:String,color:String,size:{type:[Number,String],default:24}},computed:{fontSize:function(){var e=Number(this.size);return e=isNaN(e)?24:e,"".concat(e,"px")}},methods:{onClick:function(){this.$emit("click")}}};t.default=a},b2b5:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@font-face{font-family:uniicons;font-weight:400;font-style:normal;src:url(https://img-cdn-qiniu.dcloud.net.cn/fonts/uni.ttf?t=1536565627510) format("truetype")}.m-icon[data-v-ffa41e7a]{font-family:uniicons;font-size:%?48?%;font-weight:400;font-style:normal;line-height:1;display:inline-block;text-decoration:none;-webkit-font-smoothing:antialiased}.m-icon.uni-active[data-v-ffa41e7a]{color:#007aff}.m-icon-contact[data-v-ffa41e7a]:before{content:"\\E100"}.m-icon-person[data-v-ffa41e7a]:before{content:"\\E101"}.m-icon-personadd[data-v-ffa41e7a]:before{content:"\\E102"}.m-icon-contact-filled[data-v-ffa41e7a]:before{content:"\\E130"}.m-icon-person-filled[data-v-ffa41e7a]:before{content:"\\E131"}.m-icon-personadd-filled[data-v-ffa41e7a]:before{content:"\\E132"}.m-icon-phone[data-v-ffa41e7a]:before{content:"\\E200"}.m-icon-email[data-v-ffa41e7a]:before{content:"\\E201"}.m-icon-chatbubble[data-v-ffa41e7a]:before{content:"\\E202"}.m-icon-chatboxes[data-v-ffa41e7a]:before{content:"\\E203"}.m-icon-phone-filled[data-v-ffa41e7a]:before{content:"\\E230"}.m-icon-email-filled[data-v-ffa41e7a]:before{content:"\\E231"}.m-icon-chatbubble-filled[data-v-ffa41e7a]:before{content:"\\E232"}.m-icon-chatboxes-filled[data-v-ffa41e7a]:before{content:"\\E233"}.m-icon-weibo[data-v-ffa41e7a]:before{content:"\\E260"}.m-icon-weixin[data-v-ffa41e7a]:before{content:"\\E261"}.m-icon-pengyouquan[data-v-ffa41e7a]:before{content:"\\E262"}.m-icon-chat[data-v-ffa41e7a]:before{content:"\\E263"}.m-icon-qq[data-v-ffa41e7a]:before{content:"\\E264"}.m-icon-videocam[data-v-ffa41e7a]:before{content:"\\E300"}.m-icon-camera[data-v-ffa41e7a]:before{content:"\\E301"}.m-icon-mic[data-v-ffa41e7a]:before{content:"\\E302"}.m-icon-location[data-v-ffa41e7a]:before{content:"\\E303"}.m-icon-mic-filled[data-v-ffa41e7a]:before,.m-icon-speech[data-v-ffa41e7a]:before{content:"\\E332"}.m-icon-location-filled[data-v-ffa41e7a]:before{content:"\\E333"}.m-icon-micoff[data-v-ffa41e7a]:before{content:"\\E360"}.m-icon-image[data-v-ffa41e7a]:before{content:"\\E363"}.m-icon-map[data-v-ffa41e7a]:before{content:"\\E364"}.m-icon-compose[data-v-ffa41e7a]:before{content:"\\E400"}.m-icon-trash[data-v-ffa41e7a]:before{content:"\\E401"}.m-icon-upload[data-v-ffa41e7a]:before{content:"\\E402"}.m-icon-download[data-v-ffa41e7a]:before{content:"\\E403"}.m-icon-close[data-v-ffa41e7a]:before{content:"\\E404"}.m-icon-redo[data-v-ffa41e7a]:before{content:"\\E405"}.m-icon-undo[data-v-ffa41e7a]:before{content:"\\E406"}.m-icon-refresh[data-v-ffa41e7a]:before{content:"\\E407"}.m-icon-star[data-v-ffa41e7a]:before{content:"\\E408"}.m-icon-plus[data-v-ffa41e7a]:before{content:"\\E409"}.m-icon-minus[data-v-ffa41e7a]:before{content:"\\E410"}.m-icon-checkbox[data-v-ffa41e7a]:before,.m-icon-circle[data-v-ffa41e7a]:before{content:"\\E411"}.m-icon-clear[data-v-ffa41e7a]:before,.m-icon-close-filled[data-v-ffa41e7a]:before{content:"\\E434"}.m-icon-refresh-filled[data-v-ffa41e7a]:before{content:"\\E437"}.m-icon-star-filled[data-v-ffa41e7a]:before{content:"\\E438"}.m-icon-plus-filled[data-v-ffa41e7a]:before{content:"\\E439"}.m-icon-minus-filled[data-v-ffa41e7a]:before{content:"\\E440"}.m-icon-circle-filled[data-v-ffa41e7a]:before{content:"\\E441"}.m-icon-checkbox-filled[data-v-ffa41e7a]:before{content:"\\E442"}.m-icon-closeempty[data-v-ffa41e7a]:before{content:"\\E460"}.m-icon-refreshempty[data-v-ffa41e7a]:before{content:"\\E461"}.m-icon-reload[data-v-ffa41e7a]:before{content:"\\E462"}.m-icon-starhalf[data-v-ffa41e7a]:before{content:"\\E463"}.m-icon-spinner[data-v-ffa41e7a]:before{content:"\\E464"}.m-icon-spinner-cycle[data-v-ffa41e7a]:before{content:"\\E465"}.m-icon-search[data-v-ffa41e7a]:before{content:"\\E466"}.m-icon-plusempty[data-v-ffa41e7a]:before{content:"\\E468"}.m-icon-forward[data-v-ffa41e7a]:before{content:"\\E470"}.m-icon-back[data-v-ffa41e7a]:before,.m-icon-left-nav[data-v-ffa41e7a]:before{content:"\\E471"}.m-icon-checkmarkempty[data-v-ffa41e7a]:before{content:"\\E472"}.m-icon-home[data-v-ffa41e7a]:before{content:"\\E500"}.m-icon-navigate[data-v-ffa41e7a]:before{content:"\\E501"}.m-icon-gear[data-v-ffa41e7a]:before{content:"\\E502"}.m-icon-paperplane[data-v-ffa41e7a]:before{content:"\\E503"}.m-icon-info[data-v-ffa41e7a]:before{content:"\\E504"}.m-icon-help[data-v-ffa41e7a]:before{content:"\\E505"}.m-icon-locked[data-v-ffa41e7a]:before{content:"\\E506"}.m-icon-more[data-v-ffa41e7a]:before{content:"\\E507"}.m-icon-flag[data-v-ffa41e7a]:before{content:"\\E508"}.m-icon-home-filled[data-v-ffa41e7a]:before{content:"\\E530"}.m-icon-gear-filled[data-v-ffa41e7a]:before{content:"\\E532"}.m-icon-info-filled[data-v-ffa41e7a]:before{content:"\\E534"}.m-icon-help-filled[data-v-ffa41e7a]:before{content:"\\E535"}.m-icon-more-filled[data-v-ffa41e7a]:before{content:"\\E537"}.m-icon-settings[data-v-ffa41e7a]:before{content:"\\E560"}.m-icon-list[data-v-ffa41e7a]:before{content:"\\E562"}.m-icon-bars[data-v-ffa41e7a]:before{content:"\\E563"}.m-icon-loop[data-v-ffa41e7a]:before{content:"\\E565"}.m-icon-paperclip[data-v-ffa41e7a]:before{content:"\\E567"}.m-icon-eye[data-v-ffa41e7a]:before{content:"\\E568"}.m-icon-arrowup[data-v-ffa41e7a]:before{content:"\\E580"}.m-icon-arrowdown[data-v-ffa41e7a]:before{content:"\\E581"}.m-icon-arrowleft[data-v-ffa41e7a]:before{content:"\\E582"}.m-icon-arrowright[data-v-ffa41e7a]:before{content:"\\E583"}.m-icon-arrowthinup[data-v-ffa41e7a]:before{content:"\\E584"}.m-icon-arrowthindown[data-v-ffa41e7a]:before{content:"\\E585"}.m-icon-arrowthinleft[data-v-ffa41e7a]:before{content:"\\E586"}.m-icon-arrowthinright[data-v-ffa41e7a]:before{content:"\\E587"}.m-icon-pulldown[data-v-ffa41e7a]:before{content:"\\E588"}.m-icon-scan[data-v-ffa41e7a]:before{content:"\\E612"}',""])},bcd0:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"m-icon",class:["m-icon-"+e.type],style:{color:e.color,"font-size":e.fontSize},on:{click:function(t){t=e.$handleEvent(t),e.onClick()}}})},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},cccb:function(e,t,n){var a=n("42c9");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=n("4f06").default;o("9ac43186",a,!0,{sourceMap:!1,shadowMode:!1})},ddfd:function(e,t,n){"use strict";n.r(t);var a=n("4744"),o=n("5d24");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("de1c");var f=n("2877"),c=Object(f["a"])(o["default"],a["a"],a["b"],!1,null,"a61c6ef4",null);t["default"]=c.exports},de1c:function(e,t,n){"use strict";var a=n("cccb"),o=n.n(a);o.a},f770:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("6411"));function o(e){return e&&e.__esModule?e:{default:e}}var i={components:{mIcon:a.default},props:{type:String,value:String,placeholder:String,clearable:{type:[Boolean,String],default:!1},displayable:{type:[Boolean,String],default:!1},focus:{type:[Boolean,String],default:!1}},model:{prop:"value",event:"input"},data:function(){return{showPassword:!1,isFocus:!1}},computed:{inputType:function(){var e=this.type;return"password"===e?"text":e},clearable_:function(){return"false"!==String(this.clearable)},displayable_:function(){return"false"!==String(this.displayable)},focus_:function(){return"false"!==String(this.focus)}},methods:{clear:function(){this.value=""},display:function(){this.showPassword=!this.showPassword},onFocus:function(){this.isFocus=!0},onBlur:function(){var e=this;this.$nextTick(function(){e.isFocus=!1})},onInput:function(e){this.$emit("input",e.target.value)}}};t.default=i},f82f:function(e,t,n){"use strict";n.r(t);var a=n("06e4"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=o.a}}]);