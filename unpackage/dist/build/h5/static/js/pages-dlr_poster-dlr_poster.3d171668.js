(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-dlr_poster-dlr_poster"],{"148e":function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(t,n){e.exports=n(t)}(window,function(e,t){function n(t,n,i){e.WeixinJSBridge?WeixinJSBridge.invoke(t,r(n),function(e){c(t,e,i)}):u(t,i)}function o(t,n,i){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){i&&i.trigger&&i.trigger(e),c(t,e,n)}):u(t,i||n)}function r(e){return(e=e||{}).appId=M.appId,e.verifyAppId=M.appId,e.verifySignType="sha1",e.verifyTimestamp=M.timestamp+"",e.verifyNonceStr=M.nonceStr,e.verifySignature=M.signature,e}function a(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function c(e,t,n){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var i=t.errMsg;i||(i=t.err_msg,delete t.err_msg,i=function(e,t){var n=e,i=h[n];i&&(n=i);var o="ok";if(t){var r=t.indexOf(":");"confirm"==(o=t.substring(r+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==n&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return n+":"+o}(e,i),t.errMsg=i),(n=n||{})._complete&&(n._complete(t),delete n._complete),i=t.errMsg||"",M.debug&&!n.isInnerInvoke&&alert(JSON.stringify(t));var o=i.indexOf(":");switch(i.substring(o+1)){case"ok":n.success&&n.success(t);break;case"cancel":n.cancel&&n.cancel(t);break;default:n.fail&&n.fail(t)}n.complete&&n.complete(t)}function s(e){if(e){for(var t=0,n=e.length;t<n;++t){var i=e[t],o=p[i];o&&(e[t]=o)}return e}}function u(e,t){if(!(!M.debug||t&&t.isInnerInvoke)){var n=h[e];n&&(e=n),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function l(){return(new Date).getTime()}function d(t){k&&(e.WeixinJSBridge?t():g.addEventListener&&g.addEventListener("WeixinJSBridgeReady",t,!1))}if(!e.jWeixin){var f,p={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},h=function(){var e={};for(var t in p)e[p[t]]=t;return e}(),g=e.document,m=g.title,v=navigator.userAgent.toLowerCase(),y=navigator.platform.toLowerCase(),w=!(!y.match("mac")&&!y.match("win")),b=-1!=v.indexOf("wxdebugger"),k=-1!=v.indexOf("micromessenger"),S=-1!=v.indexOf("android"),x=-1!=v.indexOf("iphone")||-1!=v.indexOf("ipad"),_=(N=v.match(/micromessenger\/(\d+\.\d+\.\d+)/)||v.match(/micromessenger\/(\d+\.\d+)/))?N[1]:"",T={initStartTime:l(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},I={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:x?1:S?2:-1,clientVersion:_,url:encodeURIComponent(location.href)},M={},E={_completes:[]},P={state:0,data:{}};d(function(){T.initEndTime=l()});var C=!1,A=[],O=(f={config:function(t){u("config",M=t);var i=!1!==M.check;d(function(){if(i)n(p.config,{verifyJsApiList:s(M.jsApiList)},function(){E._complete=function(e){T.preVerifyEndTime=l(),P.state=1,P.data=e},E.success=function(e){I.isPreVerifyOk=0},E.fail=function(e){E._fail?E._fail(e):P.state=-1};var e=E._completes;return e.push(function(){!function(e){if(!(w||b||M.debug||_<"6.0.2"||I.systemType<0)){var t=new Image;I.appId=M.appId,I.initTime=T.initEndTime-T.initStartTime,I.preVerifyTime=T.preVerifyEndTime-T.preVerifyStartTime,O.getNetworkType({isInnerInvoke:!0,success:function(e){I.networkType=e.networkType;var n="https://open.weixin.qq.com/sdk/report?v="+I.version+"&o="+I.isPreVerifyOk+"&s="+I.systemType+"&c="+I.clientVersion+"&a="+I.appId+"&n="+I.networkType+"&i="+I.initTime+"&p="+I.preVerifyTime+"&u="+I.url;t.src=n}})}}()}),E.complete=function(t){for(var n=0,i=e.length;n<i;++n)e[n]();E._completes=[]},E}()),T.preVerifyStartTime=l();else{P.state=1;for(var e=E._completes,t=0,o=e.length;t<o;++t)e[t]();E._completes=[]}}),O.invoke||(O.invoke=function(t,n,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,r(n),i)},O.on=function(t,n){e.WeixinJSBridge&&WeixinJSBridge.on(t,n)})},ready:function(e){0!=P.state?e():(E._completes.push(e),!k&&M.debug&&e())},error:function(e){_<"6.0.2"||(-1==P.state?e(P.data):E._fail=e)},checkJsApi:function(e){n("checkJsApi",{jsApiList:s(e.jsApiList)},(e._complete=function(e){if(S){var t=e.checkResult;t&&(e.checkResult=JSON.parse(t))}e=function(e){var t=e.checkResult;for(var n in t){var i=h[n];i&&(t[i]=t[n],delete t[n])}return e}(e)},e))},onMenuShareTimeline:function(e){o(p.onMenuShareTimeline,{complete:function(){n("shareTimeline",{title:e.title||m,desc:e.title||m,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){o(p.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?n("sendAppMessage",{title:e.title||m,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):n("sendAppMessage",{title:e.title||m,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){o(p.onMenuShareQQ,{complete:function(){n("shareQQ",{title:e.title||m,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){o(p.onMenuShareWeibo,{complete:function(){n("shareWeiboApp",{title:e.title||m,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){o(p.onMenuShareQZone,{complete:function(){n("shareQZone",{title:e.title||m,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){n("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){n("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){n("startRecord",{},e)},stopRecord:function(e){n("stopRecord",{},e)},onVoiceRecordEnd:function(e){o("onVoiceRecordEnd",e)},playVoice:function(e){n("playVoice",{localId:e.localId},e)},pauseVoice:function(e){n("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){n("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){o("onVoicePlayEnd",e)},uploadVoice:function(e){n("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){n("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){n("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){n("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(S){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){n(p.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){n("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){n("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===C?(C=!0,n("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(C=!1,0<A.length){var t=A.shift();wx.getLocalImgData(t)}},e))):A.push(e)},getNetworkType:function(e){n("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var n=e.subtype;if(delete e.subtype,n)e.networkType=n;else{var i=t.indexOf(":"),o=t.substring(i+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){n("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},i(f,"getLocation",function(e){n(p.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))}),i(f,"hideOptionMenu",function(e){n("hideOptionMenu",{},e)}),i(f,"showOptionMenu",function(e){n("showOptionMenu",{},e)}),i(f,"closeWindow",function(e){n("closeWindow",{},e=e||{})}),i(f,"hideMenuItems",function(e){n("hideMenuItems",{menuList:e.menuList},e)}),i(f,"showMenuItems",function(e){n("showMenuItems",{menuList:e.menuList},e)}),i(f,"hideAllNonBaseMenuItem",function(e){n("hideAllNonBaseMenuItem",{},e)}),i(f,"showAllNonBaseMenuItem",function(e){n("showAllNonBaseMenuItem",{},e)}),i(f,"scanQRCode",function(e){n("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(x){var t=e.resultStr;if(t){var n=JSON.parse(t);e.resultStr=n&&n.scan_code&&n.scan_code.scan_result}}},e))}),i(f,"openAddress",function(e){n(p.openAddress,{},(e._complete=function(e){var t;(t=e).postalCode=t.addressPostalCode,delete t.addressPostalCode,t.provinceName=t.proviceFirstStageName,delete t.proviceFirstStageName,t.cityName=t.addressCitySecondStageName,delete t.addressCitySecondStageName,t.countryName=t.addressCountiesThirdStageName,delete t.addressCountiesThirdStageName,t.detailInfo=t.addressDetailInfo,delete t.addressDetailInfo,e=t},e))}),i(f,"openProductSpecificView",function(e){n(p.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)}),i(f,"addCard",function(e){for(var t=e.cardList,i=[],o=0,r=t.length;o<r;++o){var a=t[o],c={card_id:a.cardId,card_ext:a.cardExt};i.push(c)}n(p.addCard,{card_list:i},(e._complete=function(e){var t=e.card_list;if(t){for(var n=0,i=(t=JSON.parse(t)).length;n<i;++n){var o=t[n];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=t,delete e.card_list}},e))}),i(f,"chooseCard",function(e){n("chooseCard",{app_id:M.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))}),i(f,"openCard",function(e){for(var t=e.cardList,i=[],o=0,r=t.length;o<r;++o){var a=t[o],c={card_id:a.cardId,code:a.code};i.push(c)}n(p.openCard,{card_list:i},e)}),i(f,"consumeAndShareCard",function(e){n(p.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)}),i(f,"chooseWXPay",function(e){n(p.chooseWXPay,a(e),e)}),i(f,"openEnterpriseRedPacket",function(e){n(p.openEnterpriseRedPacket,a(e),e)}),i(f,"startSearchBeacons",function(e){n(p.startSearchBeacons,{ticket:e.ticket},e)}),i(f,"stopSearchBeacons",function(e){n(p.stopSearchBeacons,{},e)}),i(f,"onSearchBeacons",function(e){o(p.onSearchBeacons,e)}),i(f,"openEnterpriseChat",function(e){n("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}),i(f,"launchMiniProgram",function(e){n("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var t=e.split("?")[0],n=e.split("?")[1];return t+=".html",void 0!==n?t+"?"+n:t}}(e.path),envVersion:e.envVersion},e)}),i(f,"miniProgram",{navigateBack:function(e){e=e||{},d(function(){n("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){d(function(){n("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){d(function(){n("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){d(function(){n("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){d(function(){n("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){d(function(){n("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(t){d(function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})})}}),f),L=1,V={};return g.addEventListener("error",function(e){if(!S){var t=e.target,n=t.tagName,i=t.src;if(("IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=t["wx-id"];if(o||(o=L++,t["wx-id"]=o),V[o])return;V[o]=!0,wx.ready(function(){wx.getLocalImgData({localId:i,success:function(e){t.src=e.localData}})})}}},!0),g.addEventListener("load",function(e){if(!S){var t=e.target,n=t.tagName;if(t.src,"IMG"==n||"VIDEO"==n||"AUDIO"==n||"SOURCE"==n){var i=t["wx-id"];i&&(V[i]=!1)}}},!0),t&&(e.wx=e.jWeixin=O),O}var N})},"1da2":function(e,t,n){"use strict";n.r(t);var i=n("2d84"),o=n("2570");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("5190");var a=n("2877"),c=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"d6e7c91c",null);t["default"]=c.exports},"1efc":function(e,t,n){"use strict";function i(e){var t=e.toString();return t[1]?t:"0".concat(t)}function o(e){var t=e.getFullYear(),n=e.getMonth()+1,o=e.getDate(),r=e.getHours(),a=e.getMinutes(),c=e.getSeconds(),s=[t,n,o].map(i).join("/"),u=[r,a,c].map(i).join(":");return"".concat(s," ").concat(u)}function r(e){var t=e;return 1==e.toString().length&&(t="0"+e),t}function a(e){var t,n="-",i=e.split(n),o=parseInt(i[0]);t=0==i[1].indexOf("0")?parseInt(i[1].substring(1)):parseInt(i[1]);var r=parseInt(i[2]),a=new Date(o,t-1,r);return a}function c(e,t){var n;n=t?a(t):new Date;var i=n.getTime()+864e5*e;n.setTime(i);var o=n.getFullYear(),c=n.getMonth(),s=n.getDate();return c=r(c+1),s=r(s),o+"-"+c+"-"+s}function s(e){return!(escape(e).indexOf("%u")<0)}function u(e,t,n,i){var o=[e,n],r=[t,i],a=6378137,c=(o[1]-o[0])*Math.PI/180,s=(r[1]-r[0])*Math.PI/180,u=Math.sin(c/2)*Math.sin(c/2)+Math.cos(o[0]*Math.PI/180)*Math.cos(o[1]*Math.PI/180)*Math.sin(s/2)*Math.sin(s/2),l=2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u)),d=a*l;return Math.round(d)}function l(){var e=window.navigator.userAgent.toLowerCase();return"micromessenger"==e.match(/MicroMessenger/i)}Object.defineProperty(t,"__esModule",{value:!0}),t.formatTime=o,t.getDay=c,t.isChinese=s,t.getDistance=u,t.isWeiXin=l,t.default=void 0;var d={formatNumber:i,formatTime:o,getDay:c,isWeiXin:l};t.default=d},2570:function(e,t,n){"use strict";n.r(t);var i=n("2944"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=o.a},2944:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n("a34a")),o=s(n("7e28")),r=n("1efc"),a=n("890c"),c=s(n("148e"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,i,o,r,a){try{var c=e[r](a),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(i,o)}function l(e){return function(){var t=this,n=arguments;return new Promise(function(i,o){var r=e.apply(t,n);function a(e){u(r,i,o,a,c,"next",e)}function c(e){u(r,i,o,a,c,"throw",e)}a(void 0)})}}var d={data:function(){return{articles:["里程车险打破传统车险一刀切收费模式\n采用【开多少，付多少】全新收费方式\n公平、合理、创新\n价格减半，服务加倍\n你的车险你做主！\n快来戳下图体验吧！ ","里程车险到底对什么人最划算？\n如果你是专车司机，我的建议是no\n如果你是货车司机，我的建议是no\n如果你是普通上班族：必须买！！！\n年行驶里程10000公里左右的用户\n购买里程车险最划算！ ","里程车险保费减半，服务加倍\n除了传统车险提供的基本服务以外\n还具备驾驶行程回顾、车辆安防\n最关键的是还有紧急生命救援！！\n不仅服务于车，更是服务于人\n服务有价，生命无价！ ","不怕不识货，就怕货比货\n里程车险月付保费，分担保费压力\n第一时间提供紧急生命救援\n比传统车险保费最低可节省40%\n连最懂车险的行内人都争相购买\n你还等什么？还不快戳下图体验！"],posters:[],needShow:!1}},methods:{copyText:function(e){var t=new o.default(".".concat(e));t.on("success",function(e){wx.showToast({icon:"none",title:"复制成功",duration:1e3})}),t.on("error",function(e){wx.showToast({icon:"none",title:"长按文字复制",duration:1e3})})},downloadImg:function(){wx.showToast({icon:"none",title:"长按保存图片",duration:1e3})},showPic:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?(wx.showToast({icon:"none",title:"长按保存图片",duration:1e3}),setTimeout(function(){c.default.previewImage({current:e,urls:[e]})},1e3)):c.default.previewImage({current:e,urls:[e]})},dlrLogin:function(){var e=l(i.default.mark(function e(){var t,n,o;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=uni.getStorageSync("openid"),e.next=3,(0,a.dlrLogin)(t);case 3:n=e.sent,200==n.code&&(o=n.token,o?(uni.setStorageSync("token",o),this.getPosterImg()):(uni.setStorageSync("registerBack","/pages/dlr_poster/dlr_poster"),uni.redirectTo({url:"/pages/dlr_register/dlr_register"})));case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getPosterImg:function(){var e=l(i.default.mark(function e(){var t;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,a.getPosterImg)();case 2:t=e.sent,200==t.code&&t.images&&(this.posters=t.images);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},onReady:function(){uni.getStorageSync("token");var e=uni.getStorageSync("openid");if(!e&&(0,r.isWeiXin)()){if(e=this.$root.$mp.query.open_id,!e){var t=window.location.href;e=t.split("open_id=")[1].split("#")[0]}uni.setStorageSync("openid",e)}this.needShow=!0,this.dlrLogin()},onShow:function(){var e=uni.getStorageSync("token");e&&this.needShow&&this.getPosterImg()}};t.default=d},"2d84":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"top-text"},[e._v("下载专属二维码海报，客户购买，立得佣金")]),e._l(e.articles,function(t,i){return n("v-uni-view",{staticClass:"poster-warp"},[n("v-uni-view",{staticClass:"left-box"},[n("v-uni-image",{staticClass:"head-img",attrs:{src:"../../static/img/poster_head.png"}})],1),n("v-uni-view",{staticClass:"right-box"},[n("v-uni-view",{staticClass:"title"},[e._v("里程车险")]),n("article",{staticClass:"article",domProps:{innerHTML:e._s(t)}}),n("v-uni-image",{staticClass:"poster",attrs:{src:e.posters[i],mode:"widthFix"},on:{click:function(t){t=e.$handleEvent(t),e.showPic(e.posters[i])}}}),n("v-uni-view",{staticClass:"btn-warp"},[n("v-uni-view",{staticClass:"default",class:"copy"+i,attrs:{"data-clipboard-text":t},on:{click:function(t){t=e.$handleEvent(t),e.copyText("copy"+i)}}},[e._v("复制文字")]),n("v-uni-view",{staticClass:"primary",on:{click:function(t){t=e.$handleEvent(t),e.showPic(e.posters[i],!0)}}},[e._v("下载图片")])],1)],1)],1)})],2)},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},5190:function(e,t,n){"use strict";var i=n("5c55"),o=n.n(i);o.a},"5c55":function(e,t,n){var i=n("9607");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("44944e54",i,!0,{sourceMap:!1,shadowMode:!1})},"7e28":function(e,t,n){"use strict";
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */!function(t,n){e.exports=n()}(0,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=s(n(1)),a=s(n(3)),c=s(n(4));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.resolveOptions(n),i.listenClick(e),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default),o(t,[{key:"resolveOptions",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===i(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=(0,c.default)(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new r.default({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return l("action",e)}},{key:"defaultTarget",value:function(e){var t=l("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return l("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach(function(e){n=n&&!!document.queryCommandSupported(e)}),n}}]),t}();function l(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}e.exports=u},function(e,t,n){var i,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(2),c=(i=a)&&i.__esModule?i:{default:i},s=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}return r(t,[{key:"resolveOptions",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,c.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,c.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":o(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),t}();e.exports=s},function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var i=window.getSelection(),o=document.createRange();o.selectNodeContents(e),i.removeAllRanges(),i.addRange(o),t=i.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var i=this.e||(this.e={});return(i[e]||(i[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var i=this;function o(){i.off(e,o),t.apply(n,arguments)}return o._=t,this.on(e,o,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),i=0,o=n.length;i<o;i++)n[i].fn.apply(n[i].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),i=n[e],o=[];if(i&&t)for(var r=0,a=i.length;r<a;r++)i[r].fn!==t&&i[r].fn._!==t&&o.push(i[r]);return o.length?n[e]=o:delete n[e],this}},e.exports=n},function(e,t,n){var i=n(5),o=n(6);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!i.string(t))throw new TypeError("Second argument must be a String");if(!i.fn(n))throw new TypeError("Third argument must be a Function");if(i.node(e))return f=t,p=n,(d=e).addEventListener(f,p),{destroy:function(){d.removeEventListener(f,p)}};if(i.nodeList(e))return s=e,u=t,l=n,Array.prototype.forEach.call(s,function(e){e.addEventListener(u,l)}),{destroy:function(){Array.prototype.forEach.call(s,function(e){e.removeEventListener(u,l)})}};if(i.string(e))return r=e,a=t,c=n,o(document.body,r,a,c);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var r,a,c,s,u,l,d,f,p}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var i=n(7);function o(e,t,n,o,r){var a=function(e,t,n,o){return function(n){n.delegateTarget=i(n.target,t),n.delegateTarget&&o.call(e,n)}}.apply(this,arguments);return e.addEventListener(n,a,r),{destroy:function(){e.removeEventListener(n,a,r)}}}e.exports=function(e,t,n,i,r){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return o(e,t,n,i,r)}))}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}}])})},9607:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".content[data-v-d6e7c91c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.top-text[data-v-d6e7c91c]{height:%?34?%;font-size:%?24?%;color:rgba(59,59,67,.6);line-height:%?34?%;text-align:center;margin-top:%?50?%}.poster-warp[data-v-d6e7c91c]{padding-left:%?50?%;padding-right:%?50?%;margin-top:%?30?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;border-bottom:%?2?% solid rgba(0,0,0,.09)}.poster-warp .left-box .head-img[data-v-d6e7c91c]{width:%?80?%;height:%?80?%}.poster-warp .right-box[data-v-d6e7c91c]{margin-left:%?20?%}.poster-warp .right-box .title[data-v-d6e7c91c]{height:%?48?%;font-size:%?34?%;font-weight:500;color:#5c6893;line-height:%?48?%}.poster-warp .right-box .article[data-v-d6e7c91c]{white-space:pre-line;width:%?550?%;margin-top:%?10?%;font-size:%?28?%;line-height:%?40?%;color:rgba(0,0,0,.8);-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.poster-warp .right-box .poster[data-v-d6e7c91c]{width:%?184?%;margin-top:%?40?%}.poster-warp .right-box .btn-warp[data-v-d6e7c91c]{margin-top:%?40?%;margin-bottom:%?38?%;position:relative;height:%?60?%}.poster-warp .right-box .btn-warp .default[data-v-d6e7c91c]{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;right:%?180?%;width:%?160?%;border:%?2?% solid #427dff;background-color:#fff;border-radius:%?30?%;color:#427dff;font-size:%?28?%;height:%?60?%;line-height:%?60?%;text-align:center}.poster-warp .right-box .btn-warp .primary[data-v-d6e7c91c]{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;right:0;width:%?160?%;background-color:#427dff;border-radius:%?30?%;color:#fff;font-size:%?28?%;height:%?60?%;line-height:%?60?%;text-align:center}",""])}}]);