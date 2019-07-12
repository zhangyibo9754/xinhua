<template>
    <div class="XhPersonalMessage-cs">
      <div class="header-cs">
        <span class="iconfont icon-fanhui" @click="$router.back()"></span>
        <span class="set-cs">个人资料</span>
      </div>
      <div class="main-cs">
        <div class="pic-cs">
          <span>头像</span>
          <div>
            <img src="../../static/cs/个人资料_03.png">
            <i class="iconfont icon-jiantouyou"></i>
          </div>
        </div>
        <div class="name-cs">
          <span>昵称</span>
          <div>
            <span>孔式</span>
            <i class="iconfont icon-jiantouyou"></i>
          </div>
        </div>
        <div class="birthday-cs">
          <span>生日</span>
          <div>
            <span>1994-08-06</span>
            <i class="iconfont icon-jiantouyou"></i>
          </div>
        </div>
        <div class="sex-cs" >
          <span>性别</span>
          <div>
            <span>保密</span>
            <i class="iconfont icon-jiantouyou"></i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "XhPersonalMessage"
    }
</script>

<style scoped>
  .XhPersonalMessage-cs{
    background-color: #f7f7f7;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 0 0.3rem;
    font-size: 15px;
  }
  .XhPersonalMessage-cs .header-cs{
    font-size: 16px;
    height: 0.8rem;
    line-height: 0.8rem;
    /*background-color: red;*/
  }
  .XhPersonalMessage-cs .header-cs .icon-fanhui{
    float: left;
    color: red;
  }
  .XhPersonalMessage-cs .header-cs .set-cs{
    margin-right: 0.16rem;

  }
  .XhPersonalMessage-cs .main-cs{
    width: 100%;
    height: 5.54rem;
    background-color: #ffffff;
    margin-top: 0.56rem;
  }
  .XhPersonalMessage-cs .main-cs .pic-cs,.XhPersonalMessage-cs .main-cs .sex-cs,.XhPersonalMessage-cs .main-cs .name-cs,.XhPersonalMessage-cs .main-cs .birthday-cs{
    width: 96%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cccccc;
    margin: 0 auto;
  }
  .XhPersonalMessage-cs .main-cs .birthday-cs{
    height: 1.18rem;
  }
  .XhPersonalMessage-cs .main-cs .birthday-cs>div{
    display: flex;align-items: center
  }
  .XhPersonalMessage-cs .main-cs .birthday-cs i{
    margin-left: 0.26rem
  }

  .XhPersonalMessage-cs .main-cs .name-cs{
    height: 1.18rem;
  }
  .XhPersonalMessage-cs .main-cs .name-cs>div{
    display: flex;align-items: center
  }
  .XhPersonalMessage-cs .main-cs .name-cs i{
    margin-left: 0.26rem
  }
  .XhPersonalMessage-cs .main-cs .pic-cs{
    height: 1.96rem;
  }
  .XhPersonalMessage-cs .main-cs .pic-cs>div{
    display: flex;align-items: center
  }
  .XhPersonalMessage-cs .main-cs .pic-cs img{
    width: 1.1rem;height: 1.1rem
  }
  .XhPersonalMessage-cs .main-cs .pic-cs i {
    margin-left: 0.26rem
  }
.XhPersonalMessage-cs .main-cs .sex-cs{
  height: 1.18rem;border: none
}
  .XhPersonalMessage-cs .main-cs .sex-cs>div{
    display: flex;align-items: center
  }
  .XhPersonalMessage-cs .main-cs .sex-cs>div>i{
    margin-left: 0.26rem
  }
</style>
