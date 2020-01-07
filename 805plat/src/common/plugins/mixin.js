import Vue from 'vue'
import {
    mapState
} from 'vuex'
export default () => {
    Vue.mixin({
        async created() {
            let url = window.location.href;
            debugger
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
            }
            if (!this.currentUser && !token) {
              url=escape(url);
              window.location.href = this.$api.gettoken + "?ref=" + url;
            }
        },
        computed: {
            ...mapState({
                currentUser: state => state.user.token,
            }),
        },
    })

}