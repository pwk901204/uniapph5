<template>
	<div class="container">

		<div>

			<div class="title">
				交强险
			</div>

			<div class="item_wrap uni-center-item">
				<span>起保日期</span>
				<span class="uni-flex-item"></span>

				<picker mode="date" :value="dateTimeTwo" @change="changeDateTimeTwo">
					<view class="tui-picker-detail">
						{{dateTimeTwo}}
					</view>
				</picker>

				<span class="arraw"></span>
			</div>

			<mpvue-picker mode="selector" ref="mpvuePicker" :pickerValueDefault="jiaoIndex" @onConfirm="jiaoChange"
			 :pickerValueArray="dataList"></mpvue-picker>

			<div class="item_wrap uni-between-item" @click="showJiangQiang">
				<span>交强险</span>
				<span class="uni-flex-item"></span>
				<div class="uni-between-item">
					<div class="active" :class="{'unActive': (jiaoIndex == 0)}">
						{{dataList[jiaoIndex]}}
					</div>
					<span class="arraw"></span>
				</div>
			</div>

			<div class="title">
				商业险调整
			</div>

			<div class="item_wrap uni-center-item">
				<span>起保日期</span>
				<span class="uni-flex-item"></span>

				<picker mode="date" :value="dateTime" @change="changeDateTime">
					<view class="tui-picker-detail">
						{{dateTime}}
					</view>
				</picker>

				<span class="arraw"></span>
			</div>

			<mpvue-picker mode="selector" ref="jidongPicker" :pickerValueDefault="jidongIndex" @onConfirm="jidongChange"
			 :pickerValueArray="jiDongList"></mpvue-picker>

			<div class="item_wrap uni-between-item" @click="showJiDong">
				<span>机动车损失险</span>
				<div class="radio_wrap" v-if="(jidongIndex != 0)">
					<radio :checked="jidongRadioValue" color="#427DFF" class="radio" />
					<span>不计免赔</span>
				</div>

				<div class="uni-between-item">
					<div class="active" :class="{'unActive': (jidongIndex == 0)}">
						{{jiDongList[jidongIndex]}}
					</div>
					<span class="arraw"></span>
				</div>

			</div>

			<mpvue-picker mode="selector" ref="jidongValuePicker" :pickerValueDefault="jidongValueIndex" @onConfirm="jidongChangeValue"
			 :pickerValueArray="moneyList"></mpvue-picker>

			<div class="item_wrap uni-between-item" @click="showJidongValueIndex">
				<span>第三者责任险</span>
				<div class="radio_wrap" v-if="(jidongValueIndex != 0)">
					<radio :checked="jidongRadioValue" color="#427DFF" class="radio" />
					<span>不计免赔</span>
				</div>

				<div class="uni-between-item">
					<div class="active" :class="{'unActive': (jidongValueIndex == 0)}">
						{{moneyList[jidongValueIndex]}}
					</div>
					<span class="arraw"></span>
				</div>
			</div>


			<mpvue-picker mode="selector" ref="siJiIndexPicker" :pickerValueDefault="siJiIndex" @onConfirm="siJiChange"
			 :pickerValueArray="siJiList"></mpvue-picker>

			<div class="item_wrap uni-between-item" @click="showSiJiPicker">
				<span>司机责任险</span>
				<div class="radio_wrap" v-if="(siJiIndex != 0)">
					<radio :checked="jidongRadioValue" color="#427DFF" class="radio" />
					<span>不计免赔</span>
				</div>

				<div class="uni-between-item">

					<div class="active" :class="{'unActive': (siJiIndex == 0)}">
						{{siJiList[siJiIndex]}}
					</div>
					<span class="arraw"></span>
				</div>
			</div>


			<mpvue-picker mode="selector" ref="chengKeIndexPicker" :pickerValueDefault="chengKeIndex" @onConfirm="chengKeChange"
			 :pickerValueArray="siJiList"></mpvue-picker>

			<div class="item_wrap uni-between-item" @click="showChengKeIndex">
				<span>乘客责任险</span>
				<div class="radio_wrap" v-if="(chengKeIndex != 0)">
					<radio :checked="jidongRadioValue" color="#427DFF" class="radio" />
					<span>不计免赔</span>
				</div>

				<div class="uni-between-item">

					<div class="active" :class="{'unActive': (chengKeIndex == 0)}">
						{{siJiList[chengKeIndex]}}
					</div>
					<span class="arraw"></span>
				</div>
			</div>


			<mpvue-picker mode="selector" ref="qiangIndexPicker" :pickerValueDefault="qiangIndex" @onConfirm="qiangChange"
			 :pickerValueArray="dataList"></mpvue-picker>

			<div class="item_wrap uni-between-item" @click="showQiangIndex">
				<span>盗抢险</span>
				<div class="radio_wrap" v-if="(qiangIndex != 0)">
					<radio :checked="jidongRadioValue" color="#427DFF" class="radio" />
					<span>不计免赔</span>
				</div>

				<div class="uni-between-item">
					<div class="active" :class="{'unActive': (qiangIndex == 0)}">
						{{dataList[qiangIndex]}}
					</div>
					<span class="arraw"></span>
				</div>
			</div>

			<mpvue-picker mode="selector" ref="huaIndexPicker" :pickerValueDefault="huaIndex" @onConfirm="huaChange"
			 :pickerValueArray="huaList"></mpvue-picker>

			<div class="item_wrap uni-between-item" @click="showHuaIndex">
				<span>划痕险</span>
				<div class="radio_wrap" v-if="(huaIndex != 0)">
					<radio :checked="jidongRadioValue" color="#427DFF" class="radio" />
					<span>不计免赔</span>
				</div>

				<div class="uni-between-item">
					<div class="active" :class="{'unActive': (huaIndex == 0)}">
						{{huaList[huaIndex]}}
					</div>
					<span class="arraw"></span>
				</div>
			</div>

			<mpvue-picker mode="selector" ref="ziRanIndexPicker" :pickerValueDefault="ziRanIndex" @onConfirm="ziRanChange"
			 :pickerValueArray="dataList"></mpvue-picker>

			<div class="item_wrap uni-between-item" @click="showZiRanIndex">
				<span>自燃险</span>
				<div class="radio_wrap" v-if="(ziRanIndex != 0)">
					<radio :checked="jidongRadioValue" color="#427DFF" class="radio" />
					<span>不计免赔</span>
				</div>

				<div class="uni-between-item">

					<div class="active" :class="{'unActive': (ziRanIndex == 0)}">
						{{dataList[ziRanIndex]}}
					</div>
					<span class="arraw"></span>
				</div>
			</div>


			<mpvue-picker mode="selector" ref="glassIndexPicker" :pickerValueDefault="glassIndex" @onConfirm="glassChange"
			 :pickerValueArray="glassList"></mpvue-picker>

			<div class="item_wrap uni-between-item" @click="showGlassIndex">
				<span>玻璃险</span>
				<div class="radio_wrap" v-if="(glassIndex != 0)">
					<radio :checked="jidongRadioValue" color="#427DFF" class="radio" />
					<span>不计免赔</span>
				</div>

				<div class="uni-between-item">

					<div class="active" :class="{'unActive': (glassIndex == 0)}">
						{{glassList[glassIndex]}}
					</div>
					<span class="arraw"></span>
				</div>
			</div>

			<mpvue-picker mode="selector" ref="sheShuiIndexPicker" :pickerValueDefault="sheShuiIndex" @onConfirm="sheShuiChange"
			 :pickerValueArray="dataList"></mpvue-picker>

			<div class="item_wrap uni-between-item" @click="showSheShuiIndex">
				<span>涉水险</span>
				<div class="radio_wrap" v-if="(sheShuiIndex != 0)">
					<radio :checked="jidongRadioValue" color="#427DFF" class="radio" />
					<span>不计免赔</span>
				</div>

				<div class="uni-between-item">

					<div class="active" :class="{'unActive': (sheShuiIndex == 0)}">
						{{dataList[sheShuiIndex]}}
					</div>
					<span class="arraw"></span>
				</div>
			</div>

			<mpvue-picker mode="selector" ref="sanIndexPicker" :pickerValueDefault="sanIndex" @onConfirm="sanChange"
			 :pickerValueArray="dataList"></mpvue-picker>

			<div class="item_wrap uni-between-item" @click="showSanIndex">
				<span>无法找到第三方特约险</span>
				<span class="uni-flex-item"></span>

				<div class="uni-between-item">
					<div class="active" :class="{'unActive': (sanIndex == 0)}">
						{{dataList[sanIndex]}}
					</div>
					<span class="arraw"></span>
				</div>
			</div>

			<div class="gray_height"></div>

			<div class=" button" @click="insurance">立即报价</div>

		</div>


	</div>
</template>

<script>
	import {
		BASE_IMAGE_URL,
		insurance,
		getEffectiveDate,
		getExactQoute
	} from "@/utils/api";
	import {
		isChinese,
		getDay
	} from '../../utils'
	import {
		dateTimePicker,
		getMonthDay
	} from '@/utils/dateTimePicker'
	import mpvuePicker from '../../components/mpvue-picker/mpvuePicker.vue';
	//glass可以取值 false: 不保 1: 国产玻璃   2: 进口玻璃

	export default {
		components: {
			mpvuePicker
		},
		data() {
			return {
				step: 1,
				siJiList: ['不投保', "1万", "2万", "3万", "4万", "5万", "10万", "20万", "30万", "50万"],
				siJiIndex: 0,
				dataList: ["不投保", "投保"],
				jiDongList: ["不投保", "投保"],
				jidongIndex: 1,
				moneyList: ['不投保', "5万", "10万", "20万", "30万", "50万", "100万", "150万", "200万", "300万", "500万"],
				glassList: ['不投保', '国产玻璃', '进口玻璃'],
				huaList: ['不投保', '2000', '5000', '10000', '20000'],
				cateIndex: 0,
				cateResList: [],
				license_no: '',
				phone: '',
				imei: '',
				codeText: '发送验证码',
				codeNum: 60,
				interval: {},
				phone_code: '',
				model: 0,
				licensePlaceHolder: "请输入车牌号",
				phonePlaceHolder: "请输入手机号",
				phoneCodePlaceHolder: "请输入验证码",
				imeiPlaceHolder: "请输入IMEI",
				dateTimeArray: [],
				dateTime: '',
				dateTimeTwo: '',
				startYear: 2000,
				endYear: 2050,

				jidongRadioValue: true,
				otherRadioValue: true,
				jidongValueIndex: 6,
				chengKeIndex: 0,
				qiangIndex: 0,
				huaIndex: 0,
				ziRanIndex: 0,
				jiaoIndex: 1,
				global: '',
				sheShuiIndex: 0,
				sanIndex: 0,
				glassIndex: 0
			}
		},

		methods: {
			next() {
				const url = '../service_month_fee/service_month_fee';
				uni.navigateTo({
					url
				})
			},
			async insurance() {
				let bi_end_date = this.dateTime;
				let ci_end_date = this.dateTimeTwo;

				let liability = this.moneyList[this.jidongValueIndex];
				if (this.jidongValueIndex != 0) {
					if (liability.indexOf("万") != -1) {
						liability = parseInt(liability.split("万")[0] * 10000);
					}
				} else {
					liability = false;
				}

				let driver_seat = this.siJiList[this.siJiIndex];
				if (this.siJiIndex != 0) {

					if (driver_seat.indexOf("万") != -1) {
						driver_seat = parseInt(driver_seat.split("万")[0] * 10000);
					}
				} else {
					driver_seat = false;
				}

				let passenger_seat = this.siJiList[this.chengKeIndex];
				if (this.chengKeIndex != 0) {
					if (passenger_seat.indexOf("万") != -1) {
						passenger_seat = parseInt(passenger_seat.split("万")[0] * 10000);
					}
				} else {
					passenger_seat = false;
				}

				let hua_seat = this.huaList[this.huaIndex];
				if (this.huaIndex != 0) {
					hua_seat = parseInt(hua_seat);
				} else {
					hua_seat = false;
				}

				let glass_seat = this.glassList[this.glassIndex];
				if (this.glassIndex == 0) {
					glass_seat = false;
				} else if (glass_seat == '国产玻璃') {
					glass_seat = 1;
				} else {
					glass_seat = 2;
				}

				let quote_details = {
					"compulsory": this.jiaoIndex == 1,
					"destroy": this.jidongIndex == 1,
					"liability": liability,
					"stolen": this.qiangIndex == 1,
					"passenger_seat": passenger_seat,
					"driver_seat": driver_seat,
					"scratch": hua_seat,
					"glasses": glass_seat,
					"water": this.sheShuiIndex == 1,
					"burn": this.ziRanIndex == 1,
					'no_3rd_party': this.sanIndex == 1,
					"excluding": this.jidongRadioValue
				}

				let params = {
					quote_details: quote_details,
					bi_start_date: this.dateTime,
					ci_start_date: this.dateTimeTwo
				};

				let res = await insurance(this.global.quotation_id, params);
				if (res.code == 200) {
					this.next();
				}
			},

			async getEffectiveDate() {
				let params = {
					"license_no": this.global.license_no,
					"brand_code": this.global.brand,
					"is_trans": "0",
					"city_code": this.global.city,
					"first_reg_date": this.global.firstRegisterDate,
					"response_no": this.global.responseNo,
					"frame_no": this.global.frameNo,
					"engine_no": this.global.engineNo,
					"trans_date": "",
					"owner_name": "",
					"owner_mobile": "",
					"owner_id": ""
				};
				let res = await getEffectiveDate(params);
				if (res.code == 200) {
					if (res.data.data) {
						this.changeAllDateTime(res.data.data.biStartTime, res.data.data.ciStartTime);
					} else {
						this.dateTime = getDay(1);
						this.dateTimeTwo = getDay(1);
					}
				} else {
					//默认第二天
					this.dateTime = getDay(1);
					this.dateTimeTwo = getDay(1);
				}

			},

			changeDateTime(e) {
				console.log(e.mp.detail.value);
				this.dateTime = e.mp.detail.value;
			},

			changeDateTimeTwo(e) {
				console.log(e.mp.detail.value);
				this.dateTimeTwo = e.mp.detail.value;
			},
			jidongRadioChange() {
				this.jidongRadioValue = !this.jidongRadioValue;
				this.$forceUpdate();
				console.log(this.jidongRadioValue);
			},

			otherRadioChange() {
				this.otherRadioValue = !this.otherRadioValue;
				this.$forceUpdate();
			},

			showGlassIndex() {
				// this.$refs.glassIndexPicker.show();
				let that = this;
				uni.showActionSheet({
					itemList: that.glassList,
					success: function(res) {
						that.glassIndex = res.tapIndex;
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});

			},
			glassChange(e) {
				this.glassIndex = e.value;
				setTimeout(() => {
					let temp = this.glassList;
					this.glassList = [];
					this.glassList = temp;
				}, 1000);
			},

			showSheShuiIndex() {
				// this.$refs.sheShuiIndexPicker.show();
				let that = this;
				uni.showActionSheet({
					itemList: that.dataList,
					success: function(res) {
						that.sheShuiIndex = res.tapIndex;
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			sheShuiChange(e) {
				this.sheShuiIndex = e.value;
				setTimeout(() => {
					let temp = this.dataList;
					this.dataList = [];
					this.dataList = temp;
				}, 1000);
			},

			showSanIndex() {
				// this.$refs.sanIndexPicker.show();
				let that = this;
				uni.showActionSheet({
					itemList: that.dataList,
					success: function(res) {
						that.sanIndex = res.tapIndex;
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			sanChange(e) {
				this.sanIndex = e.value;
				setTimeout(() => {
					let temp = this.dataList;
					this.dataList = [];
					this.dataList = temp;
				}, 1000);
			},

			showJiangQiang() {
				// this.$refs.mpvuePicker.show();
				let that = this;
				uni.showActionSheet({
					itemList: that.dataList,
					success: function(res) {
						that.jiaoIndex = res.tapIndex;
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},

			jiaoChange(e) {
				console.log(e);
				// this.jiaoIndex = e.detail.value;

				this.jiaoIndex = e.value;

				setTimeout(() => {
					let temp = this.dataList;
					this.dataList = [];
					this.dataList = temp;
				}, 1000);

			},

			showZiRanIndex() {
				// this.$refs.ziRanIndexPicker.show();
				let that = this;
				uni.showActionSheet({
					itemList: that.dataList,
					success: function(res) {
						that.ziRanIndex = res.tapIndex;
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},

			ziRanChange(e) {
				this.ziRanIndex = e.value;
				setTimeout(() => {
					let temp = this.dataList;
					this.dataList = [];
					this.dataList = temp;
				}, 1000);
			},

			showHuaIndex() {
				// this.$refs.huaIndexPicker.show();
				let that = this;
				uni.showActionSheet({
					itemList: that.huaList,
					success: function(res) {
						that.huaIndex = res.tapIndex;
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});

			},
			huaChange(e) {
				this.huaIndex = e.value;
				setTimeout(() => {
					let temp = this.huaList;
					this.huaList = [];
					this.huaList = temp;
				}, 1000);
			},

			showQiangIndex() {
				// this.$refs.qiangIndexPicker.show();
				let that = this;
				uni.showActionSheet({
					itemList: that.dataList,
					success: function(res) {
						that.qiangIndex = res.tapIndex;
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},

			qiangChange(e) {
				this.qiangIndex = e.value;
				setTimeout(() => {
					let temp = this.dataList;
					this.dataList = [];
					this.dataList = temp;
				}, 1000);
			},

			showChengKeIndex() {
				// this.$refs.chengKeIndexPicker.show();
				let that = this;
				uni.showActionSheet({
					itemList: that.siJiList,
					success: function(res) {
						that.chengKeIndex = res.tapIndex;
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			chengKeChange(e) {
				this.chengKeIndex = e.value;
				setTimeout(() => {
					let temp = this.siJiList;
					this.siJiList = [];
					this.siJiList = temp;
				}, 1000);
			},

			showJiDong() {
				// this.$refs.jidongPicker.show();
				let that = this;
				uni.showActionSheet({
					itemList: that.jiDongList,
					success: function(res) {
						that.jidongIndex = res.tapIndex;
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			jidongChange(e) {
				this.jidongIndex = e.value;
				setTimeout(() => {
					let temp = this.jiDongList;
					this.jiDongList = [];
					this.jiDongList = temp;
				}, 1000);
			},

			showJidongValueIndex() {
				// this.$refs.jidongValuePicker.show();
				let that = this;
				uni.showActionSheet({
					itemList: that.moneyList,
					success: function(res) {
						that.jidongValueIndex = res.tapIndex;
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			jidongChangeValue(e) {
				this.jidongValueIndex = e.value;
				this.$forceUpdate();
				setTimeout(() => {
					let temp = this.moneyList;
					this.moneyList = [];
					this.moneyList = temp;
					this.jidongValueIndex = e.value;
					this.$forceUpdate();
				}, 1000);
			},

			showSiJiPicker() {
				// this.$refs.siJiIndexPicker.show();
				let that = this;
				uni.showActionSheet({
					itemList: that.siJiList,
					success: function(res) {
						that.siJiIndex = res.tapIndex;
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});

			},
			siJiChange(e) {
				this.siJiIndex = e.value;
				setTimeout(() => {
					let temp = this.siJiList;
					this.siJiList = [];
					this.siJiList = temp;
				}, 1000);
			},

			imeiFocus: function(e) {
				this.imeiPlaceHolder = "";
			},
			phoneFocus: function(e) {
				this.phonePlaceHolder = "";
			},
			phoneInput: function(e) {
				this.phonePlaceHolder = "请输入手机号";
			},
			phoneCodeFocus: function(e) {
				this.phoneCodePlaceHolder = "";
			},
			phoneCodeInput: function(e) {
				this.phoneCodePlaceHolder = "请输入验证码";
			},

			licenseFocus: function(e) {
				this.licensePlaceHolder = "";
			},
			//车牌号监听
			watchInput: function(e) {
				console.log(e.mp.detail.value);
				let value = e.mp.detail.value;
				if ((value.length >= 7) && (value.length <= 8)) {
					if (!isChinese(value[0])) {
						uni.showToast({
							icon: 'none',
							title: '第二位请输入汉字',
							duration: 1000
						});
						return;
					} else if ((value[1] >= 'a' && value[1] <= 'z') || (value[1] >= 'A' && value[1] <= 'Z')) {
						//正确输入
						this.license_no = value.toLocaleUpperCase();
					} else {
						//输入错误
						uni.showToast({
							icon: 'none',
							title: '车牌号应为7~8位',
							duration: 1000
						});
					}
				} else {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的车牌号',
						duration: 1000
					});
				}

				this.licensePlaceHolder = "请输入车牌号";
			},

			changeAllDateTime(biStartTime, ciStartTime) {
				console.log('biStartTime:' + biStartTime + '----ciStartTime:' + ciStartTime);
				if (biStartTime && ciStartTime) {
					this.dateTime = biStartTime.split(" ")[0];
					this.dateTimeTwo = ciStartTime.split(" ")[0];
				} else {
					this.dateTime = getDay(1);
					this.dateTimeTwo = getDay(1);
				}
			},

		},

		onLoad() {
			this.global = uni.getStorageSync("global");
			this.getEffectiveDate();
		},

	}
</script>

<style>
	.container {
		background-color: #F9F9F9;
		width: 100%;
	}

	.item_wrap span:nth-child(1) {
		min-width: 100rpx;
	}

	.title {
		color: #989898;
		font-size: 26upx;
		padding: 18upx 0upx 14upx 42upx;
		border-bottom: rgba(0, 0, 0, 0.1) solid 2upx;
	}

	.item_wrap {
		padding: 26upx 28upx 26upx 36upx;
		font-size: 28upx;
		color: rgba(0, 0, 0, 0.4);
		background-color: #FFFFFF;
		border-bottom: rgba(0, 0, 0, 0.1) solid 2upx;
		position: relative;
	}

	.item_input {
		font-size: 30upx;
		color: #515151;
		min-width: 100upx;
	}

	.zan-panel {
		margin-top: 0upx;
	}

	.zan-panel-title {
		padding-top: 30upx;
		padding-bottom: 15upx;
		color: #989898;
		font-size: 26upx;
	}

	.note {
		padding: 10upx;
		font-size: 24upx;
		text-align: center;
		color: #999;
	}

	#step1 {
		height: 100%;
		height: 100vh;
	}


	.line {
		color: #D5D5D5;
		background-color: #D5D5D5;
		display: inline-block;
		width: 4upx;
		height: 50upx;
		margin: auto 34upx;
	}

	.code {
		color: #427DFF;
		font-size: 14px;
	}

	.unActive {
		color: rgba(0, 0, 0, 0.3) !important;
	}

	.phone_code_wrap {
		flex-direction: row;
		align-items: center;
	}

	.inputClass {
		opacity: 1
	}

	.picker {
		font-size: 28upx;
		color: #b2b2b2;
	}

	.place-holder {
		font-size: 28upx;
		color: #b2b2b2;
	}

	.zan-cell {
		justify-content: space-between;
		height: 94upx;
		line-height: normal;
		box-sizing: border-box;
	}

	.zan-cell__hd {
		font-size: 28upx;
		color: #000000;
		opacity: 0.3;
	}

	.gray_height {
		height: 52upx;
		background-color: #f3f3f3;
	}

	.arraw {
		width: 18upx;
		height: 18upx;
		border-top: 3upx solid #ADADAD;
		border-right: 3upx solid #ADADAD;
		transform: rotate(45deg);
		margin-left: 10upx;
	}

	.button {
		margin: 40upx 5%;
		width: 90%;
		height: 94upx;
		line-height: 94upx;
		color: #ffffff;
		background-color: #427DFF;
		border-radius: 10upx;
		text-align: center;
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

	.active {
		color: rgba(0, 0, 0, 0.7);
	}

	picker {
		margin-right: 10upx;
		color: rgba(0, 0, 0, 0.7);
		font-size: 30upx;
	}

	picker div {
		min-width: 100upx;
		text-align: right;
	}

	.radio_wrap {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100%;
		font-size: 24upx;
		color: rgba(0, 0, 0, 0.7);
		position: absolute;
		left: 40%;
		top: 0%;
	}

	/* 未选中的 背景样式 */
	radio .wx-radio-input {
		border-radius: 50%;
		/* 圆角 */
		width: 30upx;
		/* 背景的宽 */
		height: 30upx;
		/* 背景的高 */
	}

	/* 选中后的 背景样式 （红色背景 无边框 可根据UI需求自己修改） */
	radio .wx-radio-input.wx-radio-input-checked {
		border: none;
		background: #427DFF;
		padding: 2upx;
	}

	/* 选中后的 对勾样式 （白色对勾 可根据UI需求自己修改） */
	radio .wx-radio-input.wx-radio-input-checked::before {
		border-radius: 50%;
		/* 圆角 */
		width: 30upx;
		/* 选中后对勾大小，不要超过背景的尺寸 */
		height: 30upx;
		/* 选中后对勾大小，不要超过背景的尺寸 */
		line-height: 30upx;
		text-align: center;
		font-size: 20upx;
		/* 对勾大小 30upx */
		color: #fff;
		/* 对勾颜色 白色 */
		background: transparent;
		transform: translate(-50%, -50%) scale(1);
		-webkit-transform: translate(-50%, -50%) scale(1);
	}
</style>
