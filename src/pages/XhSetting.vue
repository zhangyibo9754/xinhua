<template>
    <div class="XhSetting-cs">
      <div class="header-cs">
        <span class="iconfont icon-fanhui" @click="$router.back()"></span>
        <span class="set-cs">设置</span>
      </div>
      <div class="main-cs">
        <div>
          <p>版本更新</p>
          <div>
            <span>检查新版本</span>
            <i class="iconfont icon-jiantouyou"></i>
          </div>
        </div>
        <div>
          <p>关于</p>
          <div>
            <span>v1.0.11</span>
            <i class="iconfont icon-jiantouyou"></i>
          </div>
        </div>
        <div>
          <p>清楚缓存</p>
          <div>
            <span>10.3M</span>
            <i class="iconfont icon-jiantouyou"></i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "XhSetting"
    }
</script>

<style scoped>
  .XhSetting-cs{
    background-color: #f7f7f7;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 0 0.3rem;
    font-size: 15px;
  }
  .XhSetting-cs .header-cs{
    font-size: 16px;
    height: 0.8rem;
    line-height: 0.8rem;
    /*background-color: red;*/
  }
  .XhSetting-cs .header-cs .icon-fanhui{
    float: left;
    color: red;
  }
  .XhSetting-cs .header-cs .set-cs{
    margin-right: 0.16rem;

  }
  .XhSetting-cs .main-cs{
    background-color: white;
    padding: 0 0.2rem;
    margin-top: 0.3rem;
  }
  .XhSetting-cs .main-cs>div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 1.2rem;
    border-bottom: 1px solid #cccccc;
  }
  .XhSetting-cs .main-cs>div:last-child{
    border: none;
  }
  .XhSetting-cs .main-cs>div>div{
    color: #cccc;
  }
</style>
