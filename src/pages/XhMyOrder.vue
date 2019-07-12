<template>
    <div class="pageBody">
		<div class="XhMyOrder-header">
			<img src="../../static/images/mine/xhimg/jtz.png" @click="$router.back(-1)">
			<span>我的订单</span>
			<router-link to="/XhSearch"><span class="icon iconfont XhMyOrder-header-span" >&#xe634;</span></router-link>
		</div>

		<div class="mine-content">
		<van-tabs background="#f7f7f7"  v-model="active">
		  <van-tab  title="全部">
			  <div class="XhMyOrder-Bigbox">
			  	<img src="../../static/images/mine/xhimg/xz.png">
			  	<h6>暂无相关订单</h6>
			  	<a href=""><span>随便逛逛</span></a>
			  </div>
		  </van-tab>
		  <van-tab title="待付款">
			  <div class="XhMyOrder-Bigbox">
			  	<img src="../../static/images/mine/xhimg/xz.png">
			  	<h6>暂无相关订单</h6>
			  	<a href=""><span>随便逛逛</span></a>
			  </div>
		  </van-tab>
		  <van-tab title="待发货">
			  <div class="XhMyOrder-Bigbox">
			  	<img src="../../static/images/mine/xhimg/xz.png">
			  	<h6>暂无相关订单</h6>
			  	<a href=""><span>随便逛逛</span></a>
			  </div>
		  </van-tab>
		  <van-tab title="待收货">
			  <div class="XhMyOrder-Bigbox">
			  	<img src="../../static/images/mine/xhimg/xz.png">
			  	<h6>暂无相关订单</h6>
			  	<a href=""><span>随便逛逛</span></a>
			  </div>
		  </van-tab>
		  <van-tab title="已完成">
			  <div class="XhMyOrder-Bigbox">
			  	<img src="../../static/images/mine/xhimg/xz.png">
			  	<h6>暂无相关订单</h6>
			  	<a href=""><span>随便逛逛</span></a>
			  </div>
		  </van-tab>
		</van-tabs>
		
	</div>
	</div>
</template>

<script>
	
    export default {
        name: "XhMyOrder",
		data() {

    return {
      active:0,
    }
  },
      watch:{
        $route:{
          immediate:true,
          handler:function (to) {
            this.active=parseInt(to.params.id)
          }
        }
      }
    }
</script>

<style scoped>
	.mine-content{
			flex:1;
			overflow-y:auto;
			background: #f7f7f7;
		}
.XhMyOrder-header{
	width: 100%;
	height: 1.31rem;
	background: #f7f7f7;
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
	margin-right: .35rem;
	line-height: 1.31rem;
}

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
	background: #c62f2e;
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
