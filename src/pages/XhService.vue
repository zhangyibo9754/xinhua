<template>
	<div class="pageBody">
		<div class="XhService-header">
			<img src="../../static/images/mine/xhimg/jtz3.png" @click="$router.back(-1)">
			<a href=""><span>彤彤</span>
			<img src="../../static/images/mine/xhimg/y.png" class="XhService-header-img">
			</a>
		</div>
		<div class="XhService-Bigbox"></div>
		<div class="XhService-footer">
				<input type="text" value="  输入消息..." />
				<a href="" class="XhService-footer-a"><span>发送</span></a>
              <div class="XhService-footer-one">
				  <a href=""><img src="../../static/images/mine/xhimg/xy.png" ></a>
				  <a href=""><img src="../../static/images/mine/xhimg/yy.png" ></a>
				  <a href=""><img src="../../static/images/mine/xhimg/xj.png" ></a>
				  <a href=""><img src="../../static/images/mine/xhimg/xc.png" ></a>
				  <a href=""><img src="../../static/images/mine/xhimg/xz1.png" ></a>
			  </div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: "XHmine",
	  
	  }
</script>

<style scoped>
	.XhService-header{
		width: 100%;
		height: 1rem;
		background: #0093ff;
	}
	.XhService-header img{
		float: left;
		width: .3rem;
		height: .5rem;
		margin-top: .26rem;
		margin-left: .2rem;
	}
	.XhService-header span{
		float: left;
		font-size: 16px;
		color: white;
		margin-left: .6rem;
		line-height: 1rem;
	}
	.XhService-header-img{
		width: .3rem !important;
		height: .4rem !important;
		margin-top: .3rem !important;
	}
	.XhService-Bigbox{
			flex:1;
			overflow-y:auto;
			background: #fff;
		}
	.XhService-footer{
		background: #f7f7f7;
		border-top: 1px solid #dadada;
	}
	.XhService-footer input{
		width: 6rem;
		height: 1rem;
		font-size: 13px;
		color: #c3cdd4;
		border: none;
		background: #f7f7f7;
	}
	.XhService-footer-a{
		display: inline-block;
		width: 1rem;
		height: .6rem;
		background:#0093ff ;
		font-size: 15px;
		text-align: center;
		line-height: .6rem;
	}
	.XhService-footer-one{
		width: 100%;
		height: 1rem;
		display: flex;
	}
	.XhService-footer-one img{
		width: .5rem;
		height: .5rem;
		margin-top: .2rem;
	}
	
</style>
