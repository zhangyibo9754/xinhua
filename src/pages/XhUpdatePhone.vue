<template>
    <div class="XhUpdatePhone-cs">
      <div class="header-cs">
        <span class="iconfont icon-fanhui" @click="$router.back()"></span>
        <span class="set-cs">修改手机</span>
      </div>
      <div class="main-cs">
        <input type="text"  placeholder="186****1471">
        <input type="text"  placeholder="图片验证码" @focus="focusChange" @blur="blurChange">
        <input type="text"  placeholder="短信验证码" @focus="focusChange" @blur="blurChange">
        <button>发送验证码</button>
      </div>
      <button>下一步</button>
    </div>
</template>

<script>
    export default {
        name: "XhUpdatePhone",
      methods:{
        focusChange(e){
          e.target.style.transition="all 0.4s"
          e.target.style.fontSize="12px"
          // e.target.style.lineHeight ="10px"
        },
        blurChange(e){
          e.target.style.fontSize="20px"
          // e.target.style.lineHeight ="40px"
        }
      }
    }
</script>

<style scoped>
  .XhUpdatePhone-cs{
    background-color: #f7f7f7;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 0 0.3rem;
    font-size: 15px;
  }
  .XhUpdatePhone-cs .header-cs{
    font-size: 16px;
    height: 0.8rem;
    line-height: 0.8rem;
    /*background-color: red;*/
  }
  .XhUpdatePhone-cs .header-cs .icon-fanhui{
    float: left;
    color: red;
  }
  .XhUpdatePhone-cs .header-cs .set-cs{
    margin-right: 0.16rem;

  }
  .XhUpdatePhone-cs .main-cs{
    width: 100%;
    background-color: #ffffff;
    margin-top: 0.7rem;
    position: relative;
  }
  .XhUpdatePhone-cs .main-cs input{
    height: 1.2rem;
    width: 96%;
    border: none;
    border-bottom: 1px solid #cccccc;
    padding-left: 0.26rem;
    margin: 0 auto;
    display: block;
    font-size: 25px;
    line-height:1.2rem ;
  }
  .XhUpdatePhone-cs .main-cs input:nth-child(3){
    border: none
  }
  .XhUpdatePhone-cs .main-cs button{
    width: 1.9rem;
    height: 0.58rem;
    background-color: #c72f2e;
    color: white;
    border: none;
    position: absolute;
    right: 0.16rem;
    bottom: 0.28rem;
  }
  .XhUpdatePhone-cs>button{
    width: 100%;
    height: 0.85rem;
    background-color:#c72f2e;
    color: white;
    border: none;
    margin-top: 0.5rem;
  }
</style>
