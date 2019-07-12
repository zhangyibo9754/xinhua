<template>
	<div class="LoginForget">
		<div class="LoginHeader">
			<div class="LoginHeaderCenter">
				<router-link to="/XhLogin"><van-icon  name="arrow-left" /></router-link>
				<p>忘记密码</p>
			</div>
		</div>
		<div class="LoginForgetFooter">
			<div class="LoginFooterBox">
				<div  class="FooterBoxInput">
					<form style="" action="">
						<div></div>
						<div></div>
						<input ref="Account" type="text" placeholder="请输入手机号">
						<input ref="Pass" type="text" placeholder="图片验证码">
						<input ref="Account" type="text" placeholder="短信验证码">
						<input class="FooterBoxSign" type="submit" value="下一步">
					</form>
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
		float: left;
		margin-top:.6rem ;
		border-radius: .1rem;
	}
	.LoginForgetFooter .LoginFooterBox .FooterBoxInput form{
		width: 100%;
		float: left;
		position: relative;
	}
	.LoginForgetFooter .LoginFooterBox .FooterBoxInput form div{
		position: absolute;
		width: 6.66rem;
		height: 2px;
		background: #dddddd;
		right: 0;
	}
	.LoginForgetFooter .LoginFooterBox .FooterBoxInput form div:nth-child(1){
		top: 1rem;
	}
	.LoginForgetFooter .LoginFooterBox .FooterBoxInput form div:nth-child(2){
		top: 2.2rem;
	}
	.LoginForgetFooter .LoginFooterBox .FooterBoxInput form div:nth-child(3){
		top: 3.3rem;
	}
	.LoginForgetFooter .LoginFooterBox .FooterBoxInput form input{
		display: block;
		width: 100%;
		height:1.1rem ;
		border: 0 !important;
		font-size: .35rem;
		z-index: 2;
		padding: 0 .24rem 0 .24rem;
		background: #FFFFFF;
	}
	.LoginForgetFooter .LoginFooterBox .FooterBoxInput form .FooterBoxSign{
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
