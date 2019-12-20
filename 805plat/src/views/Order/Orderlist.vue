<template>
  <div>
    <Xheader title="订单记录" :back="true">
    </Xheader>
     <Xcont :header="true" ></Xcont>
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
      name: ""
    };
  }
};
</script>