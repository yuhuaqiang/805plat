<template>
  <div>
    <Xheader title="金豆明细" :back="true"></Xheader>
    <Xcont :header="true">
      <div class="banner">
        <div class="title-banner">
          <div class="title">
            我的金豆
            <i class="iconfont icon-ingot"></i>
          </div>
          <div class="num">99800</div>
        </div>
        <div class="btn-block">
          <button class="btn-banner"></button>
        </div>
        <div class="tip">金豆在游戏中流通,可以通过充值和游戏内获得</div>
      </div>
      <Stitle title="金豆明细"></Stitle>
      <div class="list-block">
        <div class="tab-container">
          <cube-tab-bar class="tab-rank" v-model="selectedLabel" show-slider inline>
            <cube-tab v-for="(item) in tabs" :label="item.label" :key="item.label">
              <i slot="icon" class="iconfont" :class="item.icon"></i>
              <div class="tab-title" slot="default">{{item.label}}</div>
            </cube-tab>
          </cube-tab-bar>
        </div>
        <div class="list-container">
          <ListItem title="官方赠送：测试123" time="2019-12-30 12:30:43" num="+10000"></ListItem>
        </div>
      </div>
    </Xcont>
  </div>
</template>
<script>
import Xheader from "@/components/layout/Xheader.vue";
import Xcont from "@/components/layout/Xcontent.vue";
import Stitle from "@/components/units/separate_title.vue";
import ListItem from "@/components/units/list-item.vue";
export default {
  name: "Bean",
  components: {
    Xheader,
    Xcont,
    Stitle,
    ListItem
  },
  data() {
    return {
      selectedLabel: "收入",
      tabs: [
        {
          label: "收入",
          icon: "icon-shouru"
        },
        {
          label: "支出",
          icon: "icon-zhichu"
        }
      ]
    };
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