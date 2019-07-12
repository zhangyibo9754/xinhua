<template>
    <div class="XhUpdatePassword-cs">
      <div class="header-cs">
        <span class="iconfont icon-fanhui" @click="$router.back()"></span>
        <span class="set-cs">修改密码</span>
      </div>
      <input type="password" placeholder="请输入原密码">
      <button>下一步</button>
    </div>
</template>

<script>
    export default {
        name: "XhUpdatePassword",
    }
</script>

<style scoped>
  .XhUpdatePassword-cs{
    background-color: #f7f7f7;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 0 0.3rem;
    font-size: 15px;
  }
  .XhUpdatePassword-cs .header-cs{
    font-size: 16px;
    height: 0.8rem;
    line-height: 0.8rem;
  }
  .XhUpdatePassword-cs .header-cs .icon-fanhui{
    float: left;
    color: red;
  }
  .XhUpdatePassword-cs .header-cs .set-cs{
    margin-right: 0.16rem;

  }
  .XhUpdatePassword-cs input{
 width: 6.8rem;height: 1.2rem;margin-top: 0.5rem;padding-left: 0.2rem;border: none
  }
  .XhUpdatePassword-cs button{
    width: 6.8rem;
    height: 0.82rem;
    background-color: #c72f2e;
    border:none;
    color: white;
    margin-top: 0.48rem;
  }
</style>
