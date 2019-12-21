<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive :include="keepAlives" :max="10">
        <router-view/>
      </keep-alive>
    </transition>
    <!-- <div class="loading-block">
    <cube-loading ></cube-loading>
    </div> -->
  </div>
</template>

<script>
import { keepAlives } from "@/common/router";
import { mapState } from "vuex";

export default {
  name: "app",
  data() {
    return {
      transitionName: "",
      keepAlives,
      urls: {
        Rewards: "/rewards/home",
        Rank: "/rank/home",
        Mine: "/"
      }
    };
  },
  created() {
  },
  computed: {
  
  },
  watch: {
  
  },
  methods: {
  
  }
};
</script>

<style>
/*iframe {
  width: 100%;
  padding: 0;
  margin: 0;
  height: 100vh;
}
*/
/*#app{
  width: 100%;
  height: 100%;
}*/
</style>
