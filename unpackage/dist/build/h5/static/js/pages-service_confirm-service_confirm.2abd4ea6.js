(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-service_confirm-service_confirm"],{"1c1e":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".contain[data-v-14e3d024]{width:100%}.header[data-v-14e3d024]{margin-top:%?60?%;width:100%;padding:%?0?% %?40?%;-webkit-box-sizing:border-box;box-sizing:border-box}.brand_wrap[data-v-14e3d024]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.brand_wrap img[data-v-14e3d024]{width:%?124?%;height:%?34?%}.brand_wrap span[data-v-14e3d024]{color:#000;font-size:%?32?%}.price[data-v-14e3d024]{color:red;font-size:%?32?%;text-align:right;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.price .name[data-v-14e3d024]{font-size:%?28?%;color:#bbb}.address_wrap[data-v-14e3d024]{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?40?%;font-size:%?30?%;color:#676767}.title[data-v-14e3d024]{border-left:#427dff %?10?% solid;padding:%?0?% %?30?%;font-size:%?34?%;color:#3d3d3d;font-weight:600;background-color:#f9f9f9;height:%?70?%;line-height:%?70?%;-webkit-box-sizing:border-box;box-sizing:border-box}.change[data-v-14e3d024]{text-align:right;color:#427dff;font-size:%?28?%}.content_wrap[data-v-14e3d024]{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;padding:%?10?% %?40?% %?30?%;font-size:%?30?%;color:#676767}.content_item[data-v-14e3d024]{margin-top:%?10?%}.content_item_wrap[data-v-14e3d024]{min-width:%?300?%}.content_item_wrap span[data-v-14e3d024]:first-child{min-width:%?200?%}.content_item .tag[data-v-14e3d024]{font-size:%?20?%;color:#ff4242;background-color:#fff2ec;border-radius:%?6?%;padding:%?0?% %?10?%;margin-left:%?32?%}.license[data-v-14e3d024]{padding:%?20?% %?40?% %?0?%;border-top:%?1?% solid #e4e4e4;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#292929;font-size:%?28?%}.link[data-v-14e3d024]{color:#427dff}.button[data-v-14e3d024]{margin:%?40?% 5%;width:90%;height:%?94?%;line-height:%?94?%;color:#fff;background-color:#427dff;border-radius:%?10?%;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}uni-checkbox .wx-checkbox-input[data-v-14e3d024]{border-radius:50%;\n\t/* 圆角 */width:%?30?%;\n\t/* 背景的宽 */height:%?30?%\n\t/* 背景的高 */}\n\n/* 选中后的 背景样式 （红色背景 无边框 可根据UI需求自己修改） */uni-checkbox .wx-checkbox-input.wx-checkbox-input-checked[data-v-14e3d024]{border:none;background:#427dff;padding:%?3?%}\n\n/* 选中后的 对勾样式 （白色对勾 可根据UI需求自己修改） */uni-checkbox .wx-checkbox-input.wx-checkbox-input-checked[data-v-14e3d024]:before{border-radius:50%;\n\t/* 圆角 */width:%?30?%;\n\t/* 选中后对勾大小，不要超过背景的尺寸 */height:%?30?%;\n\t/* 选中后对勾大小，不要超过背景的尺寸 */line-height:%?30?%;text-align:center;font-size:%?20?%;\n\t/* 对勾大小 30upx */color:#fff;\n\t/* 对勾颜色 白色 */background:rgba(0,0,0,0);-ms-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);-webkit-transform:translate(-50%,-50%) scale(1)}",""])},"1efc":function(e,t,i){"use strict";function n(e){var t=e.toString();return t[1]?t:"0".concat(t)}function a(e){var t=e.getFullYear(),i=e.getMonth()+1,a=e.getDate(),o=e.getHours(),s=e.getMinutes(),r=e.getSeconds(),c=[t,i,a].map(n).join("/"),d=[o,s,r].map(n).join(":");return"".concat(c," ").concat(d)}function o(e){var t=e;return 1==e.toString().length&&(t="0"+e),t}function s(e){var t,i="-",n=e.split(i),a=parseInt(n[0]);t=0==n[1].indexOf("0")?parseInt(n[1].substring(1)):parseInt(n[1]);var o=parseInt(n[2]),s=new Date(a,t-1,o);return s}function r(e,t){var i;i=t?s(t):new Date;var n=i.getTime()+864e5*e;i.setTime(n);var a=i.getFullYear(),r=i.getMonth(),c=i.getDate();return r=o(r+1),c=o(c),a+"-"+r+"-"+c}function c(e){return!(escape(e).indexOf("%u")<0)}function d(e,t,i,n){var a=[e,i],o=[t,n],s=6378137,r=(a[1]-a[0])*Math.PI/180,c=(o[1]-o[0])*Math.PI/180,d=Math.sin(r/2)*Math.sin(r/2)+Math.cos(a[0]*Math.PI/180)*Math.cos(a[1]*Math.PI/180)*Math.sin(c/2)*Math.sin(c/2),l=2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d)),u=s*l;return Math.round(u)}function l(){var e=window.navigator.userAgent.toLowerCase();return"micromessenger"==e.match(/MicroMessenger/i)}Object.defineProperty(t,"__esModule",{value:!0}),t.formatTime=a,t.getDay=r,t.isChinese=c,t.getDistance=d,t.isWeiXin=l,t.default=void 0;var u={formatNumber:n,formatTime:a,getDay:r,isWeiXin:l};t.default=u},"2fc8":function(e,t,i){"use strict";i.r(t);var n=i("4621"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},4621:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(i("a34a")),a=i("890c"),o=i("1efc");function s(e){return e&&e.__esModule?e:{default:e}}function r(e,t,i,n,a,o,s){try{var r=e[o](s),c=r.value}catch(d){return void i(d)}r.done?t(c):Promise.resolve(c).then(n,a)}function c(e){return function(){var t=this,i=arguments;return new Promise(function(n,a){var o=e.apply(t,i);function s(e){r(o,n,a,s,c,"next",e)}function c(e){r(o,n,a,s,c,"throw",e)}s(void 0)})}}var d={data:function(){return{global:{},item:{quote_details:{excluding:!0,liability:"不投保",driver_seat:"不投保",passenger_seat:"不投保"}},quote_result:{},trueMobile:"",trueIdcard:"",name:"",license_no:"",brand:"",trueVin:"",trueEngineNo:"",first_reg_date:"",city_name:"",monthly_expense:"",mileage_expense:"",compulsory:"",tax:"",list:[],isChecked:!1,companyNameList:["安盛天平","天安财险","大地保险"],companyLogo:[a.BASE_IMAGE_URL+"an_sheng.png",a.BASE_IMAGE_URL+"tian_an.png",a.BASE_IMAGE_URL+"da_di.png"],company_logo:"",company_name:"",quotation_id:""}},methods:{changeChecked:function(){this.isChecked=!this.isChecked},next:function(){if(this.isChecked){var e=uni.getStorageSync("openid");if(console.log(e),(0,o.isWeiXin)()||uni.removeStorageSync("openid"),e){var t="../pay_address/pay_address?quotation_id="+this.quotation_id;uni.navigateTo({url:t})}else if((0,o.isWeiXin)()){var i=uni.getStorageSync("partner_id"),n=uni.getStorageSync("imei");window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx49aad3a138063b53&redirect_uri=https://api.kaikaibao.com.cn/3.1/getoauth?redit_url="+encodeURIComponent(location.origin)+"%2flccx2%2findex.html%23%2fpages%2fpay_address%2fpay_address%3fquotation_id%3d"+this.quotation_id+"%26partner_id%3d"+i+"%26imei%3d"+n+"&response_type=code&scope=snsapi_base&state=1&connect_redirect=1#wechat_redirect"}else{var a="../pay_address/pay_address?quotation_id="+this.quotation_id;uni.navigateTo({url:a})}}else wx.showToast({icon:"none",title:"请同意服务协议",duration:1e3})},changeBill:function(){var e="../quote_bill/quote_bill";wx.navigateTo({url:e})},applyUnderwrite:function(){var e=c(n.default.mark(function e(){var t,i;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.isChecked){e.next=3;break}return wx.showToast({icon:"none",title:"请同意服务协议",duration:1e3}),e.abrupt("return");case 3:return t={insurer:"ASTP",biz_id:"54097031",channel_code:"QUANLIAN_PROXY_INSURE",address_name:this.global.name,address_mobile:this.global.mobile,address_details:"路",address_county:"110112",address_city:"110100",address_province:"110000",policy_email:"caingougou@qq.com"},e.next=6,(0,a.applyUnderwrite)(t);case 6:i=e.sent,200==i.code&&1==i.data.state&&(this.monthly_expense=this.item.monthly_expense,this.mileage_expense=this.item.mileage_expense,this.compulsory=parseInt(this.item.compulsory),this.compulsory=this.compulsory?this.compulsory:"",this.tax=parseInt(this.item.tax),this.tax=this.tax?this.tax:"",uni.setStorageSync("global",this.global),this.next());case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getQuotations:function(){var e=c(n.default.mark(function e(){var t,i;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,a.getQuotations)(this.quotation_id);case 2:t=e.sent,200==t.code&&(this.item=t.data,this.item.company&&("ASTP"==this.item.company?(this.company_name=this.companyNameList[0],this.company_logo=this.companyLogo[0]):"TAIC"==this.item.company?(this.company_name=this.companyNameList[1],this.company_logo=this.companyLogo[1]):(this.item.company,this.company_name=this.companyNameList[2],this.company_logo=this.companyLogo[2])),this.monthly_expense=this.item.monthly_expense,this.mileage_expense=this.item.mileage_expense,this.compulsory=parseInt(this.item.compulsory),this.compulsory=this.compulsory?this.compulsory:"",this.tax=parseInt(this.item.tax),this.tax=this.tax?this.tax:"",this.city_name=this.item.city_name,console.log(this.item.quote_details),this.item.quote_details=JSON.parse(this.item.quote_details),console.log(this.item.quote_details),this.item.quote_details?(this.list=[],i=this,Object.keys(this.item.quote_details).forEach(function(e){i.item.quote_details[e];var t={};"burn"==e?t.name="自燃险":"destroy"==e?t.name="车损险":"stolen"==e?t.name="盗抢险":"liability"==e?t.name="第三者责任险":"driver_seat"==e?t.name="司机座位险":"passenger_seat"==e?t.name="乘客座位险":"stolen"==e?t.name="盗抢险":"glasses"==e?t.name="玻璃险":"scratch"==e?t.name="刮痕险":"water"==e?t.name="涉水险":"escape"==e?t.name="无法找到第三方险":"lights"==e?t.name="车灯险":"compulsory"==e?t.name="交强险":"no_3rd_party"==e&&(t.name="无法找到第三方特约险"),"boolean"==typeof i.item.quote_details[e]&&i.item.quote_details[e]?t.value="投保":"boolean"==typeof i.item.quote_details[e]&&0==i.item.quote_details[e]?t.value="不投保":"glasses"==e?t.value=1==i.item.quote_details[e]?"国产玻璃":"进口玻璃":(t.value=parseInt(i.item.quote_details[e]),t.value>1e4&&(t.value=t.value/1e4+"万")),"excluding"==e||"compulsory"==e||"boolean"==typeof i.item.quote_details[e]&&0==i.item.quote_details[e]||i.list.push(t)})):this.item.quote_details.excluding=!0,console.log("this.item.quote_details"),console.log(this.item.name),this.name=this.item.name,this.item.mobile&&(this.trueMobile=this.item.mobile.substring(0,3)+"****"+this.item.mobile.substring(7,11)),this.item.idcard&&(this.trueIdcard=this.item.idcard.substring(0,3)+"***********"+this.item.idcard.substring(14,18)),this.item.vin&&(this.trueVin=this.item.vin.substring(0,3)+"***********"+this.item.vin.substring(this.item.vin.length-3,this.item.vin.length)),this.item.engine_no&&(this.trueEngineNo=this.item.engine_no.substring(0,1)+"****"+this.item.engine_no.substring(this.item.engine_no.length-1,this.item.engine_no.length)),this.license_no=this.item.license_no,this.brand=this.item.brand,this.first_reg_date=this.item.first_reg_date,console.log(this.item),console.log("this.item.quote_details"),console.log(this.item),this.$forceUpdate());case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),H5login:function(){var e=c(n.default.mark(function e(){var t,i,o,s,r;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=uni.getStorageSync("partner_id"),i=uni.getStorageSync("imei"),o={partner_id:t,imei:i},e.next=5,(0,a.H5login)(o);case 5:s=e.sent,200==s.code&&(r=s.data.token,console.log(r),r&&uni.setStorageSync("token",r),this.getQuotations());case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getQueryString:function(e){var t=new RegExp("[?&]"+e+"=([^&#]*)","i"),i=window.location.href.match(t);return i&&i.length>1?decodeURIComponent(i[1]):""}},onLoad:function(){this.quotation_id=this.getQueryString("quotation_id"),this.quotation_id||(this.global=uni.getStorageSync("global"),this.global.quotation_id?this.quotation_id=this.global.quotation_id:this.quotation_id=this.$root.$mp.query.quotation_id);var e=uni.getStorageSync("openid");e||(e=this.$root.$mp.query.openid,e&&uni.setStorageSync("openid",e)),this.H5login()}};t.default=d},4631:function(e,t,i){var n=i("1c1e");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("3561d609",n,!0,{sourceMap:!1,shadowMode:!1})},"74fe":function(e,t,i){"use strict";var n=i("4631"),a=i.n(n);a.a},c593:function(e,t,i){"use strict";i.r(t);var n=i("e2e5"),a=i("2fc8");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("74fe");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"14e3d024",null);t["default"]=r.exports},e2e5:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"contain"},[i("div",{staticClass:"header uni-between-item"},[i("div",{staticClass:"brand_wrap"},[i("img",{attrs:{src:e.company_logo}}),i("span",[e._v(e._s(e.company_name))])]),i("div",{staticClass:"price"},[i("span",[e._v(e._s(e.monthly_expense)+"元/月+"+e._s(e.mileage_expense)+"元/公里")]),i("span",{staticClass:"name"},[e._v("交强险 "+e._s(e.compulsory)+"元+车船税 "+e._s(e.tax)+"元")])])]),i("div",{staticClass:"address_wrap uni-between-item"},[i("span",[e._v("投保地区")]),i("span",[e._v(e._s(e.city_name))])]),i("div",{staticClass:"title uni-between-item"},[i("span",[e._v("商业险")]),i("span",{staticClass:"change",on:{click:function(t){t=e.$handleEvent(t),e.changeBill(t)}}},[e._v("调整")])]),i("div",{staticClass:"content_wrap"},[e._l(e.list,function(t,n){return[i("div",{key:n+"_0",staticClass:"content_item uni-between-item"},[i("div",{staticClass:"uni-between-item content_item_wrap"},["不投保"!=t.value?i("span",[e._v(e._s(t.name))]):e._e(),"不投保"!=t.value?i("span",{staticClass:"tag"},[e._v("不计免赔")]):i("span",[e._v(e._s(t.name))])]),i("div",[e._v(e._s(t.value))])])]})],2),e._m(0),i("div",{staticClass:"content_wrap"},[i("div",{staticClass:"content_item uni-between-item"},[i("span",[e._v("姓名")]),i("div",[e._v(e._s(e.name))])]),i("div",{staticClass:"content_item uni-between-item"},[i("span",[e._v("手机号")]),i("div",[e._v(e._s(e.trueMobile))])]),i("div",{staticClass:"content_item uni-between-item"},[i("span",[e._v("身份证号")]),i("div",[e._v(e._s(e.trueIdcard))])])]),e._m(1),i("div",{staticClass:"content_wrap",staticStyle:{"border-bottom":"2upx solid rgba(0,0,0,0.1)","padding-bottom":"60upx"}},[i("div",{staticClass:"content_item uni-between-item"},[i("span",[e._v("车牌号码")]),i("div",[e._v(e._s(e.license_no))])]),i("div",{staticClass:"content_item uni-between-item"},[i("span",[e._v("品牌型号")]),i("div",[e._v(e._s(e.brand))])]),i("div",{staticClass:"content_item uni-between-item"},[i("span",[e._v("车辆识别代码")]),i("div",[e._v(e._s(e.trueVin))])]),i("div",{staticClass:"content_item uni-between-item"},[i("span",[e._v("发动机号码")]),i("div",[e._v(e._s(e.trueEngineNo))])]),i("div",{staticClass:"content_item uni-between-item"},[i("span",[e._v("注册日期")]),i("div",[e._v(e._s(e.first_reg_date))])])]),i("div",{staticClass:"license"},[i("v-uni-radio",{attrs:{checked:e.isChecked,color:"#427DFF"},on:{click:function(t){t=e.$handleEvent(t),e.changeChecked(t)}}},[e._v("我已阅读并同意")]),i("v-uni-navigator",{attrs:{url:"/pages/agreement/agreement?monthly_expense="+e.monthly_expense+"&mileage_expense="+e.mileage_expense+"&quotation_id="+e.quotation_id}},[i("v-uni-text",{staticClass:"link"},[e._v("《服务协议》")])],1)],1),i("div",{staticClass:" button",on:{click:function(t){t=e.$handleEvent(t),e.next(t)}}},[e._v("我要投保")])])},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"title uni-between-item"},[i("span",[e._v("车主信息")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"title uni-between-item"},[i("span",[e._v("车辆信息")])])}];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})}}]);