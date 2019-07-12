<template>
    <div class="XhMyOrder">
		<div class="XhMyOrder-header">
			<a href=""><img src="../../static/images/mine/xhimg/jtz.png"></a>
			<a href=""><span>我的订单</span></a>
			<a href=""><span class="icon iconfont XhMyOrder-header-span" >&#xe634;</span></a>
		</div>
		
		<van-tabs background="#f7f7f7"  v-model="active">
		  <van-tab  title="全部" name="a">
			  <div class="XhMyOrder-Bigbox">
			  	<img src="../../static/images/mine/xhimg/xz.png">
			  	<h6>暂无相关订单</h6>
			  	<a href=""><span>随便逛逛</span></a>
			  </div>
		  </van-tab>
		  <van-tab title="待付款" name="b">
			  <div class="XhMyOrder-Bigbox">
			  	<img src="../../static/images/mine/xhimg/xz.png">
			  	<h6>暂无相关订单</h6>
			  	<a href=""><span>随便逛逛</span></a>
			  </div>
		  </van-tab>
		  <van-tab title="待发货" name="c">
			  <div class="XhMyOrder-Bigbox">
			  	<img src="../../static/images/mine/xhimg/xz.png">
			  	<h6>暂无相关订单</h6>
			  	<a href=""><span>随便逛逛</span></a>
			  </div>
		  </van-tab>
		  <van-tab title="待收货" name="d">
			  <div class="XhMyOrder-Bigbox">
			  	<img src="../../static/images/mine/xhimg/xz.png">
			  	<h6>暂无相关订单</h6>
			  	<a href=""><span>随便逛逛</span></a>
			  </div>
		  </van-tab>
		  <van-tab title="已完成" name="e">
			  <div class="XhMyOrder-Bigbox">
			  	<img src="../../static/images/mine/xhimg/xz.png">
			  	<h6>暂无相关订单</h6>
			  	<a href=""><span>随便逛逛</span></a>
			  </div>
		  </van-tab>
		</van-tabs>
		<!-- <div class="XhMyOrder-nav">
			<a href=""><span>全部</span></a>
			<a href=""><span>待付款</span></a>
			<a href=""><span>待发货</span></a>
			<a href=""><span>待收货</span></a>
			<a href=""><span>已完成</span></a>
		</div> -->
		
	
	</div>
</template>

<script>
	
    export default {
        name: "XhMyOrder",
		data() {
			

    return {
		
      active: 2,
	  
    };
	
  },
		components:{
		}
    }
</script>

<style scoped>
	.XhMyOrder{
		background: #f7f7f7;
	}
.XhMyOrder-header{
	width: 100%;
	height: 1.31rem;
}
.XhMyOrder-header img{
	float: left;
	width: .5rem;
	height: .7rem;
	margin-top: .3rem;
	margin-left: .2rem;
}
.XhMyOrder-header span{
	font-size: 20px;
	line-height: 1.31rem;
	color: #717171;
	text-align: center;
	
}
.XhMyOrder-header-span{
	font-size: 22px !important;
	color: red !important;
	float: right;
	margin-right: .2rem;
}
/* .XhMyOrder-nav{
	width: 100%;
	height: 1.3rem;
	display: flex;
}
.XhMyOrder-nav a{
	display: block;
	flex: 1;
	font-size: 18px;
	line-height: 1.3rem;
	} */
.XhMyOrder-Bigbox{
	width: 100%;
}
.XhMyOrder-Bigbox img{
	height: 4rem;
}
.XhMyOrder-Bigbox h6{
	font-size: 16px;
	color: #999999;
}
.XhMyOrder-Bigbox a{
	display: block;
	width: 3rem;
	height: 1rem;
	background: red;
	margin-left: 2.4rem;
	margin-top: .3rem;
}
.XhMyOrder-Bigbox span{
	display: block;
	font-size: 20px;
	color: white;
	line-height: 1rem;
}
</style>
