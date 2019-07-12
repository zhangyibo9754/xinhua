<template>
    <div class="XhAddressManagement-cs">
      <div class="header-cs">
        <span class="iconfont icon-fanhui" @click="$router.back()"></span>
        <span class="set-cs">管理收货地址</span>
      </div>
      <div class="main-cs">
        <img src="../../static/cs/管理收货地址.png">
        <p>暂无地址信息</p>
        <button @click="$router.push('/XhCreateAddress')">新建地址</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "XhAddressManagement"
    }
</script>

<style scoped>
  .XhAddressManagement-cs{
    background-color: #f7f7f7;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 0 0.3rem;
    font-size: 15px;
    display: flex;
    flex-direction: column;
  }
  .XhAddressManagement-cs .header-cs{
    font-size: 16px;
    height: 0.8rem;
    line-height: 0.8rem;
    /*background-color: red;*/
  }
  .XhAddressManagement-cs .header-cs .icon-fanhui{
    float: left;
    color: red;
  }
  .XhAddressManagement-cs .header-cs .set-cs{
    margin-right: 0.16rem;

  }
  .XhAddressManagement-cs .main-cs{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2.92rem;
  }
  .XhAddressManagement-cs .main-cs img{
    width: 2rem;
    height: 2.44rem;
  }
  .XhAddressManagement-cs .main-cs p{
    margin: 0.76rem 0 0.54rem 0;
    color: #9a9a9a;
  }
  .XhAddressManagement-cs .main-cs button{
    width: 3.18rem;
    height: 0.9rem;
    border: none;
    background-color: #c72f2e;
    color: white;
  }
</style>
