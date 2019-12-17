<template>
  <div>
    <Xheader title="设置" :back="true" right="icongear">
    </Xheader>
     <Xcont :header="true" ></Xcont>
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
      name: ""
    };
  }
};
</script>