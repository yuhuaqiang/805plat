<template>
  <div>
    <Xheader title="优惠券" :back="true">
    </Xheader>
     <Xcont :header="true" ></Xcont>
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
      name: ""
    };
  }
};
</script>