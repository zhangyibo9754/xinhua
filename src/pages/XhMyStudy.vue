<template>
    <div class="XhMyStudy">
        <div class="XhMyStudy_header">
            <van-tabs background="#f7f7f7" v-model="active">
              <router-link to="">
                <i @click="$router.back()" class="iconfont icon-fanhui"></i>
              </router-link>
              <van-tab title="学习中">
                <div class="studying">
                  <span :class="{'XhMyStudy_red':flag==1}" @click="flag=1">最近学习</span>
                  <span :class="{'XhMyStudy_red':flag==2}" @click="flag=2">最近购买</span>
                </div>
              </van-tab>

              <van-tab title="收藏"></van-tab>

              <van-tab title="离线">
                <div class="studying">
                  <span :class="{'XhMyStudy_red':flag1==1}" @click="flag1=1">已下载</span>
                  <span :class="{'XhMyStudy_red':flag1==2}" @click="flag1=2">下载中</span>
                </div>
              </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: "XhMyStudy",
      data() {
        return {
          active: 0,
          active1:0,
          flag:1,
          flag1:1
        };
      },

    }
</script>

<style scoped>
  .XhMyStudy{
    text-align: left;

  }
  .XhMyStudy_header i{
    position: fixed;
    font-size: 14px;
    color: #c62f2e;
    font-weight: bold;
    top: 2.5%;
    left: 2%;
    z-index: 999;
  }
  .studying{
    width: 100%;
    height: .8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .studying span{
    width: 50%;
    height: 0.4rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .studying span:nth-child(1){
    border-right: 1px solid #dddddd;
  }
  .XhMyStudy_red{
    color: red;
  }
</style>
