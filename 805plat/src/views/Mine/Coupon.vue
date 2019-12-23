<template>
  <div>
    <Xheader title="我的优惠券" :back="true"></Xheader>
    <Xcont :header="true">
      <div class="container">
        <div class="tab-container">
          <cube-tab-bar class="tab-rank" v-model="selectedLabel" show-slider inline>
            <cube-tab v-for="(item) in tabs" :label="item.label" :key="item.label">
              <!-- <i slot="icon" class="tab-icon" :class="item.icon"></i> -->
              <div class="tab-title" slot="default">{{item.label}}</div>
            </cube-tab>
          </cube-tab-bar>
        </div>
        <div class="list-container">
          <cube-tab-panels v-model="selectedLabel">
            <cube-tab-panel v-for="item in tabs" :label="item.label" :key="item.label">
              <template v-if="item.list.coupons_list">
                <dl>
                  <dt>
                    <div class="company-name">{{item.list.company_name}}</div>
                    <div class="company-address">
                      <span class="iconfont icon-location"></span>
                      {{item.list.address}}
                    </div>
                  </dt>
                  <dd v-for="coupon in item.list.coupons_list" :key="coupon.coupid">
                    <div class="coupon-l">
                      <img :src="coupon.cover" />
                    </div>
                    <div class="coupon-c">
                      <div class="title">{{item.list.company_name}}</div>
                      <div class="pro">{{coupon.name}}</div>
                      <div class="expired">有效期：{{coupon.expired}}</div>
                    </div>
                    <div class="coupon-r">
                      <div class="btn-coupon">立即使用</div>
                    </div>
                  </dd>
                </dl>
              </template>
              <div class="empty-block" v-else>
                <span class="iconfont icon-coupon-text"></span>
                <span>亲，暂无优惠券哦~</span>
              </div>
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
export default {
  name: "Coupon",
  components: {
    Xheader,
    Xcont
  },
  data() {
    return {
      selectedLabel: "可使用",
      tabs: [
        {
          label: "可使用",
          list: {
            company_id: "5",
            location: "",
            address: "上海市共和新路1928号大宁福朋喜来登酒店1楼",
            pic: "https://res-test.805.com/upload/d/1911/25/5ddbb4be7b3dc.png",
            company_name: "大宁福朋喜来登酒店宜客乐The Eatery",
            company_info: "",
            coupons_list: [
              {
                qdcompany_id: "5",
                ditch_num: "10001",
                name: "满500减150",
                cover:
                  "https://res-test.805.com/upload/d/1911/25/5ddbb8e293279.png",
                use_num: "100",
                price: "10.00",
                total_stock: "1008",
                discount: "0",
                coupid: "2",
                sn: "shiwan10001200003",
                get_time: "1576830228",
                expired: "1577435028"
              },
              {
                qdcompany_id: "5",
                ditch_num: "10001",
                name: "满200元减50元",
                cover:
                  "https://res-test.805.com/upload/d/1911/25/5ddbb8bf051e0.png",
                use_num: "100",
                price: "5.00",
                total_stock: "1000",
                discount: "0",
                coupid: "1",
                sn: "shiwan10001000009",
                get_time: "1576830226",
                expired: "1577435026"
              }
            ]
          }
        },
        {
          label: "已使用",
          list: {}
        },
        {
          label: "已过期",
          list: {}
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.list-container {
  height: calc(100% - 80px);

  .empty-block {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $color-shallow;

    .iconfont {
      font-size: 140px;
      margin-bottom: $padding-s;
    }
  }

  dl {
    width: 100%;

    dt {
      width: 100%;
      padding: $padding-m;

      .company-name {
        color: $color-deep;
        margin-bottom: $padding-s;
      }

      .company-address {
        color: $color-shallow;
        font-size: $size-xs;

        .iconfont {
          font-size: $size-m;
        }
      }
    }

    dd {
      width: 100%;
      background: url('assets/images/T_yhj01.png');
      background-position: center;
      background-size: 100%;
      background-repeat: no-repeat;
      height: 210px;
      padding: $padding-m $padding-m $padding-m $padding-l;
      display: flex;

      .coupon-l {
        width: 243px;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
          border-radius: $padding-s;
        }
      }

      .coupon-c {
        width: 270px;
        height: 100%;
        position: relative;
        padding: $padding-s 0 $padding-s $padding-m;

        .title {
          width: 100%;
          font-size: 36px;
          color: #a55520;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          height 40px;
          line-height 40px;
        }

        .pro {
          position: absolute;
          width: 204px;
          text-align: center;
          top: 62px;
          right: 50px;
          height: 40px;
          line-height: 40px;
          color: #fff;
          font-size: $size-xs;
        }

        .expired {
          margin-top: 100px;
          color: #cf7b48;
          font-size: $size-xs;
        }
      }

      .coupon-r {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #a55520;
        font-size: 36px;
        cursor: pointer;
        line-height: 50px;

        .btn-coupon {
          width: 80px;
        }
      }
    }
  }
}
</style>