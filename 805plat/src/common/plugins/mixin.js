import Vue from 'vue'
import {
    mapState
} from 'vuex'
export default () => {
    Vue.mixin({
       async created() {
           
           //  let url = window.location.href;
            // console.log(this.$router)
            // let token= this.$route.query.token;
            // if(token){
            //     await this.$store.dispatch("_currentUser", token);
            // }
            // if(!this.currentUser&&!token){
            //     window.location.href=this.$api.gettoken.url+"?url="+url;
            // }
        },
        computed: {
			...mapState({
				currentUser: state => state.user.current,
			}),
		},
    })

}