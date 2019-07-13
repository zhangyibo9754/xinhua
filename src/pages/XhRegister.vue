<template>
  <div class="LoginLogon">
		<p class="XhLoginPhoneMsg" >{{PhoneMsg}}</p>
    <div class="LoginHeader">
      <div class="LoginHeaderCenter">
        <router-link to="/XhLogin"><van-icon  name="arrow-left" /></router-link>
        <p>注册</p>
      </div>
    </div>
    <div class="LoginForgetFooter">
      <div class="LoginFooterBox">
        <div  class="FooterBoxInput">
            <div class="FooterBoxInput-input">
            	<div></div>
							<div></div>
							<div></div>
            	<input @input="phoneCheck()" v-model="userPhone" type="text" placeholder="请输入手机号">
            	<input v-model="checkCoad"  type="text" placeholder="图片验证码">
            	<h1 @click="PicCheck()" class="picCode" >{{picCode}}</h1>
							<input  type="text" placeholder="短信验证码">
							<button class="MessageCoad">发送验证码</button>
							<input  v-model="userPass"  @input="passCheck()" type="password" placeholder="请设置密码">
							 <p class="FooterBoxTreaty">
							  <span >已同意<router-link to="/XhLoginTreaty" style="color: #0c77d3;" href="#">《用户注册协议》</router-link></span>
							</p>
							<input class="FooterBoxSign" @click="LoginPhonePost()" type="button" value="注册">
            </div>
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
				PhoneMsg:"",
				userPhone:"",
				phone:'',
				checkCoad:'',
				picCode:'DWQD',
				userPass:'',
				pass:""
      }
    },
		methods:{
			phoneCheck(){
				var regPhone=/^1\d{10}$/;
				if(regPhone.test(this.userPhone)==true){
					this.PhoneMsg=''
					this.phone=1;
				}
			},
			PicCheck(){
				var newcode='';
				var Array=["A","B","C","D","E","F","G","H","I","J","K","O","P"];
				
				for(var i=0;i<4;i++){
					var index=Math.floor(Math.random()*10);
					newcode+=Array[index]
				}
				this.picCode=newcode
			},
			passCheck(){
				var regPass=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
				if(regPass.test(this.userPass)==true){
					this.PhoneMsg='';
					this.pass=1;
				}
			},
			LoginPhonePost(){
				if(this.pass==1&&this.phone==1){
					let info={
					    username:this.userPhone,
					    userpass:this.userPass
					};
					fetch("http://localhost:3000/yanxuan/api/login",{
					    method: "post", //传参方式
					    headers: {
					        "Content-Type": "application/json" //请求头
					    },
					    body: JSON.stringify(info) //传的参数
					}).then(res=>{
					    res.json().then(data=>{
					        if (data.state == 0) {
					            this.$toast("注册失败，请重新注册");
					        }else{
					            this.$toast("注册成功");
					            localStorage.setItem('username', info.username);//存储用户名
					            this.$router.push("/XhLogin");
					            //将用户名，密码保存至浏览器
					        }
					    })
					})
				}else{
					this.$toast('此次注册信息有误');
				}
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
	.XhLoginPhoneMsg{
		position: absolute;
		top: 7%;
		left: 28%;
		font-size: .38rem;
		color: red;
		font-weight: 900;
	}
	.picCode{
		 height: 1.1rem;
		 line-height: 1.1rem;
		 font-size: .5rem; 
		 color: blue; 
		 position: absolute;
		 top: 1rem; 
		 left: 5.3rem;
	}
	.MessageCoad{
		height: .9rem;
		line-height: .9rem;
		font-size: .1rem; 
		width: 2rem;
		color: blue; 
		position: absolute;
		top: 2.3rem; 
		left: 4.9rem;
		background: red;
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
	.LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-input{
		width: 100%;
		float: left;
		position: relative;
	}
	.LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-input div{
		position: absolute;
		width: 6.66rem;
		height: 2px;
		background: #dddddd;
		right: 0;
	}
	.LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-input div:nth-child(1){
		top: 1rem;
	}
	.LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-input div:nth-child(2){
		top: 2.2rem;
	}
	.LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-input div:nth-child(3){
		top: 3.3rem;
	}
	.LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-input input{
		display: block;
		width: 100%;
		height:1.1rem ;
		border: 0 !important;
		font-size: .35rem;
		z-index: 2;
		background: #FFFFFF;
		padding: 0 .24rem 0 .24rem;
	}
  .LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-input  .FooterBoxSign{
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
  .LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-input  .FooterBoxTreaty{
    width: 100%;
    float: left;
    margin-top:.3rem ;
    display: flex;
  }
	
	.LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-input  .FooterBoxTreaty span{
		line-height: .8rem; 
		font-size: 0.3rem;
		margin-left: .2rem;
	}
</style>
