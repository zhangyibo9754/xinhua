<template>
	<div class="LoginLogon">
		<div class="LoginHeader">
			<div class="LoginHeaderCenter">
				<router-link to="/Login"><van-icon  name="arrow-left" /></router-link>
				<p>注册</p>
			</div>
		</div>
		<div class="LoginForgetFooter">
			<div class="LoginFooterBox">
				<div  class="FooterBoxInput">
					
				</div>
				<div class="FooterBoxTreaty">
					<van-checkbox v-model="checked" checked-color="#e61818"></van-checkbox>
					<span style="line-height: .8rem; font-size: 0.3rem;margin-left: .2rem;">已同意<router-link to="/treatySecond" style="color: #0c77d3;" href="#">《用户注册协议》</router-link></span>
				</div>
				<div class="FooterBoxSign">
					下一步
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"XhLoginLogon",
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
		background: #FFFFFF;
		height: 2.24rem;
		float: left;
		margin-top:.6rem ;
		border-radius: .1rem;
	}
	.LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxSign{
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
	.LoginLogon .LoginForgetFooter .LoginFooterBox .FooterBoxTreaty{
		width: 100%;
		float: left;
		margin-top:.3rem ;
		display: flex;
	}
</style>
