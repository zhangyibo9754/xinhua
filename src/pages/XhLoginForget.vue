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
					<div class="FooterBoxInput-post">
						<div></div>
						<div></div>
						<div></div>
						<input @blur="phoneCheck()" v-model="userPhone" type="text" placeholder="请输入手机号">
						<input v-model="checkCoad"  type="text" placeholder="图片验证码">
						<img @click="checkCode()" :src="base64Str" class="picCode" >
						<input v-model="noteCoad" type="text" placeholder="短信验证码">
						<button  @click="MessageCoad()" class="MessageCoad">发送验证码</button>
						<h1 v-if="flag" class="TimeCoad">{{Time}}后重新发送</h1>
						<input  v-model="userPass"  @blur="passCheck()" type="password" placeholder="请设置新密码">
						<input class="FooterBoxSign" @click="LoginPhonePost()" type="button" value="修改密码">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"XhLoginForget",
		data(){
			return{
				flag:'',
				userPhone:'',
				phone:'',
				checkCoad:'',
				base64Str:'',
				noteCoad:'',
				Time:'',
				userPass:'',
				pass:''
			}
			
		},
		created() {
			this.checkCode()
		},
		methods:{
		phoneCheck(){
				var regPhone=/^((13[0-9])|(14[5,7,9])|(15([0-3]|[5-9]))|(166)|(17[0,1,3,5,6,7,8])|(18[0-9])|(19[8|9]))\d{8}$/;
				if(regPhone.test(this.userPhone)==true){
					this.phone=1;
				}else{
					this.$toast("手机号格式错误！")
				}
			},
		checkCode(){
			this.$axios.get("/api/xinhua/verification/code").then((res)=>{
					if(res.status==200){
						if(res.data.status==0){
							this.base64Str=res.data.datas.base64Str
						}
					}
			}).catch((err)=>{
					this.$toast("请求发送失败！")
			})
		},
		MessageCoad(){
			if(this.phone==1){
				var url='/api/xinhua/verification/update'
				this.$axios.post(url).then((res)=>{
					if(res.status==200){
						console.log(res)
						if(res.data.status==0){
							this.$toast(res.data.err)
							this.Time=60;
							this.flag=true
							let time= setInterval(()=>{
								this.Time--;
								if(this.Time==0){
									clearInterval(time)
									this.flag=false
								}
							},1000)
						}else if(res.data.status==101){
							this.$toast(res.data.err)
						}
					}
				}).catch((err)=>{
					this.$toast("请求发送失败！")
				})
			}else{
				this.$toast("请输入正确的手机格式")
			}
		},
		passCheck(){
				this.pass=1;
		},
		LoginPhonePost(){
				if(this.phone==1&&this.pass==1){
					var url='/api/xinhua/user/updatepass?code='+this.noteCoad+'&&pass='+this.userPass
					this.$axios.put(url).then((res)=>{
						if(res.status==200){
							if(res.data.status==0){
								this.$toast(res.data.err)
								this.$router.push("/XhLogin")
							}else if(res.data.status==2){
								this.$toast(res.data.err)
							}
						}
					})
				}else{
					this.$toast('请输入正确格式');
				}
			}
		}
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
	.XhLoginPhoneMsg{
		position: absolute;
		top: 7%;
		left: 28%;
		font-size: .38rem;
		color: red;
		font-weight: 900;
	}
	.picCode{
		 width: 2rem;
		 height: .9rem;
		 position: absolute;
		 top: 1.2rem; 
		 right: .2rem;
	}
	.MessageCoad{
		height: .7rem;
		width: 2rem;
		position: absolute;
		top: 2.4rem;
		right: .1rem;
		background: red;
		color: #FFFFFF;
		font-size: .2rem;
		line-height: .7rem;
	}
	.TimeCoad{
		height: .7rem;
	  width: 2.5rem;
	  position: absolute;
	  top: 2.4rem;
	  right: .1rem;
	  background: gainsboro;
	  color: #FFFFFF;
	  font-size: .2rem;
	  line-height: .7rem;
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
	.LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-post{
		width: 100%;
		float: left;
		position: relative;
	}
	.LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-post div{
		position: absolute;
		width: 6.66rem;
		height: 2px;
		background: #dddddd;
		right: 0;
	}
	.LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-post div:nth-child(1){
		top: 1rem;
	}
	.LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-post div:nth-child(2){
		top: 2.2rem;
	}
	.LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-post div:nth-child(3){
		top: 3.3rem;
	}
	.LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-post input{
		display: block;
		width: 100%;
		height:1.1rem ;
		border: 0 !important;
		font-size: .35rem;
		z-index: 2;
		padding: 0 .24rem 0 .24rem;
		background: #FFFFFF;
	}
	.LoginForgetFooter .LoginFooterBox .FooterBoxInput .FooterBoxInput-post .FooterBoxSign{
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
