<template>
	<div>
		<Xheader title="更换绑定手机号" :back="true"></Xheader>
		 <Xcont :header="true">
			 <template>
				<div class="set_con">
					<section v-if="status">
						<div class="set_child">
							<div class="set_l">
								<span>手机号</span>
							</div>
							<div class="set_c">
								<span>15951425609</span>
							</div>
						</div>
						<!-- 按钮 -->
						<div class="btn">
							<cube-button :primary="true">更换绑定手机号</cube-button>
						</div>
					</section>
					<section v-if="status">
						<div class="set_child">
							<div class="set_l">
								<span>原手机号</span>
							</div>
							<div class="set_c">
								<span>15951425609</span>
							</div>
						</div>
						<div class="set_child">
							<div class="set_l">
								<span>短信验证码</span>
							</div>
							<div class="set_c">
								<input type="number" name="" placeholder="请输入验证码">
							</div>
							<div class="set_r">
								<cube-button :inline="true">获取验证码</cube-button>
							</div>
						</div>
						<!-- 按钮 -->
						<div class="btn">
							<cube-button :primary="true">确 定</cube-button>
						</div>
					</section>
					<section>
						<div class="set_child">
							<div class="set_l">
								<span>+86</span>
							</div>
							<div class="set_c">
								<span>15951425609</span>
							</div>
						</div>
						<div class="set_child">
							<div class="set_l">
								<span>短信验证码</span>
							</div>
							<div class="set_c">
								<input type="number" name="" placeholder="请输入验证码">
							</div>
							<div class="set_r">
								<cube-button :inline="true">获取验证码</cube-button>
							</div>
						</div>
						<!-- 按钮 -->
						<div class="btn">
							<cube-button :primary="true">确 定</cube-button>
						</div>
					</section>
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
			name: "",
			status: false,
			value:''
		};
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
				font-size: $size-xs;
				color: $color-deep;
				margin-right: 20px;
			}
			.set_c{
				flex: 1;
				font-size: $size-xs;
				color: $color-deep;
				input{
					width: 150px;
					border: none;
					outline: none;
				}
			}
			.set_r{
				margin-left: 15px;
				button{
					font-size: $size-xxs;
					width: 150px;
					height: 40px;
				}
			}
		}
		.btn{
			margin-top: 100px;
			button{
				width: 450px;
				height: 70px;
				margin:0 auto;
				font-size: 28px;
			}
		}
	}
</style>