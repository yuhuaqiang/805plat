<template>
	<div>
		<Xheader title="设置" :back="true"></Xheader>
		 <Xcont :header="true">
			 <template>
		 		<!-- 手机号码 -->
				<div class="set_con">
					<div class="set_child" @click="toPhone()">
						<div class="set_l">
							<span>手机号码</span>
						</div>
						<div class="set_c">
							<span>绑定手机</span>
						</div>
						<div class="set_r"></div>
					</div>
					<!-- 实名认证 -->
					<div class="set_child" @click="toName()">
						<div class="set_l">
							<span>实名认证(防沉迷)</span>
						</div>
						<div class="set_c">
							<span>去认证</span>
						</div>
						<div class="set_r"></div>
					</div>
					<!-- 联系地址 -->
					<div class="set_child" @click="toAddress()">
						<div class="set_l">
							<span>联系地址</span>
						</div>
						<div class="set_c">
							<span>请输入您的联系地址</span>
						</div>
						<div class="set_r"></div>
					</div>
				</div>
			 </template>
		 </Xcont>
	</div>
</template>
<script>
import Xheader from "@/components/layout/Xheader.vue";
import Xcont from "@/components/layout/Xcontent.vue";
export default {
	name: "Setting",
	components: {
		Xheader,
		Xcont
	},
	data() {
		return {
			name: ""
		};
	},
	methods:{
		toPhone:function(){
			this.$router.push("/mine/setting/phone");
		},
		toName:function(){
			this.$router.push("/mine/setting/realname");
		},
		toAddress:function(){
			this.$router.push("/mine/setting/address");
		}
	}
};
</script>
<style lang="stylus" scoped>
	.set_con{
		width: 668px;
		height: calc(100% - 22px);
		background: #fff;
		border-radius: $size-radius;
		margin: 0 auto;
		margin-top: 11px;
		.set_child{
			width: 612px;
			height: 146px;
			border-bottom: 2px solid #d4d4d4;
			margin: 0 auto;
			padding: 0 5px;
			display: flex;
			align-items:center;
			.set_l{
				font-size: $size-s;
				color: $color-deep;
			}
			.set_c{
				flex: 1;
				text-align: right;
				margin-right: 20px;
				font-size: $size-xs;
				color: $color-deep;
			}
			.set_r{
				width: 18px;
				height: 33px;
				background: url('assets/images/T_bg_more2.png') no-repeat;
				background-size: 100% 100%;
			}
		}
	}
</style>