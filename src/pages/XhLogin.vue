<template>
    <div class="Login">
		<div class="LoginHeader">
			<div class="LoginHeaderCenter">
				<van-icon  name="arrow-left" />
			</div>
		</div>
		<div class="LoginTitle">
			<div class="LoginTitleBox">
				<span @click="flag=1,LoginFontSize()" ref="Login">账号登录</span>
				<span @click="flag=2,QuestLoginFontSize()" ref="QuestLogin">快捷登录</span>
				<div  class="Pos1" v-show="flag==1"></div>
				<div  class="Pos2" v-show="flag==2"></div>
			</div>
		</div>
		<div class="LoginFooter">
			<div v-show="flag==1" class="LoginFooterBox">
				<div  class="FooterBoxInput">
					
				</div>
				<div class="FooterBoxPost">
					<router-link tag="span" to="/treaty">注册</router-link>
					<router-link tag="span" to="/forget">忘记密码</router-link>
				</div>
				<div class="FooterBoxSign">
					登录
				</div>
				<div class="FooterBoxThird">
					<div class="one">
						<img src="../../../newimg/wx.png" style="width: .5rem;height:.5rem ;" alt="">
						<span style="font-size: .33rem;color: #9e9e9e;">微信</span>
					</div>
					<div class="one">
						<img src="../../../newimg/qq.png" style="width: .5rem;height:.5rem ;" alt="">
						<span style="font-size: .33rem;color: #9e9e9e;">qq</span>
					</div>
					<div class="one">
						<img src="../../../newimg/weiBo.png" style="width: .5rem;height:.5rem ;" alt="">
						<span style="font-size: .33rem;color: #9e9e9e;">微博</span>
					</div>
				</div>
			</div>
			
			<div v-show="flag==2" class="LoginFooterBox">
				<div class="FooterBoxInput">
					
				</div>
				<div class="FooterBoxSign" style="margin-top: .4rem;">
					登录
				</div>
				<div class="FooterBoxTreaty">
					<van-checkbox v-model="checked" checked-color="#e61818"></van-checkbox>
					<span style="line-height: .8rem; font-size: 0.4rem;margin-left: .2rem;">已同意<router-link to="/treatySecond" style="color: #0c77d3;" href="#">《用户注册协议》</router-link></span>
				</div>
				<div class="FooterBoxThird">
					<div class="one">
						<img src="../../../newimg/wx.png" style="width: .5rem;height:.5rem ;" alt="">
						<span style="font-size: .33rem;color: #9e9e9e;">微信</span>
					</div>
					<div class="one">
						<img src="../../../newimg/qq.png" style="width: .5rem;height:.5rem ;" alt="">
						<span style="font-size: .33rem;color: #9e9e9e;">qq</span>
					</div>
					<div class="one">
						<img src="../../../newimg/weiBo.png" style="width: .5rem;height:.5rem ;" alt="">
						<span style="font-size: .33rem;color: #9e9e9e;">微博</span>
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
				checked:false
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
			}
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
		background: #FFFFFF;
		height: 2.24rem;
		float: left;
		margin-top:.6rem ;
		border-radius: .1rem;
	}
	.LoginFooter .LoginFooterBox .FooterBoxPost{
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
	.LoginFooter .LoginFooterBox .FooterBoxSign{
		width: 100%;
		float: left;
		height: .77rem;
		background: #c62f2e;
		text-align: center;
		line-height:.77rem ;
		font-size:.26rem ;
		color: #FFFFFF;
		border-radius: .1rem;
	}
	.LoginFooter .LoginFooterBox .FooterBoxTreaty{
		width: 100%;
		float: left;
		margin-top:.3rem ;
		display: flex;
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
</style>
