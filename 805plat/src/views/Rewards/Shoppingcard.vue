<template>
	<div>
		<Xheader title="购物卡" :back="true"></Xheader>
		<Xcont :header="true">
			<div class="container">
		        <div class="cont_box clearfix">
		        	<ul class="clearfix">
		        		<li v-for="(item,index) in goodsList">
		        			<div class="imgs" @click="goDetail(item.goods_code)">
		        				<div class="title">剩{{item.surplus_num}}份</div>
		        				<p class="reward">{{Number(item.goods_price)}}<i>元</i></p>
		        				<div class="point">{{item.use_num | formatNumberRgx}}积分</div>
		        			</div>
		        		</li>
		        	</ul>
		        	<div class="no-data" v-if="goodsList.length == 0">兑换未开启</div>
		        </div>
		        <div class="goods-tip">
		            <h5>抽奖说明:</h5>
		            <p>1. 中奖后，可在订单页填写收件信息，请按照格式正确填写收件信息，若应收件信息填写错误导致的损失，平台不予承担；</p>
		            <p>2. 该奖品将由官方于1~3个工作日内安排派奖（含运费）；</p>
		            <p>3. 请尽快填写收货信息，超过15天未填写将取消中奖资格；</p>
		            <p>4. 805生活官方有权在法律允许范围内进行解释和调整。</p>
		            <h5>《805生活平台抽奖协议》:</h5>
		            <p>1. 玩家使用“抽积分”进行抽奖后，客服将核实玩家“抽积分”和“金豆”是否属于正常游戏来源。所有非正常游戏获得“金豆”和“抽积分”均不可以用于抽奖。</p>
		            <p>2. 非正常游戏获得金豆包括但不限于：恶意刷活动赠送金豆、利用游戏BUG获得金豆、挂机获得金豆、作弊获得金豆、欺诈获得金豆、盗号获得金豆、虚假游戏获得金豆、私下交易、同IP小号私下转移金豆等被认定为异常获得的金豆。</p>
		            <p>3. 非正常获得的“抽积分”指通过非正常方式从游戏中获得的“抽积分”。</p>
		            <p>4. 如使用非正常获得的“抽积分”参与抽奖，官方将有权取消本次抽奖，并回收“抽积分”。</p>
		            <p>5. 抽奖成功后，发货周期一般为1-3个工作日，如特殊情况：包括不限于春节、五一节等法定节假日或缺货，发货周期可能被延长，调整具体内容以官方网站最新公示为准。</p>
		            <p>6. 根据市场变化，将适时调整商城的兑奖规则、更换奖品清单或调整奖品数额以及本规则以外的其他内容，相关内容以官方网站最新公示为准。</p>
		        </div>
			</div>
		</Xcont>
	</div>
	
</template>
<script type="text/javascript">
	import Xheader from "@/components/layout/Xheader.vue";
	import Xcont from "@/components/layout/Xcontent.vue";
	export default{
		name:"Phonetraffic",
		data(){
			return {
			    goodsList:[]
			}
		},
		methods:{
			async getList(){
				let res = await this.$get(this.$api.listhot, {
					category: 'shopcard'
				});
				if (res && res._status == '200'){
					// this.info.user_id = res.user_id;
					// this.info.phone = res.phone;
					this.goodsList = res.list;
				}
			},
			goDetail:function(id){
				 this.$router.push({
	            	name:"Goodsdetail",
	            	params:{
	            		id: id
	            	}
	            });
			},
		},
		created(){
			this.getList();
		},
		mounted(){

		},
		components: {
			Xheader,
			Xcont
		}
	}
	
</script>
<style lang="stylus" scoped>
.container{
	padding: 20px 20px;
	overflow: auto;
	.cont_box ul{
		width: 100%;
		margin-bottom: 20px;
		li{
			width: 33.33%;
			height: 236px;
			float: left;
			margin-bottom: 10px;
			.imgs{
				width: 195px;
				height: 236px;
				margin: 0 auto;
				.title{
					width: 100%;
					color: #fff;
					font-size: 24px;
					padding: 10px 0px 0 20px;;
				}
				.reward{
					width: 119px;
					height: 76px;
					margin-left: 26px;
					margin-top: 7px;
					-webkit-transform-origin: top right;
					-webkit-transform: rotateZ(-15deg);
					text-align: center;
					line-height: 76px;
					margin-bottom: 50px;
					font-size: 48px;
					i{
						font-size: 24px;
						font-style: normal;
					}
					
				}
				.point{
					font-size: 24px;
					height: 28px;
					text-align: center;
					line-height: 28px;
					color: #fff;

				}
			}
		}
		li:nth-child(5n+1) .imgs{
			background: url('assets/images/Rewards/icon01.png') no-repeat;	
			background-size: 100% 100%;
			.reward{
				color: #67bf9a;
			}
		}
		li:nth-child(5n+2) .imgs{
			background: url('assets/images/Rewards/icon02.png') no-repeat;	
			background-size: 100% 100%;
			.reward{
				color: #57abc0;
			}
		}
		li:nth-child(5n+3) .imgs{
			background: url('assets/images/Rewards/icon03.png') no-repeat;	
			background-size: 100% 100%;
			.reward{
				color: #e6ae55;
			}
		}
		li:nth-child(5n+4) .imgs{
			background: url('assets/images/Rewards/icon04.png') no-repeat;	
			background-size: 100% 100%;
			.reward{
				color: #cf5b58;
			}
		}
		li:nth-child(5n) .imgs{
			background: url('assets/images/Rewards/icon05.png') no-repeat;	
			background-size: 100% 100%;
			.reward{
				color: #5580cc;
			}
		}
		
	}
	.no-data{
		width: 100%;
		height: 200px;
		text-align: center;
		line-height: 200px;
		color: #999;
		font-size: 48px;
		font-weight: bold;
	}
	.goods-tip{
		padding: 15px;
		font-size: 24px;
		h5{
			font-size: 28px;
			margin: 10px 0;
			color: #5b5b5b;
		}
		p{
			color: #999;
			line-height: 1.6;
			margin-left: 0.25rem;
			text-indent: -0.25rem;
		}
	}
}
	
</style>