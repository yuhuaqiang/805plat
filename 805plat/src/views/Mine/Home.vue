<template>
  <div>
    <Xheader title="个人中心" :back="false" right="icongear" @rightClick="gosetting"></Xheader>
    <Xcont :header="true"></Xcont>
  </div>
</template>
<script>
import Xheader from "@/components/layout/Xheader.vue";
import Xcont from "@/components/layout/Xcontent.vue";
export default {
  name: "Mine",
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
    gosetting() {
      this.$router.push("/mine/setting");
    }
  }
};
</script>