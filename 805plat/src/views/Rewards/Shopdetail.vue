<template>
  <div>
	<Xheader title="商铺信息" :back="true"></Xheader>
	 <Xcont :header="true">
	 	<div class="detail_content">
	 		<div class="info">
	 			<div class="info_l"></div>
	 			<div class="info_r">
	 				<p class="title ellipsis">沸乐宝火锅(重庆万达广场)</p>
        			<div class="shop_address">
        				<i></i>
        				<span class="ellipsis">重庆市XXX路568号 3F</span>
        			</div>
        			<div class="introduce">
        				<div class="box">"主售火锅,小吃,烧烤等"</div>
        			</div>
        			<div class="desc">
        				<span>这里是店铺的介绍,这里是店铺的介绍,这里是店铺的介绍,这里是店铺的介绍,这里是店铺的介绍</span>
        			</div>
	 			</div>
	 		</div>
	 		<section v-for="item in 2">
		 		<div class="shop_coupon" @click="show = !show">
		 			<div class="coupon_l">
		 				<p>￥<span>13</span></p>
		 			</div>
		 			<div class="coupon_c">
		 				<div class="time">
		 					<span>使用期限</span>
		 					<span>7天</span>
		 				</div>
		 				<div class="conditions">
		 					<span>无门槛</span>
		 				</div>
		 				<div class="pack_up">
		 					<span>点击收起</span>
		 					<i class="up"></i>
		 				</div>
		 			</div>
		 			<div class="coupon_r">
		 				<div class="diamond">
		 					<i></i>
		 					<span>9999</span>
		 				</div>
		 				<div class="exchange">立即兑换</div>
		 			</div>
		 		</div>
		 		<transition name="" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
		 		<div class="coupon_detail" v-if="show">
		 			<div class="instructions">
		 				<span>兑换说明</span>
		 				<span>已兑 111</span>
		 				<span>剩余 888</span>
		 			</div>
		 			<div class="cond_detail clearfix">
		 				<div class="cond_l">有效期:</div>
		 				<div class="cond_r">2019年12月23日至2020年1月1日</div>
		 			</div>
		 			<div class="cond_detail clearfix">
		 				<div class="cond_l">使用时间:</div>
		 				<div class="cond_r">2019年12月23日至2020年1月1日</div>
		 			</div>
		 			<div class="cond_detail clearfix">
		 				<div class="cond_l">使用范围:</div>
		 				<div class="cond_r">2019年12月23日至2020年1月1日</div>
		 			</div>
		 			<div class="cond_detail clearfix">
		 				<div class="cond_l">使用规则:</div>
		 				<div class="cond_r">2019年12月23日至2020年1月1日</div>
		 			</div>
		 		</div>
		 		</transition>
	 		</section>
	 	</div>
	 </Xcont>
  </div>
</template>
<script>

import Xheader from "@/components/layout/Xheader.vue";
import Xcont from "@/components/layout/Xcontent.vue";
export default {
  name: "Rewards",
  components: {
	Xheader,
	Xcont
  },
  data() {
	return {
	  name: "",
	  shopId:'',
	  show: false
	};
  },
  created(){
  	this.shopId = this.$route.query.id;
  	this.couplist(this.shopId);
  },
  methods: {
  	async couplist(id) {
        let res = await this.$get(this.$api.couplist, {
        	ditch_num: id
        });
        if (res && res._status == '200') {
        	// 计算优惠券使用数量
            
            //this.shopList = res.list;
        }
    }
  }
};
</script>
<style lang="stylus" scoped>
.detail_content{
	width: 690px;
	height: auto;
	margin:0 auto;
	margin-top: 14px;
	.info{
		width: 100%;
		height: auto;
		background: #fff;
		border-radius: $size-radius;
		padding: 24px 0 24px 24px;
		overflow: hidden;
		margin-bottom: 24px;
		.info_l{
			width: 164px;
			height: 164px;
			background: #f00;
			float: left;
			border-radius: $size-radius;
			margin-right: 14px;
		}
		.info_r{
			float: left;
			.title{
				font-size: 26px;
				color: #555;
				width: 350px;
				margin-bottom: 9px;
			}
			.shop_address{
				i{
					display: block;
					width:20px;
					height: 29px;
					background: url('assets/images/T_gps.png') no-repeat;
					background-size: 100% 100%;
					margin-right: 5px; 
				}
				display: flex;
				align-items:center;
				margin-bottom: 8px;
				span{
					display: block;
					width: 380px;
					font-size: 24px;
					color: #838383;
				}
			}
			.introduce{
				display: flex;
				height: 40px;
				align-items:center;
				justify-content:space-between;
				margin-bottom: 12px;
				.box{
					width: 270px;
				}
				span{
					color: #a6a6a6;
					font-size: 20px;
				}
			}
			.box{
				height: 40px;
				background: #eee;
				text-align: center;
				color: #838383;
				font-size: 20px;
				line-height: 40px;
				float: left;
				margin-right: 10px;
			}
			.desc{
				width: 465px;
				font-size: 24px;
				color: #838383;
				line-height: 1.4;
			}
		}
	}
	section{
		margin-bottom: 24px;
	}
	.shop_coupon{
		position: static;
		z-index: 10;
		width: 686px;
		height: 207px;
		background: url('assets/images/Rewards/T_youhuiquan.png') no-repeat;
		background-size: 100% 100%;
		margin: 0 auto;
		.coupon_l{
			min-width: 187px;
			float: left;
			padding-top: 33px;
			margin-right: 26px;
			text-align: right;
			p{
				color: #d6250c;
				font-size: 60px;
				span{
					font-size: 100px;
				}
			}
		}
		.coupon_c{
			max-width: 260px;
			padding-top: 33px;
			color: #d6250c;
			float: left;
			.time{
				font-size: 26px;
				margin-bottom: 35px;
				span:nth-child(1){
					margin-right: 30px;
				}
			}
			.conditions{
				font-size: 30px;
				margin-bottom: 30px;
			}
			.pack_up{
				display: flex;
				align-items:center;
				span{
					font-size: 20px;
					opacity: .5;
					margin-right: 15px;
				}
				i{
					width: 34px;
					height: 13px;
					display: block;
				}
				.up{
					background: url('assets/images/Rewards/T_jiantou_s.png') no-repeat;
					background-size: 100% 100%;
				}
				.down{
					background: url('assets/images/Rewards/T_jiantou_x.png') no-repeat;
					background-size: 100% 100%;
				}
			}
			
			
		}
		.coupon_r{
			width: 210px;
			float: right;
			padding-top: 45px;
			color: #a55520;
			.diamond{
				display: flex;
				align-items:center;
				justify-content:center;
				font-size: 28px;
				margin-bottom: 35px;
				i{
					display: block;
					width: 36px;
					height: 30px;
					background: url('assets/images/Rewards/T_jf01_br.png') no-repeat;
					background-size: 100% 100%;
					margin-right: 10px;
				}
			}
			.exchange{
				text-align: center;
				font-size: 32px;
			}
		}
	}
	.coupon_detail{
		width: 640px;
		background: #fff;
		border-radius: 0 0 16px 16px;
		margin: 0 auto;
		padding: 30px;
		.instructions{
			font-size: 26px;
			color: #555;
			margin-bottom: 25px;
			span:nth-child(1){
				margin-right: 230px;
			}
			span:nth-child(2){
				font-size: 24px;
				color: #a6a6a6;
				margin-right: 50px;
			}
			span:nth-child(3){
				font-size: 24px;
				color: #a6a6a6;
			}

		}
		.cond_detail{
			width: 100%;
			margin-bottom: 20px;
			.cond_l{
				width: 120px;
				float: left;
				font-size: 24px;
				color: #727272;
				height: 40px;
				line-height: 40px;
			}
			.cond_r{
				max-width: 400px;
				float: left;
				font-size: 24px;
				color: #838383;
				line-height: 40px;
			}
		}
		
	}
}
	
</style>