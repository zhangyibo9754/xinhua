<template>
    <div class="Login" >
		<div class="LoginHeader"  >
			<div class="LoginHeaderCenter">
				<van-icon  name="arrow-left" />
			</div>
		</div>
		<div class="LoginTitle"  >
			<div class="LoginTitleBox">
				<span @click="flag=1,LoginFontSize()" ref="Login">账号登录</span>
				<span @click="flag=2,QuestLoginFontSize()" ref="QuestLogin">快捷登录</span>
				<div  class="Pos1" v-show="flag==1"></div>
				<div  class="Pos2" v-show="flag==2"></div>
			</div>
		</div>
		<div class="LoginFooter"  >
			<div v-show="flag==1" class="LoginFooterBox">
				<div  class="FooterBoxInput">
					<form  action="">
						<div></div>
						<!-- <p ref="account" @click="ChangeAccount()">账号</p>
						<p ref="pass" @click="ChangePass()">密码</p> -->
						<input  v-model="Account" type="text" placeholder="账号">
						<input  v-model="Pass" type="password" placeholder="密码">
						<p class="FooterBoxPost" >
							<router-link tag="span" to="/XhRegisterProtocol">注册</router-link>
							<router-link tag="span" to="/XhLoginForget">忘记密码</router-link>
						</p>
						<input  @click="Post()" type="submit" class="FooterBoxSign" value="登录">
					</form>
				</div>
				
				
				
				
				
				<div class="FooterBoxThird">
					<div class="one">
						<img src="../assets/xhimg/wx.png"  alt="">
						<span >微信</span>
					</div>
					<div class="one">
						<img src="../assets/xhimg/qq.png"  alt="">
						<span >qq</span>
					</div>
					<div class="one">
						<img src="../assets/xhimg/weiBo.png"  alt="">
						<span >微博</span>
					</div>
				</div>
			</div>
			
			<div v-show="flag==2" class="LoginFooterBox">
				
				
				
				<div class="FooterBoxInput">
					<form style="" action="">
						<div></div>
						<div></div>
						<!-- <p ref="account1" @click="ChangeAccount1()">账号</p>
						<p ref="pass1" @click="ChangePass1()">密码</p> -->
						<input ref="Account1"  type="text" placeholder="请输入手机号">
						<input ref="Pass1" type="password" placeholder="图片验证码">
						<input ref="Pass" type="password" placeholder="短信验证码">
						<input  type="submit" class="FooterBoxSign" value="登录">
					</form>
				</div>
				<div class="FooterBoxTreaty">
					<van-checkbox v-model="checked" checked-color="#e61818"></van-checkbox>
					<span >已同意<router-link to="/XhLoginTreaty" style="color: #0c77d3;" href="#">《用户注册协议》</router-link></span>
				</div>
				<div class="FooterBoxThird">
					<div class="one">
						<img src="../assets/xhimg/wx.png"  alt="">
						<span >微信</span>
					</div>
					<div class="one">
						<img src="../assets/xhimg/qq.png"  alt="">
						<span >qq</span>
					</div>
					<div class="one">
						<img src="../assets/xhimg/weiBo.png"  alt="">
						<span >微博</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Login",
		data(){
			return{
				flag:1,
				checked:false,
				Account:"",
				Pass:""
			}
		},
		// &&/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/.test()
		computed:{
			account(){
				return (/^1\d{10}$/.test(this.Account)&&/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/.test(this.Pass))
			}
		},
		methods:{
			LoginFontSize(){
				this.$refs.Login.style.fontSize=".48rem";
				this.$refs.QuestLogin.style.fontSize=".38rem";
			},
			QuestLoginFontSize(){
				this.$refs.Login.style.fontSize=".38rem";
				this.$refs.QuestLogin.style.fontSize=".48rem";
			},
			Post(){
				if(this.account==false){
					alert("错误")
					return false
				}else{
					return true
				}
				
			}
// 			ChangeAccount(){
// 				this.$refs.account.style.fontSize=".2rem";
// 				this.$refs.account.style.lineHeight=".2rem";
// 				this.$refs.pass.style.fontSize=".3rem";
// 				this.$refs.pass.style.lineHeight="1.1rem";
// 				this.$refs.Account.focus();
// 			},
// 			ChangePass(){
// 				this.$refs.pass.style.fontSize=".2rem";
// 				this.$refs.pass.style.lineHeight=".2rem";
// 				this.$refs.account.style.fontSize=".3rem";
// 				this.$refs.account.style.lineHeight="1.1rem";
// 				this.$refs.Pass.focus();
// 			},
// 			Change(){
// 				this.$refs.account.style.fontSize=".3rem";
// 				this.$refs.account.style.lineHeight="1.1rem";
// 				this.$refs.pass.style.fontSize=".3rem";
// 				this.$refs.pass.style.lineHeight="1.1rem";
// 				this.$refs.account1.style.fontSize=".3rem";
// 				this.$refs.account1.style.lineHeight="1.1rem";
// 				this.$refs.pass1.style.fontSize=".3rem";
// 				this.$refs.pass1.style.lineHeight="1.1rem";
// 			},
// 			ChangeAccount1(){
// 				this.$refs.account1.style.fontSize=".2rem";
// 				this.$refs.account1.style.lineHeight=".2rem";
// 				this.$refs.pass1.style.fontSize=".3rem";
// 				this.$refs.pass1.style.lineHeight="1.1rem";
// 				this.$refs.Account1.focus()
// 			},
// 			ChangePass1(){
// 				this.$refs.pass1.style.fontSize=".2rem";
// 				this.$refs.pass1.style.lineHeight=".2rem";
// 				this.$refs.account1.style.fontSize=".3rem";
// 				this.$refs.account1.style.lineHeight="1.1rem";
// 				this.$refs.Pass1.focus()
// 			}
		},
		directives:{
			Change:function(el,binding){
				el.onclick=()=>{
					el.style.fontSize=".1rem"
					el.style.lineHeight=".2rem"
				}
			},
			
		}
		
    }
</script>

<style scoped>
	.Login{
		width: 100%;
		height: 100%;
		background: #f7f7f7;
	}
	.LoginHeader{
		width: 100%;
		height: 1.07rem;
	}
	.LoginHeader .LoginHeaderCenter{
		width: 6.9rem;
		height: 100%;
		margin: 0 auto;
		display: flex;
		align-items: center;
	}
	.LoginHeader .LoginHeaderCenter .van-icon{
		font-size: .4rem !important;
	}
	.LoginTitle{
		width: 100%;
		height: .87rem;
	}
	.LoginTitle .LoginTitleBox{
		width: 6.9rem;
		height: 100%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-around;
		position: relative;
		font-size:.38rem ;
		color: #363433;
	}
	.LoginTitle .LoginTitleBox div{
		width: .6rem;
		height: .04rem;
		background: red;
	}
	.LoginTitle .LoginTitleBox .Pos1{
		position: absolute;
		bottom: 0;
		left: 1.4rem;
	}
	.LoginTitle .LoginTitleBox .Pos2{
		position: absolute;
		bottom: 0;
		right: 1.4rem;
	}
	.LoginFooter{
		width: 100%;
		float: left;
	}
	.LoginFooter .LoginFooterBox{
		width: 6.9rem;
		margin: 0 auto;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput{
		width: 100%;
		float: left;
		margin-top:.6rem ;
		border-radius: .1rem;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput form{
		width: 100%;
		float: left;
		position: relative;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput form div{
		position: absolute;
		width: 6.66rem;
		height: 2px;
		right: 0;
		background: #dddddd;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput form div:nth-child(1){
		top: 1rem;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput form div:nth-child(2){
		top: 2.1rem;
	}
/* 	.LoginFooter .LoginFooterBox .FooterBoxInput form p{
		line-height: 1.1rem;
		width: 100%;
		text-align: left;
		color:#bbbbbb ;
		font-size:.3rem;
		position: absolute;
		z-index: 1111;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput form p:nth-child(1){
		top: 0rem;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput form p:nth-child(2){
		top: 1.1rem;
	} */
	.LoginFooter .LoginFooterBox .FooterBoxInput form input{
		display: block;
		width: 100%;
		height:1.1rem ;
		border: 0 !important;
		font-size: .35rem;
		z-index: 2;
		float: left;
		padding: 0 .24rem 0 .24rem;
	}
	 .LoginFooter .LoginFooterBox .FooterBoxInput form .FooterBoxPost{
		width: 100%;
		height: 1.46rem;
		float: left;
		line-height: 1.46rem;
		font-size: .27rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: .3rem 0 .3rem;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput form .FooterBoxSign{
		width: 100%;
		float: left;
		height: .77rem;
		background: #c62f2e;
		text-align: center;
		line-height:.77rem ;
		font-size:.26rem ;
		color: #FFFFFF;
		border-radius: .1rem;
		margin-top: .4rem;
	}
	.LoginFooter .LoginFooterBox .FooterBoxTreaty{
		width: 100%;
		float: left;
		margin-top:.3rem ;
		display: flex;
	}
	.LoginFooter .LoginFooterBox .FooterBoxTreaty span{
		line-height: .8rem;
		 font-size: 0.4rem;
		 margin-left: .2rem;
	}
	
	.LoginFooter .LoginFooterBox .FooterBoxThird{
		width: 100%;
		float: left;
		margin-top: 4.65rem;
		display: flex;
		justify-content: space-around;
	}
	.LoginFooter .LoginFooterBox .FooterBoxThird .one{
		width: 1.2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.LoginFooter .LoginFooterBox .FooterBoxThird .one img{
		width: .5rem;
		height:.5rem;
	}
	.LoginFooter .LoginFooterBox .FooterBoxThird .one span{
		font-size: .33rem;color: #9e9e9e;
	}
</style>
