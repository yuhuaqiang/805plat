<template>
  <div>
    <Xheader title="金豆明细" :back="true"></Xheader>
    <Xcont :header="true">
      <div class="banner"></div>
      <Stitle title="金豆明细"></Stitle>
    </Xcont>
  </div>
</template>
<script>
import Xheader from "@/components/layout/Xheader.vue";
import Xcont from "@/components/layout/Xcontent.vue";
import Stitle from "@/components/units/separate_title.vue";
export default {
  name: "Bean",
  components: {
    Xheader,
    Xcont,
    Stitle
  },
  data() {
    return {};
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
  padding: 40px 60px;
  margin: $padding-s auto;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>