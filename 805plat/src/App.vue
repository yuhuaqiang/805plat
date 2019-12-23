<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive :include="keepAlives" :max="10">
        <router-view />
      </keep-alive>
    </transition>
    <!-- <div class="loading-block">
    <cube-loading ></cube-loading>
    </div>-->
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
    let url = window.location.href;
    let token = this.$route.query.token;
    if (this.currentUser) {
      return;
    } else if (!this.currentUser && token) {
      this.$store.dispatch("_currentUser", token);
      this.$router.push(this.$route.path);
    }
    if (!this.currentUser && !token) {
      window.location.href = this.$api.gettoken + "?url=" + url;
    }
  },
  computed: {
    ...mapState({
      currentUser: state => state.user.token
    })
  },
  watch: {},
  methods: {}
};
</script>

<style>
</style>
