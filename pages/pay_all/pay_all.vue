<template>
	<div class="container_wrap container-fill">
		<div class="wrap">
			<div class="info_title">
				<span class="circle active">1</span>
				<span style="margin:0rpx 12rpx 0rpx 10rpx;">服务费用</span>
				<span class="line active"></span>
				<span class="circle active">2</span>
				<span>交强险</span>
			</div>
			<div class="item_wrap">
				<span class="item_text">交强险：</span>
				<span class="item_right">{{getQuotationsData.compulsory}}元</span>
			</div>
			<div class="item_wrap">
				<span class="item_text">车船税：</span>
				<span class="item_right">{{getQuotationsData.tax}}元</span>
			</div>
		</div>
		<div class="info">支付方式</div>
		<radio-group @change="radioChange">
			<label class="item_wrap" v-for="(item, index) in items" :key="index">
				<view class="radio_wrap">
					<img :src="item.icon_url">
					<span class="price">{{item.name}}</span>
				</view>
				<view>
					<radio checked color="#427DFF" />
				</view>
			</label>
		</radio-group>
		<div class="bottom_info">
			<span class="star">*</span>
			<span>交强险与车船税将直接支付给指定保险公司</span>
		</div>
		<div class="bottom_wrap">
			<div class="bottom_left">
				<span>实付</span>
				<span class="bottom_money">¥{{allMoney}}</span>
			</div>
			<span class="bottom_right" @click="pay">立即支付</span>
		</div>
		<div class="modal-mask" @tap="hideWaitModal" v-if="showWaitModal"></div>
		<div class="modal-dialog" v-if="showWaitModal">
			<div class="modal_head_img">
				<image src="../../static/img/he_bao_icon.png" mode="widthFix" style="width: 68upx;" />
			</div>
			<div class="modal-title" style="padding: 20upx 20upx 0 20upx; margin-bottom: 60upx;">{{errorMsg}}</div>
			<div class="modal-footer">
				<div class="btn_wrap" hover-class="btn_hover" @click="hideWaitModal">
					<span>关闭</span>
				</div>
			</div>
		</div>
		<!-- 		
			<div class="modal-mask" v-if="showModal"></div>
			<div class="modal-dialog" v-if="showModal">
				<div class="modal-title">请确认支付是否已完成</div>
				<div class="modal-content" @tap="next">
					已完成支付
				</div>
				<div class="modal-bottom" @tap="hideModal">
					支付遇到问题，重新支付
				</div>
			</div> 
		-->
	</div>
</template>
<script>
	import {
		BASE_IMAGE_URL,
		pay,
		getExactQoute,
		getQuotations,
		applyUnderwrite,
		syncBizId
	} from "@/utils/api";

	export default {
		data() {
			return {
				items: [{
					name: '微信支付',
					icon_url: BASE_IMAGE_URL + 'weixin_pay.png'
				}],
				currentIndex: 0,
				allMoney: 0,
				getQuotationsData: {
					compulsory: 0,
					tax: 0
				},
				insurer: "",
				biz_id: "",
				showWaitModal: false, // 等待核保窗口
				applyUnderwriteRaceEnd: false,
				errorMsg: "",
				showModal: false,
				times:0
			}
		},

		methods: {
			hideModal: function() {
				this.showModal = false;
			},
			// 关闭等待核保窗口
			hideWaitModal: function() {
				this.showWaitModal = false
			},
			next() {
				wx.navigateTo({
					url: "../pay_two/pay_two"
				})
			},
			// 获取报价整体信息
			async getQuotations() {
				let res = await getQuotations(this.quotation_id);
				if (res.code == 200) {
					this.getQuotationsData = res.data
					this.allMoney = parseInt(res.data.compulsory) + parseInt(res.data.tax);
				}
			},
			// 精准报价
			async getExactQoute() {
				let data = this.getQuotationsData
				// debugger
				let params = {
					"license_no": data.license_no,
					"response_no": data.response_no,
					"brand_code": data.brand_code,
					"bi_begin_date": data.bi_begin_date,
					"ci_begin_date": data.ci_start_date,
					"city_code": data.city,
					"first_reg_date": data.first_reg_date,
					"frame_no": data.vin,
					"engine_no": data.engine_no,
					"owner_id": data.idcard,
					"owner_name": data.name,
					"owner_mobile": data.mobile,
					"coverage_list": [{
						"coverageCode": "FORCEPREMIUM",
						"coverageName": "交强险",
						"insuredAmount": "Y",
						"flag": null
					}]
				};
				// let params = {
				// 	"license_no": '陕N5685J',
				// 	"response_no":'',
				// 	"brand_code": 'ea180ac0-19d3-4ec1-bcb5-57e140e394f8',
				// 	// "bi_begin_date": data.bi_begin_date,
				// 	// "ci_begin_date": data.ci_start_date,
				// 	// "city_code": data.city,
				// 	// "response_no": "f20d598e-e7a4-49cd-b15b-58d85bf9df58",
				// 	// "brand_code": "538eb91d-993c-4a57-a03c-a36cf46fb913",
				// 	"bi_begin_date": "2019-08-05",
				// 	"ci_begin_date": "2019-08-05",
				// 	"city_code": "610100",
				// 	"first_reg_date": '2016-08-04',
				// 	"frame_no": 'LSGKE54H8GW161294',
				// 	"engine_no": '161535356',
				// 	"owner_id": '62222319790701131X',
				// 	"owner_name": '张秀国',
				// 	"owner_mobile":'17605539425',
				// 	"coverage_list": [
				// 	 {
				// 		"coverageCode": "B",
				// 		"coverageName": "商业第三者责任险",
				// 		"insuredAmount": "300000",
				// 		"flag": null
				// 	},
				// 	]
				// };
				let res = await getExactQoute(params);
				if (res.code == 200) {
					this.insurer = res.data.data[0].insurerCode
					this.biz_id = res.data.data[0].bizID
					this.syncBizId()
				} else {
					this.errorMsg = '仍报价失败，请稍后重试。'
					this.showWaitModal = true;
				}
			},
			// 同步Biz_id
			async syncBizId() {
				let res = await syncBizId({
					quotation_id: this.quotation_id,
					biz_id: this.biz_id
				})
				if (res.code == 200) {
					this.applyUnderwrite()
				} else {
					uni.showToast({
						icon: 'none',
						title: res.msg,
						duration: 1000
					});
				}
			},
			// 核保接口 逾期控制
			// applyUnderwriteRace() {
			// 	this.applyUnderwriteRaceEnd = false
			// 	let timeP = new Promise((resolve) => {
			// 		setTimeout(() => {
			// 			if (!this.applyUnderwriteRaceEnd) {
			// 				this.errorMsg = '核保中，稍后有客服人员与您联系，请耐心等候'
			// 				this.showWaitModal = true;
			// 			}
			// 			this.applyUnderwriteRaceEnd = true
			// 			resolve()
			// 		}, 30000)
			// 	})
			// 	Promise.race([timeP, this.applyUnderwrite()])
			// },
			// 核保
			async applyUnderwrite() {
				let params = {
					insurer: this.insurer,
					biz_id: this.biz_id,
					channel_code: "QUANLIAN_PROXY_INSURE",
					address_name: this.getQuotationsData.name,
					address_mobile: this.getQuotationsData.mobile,
					address_details: "老三届首座大厦30层",
					address_county: "610100",
					address_city: "610100",
					address_province: "610000",
					policy_email: "cxt8860@126.com",
				};
				let res = await applyUnderwrite(params);
				// if (this.applyUnderwriteRaceEnd) {
				// 	return
				// }
				// this.applyUnderwriteRaceEnd = true
				if (res.code == 200 && res.data.state == "1" && res.data.data.synchFlag == '0') {
					this.showModal = true
					// debugger
					location.href = res.data.data.payLink
				} else if (res.code == 200 && res.data.state == "1" && res.data.data.synchFlag == '1') {
					this.eachApplyUnderwrite(params)
					// this.errorMsg = '核保中，稍后有客服人员与您联系，请耐心等候'
					// this.showWaitModal = true;
				} else if(res.code == 200 && res.data.state== '0') {
					this.errorMsg = '核保失败'
					this.showWaitModal = true;
				}
			},
			// 轮询核保
			eachApplyUnderwrite(params){
				this.times = this.time + 1
				if(this.times > 3){
					this.errorMsg = '核保中，稍后有客服人员与您联系，请耐心等候'
					this.showWaitModal = true;
					return
				}
				uni.showLoading({ title: '加载中...' })
				setTimeout(async ()=> {
					let res = await applyUnderwrite(params);
					uni.hideLoading()
					if(res.code == 200 && res.data.state == '1'  && res.data.data.synchFlag == '0'){
						this.showModal = true
						location.href = res.data.data.payLink
					}else if(res.code == 200 && ((res.data.state=='0' && res.data.data.synchFlag== null )||(res.data.state=='1' && res.data.data.synchFlag== '1'))){
						this.eachApplyUnderwrite(params)
					}else if(res.code == 200 && res.data.state == '0'  && res.data.data.synchFlag == '0'){
						this.errorMsg = '核保失败'
						this.showHeModal = true;
					}
				}, 5000);
			},
			async pay() {
				this.getExactQoute()
			},
			getQueryString(name) {
				var reg = new RegExp("[?&]" + name + "=([^&#]*)", "i");
				var res = window.location.href.match(reg);
				if (res && res.length > 1) {
					return decodeURIComponent(res[1]);
				}
				return '';
			}
		},
		onLoad() {
			this.global = wx.getStorageSync("global");
			this.quotation_id = this.getQueryString("quotation_id");
			if (!this.quotation_id) {
				if (!this.global.quotation_id) {
					this.quotation_id = this.$root.$mp.query.quotation_id;
				} else {
					this.quotation_id = this.global.quotation_id;
				}
			}
			let openid = uni.getStorageSync("openid");
			if (!openid) {
				openid = this.$root.$mp.query.openid;
				if (openid) {
					uni.setStorageSync("openid", openid);
				}
			}
			this.getQuotations()
		}
	}
</script>

<style lang="scss" scoped>
	page,
	body {
		background-color: #F9F9F9;
		height: 100%;
	}

	.container_wrap {
		background-color: #F9F9F9;
		height: 100%;
		width: 100%;
	}

	.bottom_info {
		display: flex;
		flex-direction: row;
		font-size: 28rpx;
		color: rgba(0, 0, 0, 0.4);
		margin: 14rpx 40rpx;

		.star {
			color: #FF0000;
			margin-right: 8rpx;
		}
	}

	.input_wrap {
		display: flex;
		flex-direction: column;
		padding: 0rpx 40rpx 20rpx;

		.input_info {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			padding-top: 30rpx;
		}
	}

	.info {
		font-size: 28rpx;
		color: rgba(7, 7, 7, 0.4);
		padding: 30rpx 40rpx 10rpx;
	}

	.wrap {
		background-color: #FFFFFF;
	}

	.item_wrap {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: #FFFFFF;
		padding: 30rpx 40rpx;
		border-bottom: 1px solid #f2f2f2;

		.item_text {
			font-size: 28rpx;
			color: #000;
		}

		.item_info {
			font-size: 28rpx;
			color: #6E6E6E;
		}

		.item_title {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
		}

		.item_service {
			display: flex;
			flex-direction: row;
			align-items: center;
			font-size: 24rpx;
			color: #6E6E6E;

			img {
				width: 26rpx;
				height: 26rpx;
				margin-right: 4rpx;
			}
		}
	}

	.item_right {
		font-size: 28rpx;
		color: #6E6E6E;
	}

	.info_title {
		color: rgba(0, 0, 0, 0.7);
		font-size: 34rpx;
		background-color: #F9F9F9;
		height: 108rpx;
		border-bottom: 1px solid #f2f2f2;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 40rpx;
		box-sizing: border-box;

		.circle {
			border-radius: 50%;
			width: 32rpx;
			height: 32rpx;
			text-align: center;
			line-height: 32rpx;
			background-color: rgba(0, 0, 0, 0.1);
			color: #FFFFFF;
			font-size: 28rpx;
			margin-right: 8rpx;

		}

		.active {
			background-color: #427DFF !important;
		}

		.line {
			width: 40rpx;
			height: 2rpx;
			background-color: #D6D6D6;
			margin-right: 12rpx;
		}
	}

	.content_wrap {
		width: 90%;
		margin: -180rpx 5% 0rpx;
		height: 332rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		box-shadow: 0rpx 0rpx 20rpx 0rpx #EAEAEA;
		padding: 0rpx 16rpx;
		box-sizing: border-box;
		position: relative;
		z-index: 1;
	}

	.content_item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: #000000;
		font-size: 34rpx;
		height: 166rpx;
		padding: 0rpx 24rpx;

		.text {
			color: #427DFF;
			font-size: 24rpx;
		}
	}

	.row_item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.arraw {
		width: 18rpx;
		height: 18rpx;
		border-top: 6rpx solid #D9D9D9;
		border-right: 6rpx solid #D9D9D9;
		transform: rotate(45deg);
		margin-left: 10rpx;
	}

	.place-holder {
		font-size: 28rpx;
		color: #b2b2b2;
	}

	.button {
		margin: 40rpx 5%;
		width: 90%;
		height: 94rpx;
		line-height: 94rpx;
		color: #ffffff;
		background-color: #427DFF;
		border-radius: 10rpx;
		text-align: center;
		position: absolute;
		bottom: 0rpx;
	}

	.bottom_wrap {
		width: 100%;
		position: fixed;
		bottom: 0rpx;
		left: 0rpx;
		border-top: 1px solid #CCCCCC;
		height: 120rpx;
		line-height: 120rpx;
		color: #000000;
		font-size: 28rpx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: row;

		.bottom_left {
			padding-left: 44rpx;
			flex: 2;
		}

		.bottom_right {
			flex: 1;
			background-color: #427DFF;
			color: #FFFFFF;
			font-size: 30rpx;
			text-align: center;
		}

		.bottom_money {
			color: #f00;
			margin-left: 8rpx;
		}
	}

	radio-group {
		display: flex;
		flex-direction: column;
		width: 100%;
		box-sizing: border-box;
	}

	.radio_wrap {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.radio_wrap img {
		width: 32rpx;
		height: 32rpx;
		margin-right: 10rpx;
	}

	.modal-mask {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: #000;
		opacity: 0.5;
		overflow: hidden;
		z-index: 9000;
		color: #fff;
	}

	.modal-dialog {
		width: 80%;
		overflow: hidden;
		position: fixed;
		top: 15%;
		left: 0;
		z-index: 9999;
		background: #ffffff;
		margin: 10%;
		border-radius: 12upx;
	}

	.modal-title {
		padding-top: 50upx;
		font-size: 36upx;
		color: #000000;
		font-weight: bold;
		text-align: center;
	}

	.modal-content {
		padding: 40upx 52upx;
		font-size: 28upx;
		color: rgba(0, 0, 0, 0.6)
	}

	.modal-footer {
		display: flex;
		flex-direction: row;
		font-size: 34upx;
	}

	.btn_wrap {
		width: 80%;
		height: 94upx;
		margin: 20upx 10%;
		background: #427DFF;
		border-radius: 12upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		color: #ffffff;
	}

	.btn_wrap img {
		width: 44upx;
		height: 44upx;
		margin-right: 12upx;
	}

	.btn_wrap span {
		font-size: 34upx;
	}

	.btn_hover {
		background: #0000FF;
	}

	.modal_head_img {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-top: 68upx;
	}
</style>
