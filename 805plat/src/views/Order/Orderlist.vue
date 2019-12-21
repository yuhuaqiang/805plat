<template>
  <div>
    <Xheader title="订单记录" :back="true"></Xheader>
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
      </div>
    </Xcont>
  </div>
</template>
<script>
import Xheader from "@/components/layout/Xheader.vue";
import Xcont from "@/components/layout/Xcontent.vue";
export default {
  name: "OrderList",
  components: {
    Xheader,
    Xcont
  },
  data() {
    return {
      name: "",
      selectedLabel: "全部",
      tabs: [
        {
          label: "全部"
        },
        {
          label: "领奖"
        },
        {
          label: "其它"
        }
      ]
    };
  }
};
</script>