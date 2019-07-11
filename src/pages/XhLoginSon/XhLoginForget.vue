<template>
	<div class="LoginForget">
		<div class="LoginHeader">
			<div class="LoginHeaderCenter">
				<router-link to="/Login"><van-icon  name="arrow-left" /></router-link>
				<p>忘记密码</p>
			</div>
		</div>
		<div class="LoginForgetFooter">
			<div class="LoginFooterBox">
				<div  class="FooterBoxInput">
					
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
		name:"XhLoginForget"
	}
</script>

<style scoped>
	.LoginForget{
		width: 100%;
		height: 100%;
		background: #f7f7f7;
		display: flex;
		flex-direction: column;
	}
	.LoginForget .LoginHeader{
		width: 100%;
		height: 1.07rem;
	}
	.LoginForget .LoginHeader .LoginHeaderCenter{
		width: 6.9rem;
		height: 100%;
		margin: 0 auto;
		display: flex;
		align-items: center;
	}
	.LoginForget .LoginHeader .LoginHeaderCenter p{
		font-size: .42rem;
		color: #000000;
		margin-left: 2.5rem;
	}
	.LoginForget .LoginHeader .LoginHeaderCenter .van-icon{
		font-size: .4rem !important;
	}
	
	
	
	.LoginForgetFooter{
		width: 100%;
		float: left;
	}
	.LoginForgetFooter .LoginFooterBox{
		width: 6.9rem;
		margin: 0 auto;
	}
	.LoginForgetFooter .LoginFooterBox .FooterBoxInput{
		width: 100%;
		background: #FFFFFF;
		height: 2.24rem;
		float: left;
		margin-top:.6rem ;
		border-radius: .1rem;
	}
	.LoginForgetFooter .LoginFooterBox .FooterBoxSign{
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
</style>
