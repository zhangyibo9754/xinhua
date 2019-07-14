<template>
    <div class="Login" >
		
		<div class="LoginHeader" >
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
					<div class="XhLoginPost">
						<div></div>
						<!-- <p ref="account" @click="ChangeAccount()">账号</p>
						<p ref="pass" @click="Changepass()">密码</p> -->
						<!-- <input  v-model="userphone" @input="phoneCheck()" type="text" placeholder="账号"> -->
						<input v-model="userId" @input="idCheck()"  type="text" placeholder="账号">
						<input  v-model="userPass"  @input="passCheck()" type="password" placeholder="密码">
						<p class="FooterBoxPost" >
							<router-link tag="span" to="/XhRegisterProtocol">注册</router-link>
							<router-link tag="span" to="/XhLoginForget">忘记密码</router-link>
						</p>
						<input @click="XhLoginPost()" type="button" class="FooterBoxSign" value="登录">
						<p class="XhLoginMsg" >{{Msg}}</p>
					</div>
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
					<div class="XhLoginPost">
						<div></div>
						<div></div>
						<!-- <p ref="account1" @click="ChangeAccount1()">账号</p>
						<p ref="pass1" @click="ChangePass1()">密码</p> -->
						<input @input="phoneCheck()" v-model="userPhone" type="text" placeholder="请输入手机号">
						<input v-model="checkCoad"  type="text" placeholder="图片验证码">
						<img @click="PicCheck()" src="" class="picCode" >
						<input   type="text" placeholder="短信验证码">
						<button class="MessageCoad">发送验证码</button>
						<p class="XhLoginPhoneMsg" >{{PhoneMsg}}</p>
						<input @click="LoginPhonePost()" type="button" class="FooterBoxSign" value="登录">
					</div>
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
				userId:'',
				userPass:'',
				Msg:'',
				PhoneMsg:"",
				id:"",
				pass:"",
				userPhone:"",
				phone:"",
				picCode:"FEVA",
				checkCoad:"",
			}
		},
		// &&/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/.test()
		computed:{
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
			// 账号登录
			idCheck(){
			    var regid=/^[a-zA-Z]{1}\d{8,}$/;
			    if(regid.test(this.userId)==true){
			        this.Msg='';
			        this.id=1;
			    }
			},
			// 密码验证
			passCheck(){
				var regPass=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
				if(regPass.test(this.userPass)==true){
					this.Msg='';
					this.pass=1;
				}
			},
			// 手机验证
			phoneCheck(){
				var regPhone=/^1\d{10}$/;
				if(regPhone.test(this.userPhone)==true){
					this.PhoneMsg=''
					this.phone=1;
				}
			},
			// 图片验证码
			// PicCheck(){
// 				var newcode='';
// 				var Array=["A","B","C","D","E","F","G","H","I","J","K","O","P"];
// 				
// 				for(var i=0;i<4;i++){
// 					var index=Math.floor(Math.random()*10);
// 					newcode+=Array[index]
// 				}
// 				this.picCode=newcode
// 			},
			// 账号登录
			XhLoginPost(){
				if(this.id==1&&this.pass==1){
				$axios.post("http://localhost:3000/api/data",{
					username:this.userPhone,
					userpass:this.userPass
				}).then(function(res){
					
				}).catch(function(err){
					
				})
				
// 					let info={
// 					    username:this.userPhone,
// 					    userpass:this.userPass
// 					};
// 					fetch("http://localhost:3000/api/data",{
// 					    method: "post", //传参方式
// 					    headers: {
// 					        "Content-Type": "application/json" //请求头
// 					    },
// 					    body: JSON.stringify(info) //传的参数
// 					}).then(res=>{
// 					    	res.json().then(data=>{
// 					        if (data.state == 0) {
// 					            this.$toast("亲，用户名或者密码错误");
// 					        }else{
// 					            this.$toast("登录成功");
// 					            localStorage.setItem('username', info.username);//存储用户名
// 					            this.$router.push("/");
// 					            //将用户名，密码保存至浏览器
// 					        }
// 					    })
// 					})



				}else{
					this.$toast('此账户信息有误');
				}
			},
			//快捷登陆
			LoginPhonePost(){
				if(this.phone==1&&this.checked==true){
					let info={
					    username:this.userPhone,
					    userpass:this.userPass
					};
					fetch("http://localhost:3000/api/data",{
					    method: "post", //传参方式
					    headers: {
					        "Content-Type": "application/json" //请求头
					    },
					    body: JSON.stringify(info) //传的参数
					}).then(res=>{
					    res.json().then(data=>{
					        if (data.state == 0) {
					            this.$toast("亲，用户名或者密码错误");
					        }else{
					            this.$toast("登录成功");
					            localStorage.setItem('username', info.username);//存储用户名
					            this.$router.push("/");
					            //将用户名，密码保存至浏览器
					        }
					    })
					})
				}else{
					this.$toast('此次手机登录信息有误');
				}
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
		float: left;
		margin-top:.6rem ;
		border-radius: .1rem;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost{
		width: 100%;
		float: left;
		position: relative;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost .XhLoginMsg{
		font-size: .38rem;
		color: red;
		font-weight: 900;
	}
    .LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost  .XhLoginPhoneMsg{
		font-size: .38rem;
		color: red;
		font-weight: 900;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost div{
		position: absolute;
		width: 6.66rem;
		height: 2px;
		right: 0;
		background: #dddddd;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost div:nth-child(1){
		top: 1rem;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost div:nth-child(2){
		top: 2.1rem;
	}
/* 	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost p{
		line-height: 1.1rem;
		width: 100%;
		text-align: left;
		color:#bbbbbb ;
		font-size:.3rem;
		position: absolute;
		z-index: 1111;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost p:nth-child(1){
		top: 0rem;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost p:nth-child(2){
		top: 1.1rem;
	} */
	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost input{
		display: block;
		width: 100%;
		height:1.1rem ;
		border: 0 !important;
		font-size: .35rem;
		z-index: 2;
		float: left;
		padding: 0 .24rem 0 .24rem;
	}
	 .LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost .FooterBoxPost{
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
	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost .FooterBoxSign{
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
	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost .picCode{
		 height: 1.1rem;
		 line-height: 1.1rem;
		 font-size: .5rem; 
		 color: blue; 
		 position: absolute;
		 top: 1rem; 
		 left: 5.5rem;
	}
	.LoginFooter .LoginFooterBox .FooterBoxInput .XhLoginPost .MessageCoad{
		height: .9rem;
		line-height: .9rem;
		font-size: .1rem; 
		width: 2rem;
		color: blue; 
		position: absolute;
		top: 2.2rem; 
		left: 4.9rem;
		background: red;
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
		top: 85%;
		left: -.1rem;
		position: absolute;
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
