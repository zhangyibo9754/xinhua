<template>
    <div class="XhCollection-cs">
      <div class="header-cs">
        <span class="iconfont icon-fanhui" @click="$router.back()"></span>
        <span class="set-cs">我的收藏</span>
        <span>清空</span>
      </div>
      <van-tabs v-model="active" class="collect-cs" type="card">
        <van-tab title="商品收藏" class="collect-product">
          <img src="../../static/cs/收藏.png">
          <span>去添加点什么吧</span>
          <button>随便逛逛</button>
        </van-tab>
        <van-tab title="图书管理" class="collect-product">
          <img src="../../static/cs/收藏.png">
          <span>暂无图书馆收藏</span>
          <button>随便逛逛</button></van-tab>
        <van-tab title="活动收藏" class="collect-product">
          <img src="../../static/cs/收藏.png">
          <span>暂无活动收藏</span>
          <button>随便逛逛</button></van-tab>
      </van-tabs>
    </div>
</template>

<script>
    export default {
        name: "XhCollection",
      data() {
        return {
          active: 0
        }
        }
    }
</script>

<style scoped>
  .XhCollection-cs{
    background-color: #f7f7f7;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 0 0.3rem;
    font-size: 15px;
  }
  .XhCollection-cs .header-cs{
    font-size: 16px;
    height: 0.8rem;
    line-height: 0.8rem;
    /*background-color: red;*/
  }
  .XhCollection-cs .header-cs .icon-fanhui{
    float: left;
    color: red;
  }
  .XhCollection-cs .header-cs .set-cs{
    /*margin-right: 0.16rem;*/
  }
  .XhCollection-cs .header-cs span:last-child{
    float: right;
    font-size: 12px;
  }
  .XhCollection-cs .collect-cs{
    margin-top: 0.2rem;
  }
  .XhCollection-cs .collect-cs img{
    width: 2.4rem;
    height: 2.4rem;
  }
  .XhCollection-cs .collect-product{
    display: flex;
    flex-direction: column;
    height: 7rem;
    align-items: center;
    justify-content: center;
  }
  .XhCollection-cs .collect-product span{
    color: #cccccc;
    font-size: 14px;
  }
  .XhCollection-cs .collect-product button{
    width: 3rem;
    height: 0.8rem;
    border: none;
    background-color: #c72f2e;
    margin-top: 0.5rem;
    color: white;
  }

</style>
