<template>
	<div class="contain" v-if="!isError">
		<div class="title_wrap">
			<div class="car_name">{{familyName}}</div>
			<div>{{brand_name}}</div>
		</div>

		<div class="content_wrap" v-if="!isError">
			<radio-group @change="radioChange">
				<label class="uni-between-item " v-for="(item, index) in items" :key="index">
					<view class="radio_wrap">
						<span>{{item.parentVehName}} {{item.engineDesc}} {{item.gearboxType}} {{item.seat}}</span>
						<span class="price">新车参考价：{{item.newCarPrice}}元</span>
					</view>
					<view>
						<radio :value="item.indexID" :checked="index === currentIndex" />
					</view>

				</label>
			</radio-group>
		</div>

		<div v-if="isError">
			<div class="error_head_wrap">
				<img :src="car_list_error" alt="">
				<span>车型选择失败</span>
			</div>

			<div class="error_content">
				根据您所填写的车辆信息（车架号、发动机号、品牌型号），未能查出具体车型，请确认所填信息正确并重试。
			</div>
		</div>


		<view class="btn_wrap">
			<button type="primary" class="primary" hover-class="button-hover" @tap="vehicle">下一步</button>

		</view>


	</div>
</template>

<script>
	import {
		BASE_IMAGE_URL,
		getModelMistiness,
		getModelExactness,
		vehicle
	} from "@/utils/api";


	export default {
		data() {
			return {
				items: [],
				current: 0,
				brand_name: '',
				familyName: '',
				license_no: '',
				response_no: '',
				brandCode: '',
				isExactness: true,
				sendTime: '',
				global: '',
				currentIndex: 0,
				isError: false
			}
		},

		methods: {
			radioChange(e) {
				console.log(e);
				this.currentIndex = e.mp.detail.value;
			},
			next() {
				this.global.brandCode = this.items[this.currentIndex].brandCode;
				uni.setStorageSync("global", this.global);
				console.log(this.global);
				uni.navigateTo({
					url: "../quote_bill/quote_bill"
				})
			},
			async vehicle() {
				let params = {
					"brand_code": this.items[this.currentIndex].brandCode,
					"model_details": {
						"family_name": this.items[0].familyName,
						"standard_name": this.items[0].standardName,
						"parent_veh_name": this.items[0].parentVehName,
						"engine_desc": this.items[0].engineDesc,
						"gearbox_type": this.items[0].gearboxType,
						"seat": this.items[0].seat,
						"new_car_price": this.items[0].newCarPrice
					}
				};

				let res = await vehicle(this.global.quotation_id, params);
				if (res.code == 200) {
					this.next();
				} else {
					wx.showToast({
						icon: 'none',
						title: res.msg,
						duration: 1000
					});
				}
			},

			async getModelExactness() {
				let params = {
					license_no: this.license_no,
					response_no: '',
					frame_no: this.global.frameNo
				};

				let res = await getModelExactness(params);
				if (res.code == 200) {
					if (res.data.state == 0) {
						this.isExactness = false;
						this.getModelMistiness();
					} else {
						this.isExactness = true;
						this.items = res.data.data;
						this.items.map((data, index) => {
							data.indexID = parseInt(index);
						})
						console.log(this.items);
						this.familyName = res.data.data[0].familyName;
						this.brand_name = res.data.data[0].standardName;
						this.sendTime = res.data.sendTime;
						this.global.brandCode = res.data.data[0].brandCode;
					}
				}
			},
			async getModelMistiness() {
				let params = {
					row: 10,
					page: this.current + 1,
					brand_name: this.brandCode
				};
				let res = await getModelMistiness(params);
				if (res.code == 200) {
					uni.stopPullDownRefresh();
					console.log(res.data.data);
					if (res.data.data && res.data.data.length != 0) {
						if (this.current == 0) {
							this.items = res.data.data;

						} else {
							this.items = this.items.concat(res.data.data);
						}

						this.items.map((data, index) => {
							data.indexID = parseInt(index);
						})

						console.log(this.items);
						this.familyName = res.data.data[0].familyName;
						this.brand_name = res.data.data[0].standardName;
						this.sendTime = res.data.sendTime;
					}

				} else {
					this.isError = true;
					wx.showToast({
						icon: 'none',
						title: '车辆信息查询失败',
						duration: 1000
					});
				}
			},
			getHanzi: function(name) {
				var reg = /[\u4e00-\u9fa5]/g;
				return name.replace(reg, "");
			}

		},
		onLoad() {
			this.global = uni.getStorageSync("global");
			console.log('global');
			console.log(global);
			this.license_no = this.global.license_no;
			this.response_no = this.global.responseNo;
			this.brandCode = this.getHanzi(this.global.brand);
			this.isExactness = true;
			this.getModelExactness();
		},
		onReachBottom: function() {
			if (!this.isExactness) {
				this.current++;
				this.getModelMistiness();
			}

		},
		onPullDownRefresh: function() {
			if (!this.isExactness) {
				this.current = 0;
				this.getModelMistiness();
			}

		},

	}
</script>

<style>
	.contain {
		width: 100%;
	}

	.title_wrap {
		color: rgba(0, 0, 0, 0.7);
		padding: 20upx 50upx;
		background-color: #F9F9F9;
		width: 100%;
		box-sizing: border-box;
	}

	.car_name {
		color: #000000;
		font-size: 56upx;
		font-weight: bold;
	}

	.content_wrap {
		padding-left: 48upx;
		padding-top: 18upx;
		padding-bottom: 18upx;
		margin-bottom: 200rpx;
	}

	.radio_wrap {
		display: flex;
		flex-direction: column;
		color: rgba(0, 0, 0, 1);
		font-size: 28upx;
		margin-right: 40upx;
	}

	.radio_wrap .price {
		font-size: 24upx;
		color: rgba(0, 0, 0, 0.4);
	}

	radio-group label {
		border-bottom: 2upx solid rgba(0, 0, 0, 0.1);
		padding: 16upx 10upx 16upx 0upx;
	}

	.btn_wrap {
		position: fixed;
		bottom: 0upx;
		width: 100%;
		height: 160upx;
		background-color: #FFFFFF;
		padding: 30upx 40upx;
		box-sizing: border-box;
	}

	.primary {
		background-color: #427DFF;
		color: #FFFFFF;
		border-radius: 10upx;
		font-size: 32upx;
		height: 100upx;
		line-height: 100upx;
	}
</style>
