<template>
    <div class="pageBody">
		<div class="XhMyOrder-header">
			<img src="../../static/images/mine/xhimg/jtz.png" @click="$router.back(-1)">
			<span>家庭图书馆</span>
		</div>
		<div class="mine-content">
		<div class="XhMyOrder-Bigbox">
			<img src="../../static/images/mine/xhimg/bookrack-empty.a1536798d2f75e87.png">
			<h6>暂无藏书</h6>
		</div>
		</div>
		<div class="Xhfooter">
			<span style="float: left;margin-left: .2rem;">共0本</span>
			<span class="icon iconfont"  style="float: right;margin-right: .2rem;">&#xe613;</span>
			<span class="icon iconfont" style="float: right;margin-right: .3rem;">&#xe627;</span>
			
		</div>
	</div>
</template>

<script>
    export default {
        name: "XhLibrary",
		 data() {
    return {
      active: 2
    };
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
.XhMyOrder-Bigbox{
	width: 100%;
}
.XhMyOrder-Bigbox img{
	height: 3rem;
	margin-top: 2rem;
}
.XhMyOrder-Bigbox h6{
	font-size: 16px;
	color: #999999;
}

.Xhfooter{
	width: 100%;
	height: 1rem;
	background:#CCCCCC;
}
.Xhfooter span{
	font-size: 18px;
	line-height: 1rem;
}
</style>
