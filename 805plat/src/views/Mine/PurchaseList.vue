<template>
  <div>
    <Xheader title="充值" :back="true"></Xheader>
    <Xcont :header="true">
      <div class="banner">
        <div class="title-banner">
          <div class="title">
            我的金豆
            <i class="iconfont icon-ingot"></i>
          </div>
          <div class="num">{{baseinfo.ingot}}</div>
        </div>
        <div class="btn-block">
          <button class="btn-banner" @click="purchasehandle"></button>
        </div>
        <div class="tip">金豆在游戏中流通,可以通过充值和游戏内获得</div>
      </div>
      <Stitle title="充值记录"></Stitle>
      <div class="list-block">
        <div class="list-container">
          <!-- <cube-scroll> -->
          <!-- <template v-if="item.list.length>0">
            <ListItem
              v-for="recorditem in item.list"
              :key="recorditem.name"
              :title="recorditem.name"
              :time="recorditem.time"
              :num="recorditem.num"
            ></ListItem>
          </template> -->
          <!-- </cube-scroll> -->
          <Empty :tip="tip"></Empty>
        </div>
      </div>
    </Xcont>
    <Purchase :showpurchase="showpurchase"></Purchase>
  </div>
</template>
<script>
import Xheader from "@/components/layout/Xheader.vue";
import Xcont from "@/components/layout/Xcontent.vue";
import Stitle from "@/components/units/separate_title.vue";
import ListItem from "@/components/units/list-item.vue";
import Empty from "@/components/units/empty-block.vue";
import Purchase from "@/components/units/purchase.vue";
import { mapState } from "vuex";
export default {
  name: "PurchaseList",
  components: {
    Xheader,
    Xcont,
    Stitle,
    ListItem,
    Empty,
    Purchase
  },
  data() {
    return {
      page: 1,
      tip: "最近暂无充值记录~"
    };
  },
  created() {
    this.getpurchaselist();
  },
  computed: {
    ...mapState({
      showpurchase: state => state.purchase.status,
      baseinfo: state => state.baseinfo.baseinfo
    })
  },
  methods: {
    purchasehandle() {
      this.$store.dispatch("_showPurchase", true);
    },

    async getpurchaselist() {
      let param = {
        page: this.page
      };
      //let purchaselist = await this.$get(this.$api.getbeanlist, param);

      this.page += 1;
    }
  }
};
</script>

<style lang="stylus" scoped>
.banner {
  height: 319px;
  border-radius: $size-radius;
  background-image: url('assets/images/T_bg02.png');
  background-repeat: no-repeat;
  background-size: 100%;
  width: $width-content;
  padding: 40px 50px;
  margin: $padding-s auto;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: $size-s;

  .title-banner {
    .title {
      height: 40px;
      display: flex;
      align-items: center;

      .iconfont {
        font-size: $size-l;
        margin-left: 5px;
      }
    }

    .num {
      margin-top: $padding-m;
      font-size: $size-xl;
    }
  }

  .tip {
    width: 100%;
    text-align: center;
  }

  .btn-block {
    width: 100%;
    text-align: center;

    .btn-banner {
      width: 320px;
      height: 58px;
      background: url('assets/images/T_buttom02.png');
      border: none;
      background-size: cover;
    }
  }
}

.list-container {
  width: calc(100% - 120px);
  margin: 0 auto;
  padding-bottom: $padding-l;
}
</style>