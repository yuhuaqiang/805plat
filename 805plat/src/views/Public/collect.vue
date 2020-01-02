<template>
  <div>
    <Xcont :header="false"><div>{{msg}}</div></Xcont>
  </div>
</template>
<script>
import Xcont from "@/components/layout/Xcontent.vue";
export default {
  name: "collect",
  components: {
    Xcont
  },
  data() {
    return {
      msg: "您尚未关注805生活平台公众号，请先关注公众号"
    };
  },
  async created() {},
  methods: {}
};
</script>
<style lang="stylus" scoped></style>