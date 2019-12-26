<template>
  <div id="app">
    <div v-if="token!=''">
      <transition :name="transitionName">
        <keep-alive :include="keepAlives" :max="10">
          <router-view />
        </keep-alive>
      </transition>
    </div>
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
      keepAlives
    };
  },
  async beforeCreate() {
    let url = window.location.href;
    let token = this.$route.query.token;
    let vuexstorage = localStorage.getItem("vuex");
    let currentUser = "";
    if (vuexstorage) {
      let vuexobj = JSON.parse(vuexstorage);
      if (vuexobj.user) {
        currentUser = vuexobj.user.token;
      }
    }
    if (currentUser) {
      return;
    } else if (!currentUser && token) {
      await this.$store.dispatch("_currentUser", token);
      this.$router.push(this.$route.path);
    }
    if (!this.currentUser && !token) {
      url = escape(url);
      window.location.href = this.$api.gettoken + "?ref=" + url;
    }
  },
  computed: {
    ...mapState({
      token: state => state.user.token
    })
  },
  methods: {}
};
</script>

<style>
</style>
