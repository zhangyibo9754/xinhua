<template>
  <div class="LoginLogon">
    <div class="LoginHeader">
      <div class="LoginHeaderCenter">
        <router-link to="/XhLogin"><van-icon  name="arrow-left" /></router-link>
        <p>注册</p>
      </div>
    </div>
    <div class="LoginForgetFooter">
      <div class="LoginFooterBox">
        <div  class="FooterBoxInput">
            <form style="" action="">
            	<div></div>
							<div></div>
							<div></div>
            	<input ref="Account" type="text" placeholder="请输入手机号">
            	<input ref="Pass" type="text" placeholder="图片验证码">
							<input ref="Account" type="text" placeholder="短信验证码">
							<input ref="Pass" type="password" placeholder="请设置密码">
							 <p class="FooterBoxTreaty">
							  <span >已同意<router-link to="/XhLoginTreaty" style="color: #0c77d3;" href="#">《用户注册协议》</router-link></span>
							</p>
							<input class="FooterBoxSign" type="submit" value="注册">
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:"XhRegister",
    data(){
      return{
        checked:true
      }
    }
  }
</script>

<style scoped>
  .LoginLogon{
    width: 100%;
    height: 100%;
    background: #f7f7f7;
    display: flex;
    flex-direction: column;
  }
  .LoginLogon .LoginHeader{
    width: 100%;
    height: 1.07rem;
  }
  .LoginLogon .LoginHeader .LoginHeaderCenter{
    width: 6.9rem;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .LoginLogon .LoginHeader .LoginHeaderCenter p{
    font-size: .37rem;
    color: #000000;
    margin-left: 2.5rem;
  }
  .LoginLogon .LoginHeader .LoginHeaderCenter .van-icon{
    font-size: .4rem !important;
  }



  .LoginLogon .LoginForgetFooter{
    width: 100%;
    float: left;
  }
  .LoginLogon .LoginForgetFooter .LoginFooterBox{
    width: 6.9rem;
    margin: 0 auto;
  }
  .LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput{
    width: 100%;
    float: left;
    margin-top:.6rem ;
    border-radius: .1rem;
  }
	.LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput form{
		width: 100%;
		float: left;
		position: relative;
	}
	.LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput form div{
		position: absolute;
		width: 6.66rem;
		height: 2px;
		background: #dddddd;
		right: 0;
	}
	.LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput form div:nth-child(1){
		top: 1rem;
	}
	.LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput form div:nth-child(2){
		top: 2.2rem;
	}
	.LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput form div:nth-child(3){
		top: 3.3rem;
	}
	.LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput form input{
		display: block;
		width: 100%;
		height:1.1rem ;
		border: 0 !important;
		font-size: .35rem;
		z-index: 2;
		background: #FFFFFF;
		padding: 0 .24rem 0 .24rem;
	}
  .LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput form  .FooterBoxSign{
    width: 100%;
    float: left;
    height: .77rem;
    background: #c62f2e;
    text-align: center;
    line-height:.77rem ;
    font-size:.26rem ;
    color: #FFFFFF;
    border-radius: .1rem;
    margin-top: .5rem;
  }
  .LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput form  .FooterBoxTreaty{
    width: 100%;
    float: left;
    margin-top:.3rem ;
    display: flex;
  }
	
	.LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput form  .FooterBoxTreaty span{
		line-height: .8rem; 
		font-size: 0.3rem;
		margin-left: .2rem;
	}
</style>
