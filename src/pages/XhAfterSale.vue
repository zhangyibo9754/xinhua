<template>
    <div>
		<div class="XhMyOrder-header">
			<a href=""><img src="../../static/images/mine/xhimg/jtz.png"></a>
			<a href=""><span>售后/退款</span></a>
			<a href=""><span class="icon iconfont XhMyOrder-header-span" >&#xe634;</span></a>
		</div>
		<!-- <div class="XhMyOrder-nav">
			<a href=""><span>售后申请</span></a>
			<a href=""><span>申请记录</span></a>
		</div> -->
	<van-tabs v-model="activeName"  background="#f7f7f7">
       <van-tab title="售后申请" name="a">
		   <div class="XhMyOrder-Bigbox">
		   	<img src="../../static/images/mine/xhimg/xz.png">
		   	<h6>暂无相关订单</h6>
		   	<a href=""><span>随便逛逛</span></a>
		   </div>
	   </van-tab>
      <van-tab title="申请记录" name="b">
		  <div class="XhMyOrder-Bigbox">
			<img src="../../static/images/mine/xhimg/xz.png">
			<h6>暂无相关订单</h6>
			<a href=""><span>随便逛逛</span></a>
		</div>
	  </van-tab>
   </van-tabs>
		
	</div>
</template>

<script>
    export default {
        name: "XhAfterSale",
		data() {
					
		
		  return {
				
		    active: 2,
			  
		  };
		},
    }
</script>

<style scoped>
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
		border-top: 1px solid #cfcfcf;
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
