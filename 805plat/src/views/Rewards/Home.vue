<template>
  <div>
    <Xheader title="领奖" :back="false" right="icongenjinjilu"></Xheader>
     <Xcont :header="true">
       <!-- <div>
        <cube-button @click="showtoast">loading</cube-button>
        <cube-button @click="showerror">错误提示</cube-button>
      </div> -->
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
      name: ""
    };
  },
    methods: {
    showtoast() {
      const toast = this.$createToast({
        txt: "加载中...",
        time: 2000,
        type: "loading",
        mask: true
      });
      toast.show();
    },
    showerror() {
      const toast = this.$createToast({
        txt: "出错啦...",
        time: 3000,
        type: "error",
        mask: false
      });
      toast.show();
    }
  }
};
</script>