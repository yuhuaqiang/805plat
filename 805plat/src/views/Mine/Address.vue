<template>
	<div>
		<Xheader title="联系地址" :back="true"></Xheader>
		 <Xcont :header="true">
			 <template>
				<div class="set_con">
					<div class="set_child">
						<div class="set_l">
							<span>联系地址</span>
						</div>
						<div class="set_c">
							<input type="text" name="" placeholder="请输入联系地址">
						</div>
					</div>
					<!-- 按钮 -->
					<div class="btn">
						<cube-button :primary="true">提交</cube-button>
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
				font-size: $size-s;
				color: $color-deep;
				margin-right: 20px;
			}
			.set_c{
				flex: 1;
				input{
					border: none;
					outline: none;
					font-size: $size-xs;
					color: $color-deep;
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