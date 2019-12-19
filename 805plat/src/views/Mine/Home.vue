<template>
  <div>
    <Xheader title="个人中心" :back="false" right="icon-gear" @rightClick="gosetting"></Xheader>
    <Xcont :header="true">
      <div class="user-info">
        <div class="banner">
          <div class="avartar">
            <img
              src="http://thirdwx.qlogo.cn/mmopen/NfDs8xSjTia3xrSHqPibVibqtKgxkWfWcWdujvF7stqI6a8t2kEEkUv2n5xwscsxia8x9HcsoUJtRLqCADJ8j1LLGw/132"
            />
          </div>
          <div class="nickname-block">
            <div class="nickname">昵称</div>
            <div class="account">ID:123456</div>
          </div>
        </div>
        <div class="detail-block">
          <div class="top-block">
            <div class="title">我已薅到的羊毛(元)</div>
            <div class="num">550.25</div>
          </div>
          <div class="bottom-block">
            <div class="item">
              <div class="title"></div>
              <div class="num"></div>
            </div>
            <div class="item">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </Xcont>
  </div>
</template>
<script>
import axios from 'axios'
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
  created() {
    this.gettoken();
  },
  methods: {
    async gettoken() {
      //debugger
      // let url=window.location.href
      // window.location.href=this.$api.gettoken.url+"?url="+url;
       //let user = await this.$get(this.$api.gettoken);
      //console.log(user);
    },
    gosetting() {
      this.$router.push("/mine/setting");
    }
  }
};
</script>
<style lang="stylus" scoped>
.user-info {
  width: $width-content;
  margin: $padding-s $padding-m 0;
  border-radius: $size-radius;
  background: #fff;

  .banner {
    padding: $padding-m;
    display: flex;
    justify-content: flex-start;
    margin-bottom: $padding-s;

    .avartar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin-right: $padding-m;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .nickname-block {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 120px;

      .nickname {
        color: $color-deep;
        font-size: $size-m;
        margin-bottom: $padding-l;
      }

      .account {
        color: $color-shallow;
        font-size: $size-xs;
      }
    }
  }

  .detail-block {
    height: 319px;
    border-radius: $size-radius;
    background-image: url('assets/images/T_bg01.png');
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    padding: 40px 60px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .top-block {
      width: 100%;

      .title {
        margin-bottom: $padding-l;
      }

      .num {
        font-size: $size-xl;
      }
    }

    .bottom-block {
      width: 100%;
      display: flex;
      justify-content: space-between;
      font-size: $size-s;

      .item {
        display: flex;
        justify-content: flex-start;
      }
    }
  }
}
</style>