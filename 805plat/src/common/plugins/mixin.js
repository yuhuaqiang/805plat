import Vue from 'vue'
import {
    mapState
} from 'vuex'
export default () => {
    Vue.mixin({
        created() {
            let url = window.location.href;
            let token = this.$route.query.token;
            if (this.currentUser) {
                return;
            }
            else if (!this.currentUser && token) {
                this.$store.dispatch("_currentUser", token);
                this.$router.push(this.$route.path);
            }
            if (!this.currentUser && !token) {

                window.location.href = this.$api.gettoken + "?url=" + url;
            }
        },
        computed: {
            ...mapState({
                currentUser: state => state.user.token,
            }),
        },
    })

}