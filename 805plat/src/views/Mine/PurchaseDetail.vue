<template>
  <div>
    <Xheader title="订单详情" :back="true"></Xheader>
    <Xcont :header="true">
      <div class="container">
        <div class="info-title">
          <i class="iconfont icon-ingot"></i>{{purchasedetail.total_ingot|formatNumberRgx}}
        </div>
        <div class="info-list">
          <div class="info-row">
            <div class="title">充值来源</div>
            <div class="txt">{{purchasedetail.game_name}}</div>
          </div>
          <div class="info-row">
            <div class="title">充值总额</div>
            <div class="txt">
              <i class="iconfont icon-money"></i>
              {{purchasedetail.money|formatNumberRgx}}
            </div>
          </div>
          <div class="info-row">
            <div class="title">支付方式</div>
            <div class="txt">微信支付</div>
          </div>
          <div class="info-row">
            <div class="title">充值时间</div>
            <div class="txt">{{purchasedetail.create_time|timestampToDate}}</div>
          </div>
          <div class="info-row">
            <div class="title">支付状态</div>
            <div
              class="txt"
              :class="purchasedetail.pay_status=='2'?'txt-success':purchasedetail.pay_status=='3'?'txt-danger':''"
            >{{purchasedetail.pay_status|formatstatus}}</div>
          </div>
          <div class="info-row">
            <div class="title">充值订单号</div>
            <div class="txt">{{purchasedetail.order_no}}</div>
          </div>
          <div class="info-row">
            <div class="title">备注</div>
            <div class="txt">{{purchasedetail.remark}}</div>
          </div>
        </div>
      </div>
    </Xcont>
  </div>
</template>
<script>
import Xheader from "@/components/layout/Xheader.vue";
import Xcont from "@/components/layout/Xcontent.vue";
import { mapState } from "vuex";
export default {
  name: "PurchaseDetail",
  components: {
    Xheader,
    Xcont
  },
  data() {
    return {
      purchasedetail: {}
    };
  },
  created() {
    let order_no = this.$route.params.orderno;
    this.getpurchasedetail(order_no);
  },
  methods: {
    async getpurchasedetail(order_no) {
      let purchasedetail = await this.$get(this.$api.getpurchasedetail, {
        order_no
      });
      this.purchasedetail = purchasedetail.one;
    }
  }
};
</script>

<style lang="stylus" scoped>
.info-title {
  height: 80px;
  line-height: 80px;
  font-size: $size-l;
  padding: 0 20px;
  margin-bottom: $padding-l;
  border-bottom: 1px solid $color-regular-blue;
  color: $color-deep;

  .iconfont {
    font-size: $size-icon-l;
    color: $color-regular-blue;
    margin-right: $padding-m;
  }
}

.info-list {
  width: calc(100% - 40px);
  margin: 0 auto;
  color: $color-deep;

  .info-row {
    height: 110px;
    display: flex;
    border-bottom: 1px solid $color-border;
    align-items: center;

    .title {
      width: 190px;
      padding-left: $padding-s;
    }

    .txt {
      flex: 1;
      color: $color-shallow;

      .iconfont {
        font-size: $size-icon-s;
        color: $color-regular-blue;
      }
    }
  }
}
</style>