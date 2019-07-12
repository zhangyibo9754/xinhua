<template>
    <div class="XhMessagePages">
      <div class="xinhua_header">
        <router-link to="/XhMessage">
          <i @click="$router.back()" class="iconfont icon-fanhui"></i>
        </router-link>
        <span>消息中心</span>
      </div>

<!-- 循环选项卡 打开注释-->
<!--      <van-tabs background="#f7f7f7" v-model="active" swipeable>-->
<!--        <van-tab v-for="index in 4" :title="'选项 ' + index">-->
<!--          <div class="messages">-->
<!--            <p>暂无消息通知</p>-->
<!--            <router-link to="">-->
<!--              <span>随便逛逛</span>-->
<!--            </router-link>-->
<!--          </div>-->
<!--        </van-tab>-->
<!--      </van-tabs>-->


<!--不循环选项卡 数据写死  打开注释-->
      <van-tabs background="#f7f7f7" v-model="active">

        <van-tab title="交易物流">
          <div class="messages">
            <p>暂无消息通知</p>
            <router-link name="jiaoyi" to="">
              <span>随便逛逛</span>
            </router-link>
          </div>
        </van-tab>

        <van-tab title="售后退换">
          <div class="messages">
            <p>暂无消息通知</p>
            <router-link name="shouhou" to="">
              <span>随便逛逛</span>
            </router-link>
          </div>
        </van-tab>

        <van-tab title="优惠促销">
          <div class="messages">
            <p>暂无消息通知</p>
            <router-link name="youhui" to="">
              <span>随便逛逛</span>
            </router-link>
          </div>
        </van-tab>

        <van-tab title="系统通知">
          <div class="messages">
            <p>暂无消息通知</p>
            <router-link name="xitong" to="">
              <span>随便逛逛</span>
            </router-link>
          </div>
        </van-tab>

      </van-tabs>


    </div>
</template>

<script>
    export default {
        name: "XhMessagePages",
      data() {
        return {
          active: 2
        };
    }
    }
</script>

<style scoped>
  .XhMessagePages{
    width: 100%;
    height: 13.34rem;
    background-color: #f7f7f7;
    text-align: left;


  }
  .XhMessagePages .xinhua_header{
    width:100%;
    height: 0.9rem;
    background-color: #f7f7f7;
  }
  .XhMessagePages .xinhua_header a{
    display: inline-block;
    width: 15%;
    height: 100%;
    text-align: center;
    line-height: 0.9rem;
    font-size: 0.1rem;
    color: red;

  }
  .XhMessagePages .xinhua_header span:nth-child(2){
    display: inline-block;
    width: 70%;
    height: 100%;
    text-align: center;
    line-height: 0.9rem;
    font-size: 0.35rem;
    color: #5a5a5a;
  }
  .messages {
    width: 4rem;
    height: 3rem;
    margin: 4rem auto;
    text-align: center;
  }
  .messages a{
    display: block;
    width: 3rem;
    height: 0.8rem;
    background-color: #e61818;
    margin: 0 auto;
    line-height: 0.8rem;
    color: #ffffff;
    border-radius: 0.1rem;
    margin-top: 0.4rem;
  }
  .messages p{
    color: #999999;
    font-size: 14px;
  }

</style>
