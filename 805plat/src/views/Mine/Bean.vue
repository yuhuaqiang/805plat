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
          <cube-tab-bar
            class="tab-rank"
            v-model="selectedLabel"
            show-slider
            inline
            @change="changeHandler">
            <cube-tab v-for="(item) in tabs" :label="item.label" :key="item.label">
              <i slot="icon" class="iconfont" :class="item.icon"></i>
              <div class="tab-title" slot="default">{{item.label}}</div>
            </cube-tab>
          </cube-tab-bar>
        </div>
        <div class="list-container">
          <cube-tab-panels v-model="selectedLabel">
            <cube-tab-panel v-for="item in tabs" :label="item.label" :key="item.label">
              <template v-if="item.list.length>0">
                <ListItem
                  v-for="recorditem in item.list"
                  :key="recorditem.name"
                  :title="recorditem.name"
                  :time="recorditem.time"
                  :num="recorditem.num"
                ></ListItem>
              </template>
              <Empty :tip="tip" v-else></Empty>
            </cube-tab-panel>
          </cube-tab-panels>
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
import Empty from "@/components/units/empty-block.vue";
export default {
  name: "Bean",
  components: {
    Xheader,
    Xcont,
    Stitle,
    ListItem,
    Empty
  },
  data() {
    return {
      selectedLabel: "收入",
      tabs: [
        {
          label: "收入",
          icon: "icon-shouru",
          list: []
        },
        {
          label: "支出",
          icon: "icon-zhichu",
          list: [
            {
              name: "官方赠送：测试123",
              time: "2019-12-30 12:30:43",
              num: "1000"
            },
            {
              name: "官方赠送：测试1235",
              time: "2019-12-30 12:30:43",
              num: "2000"
            },
            {
              name: "官方赠送：测试1234",
              time: "2019-12-30 12:30:43",
              num: "3000"
            }
          ]
        }
      ],
      tip:"最近暂无收入记录~"
    };
  },
  methods: {
    changeHandler(label) {
      this.tip = `最近暂无${label}记录~`;
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